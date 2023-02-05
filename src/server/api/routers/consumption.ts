import {
  ConsumptionCreateInputObjectSchema, ConsumptionDeleteOneSchema, ConsumptionFindUniqueSchema
} from "../../../../prisma/generated/schemas";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const consumptionRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.consumption.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  getOne: protectedProcedure
    .input(ConsumptionFindUniqueSchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.consumption.findUnique(input);
    }),
  create: protectedProcedure
    .input(ConsumptionCreateInputObjectSchema)
    .mutation(({ ctx, input }) => {
      const user = ctx.session.user;
      return ctx.prisma.consumption.create({
        data: {
          ...input,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    }),
  delete: protectedProcedure
    .input(ConsumptionDeleteOneSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.consumption.delete(input);
    }),
});

export type ConsumptionRouter = typeof consumptionRouter;
