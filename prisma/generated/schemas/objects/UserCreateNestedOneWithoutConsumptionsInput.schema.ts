import { z } from "zod";
import { UserCreateWithoutConsumptionsInputObjectSchema } from "./UserCreateWithoutConsumptionsInput.schema";
import { UserUncheckedCreateWithoutConsumptionsInputObjectSchema } from "./UserUncheckedCreateWithoutConsumptionsInput.schema";
import { UserCreateOrConnectWithoutConsumptionsInputObjectSchema } from "./UserCreateOrConnectWithoutConsumptionsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutConsumptionsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutConsumptionsInputObjectSchema = Schema;
