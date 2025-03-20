export enum PrismaError {
  UNIQUE_CONSTRAINT_VIOLATION = "P2002",
  INVALID_FOREIGN_KEY = "P2003",
  RECORD_TO_UPDATE_NOT_FOUND = "P2025",
  RECORD_NOT_FOUND = "P2005",
}

export enum Role {
  USER = "user",
  ADMIN = "admin",
}

export enum PaymentMethod {
  AYAPAY = "ayapay",
  KBZPAY = "kbzpay",
  WAVEPAY = "wavepay",
}

export enum PaymentStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
}

export enum Weight {
  KG = "kg",
  G = "g",
  LBS = "lbs",
}

export enum NotificationStatus {
  READ = "read",
  UNREAD = "unread",
  ARCHIVE = "archive",
}

export enum Discount {
  PERCENTAGE = "percentage",
  KYATS = "kyats",
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
