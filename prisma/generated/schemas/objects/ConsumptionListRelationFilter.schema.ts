import { z } from "zod";
import { ConsumptionWhereInputObjectSchema } from "./ConsumptionWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionListRelationFilter> = z
  .object({
    every: z.lazy(() => ConsumptionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ConsumptionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ConsumptionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ConsumptionListRelationFilterObjectSchema = Schema;
