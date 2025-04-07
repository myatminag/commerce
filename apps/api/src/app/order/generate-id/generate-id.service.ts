import { Injectable } from "@nestjs/common";

@Injectable()
export class GenerateIdService {
  private sequence = 0;
  private lastTimestamp = "";

  generateId() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const currentTimestamp = `${month
      .toString()
      .padStart(2, "0")}${day.toString().padStart(2, "0")}${hours
      .toString()
      .padStart(2, "0")}${minutes.toString().padStart(2, "0")}${seconds
      .toString()
      .padStart(2, "0")}`;

    // Reset sequence if timestamp changes
    if (currentTimestamp !== this.lastTimestamp) {
      this.sequence = 0;
      this.lastTimestamp = currentTimestamp;
    }

    // Generate final ID
    const sequencePart = (this.sequence++ % 100).toString().padStart(2, "0");

    return currentTimestamp + sequencePart;
  }
}
