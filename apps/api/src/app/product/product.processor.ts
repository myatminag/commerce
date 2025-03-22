import { Processor, WorkerHost } from "@nestjs/bullmq";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { Job } from "bullmq";

import { QueueProcessor } from "src/lib/constants";
import { PrismaService } from "src/services/prisma/prisma.service";

@Processor(QueueProcessor.ProductQueue)
export class ProductProcessor extends WorkerHost {
  private readonly logger = new Logger(ProductProcessor.name);

  constructor(private prismaService: PrismaService) {
    super();
  }

  async process(job: Job) {
    try {
      await this.prismaService.product.update({
        where: { id: job.data.productId },
        data: {
          discountAmount: null,
          discountEndDate: null,
          discountPrice: null,
          discountStartDate: null,
          discountType: null,
        },
      });

      this.logger.log(`Discount removed for product ${job.data.productId}`);
    } catch (error) {
      this.logger.error(
        `Failed to remove discount for product ${job.data.productId}:`,
        error,
      );
      throw new InternalServerErrorException(
        "Failed to schedule discount job!",
      );
    }
  }
}
