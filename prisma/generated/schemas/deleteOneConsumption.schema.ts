import { z } from "zod";
import { ConsumptionWhereUniqueInputObjectSchema } from "./objects/ConsumptionWhereUniqueInput.schema";

export const ConsumptionDeleteOneSchema = z.object({
  where: ConsumptionWhereUniqueInputObjectSchema,
});
