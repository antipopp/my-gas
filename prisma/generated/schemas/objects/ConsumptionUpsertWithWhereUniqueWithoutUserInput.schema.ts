import { z } from "zod";
import { ConsumptionWhereUniqueInputObjectSchema } from "./ConsumptionWhereUniqueInput.schema";
import { ConsumptionUpdateWithoutUserInputObjectSchema } from "./ConsumptionUpdateWithoutUserInput.schema";
import { ConsumptionUncheckedUpdateWithoutUserInputObjectSchema } from "./ConsumptionUncheckedUpdateWithoutUserInput.schema";
import { ConsumptionCreateWithoutUserInputObjectSchema } from "./ConsumptionCreateWithoutUserInput.schema";
import { ConsumptionUncheckedCreateWithoutUserInputObjectSchema } from "./ConsumptionUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ConsumptionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ConsumptionUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ConsumptionUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ConsumptionCreateWithoutUserInputObjectSchema),
        z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ConsumptionUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
