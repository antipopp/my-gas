
import { UserCreateInputObjectSchema, UserDeleteOneSchema, UserFindUniqueSchema } from "../../../../prisma/generated/schemas";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  getOne: protectedProcedure
    .input(UserFindUniqueSchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique(input);
    }),
  create: protectedProcedure
    .input(UserCreateInputObjectSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: input,
      });
    }),
  delete: protectedProcedure
    .input(UserDeleteOneSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.delete(input);
    }),
});

export type UserRouter = typeof userRouter;
