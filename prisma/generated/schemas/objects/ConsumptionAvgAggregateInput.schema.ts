import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionAvgAggregateInputType> = z
  .object({
    T_start: z.literal(true).optional(),
    T_end: z.literal(true).optional(),
    SMC_start: z.literal(true).optional(),
    SMC_end: z.literal(true).optional(),
    T_extern: z.literal(true).optional(),
  })
  .strict();

export const ConsumptionAvgAggregateInputObjectSchema = Schema;
