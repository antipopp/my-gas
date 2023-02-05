import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    start: z.lazy(() => SortOrderSchema).optional(),
    end: z.lazy(() => SortOrderSchema).optional(),
    T_heater: z.lazy(() => SortOrderSchema).optional(),
    T_start: z.lazy(() => SortOrderSchema).optional(),
    T_end: z.lazy(() => SortOrderSchema).optional(),
    SMC_start: z.lazy(() => SortOrderSchema).optional(),
    SMC_end: z.lazy(() => SortOrderSchema).optional(),
    T_extern: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ConsumptionCountOrderByAggregateInputObjectSchema = Schema;
