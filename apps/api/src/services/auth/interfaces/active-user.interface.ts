import { UserType } from "src/lib/types";

export interface ActiveUserData {
  sub: string;
  name: string;
  email: string;
  type: UserType;
  iat: number;
  exp: number;
}
