export enum PrismaError {
  UNIQUE_CONSTRAINT_VIOLATION = "P2002",
  INVALID_FOREIGN_KEY = "P2003",
  RECORD_TO_UPDATE_NOT_FOUND = "P2025",
  RECORD_NOT_FOUND = "P2005",
}

export enum QueueProcessor {
  ProductQueue = "productQueue",
}

export enum PaymentMethod {
  AyaPay = "ayapay",
  KbzPay = "kbzpay",
  WavePay = "wavepay",
}

export enum PaymentStatus {
  Pending = "pending",
  Completed = "completed",
  Failed = "failed",
}

export enum Status {
  Publish = "publish",
  Draft = "draft",
}

export enum Weight {
  Kg = "kg",
  G = "g",
  Lbs = "lbs",
}

export enum NotificationStatus {
  Read = "read",
  Unread = "unread",
  Archive = "archive",
}

export enum Discount {
  Percentage = "percentage",
  Kyats = "kyats",
}

export enum NotificationType {
  ORDER_CONFIRMATION,
  ORDER_SHIPPED,
  ORDER_DELIVERED,
  ORDER_CACNELLED,
  NEW_ORDER_RECEIVED,
  OUT_OF_STOCK,
  LOW_STOCK_ALERT,
  NEW_PROMOTION,
  DISCOUNT_EXPIRY_ALERT,
  PAYMET_CONFIRMATION,
  PAYMENT_FAILED,
  PASSWORD_CHANGE_CONFIRMATION,
  SYSTEM_MAINTENANCE_ALERT,
  FEATURE_UPDATES,
  POLICY_UPDATES,
}

export enum RecipientType {
  USER,
  ADMIN,
}

export enum ShoppingHoursMode {
  Everyday = "everyday",
  Weekdays = "weekdays",
  Weekends = "weekends",
}
