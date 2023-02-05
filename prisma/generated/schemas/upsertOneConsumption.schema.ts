import { z } from "zod";
import { ConsumptionWhereUniqueInputObjectSchema } from "./objects/ConsumptionWhereUniqueInput.schema";
import { ConsumptionCreateInputObjectSchema } from "./objects/ConsumptionCreateInput.schema";
import { ConsumptionUncheckedCreateInputObjectSchema } from "./objects/ConsumptionUncheckedCreateInput.schema";
import { ConsumptionUpdateInputObjectSchema } from "./objects/ConsumptionUpdateInput.schema";
import { ConsumptionUncheckedUpdateInputObjectSchema } from "./objects/ConsumptionUncheckedUpdateInput.schema";

export const ConsumptionUpsertSchema = z.object({
  where: ConsumptionWhereUniqueInputObjectSchema,
  create: z.union([
    ConsumptionCreateInputObjectSchema,
    ConsumptionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ConsumptionUpdateInputObjectSchema,
    ConsumptionUncheckedUpdateInputObjectSchema,
  ]),
});
