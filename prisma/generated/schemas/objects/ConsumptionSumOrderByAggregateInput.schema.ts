import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionSumOrderByAggregateInput> = z
  .object({
    T_start: z.lazy(() => SortOrderSchema).optional(),
    T_end: z.lazy(() => SortOrderSchema).optional(),
    SMC_start: z.lazy(() => SortOrderSchema).optional(),
    SMC_end: z.lazy(() => SortOrderSchema).optional(),
    T_extern: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ConsumptionSumOrderByAggregateInputObjectSchema = Schema;
