import { z } from "zod";

export const ConsumptionScalarFieldEnumSchema = z.enum([
  "id",
  "start",
  "end",
  "T_heater",
  "T_start",
  "T_end",
  "SMC_start",
  "SMC_end",
  "T_extern",
  "createdAt",
  "userId",
]);
