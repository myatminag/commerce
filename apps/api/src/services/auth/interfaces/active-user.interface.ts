export interface ActiveUserData {
  sub: string;
  name: string;
  email: string;
  type: "user" | "admin";
  iat: number;
  exp: number;
}
