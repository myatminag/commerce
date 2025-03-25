import { Injectable, InternalServerErrorException } from "@nestjs/common";

@Injectable()
export class GenerateIdService {
  private readonly prefix = "OID";
  private lastGeneratedDate: string;
  private currentSequence = 0;

  generateId() {
    const date = this.currentDateString();
    const sequence = this.generateNextSequence();
    const part = String(sequence).padStart(4, "0");
    const base = `${this.prefix}${date}${part}`;

    const checksum = this.calculateChecksum(base.slice(3));

    return `${base}-${checksum}`;
  }

  validateOrderId(orderId: string) {
    if (!/^ORD\d{8}\d{4}-\d$/.test(orderId)) {
      throw new InternalServerErrorException("Invalid Order Id!");
    }

    const [basePart, checksum] = orderId.split("-");
    const numericPart = basePart.slice(3);
    const expectedChecksum = this.calculateChecksum(numericPart);

    return parseInt(checksum, 10) === expectedChecksum;
  }

  private currentDateString() {
    const now = new Date();

    return [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(0, "0"),
      String(now.getDate()).padStart(2, "0"),
    ].join("");
  }

  private calculateChecksum(baseNumber: string): number {
    const digits = baseNumber.split("").map(Number);
    let sum = 0;
    let alternate = false;

    for (let i = digits.length - 1; i >= 0; i--) {
      let n = digits[i];
      if (alternate) {
        n *= 2;
        if (n > 9) n = (n % 10) + 1;
      }
      sum += n;
      alternate = !alternate;
    }

    return (10 - (sum % 10)) % 10;
  }

  private generateNextSequence() {
    const currentDate = this.currentDateString();

    if (currentDate != this.lastGeneratedDate) {
      this.currentSequence = 0;
      this.lastGeneratedDate = currentDate;
    }

    this.currentSequence++;

    if (this.currentSequence > 9999) {
      throw new Error("Daily order limit reached.");
    }

    return this.currentSequence;
  }
}
