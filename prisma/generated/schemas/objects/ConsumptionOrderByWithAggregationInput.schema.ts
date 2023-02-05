import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ConsumptionCountOrderByAggregateInputObjectSchema } from "./ConsumptionCountOrderByAggregateInput.schema";
import { ConsumptionAvgOrderByAggregateInputObjectSchema } from "./ConsumptionAvgOrderByAggregateInput.schema";
import { ConsumptionMaxOrderByAggregateInputObjectSchema } from "./ConsumptionMaxOrderByAggregateInput.schema";
import { ConsumptionMinOrderByAggregateInputObjectSchema } from "./ConsumptionMinOrderByAggregateInput.schema";
import { ConsumptionSumOrderByAggregateInputObjectSchema } from "./ConsumptionSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => ConsumptionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ConsumptionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ConsumptionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ConsumptionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ConsumptionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ConsumptionOrderByWithAggregationInputObjectSchema = Schema;
