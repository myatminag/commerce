import { Admin, User } from "@prisma/client";

export type ActiveUserType = Omit<User, "password">;
export type ActiveAdminType = Omit<Admin, "password">;
