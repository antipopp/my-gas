import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionCreateManyInput> = z
  .object({
    id: z.string().optional(),
    start: z.date(),
    end: z.date(),
    T_heater: z.string(),
    T_start: z.number(),
    T_end: z.number(),
    SMC_start: z.number(),
    SMC_end: z.number(),
    T_extern: z.number(),
    createdAt: z.date().optional(),
    userId: z.string(),
  })
  .strict();

export const ConsumptionCreateManyInputObjectSchema = Schema;
