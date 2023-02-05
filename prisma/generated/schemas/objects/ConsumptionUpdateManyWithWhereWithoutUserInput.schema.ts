import { z } from "zod";
import { ConsumptionScalarWhereInputObjectSchema } from "./ConsumptionScalarWhereInput.schema";
import { ConsumptionUpdateManyMutationInputObjectSchema } from "./ConsumptionUpdateManyMutationInput.schema";
import { ConsumptionUncheckedUpdateManyWithoutConsumptionsInputObjectSchema } from "./ConsumptionUncheckedUpdateManyWithoutConsumptionsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ConsumptionUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ConsumptionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ConsumptionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ConsumptionUncheckedUpdateManyWithoutConsumptionsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ConsumptionUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
