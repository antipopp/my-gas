import { z } from "zod";
import { ConsumptionUpdateInputObjectSchema } from "./objects/ConsumptionUpdateInput.schema";
import { ConsumptionUncheckedUpdateInputObjectSchema } from "./objects/ConsumptionUncheckedUpdateInput.schema";
import { ConsumptionWhereUniqueInputObjectSchema } from "./objects/ConsumptionWhereUniqueInput.schema";

export const ConsumptionUpdateOneSchema = z.object({
  data: z.union([
    ConsumptionUpdateInputObjectSchema,
    ConsumptionUncheckedUpdateInputObjectSchema,
  ]),
  where: ConsumptionWhereUniqueInputObjectSchema,
});
