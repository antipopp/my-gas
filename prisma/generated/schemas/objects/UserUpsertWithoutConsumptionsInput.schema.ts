import { z } from "zod";
import { UserUpdateWithoutConsumptionsInputObjectSchema } from "./UserUpdateWithoutConsumptionsInput.schema";
import { UserUncheckedUpdateWithoutConsumptionsInputObjectSchema } from "./UserUncheckedUpdateWithoutConsumptionsInput.schema";
import { UserCreateWithoutConsumptionsInputObjectSchema } from "./UserCreateWithoutConsumptionsInput.schema";
import { UserUncheckedCreateWithoutConsumptionsInputObjectSchema } from "./UserUncheckedCreateWithoutConsumptionsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutConsumptionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutConsumptionsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutConsumptionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutConsumptionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutConsumptionsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutConsumptionsInputObjectSchema = Schema;
