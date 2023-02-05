import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    start: z.literal(true).optional(),
    end: z.literal(true).optional(),
    T_heater: z.literal(true).optional(),
    T_start: z.literal(true).optional(),
    T_end: z.literal(true).optional(),
    SMC_start: z.literal(true).optional(),
    SMC_end: z.literal(true).optional(),
    T_extern: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ConsumptionCountAggregateInputObjectSchema = Schema;
