import { z } from "zod";
import { ConsumptionUpdateManyMutationInputObjectSchema } from "./objects/ConsumptionUpdateManyMutationInput.schema";
import { ConsumptionWhereInputObjectSchema } from "./objects/ConsumptionWhereInput.schema";

export const ConsumptionUpdateManySchema = z.object({
  data: ConsumptionUpdateManyMutationInputObjectSchema,
  where: ConsumptionWhereInputObjectSchema.optional(),
});
