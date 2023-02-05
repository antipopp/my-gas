import { z } from "zod";
import { ConsumptionOrderByWithRelationInputObjectSchema } from "./objects/ConsumptionOrderByWithRelationInput.schema";
import { ConsumptionWhereInputObjectSchema } from "./objects/ConsumptionWhereInput.schema";
import { ConsumptionWhereUniqueInputObjectSchema } from "./objects/ConsumptionWhereUniqueInput.schema";
import { ConsumptionScalarFieldEnumSchema } from "./enums/ConsumptionScalarFieldEnum.schema";

export const ConsumptionFindManySchema = z.object({
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
  distinct: z.array(ConsumptionScalarFieldEnumSchema).optional(),
});
