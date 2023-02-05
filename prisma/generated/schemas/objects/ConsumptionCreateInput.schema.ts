import { z } from "zod";
import { UserCreateNestedOneWithoutConsumptionsInputObjectSchema } from "./UserCreateNestedOneWithoutConsumptionsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionCreateInput> = z
  .object({
    id: z.string().optional(),
    start: z.date(),
    end: z.date(),
    T_heater: z.string(),
    T_start: z.number(),
    T_end: z.number(),
    SMC_start: z.number(),
    SMC_end: z.number(),
    T_extern: z.number(),
    createdAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutConsumptionsInputObjectSchema),
  })
  .strict();

export const ConsumptionCreateInputObjectSchema = Schema;
