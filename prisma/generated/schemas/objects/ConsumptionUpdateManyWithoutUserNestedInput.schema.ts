import { z } from "zod";
import { ConsumptionCreateWithoutUserInputObjectSchema } from "./ConsumptionCreateWithoutUserInput.schema";
import { ConsumptionUncheckedCreateWithoutUserInputObjectSchema } from "./ConsumptionUncheckedCreateWithoutUserInput.schema";
import { ConsumptionCreateOrConnectWithoutUserInputObjectSchema } from "./ConsumptionCreateOrConnectWithoutUserInput.schema";
import { ConsumptionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./ConsumptionUpsertWithWhereUniqueWithoutUserInput.schema";
import { ConsumptionCreateManyUserInputEnvelopeObjectSchema } from "./ConsumptionCreateManyUserInputEnvelope.schema";
import { ConsumptionWhereUniqueInputObjectSchema } from "./ConsumptionWhereUniqueInput.schema";
import { ConsumptionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./ConsumptionUpdateWithWhereUniqueWithoutUserInput.schema";
import { ConsumptionUpdateManyWithWhereWithoutUserInputObjectSchema } from "./ConsumptionUpdateManyWithWhereWithoutUserInput.schema";
import { ConsumptionScalarWhereInputObjectSchema } from "./ConsumptionScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ConsumptionUpsertWithWhereUniqueWithoutUserInputObjectSchema
        ),
        z
          .lazy(
            () => ConsumptionUpsertWithWhereUniqueWithoutUserInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ConsumptionCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema),
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema),
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema),
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema),
        z.lazy(() => ConsumptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ConsumptionUpdateWithWhereUniqueWithoutUserInputObjectSchema
        ),
        z
          .lazy(
            () => ConsumptionUpdateWithWhereUniqueWithoutUserInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ConsumptionUpdateManyWithWhereWithoutUserInputObjectSchema
        ),
        z
          .lazy(
            () => ConsumptionUpdateManyWithWhereWithoutUserInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ConsumptionScalarWhereInputObjectSchema),
        z.lazy(() => ConsumptionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ConsumptionUpdateManyWithoutUserNestedInputObjectSchema = Schema;
