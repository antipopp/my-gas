import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutConsumptionsInputObjectSchema } from "./UserCreateWithoutConsumptionsInput.schema";
import { UserUncheckedCreateWithoutConsumptionsInputObjectSchema } from "./UserUncheckedCreateWithoutConsumptionsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutConsumptionsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutConsumptionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutConsumptionsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutConsumptionsInputObjectSchema = Schema;
