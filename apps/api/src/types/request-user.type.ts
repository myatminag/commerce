import { User } from "@prisma/client";

export type RequestUserType = Request & { user: User };
