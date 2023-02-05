import { z } from "zod";
import { ConsumptionCreateInputObjectSchema } from "./objects/ConsumptionCreateInput.schema";
import { ConsumptionUncheckedCreateInputObjectSchema } from "./objects/ConsumptionUncheckedCreateInput.schema";

export const ConsumptionCreateOneSchema = z.object({
  data: z.union([
    ConsumptionCreateInputObjectSchema,
    ConsumptionUncheckedCreateInputObjectSchema,
  ]),
});
