import { Admin, User } from "@prisma/client";

export type RequestUserType = Request & { user: User };
export type RequestAdminType = Request & { admin: Admin };
