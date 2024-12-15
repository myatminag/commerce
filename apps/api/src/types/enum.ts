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
