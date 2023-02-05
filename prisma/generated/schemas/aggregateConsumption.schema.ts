import { z } from "zod";
import { ConsumptionOrderByWithRelationInputObjectSchema } from "./objects/ConsumptionOrderByWithRelationInput.schema";
import { ConsumptionWhereInputObjectSchema } from "./objects/ConsumptionWhereInput.schema";
import { ConsumptionWhereUniqueInputObjectSchema } from "./objects/ConsumptionWhereUniqueInput.schema";
import { ConsumptionCountAggregateInputObjectSchema } from "./objects/ConsumptionCountAggregateInput.schema";
import { ConsumptionMinAggregateInputObjectSchema } from "./objects/ConsumptionMinAggregateInput.schema";
import { ConsumptionMaxAggregateInputObjectSchema } from "./objects/ConsumptionMaxAggregateInput.schema";
import { ConsumptionAvgAggregateInputObjectSchema } from "./objects/ConsumptionAvgAggregateInput.schema";
import { ConsumptionSumAggregateInputObjectSchema } from "./objects/ConsumptionSumAggregateInput.schema";

export const ConsumptionAggregateSchema = z.object({
  orderBy: z
    .union([
      ConsumptionOrderByWithRelationInputObjectSchema,
      ConsumptionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ConsumptionWhereInputObjectSchema.optional(),
  cursor: ConsumptionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ConsumptionCountAggregateInputObjectSchema])
    .optional(),
  _min: ConsumptionMinAggregateInputObjectSchema.optional(),
  _max: ConsumptionMaxAggregateInputObjectSchema.optional(),
  _avg: ConsumptionAvgAggregateInputObjectSchema.optional(),
  _sum: ConsumptionSumAggregateInputObjectSchema.optional(),
});
