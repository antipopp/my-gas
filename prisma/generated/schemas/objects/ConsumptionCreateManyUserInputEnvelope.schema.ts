import { z } from "zod";
import { ConsumptionCreateManyUserInputObjectSchema } from "./ConsumptionCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => ConsumptionCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ConsumptionCreateManyUserInputEnvelopeObjectSchema = Schema;
