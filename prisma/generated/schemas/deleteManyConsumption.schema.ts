import { z } from "zod";
import { ConsumptionWhereInputObjectSchema } from "./objects/ConsumptionWhereInput.schema";

export const ConsumptionDeleteManySchema = z.object({
  where: ConsumptionWhereInputObjectSchema.optional(),
});
