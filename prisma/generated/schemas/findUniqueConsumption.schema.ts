import { z } from "zod";
import { ConsumptionWhereUniqueInputObjectSchema } from "./objects/ConsumptionWhereUniqueInput.schema";

export const ConsumptionFindUniqueSchema = z.object({
  where: ConsumptionWhereUniqueInputObjectSchema,
});
