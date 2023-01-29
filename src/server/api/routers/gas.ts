import { createTRPCRouter } from "../trpc";

export const gasReducer = createTRPCRouter({});

export type GasRouter = typeof gasReducer;
