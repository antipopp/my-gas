import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { FloatFilterObjectSchema } from "./FloatFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConsumptionWhereInputObjectSchema),
        z.lazy(() => ConsumptionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConsumptionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConsumptionWhereInputObjectSchema),
        z.lazy(() => ConsumptionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    start: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    end: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    T_heater: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    T_start: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    T_end: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    SMC_start: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    SMC_end: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    T_extern: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ConsumptionWhereInputObjectSchema = Schema;
