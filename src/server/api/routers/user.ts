import {
    UserCreateInputSchema,
    UserDeleteArgsSchema,
    UserFindUniqueArgsSchema
} from "../../../../prisma/generated/zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  getOne: protectedProcedure
    .input(UserFindUniqueArgsSchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique(input);
    }),
  create: protectedProcedure
    .input(UserCreateInputSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: input,
      });
    }),
  delete: protectedProcedure
    .input(UserDeleteArgsSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.delete(input);
    }),
});

export type UserRouter = typeof userRouter;
