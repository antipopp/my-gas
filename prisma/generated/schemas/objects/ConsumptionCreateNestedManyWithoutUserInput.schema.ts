import { z } from "zod";
import { ConsumptionCreateWithoutUserInputObjectSchema } from "./ConsumptionCreateWithoutUserInput.schema";
import { ConsumptionUncheckedCreateWithoutUserInputObjectSchema } from "./ConsumptionUncheckedCreateWithoutUserInput.schema";
import { ConsumptionCreateOrConnectWithoutUserInputObjectSchema } from "./ConsumptionCreateOrConnectWithoutUserInput.schema";
import { ConsumptionCreateManyUserInputEnvelopeObjectSchema } from "./ConsumptionCreateManyUserInputEnvelope.schema";
import { ConsumptionWhereUniqueInputObjectSchema } from "./ConsumptionWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ConsumptionCreateWithoutUserInputObjectSchema),
        z.lazy(() => ConsumptionCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => ConsumptionUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ConsumptionCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => ConsumptionCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ConsumptionCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema),
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ConsumptionCreateNestedManyWithoutUserInputObjectSchema = Schema;
