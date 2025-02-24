export enum PrismaError {
  UNIQUE_CONSTRAINT_VIOLATION = "P2002",
  INVALID_FOREIGN_KEY = "P2003",
  RECORD_TO_UPDATE_NOT_FOUND = "P2025",
  RECORD_NOT_FOUND = "P2005",
}

export enum Role {
  User = "user",
  Admin = "admin",
}

export enum PaymentMethod {
  AYAPAY,
  KBZPAY,
  WAVEPAY,
}

export enum PaymentStatus {
  PENDING,
  COMPLETED,
  FAILED,
}

export enum PlanType {
  MONTHLY,
  ANNUALLY,
}

export enum Weight {
  KG,
  G,
  LBS,
}

export enum Discount {
  PERCENTAGE,
  KYATS,
}

export enum NotificationStatus {
  READ,
  UNREAD,
  ARCHIVE,
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
