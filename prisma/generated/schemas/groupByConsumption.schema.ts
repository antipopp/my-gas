import { z } from "zod";
import { ConsumptionWhereInputObjectSchema } from "./objects/ConsumptionWhereInput.schema";
import { ConsumptionOrderByWithAggregationInputObjectSchema } from "./objects/ConsumptionOrderByWithAggregationInput.schema";
import { ConsumptionScalarWhereWithAggregatesInputObjectSchema } from "./objects/ConsumptionScalarWhereWithAggregatesInput.schema";
import { ConsumptionScalarFieldEnumSchema } from "./enums/ConsumptionScalarFieldEnum.schema";

export const ConsumptionGroupBySchema = z.object({
  where: ConsumptionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ConsumptionOrderByWithAggregationInputObjectSchema,
      ConsumptionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ConsumptionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ConsumptionScalarFieldEnumSchema),
});
