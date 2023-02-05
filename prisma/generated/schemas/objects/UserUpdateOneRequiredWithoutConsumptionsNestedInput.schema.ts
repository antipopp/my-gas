import { z } from "zod";
import { UserCreateWithoutConsumptionsInputObjectSchema } from "./UserCreateWithoutConsumptionsInput.schema";
import { UserUncheckedCreateWithoutConsumptionsInputObjectSchema } from "./UserUncheckedCreateWithoutConsumptionsInput.schema";
import { UserCreateOrConnectWithoutConsumptionsInputObjectSchema } from "./UserCreateOrConnectWithoutConsumptionsInput.schema";
import { UserUpsertWithoutConsumptionsInputObjectSchema } from "./UserUpsertWithoutConsumptionsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutConsumptionsInputObjectSchema } from "./UserUpdateWithoutConsumptionsInput.schema";
import { UserUncheckedUpdateWithoutConsumptionsInputObjectSchema } from "./UserUncheckedUpdateWithoutConsumptionsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutConsumptionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutConsumptionsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutConsumptionsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutConsumptionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutConsumptionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutConsumptionsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutConsumptionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutConsumptionsNestedInputObjectSchema =
  Schema;
