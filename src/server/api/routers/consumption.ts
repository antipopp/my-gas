import {
    ConsumptionCreateInputSchema,
    ConsumptionDeleteArgsSchema,
    ConsumptionFindUniqueArgsSchema
} from "../../../../prisma/generated/zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const consumptionRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.consumption.findMany();
  }),
  getOne: protectedProcedure
    .input(ConsumptionFindUniqueArgsSchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.consumption.findUnique(input);
    }),
  create: protectedProcedure
    .input(ConsumptionCreateInputSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.consumption.create({
        data: input,
      });
    }),
  delete: protectedProcedure
    .input(ConsumptionDeleteArgsSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.consumption.delete(input);
    }),
});

export type ConsumptionRouter = typeof consumptionRouter;
