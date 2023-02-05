import { z } from "zod";
import { ConsumptionCreateManyInputObjectSchema } from "./objects/ConsumptionCreateManyInput.schema";

export const ConsumptionCreateManySchema = z.object({
  data: z.union([
    ConsumptionCreateManyInputObjectSchema,
    z.array(ConsumptionCreateManyInputObjectSchema),
  ]),
});
