import { z } from "zod";
import { ConsumptionWhereUniqueInputObjectSchema } from "./ConsumptionWhereUniqueInput.schema";
import { ConsumptionUpdateWithoutUserInputObjectSchema } from "./ConsumptionUpdateWithoutUserInput.schema";
import { ConsumptionUncheckedUpdateWithoutUserInputObjectSchema } from "./ConsumptionUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ConsumptionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ConsumptionUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ConsumptionUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ConsumptionUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
