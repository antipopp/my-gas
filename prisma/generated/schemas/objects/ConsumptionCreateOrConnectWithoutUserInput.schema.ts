import { z } from "zod";
import { ConsumptionWhereUniqueInputObjectSchema } from "./ConsumptionWhereUniqueInput.schema";
import { ConsumptionCreateWithoutUserInputObjectSchema } from "./ConsumptionCreateWithoutUserInput.schema";
import { ConsumptionUncheckedCreateWithoutUserInputObjectSchema } from "./ConsumptionUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ConsumptionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ConsumptionCreateWithoutUserInputObjectSchema),
      z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ConsumptionCreateOrConnectWithoutUserInputObjectSchema = Schema;
