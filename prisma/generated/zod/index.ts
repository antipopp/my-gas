import { z } from "zod";
import * as PrismaClient from "@prisma/client";

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

// PRISMA GENERATED ENUMS
//------------------------------------------------------

export const AccountScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.AccountScalarFieldEnum);

export const ConsumptionScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.ConsumptionScalarFieldEnum);

export const QueryModeSchema = z.nativeEnum(PrismaClient.Prisma.QueryMode);

export const SessionScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.SessionScalarFieldEnum);

export const SortOrderSchema = z.nativeEnum(PrismaClient.Prisma.SortOrder);

export const TransactionIsolationLevelSchema = z.nativeEnum(PrismaClient.Prisma.TransactionIsolationLevel);

export const UserScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.UserScalarFieldEnum);

export const VerificationTokenScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.VerificationTokenScalarFieldEnum);

// CUSTOM ENUMS
//------------------------------------------------------

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

// ACCOUNT
//------------------------------------------------------

export const AccountSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullish(),
  access_token: z.string().nullish(),
  expires_at: z.number().int().nullish(),
  token_type: z.string().nullish(),
  scope: z.string().nullish(),
  id_token: z.string().nullish(),
  session_state: z.string().nullish(),
});

// SESSION
//------------------------------------------------------

export const SessionSchema = z.object({
  id: z.string().cuid(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
});

// USER
//------------------------------------------------------

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
});

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
});

// CONSUMPTION
//------------------------------------------------------

export const ConsumptionSchema = z.object({
  id: z.string().cuid(),
  start: z.date(),
  end: z.date(),
  T_heater: z.string(),
  T_start: z.number(),
  T_end: z.number(),
  SMC_start: z.number(),
  SMC_end: z.number(),
  T_extern: z.number(),
  createdAt: z.date(),
  userId: z.string(),
});

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACCOUNT
//------------------------------------------------------

export const AccountArgsSchema: z.ZodType<PrismaClient.Prisma.AccountArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountIncludeSchema: z.ZodType<PrismaClient.Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<PrismaClient.Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

// SESSION
//------------------------------------------------------

export const SessionArgsSchema: z.ZodType<PrismaClient.Prisma.SessionArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionIncludeSchema: z.ZodType<PrismaClient.Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<PrismaClient.Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

// USER
//------------------------------------------------------

export const UserArgsSchema: z.ZodType<PrismaClient.Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserIncludeSchema: z.ZodType<PrismaClient.Prisma.UserInclude> = z.object({
  consumptions: z.union([z.boolean(), z.lazy(() => ConsumptionFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.UserCountOutputTypeSelect> = z.object({
  consumptions: z.boolean().optional(),
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<PrismaClient.Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  consumptions: z.union([z.boolean(), z.lazy(() => ConsumptionFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict();

// CONSUMPTION
//------------------------------------------------------

export const ConsumptionArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionArgs> = z.object({
  select: z.lazy(() => ConsumptionSelectSchema).optional(),
  include: z.lazy(() => ConsumptionIncludeSchema).optional(),
}).strict();

export const ConsumptionIncludeSchema: z.ZodType<PrismaClient.Prisma.ConsumptionInclude> = z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

export const ConsumptionSelectSchema: z.ZodType<PrismaClient.Prisma.ConsumptionSelect> = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  T_heater: z.boolean().optional(),
  T_start: z.boolean().optional(),
  T_end: z.boolean().optional(),
  SMC_start: z.boolean().optional(),
  SMC_end: z.boolean().optional(),
  T_extern: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AccountWhereInputSchema: z.ZodType<PrismaClient.Prisma.AccountWhereInput> = z.object({
  AND: z.union([z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  providerAccountId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  access_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  expires_at: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  token_type: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  id_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  session_state: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.AccountWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
}).strict();

export const AccountOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional(),
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  providerAccountId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  access_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  expires_at: z.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()]).optional().nullable(),
  token_type: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  id_token: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  session_state: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<PrismaClient.Prisma.SessionWhereInput> = z.object({
  AND: z.union([z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  sessionToken: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.SessionWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string().optional(),
}).strict();

export const SessionOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => SessionScalarWhereWithAggregatesInputSchema), z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionScalarWhereWithAggregatesInputSchema), z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  sessionToken: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereInput> = z.object({
  AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableFilterSchema), z.date()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  consumptions: z.lazy(() => ConsumptionListRelationFilterSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  consumptions: z.lazy(() => ConsumptionOrderByRelationAggregateInputSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.date()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([z.lazy(() => VerificationTokenWhereInputSchema), z.lazy(() => VerificationTokenWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => VerificationTokenWhereInputSchema), z.lazy(() => VerificationTokenWhereInputSchema).array()]).optional(),
  identifier: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenWhereUniqueInput> = z.object({
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
}).strict();

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional(),
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema), z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema), z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array()]).optional(),
  identifier: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
}).strict();

export const ConsumptionWhereInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionWhereInput> = z.object({
  AND: z.union([z.lazy(() => ConsumptionWhereInputSchema), z.lazy(() => ConsumptionWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ConsumptionWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsumptionWhereInputSchema), z.lazy(() => ConsumptionWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  start: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  T_heater: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  T_start: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  T_end: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  SMC_start: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  SMC_end: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  T_extern: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
}).strict();

export const ConsumptionOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  T_heater: z.lazy(() => SortOrderSchema).optional(),
  T_start: z.lazy(() => SortOrderSchema).optional(),
  T_end: z.lazy(() => SortOrderSchema).optional(),
  SMC_start: z.lazy(() => SortOrderSchema).optional(),
  SMC_end: z.lazy(() => SortOrderSchema).optional(),
  T_extern: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
}).strict();

export const ConsumptionWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
}).strict();

export const ConsumptionOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  T_heater: z.lazy(() => SortOrderSchema).optional(),
  T_start: z.lazy(() => SortOrderSchema).optional(),
  T_end: z.lazy(() => SortOrderSchema).optional(),
  SMC_start: z.lazy(() => SortOrderSchema).optional(),
  SMC_end: z.lazy(() => SortOrderSchema).optional(),
  T_extern: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConsumptionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ConsumptionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConsumptionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConsumptionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ConsumptionSumOrderByAggregateInputSchema).optional(),
}).strict();

export const ConsumptionScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => ConsumptionScalarWhereWithAggregatesInputSchema), z.lazy(() => ConsumptionScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ConsumptionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsumptionScalarWhereWithAggregatesInputSchema), z.lazy(() => ConsumptionScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  start: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  T_heater: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  T_start: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
  T_end: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
  SMC_start: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
  SMC_end: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
  T_extern: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const AccountUpdateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional(),
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
}).strict();

export const SessionUpdateInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional(),
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  consumptions: z.lazy(() => ConsumptionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  consumptions: z.lazy(() => ConsumptionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  consumptions: z.lazy(() => ConsumptionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  consumptions: z.lazy(() => ConsumptionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const UserCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpdateInput> = z.object({
  identifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  identifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  identifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  identifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ConsumptionCreateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  start: z.date(),
  end: z.date(),
  T_heater: z.string(),
  T_start: z.number(),
  T_end: z.number(),
  SMC_start: z.number(),
  SMC_end: z.number(),
  T_extern: z.number(),
  createdAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutConsumptionsInputSchema),
}).strict();

export const ConsumptionUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  start: z.date(),
  end: z.date(),
  T_heater: z.string(),
  T_start: z.number(),
  T_end: z.number(),
  SMC_start: z.number(),
  SMC_end: z.number(),
  T_extern: z.number(),
  createdAt: z.date().optional(),
  userId: z.string(),
}).strict();

export const ConsumptionUpdateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  T_heater: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  T_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_extern: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutConsumptionsNestedInputSchema).optional(),
}).strict();

export const ConsumptionUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  T_heater: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  T_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_extern: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ConsumptionCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  start: z.date(),
  end: z.date(),
  T_heater: z.string(),
  T_start: z.number(),
  T_end: z.number(),
  SMC_start: z.number(),
  SMC_end: z.number(),
  T_extern: z.number(),
  createdAt: z.date().optional(),
  userId: z.string(),
}).strict();

export const ConsumptionUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  T_heater: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  T_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_extern: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ConsumptionUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  T_heater: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  T_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_extern: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<PrismaClient.Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<PrismaClient.Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<PrismaClient.Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional(),
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<PrismaClient.Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string(),
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeNullableFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)]).optional().nullable(),
}).strict();

export const ConsumptionListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.ConsumptionListRelationFilter> = z.object({
  every: z.lazy(() => ConsumptionWhereInputSchema).optional(),
  some: z.lazy(() => ConsumptionWhereInputSchema).optional(),
  none: z.lazy(() => ConsumptionWhereInputSchema).optional(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional(),
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional(),
}).strict();

export const ConsumptionOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string(),
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const FloatFilterSchema: z.ZodType<PrismaClient.Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional(),
}).strict();

export const ConsumptionCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  T_heater: z.lazy(() => SortOrderSchema).optional(),
  T_start: z.lazy(() => SortOrderSchema).optional(),
  T_end: z.lazy(() => SortOrderSchema).optional(),
  SMC_start: z.lazy(() => SortOrderSchema).optional(),
  SMC_end: z.lazy(() => SortOrderSchema).optional(),
  T_extern: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ConsumptionAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionAvgOrderByAggregateInput> = z.object({
  T_start: z.lazy(() => SortOrderSchema).optional(),
  T_end: z.lazy(() => SortOrderSchema).optional(),
  SMC_start: z.lazy(() => SortOrderSchema).optional(),
  SMC_end: z.lazy(() => SortOrderSchema).optional(),
  T_extern: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ConsumptionMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  T_heater: z.lazy(() => SortOrderSchema).optional(),
  T_start: z.lazy(() => SortOrderSchema).optional(),
  T_end: z.lazy(() => SortOrderSchema).optional(),
  SMC_start: z.lazy(() => SortOrderSchema).optional(),
  SMC_end: z.lazy(() => SortOrderSchema).optional(),
  T_extern: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ConsumptionMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  T_heater: z.lazy(() => SortOrderSchema).optional(),
  T_start: z.lazy(() => SortOrderSchema).optional(),
  T_end: z.lazy(() => SortOrderSchema).optional(),
  SMC_start: z.lazy(() => SortOrderSchema).optional(),
  SMC_end: z.lazy(() => SortOrderSchema).optional(),
  T_extern: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const ConsumptionSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionSumOrderByAggregateInput> = z.object({
  T_start: z.lazy(() => SortOrderSchema).optional(),
  T_end: z.lazy(() => SortOrderSchema).optional(),
  SMC_start: z.lazy(() => SortOrderSchema).optional(),
  SMC_end: z.lazy(() => SortOrderSchema).optional(),
  T_extern: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema)]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().optional(),
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema)]).optional(),
}).strict();

export const ConsumptionCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => ConsumptionCreateWithoutUserInputSchema), z.lazy(() => ConsumptionCreateWithoutUserInputSchema).array(), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsumptionCreateOrConnectWithoutUserInputSchema), z.lazy(() => ConsumptionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => ConsumptionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionCreateWithoutUserInputSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const ConsumptionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => ConsumptionCreateWithoutUserInputSchema), z.lazy(() => ConsumptionCreateWithoutUserInputSchema).array(), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsumptionCreateOrConnectWithoutUserInputSchema), z.lazy(() => ConsumptionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => ConsumptionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionCreateWithoutUserInputSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().optional().nullable(),
}).strict();

export const ConsumptionUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => ConsumptionCreateWithoutUserInputSchema), z.lazy(() => ConsumptionCreateWithoutUserInputSchema).array(), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsumptionCreateOrConnectWithoutUserInputSchema), z.lazy(() => ConsumptionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConsumptionUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => ConsumptionUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => ConsumptionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConsumptionUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => ConsumptionUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConsumptionUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => ConsumptionUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConsumptionScalarWhereInputSchema), z.lazy(() => ConsumptionScalarWhereInputSchema).array()]).optional(),
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionCreateWithoutUserInputSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()]).optional(),
}).strict();

export const ConsumptionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => ConsumptionCreateWithoutUserInputSchema), z.lazy(() => ConsumptionCreateWithoutUserInputSchema).array(), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConsumptionCreateOrConnectWithoutUserInputSchema), z.lazy(() => ConsumptionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConsumptionUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => ConsumptionUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => ConsumptionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConsumptionWhereUniqueInputSchema), z.lazy(() => ConsumptionWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConsumptionUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => ConsumptionUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConsumptionUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => ConsumptionUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConsumptionScalarWhereInputSchema), z.lazy(() => ConsumptionScalarWhereInputSchema).array()]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountCreateWithoutUserInputSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionCreateWithoutUserInputSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()]).optional(),
}).strict();

export const UserCreateNestedOneWithoutConsumptionsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateNestedOneWithoutConsumptionsInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutConsumptionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutConsumptionsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutConsumptionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
}).strict();

export const UserUpdateOneRequiredWithoutConsumptionsNestedInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateOneRequiredWithoutConsumptionsNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutConsumptionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutConsumptionsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutConsumptionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutConsumptionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateWithoutConsumptionsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutConsumptionsInputSchema)]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<PrismaClient.Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional(),
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional(),
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  consumptions: z.lazy(() => ConsumptionCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  consumptions: z.lazy(() => ConsumptionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema)]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAccountsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema)]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateWithoutAccountsInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  consumptions: z.lazy(() => ConsumptionUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  consumptions: z.lazy(() => ConsumptionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  consumptions: z.lazy(() => ConsumptionCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  consumptions: z.lazy(() => ConsumptionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema)]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSessionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema)]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  consumptions: z.lazy(() => ConsumptionUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  consumptions: z.lazy(() => ConsumptionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const ConsumptionCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  start: z.date(),
  end: z.date(),
  T_heater: z.string(),
  T_start: z.number(),
  T_end: z.number(),
  SMC_start: z.number(),
  SMC_end: z.number(),
  T_extern: z.number(),
  createdAt: z.date().optional(),
}).strict();

export const ConsumptionUncheckedCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  start: z.date(),
  end: z.date(),
  T_heater: z.string(),
  T_start: z.number(),
  T_end: z.number(),
  SMC_start: z.number(),
  SMC_end: z.number(),
  T_extern: z.number(),
  createdAt: z.date().optional(),
}).strict();

export const ConsumptionCreateOrConnectWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ConsumptionWhereUniqueInputSchema),
  create: z.union([z.lazy(() => ConsumptionCreateWithoutUserInputSchema), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema)]),
}).strict();

export const ConsumptionCreateManyUserInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCreateManyUserInputEnvelope> = z.object({
  data: z.lazy(() => ConsumptionCreateManyUserInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema)]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.lazy(() => AccountCreateManyUserInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  expires: z.date(),
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  expires: z.date(),
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema)]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.lazy(() => SessionCreateManyUserInputSchema).array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ConsumptionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ConsumptionWhereUniqueInputSchema),
  update: z.union([z.lazy(() => ConsumptionUpdateWithoutUserInputSchema), z.lazy(() => ConsumptionUncheckedUpdateWithoutUserInputSchema)]),
  create: z.union([z.lazy(() => ConsumptionCreateWithoutUserInputSchema), z.lazy(() => ConsumptionUncheckedCreateWithoutUserInputSchema)]),
}).strict();

export const ConsumptionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ConsumptionWhereUniqueInputSchema),
  data: z.union([z.lazy(() => ConsumptionUpdateWithoutUserInputSchema), z.lazy(() => ConsumptionUncheckedUpdateWithoutUserInputSchema)]),
}).strict();

export const ConsumptionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ConsumptionScalarWhereInputSchema),
  data: z.union([z.lazy(() => ConsumptionUpdateManyMutationInputSchema), z.lazy(() => ConsumptionUncheckedUpdateManyWithoutConsumptionsInputSchema)]),
}).strict();

export const ConsumptionScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => ConsumptionScalarWhereInputSchema), z.lazy(() => ConsumptionScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ConsumptionScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConsumptionScalarWhereInputSchema), z.lazy(() => ConsumptionScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  start: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  end: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  T_heater: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  T_start: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  T_end: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  SMC_start: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  SMC_end: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  T_extern: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([z.lazy(() => AccountUpdateWithoutUserInputSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema)]),
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema)]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([z.lazy(() => AccountUpdateWithoutUserInputSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema)]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([z.lazy(() => AccountUpdateManyMutationInputSchema), z.lazy(() => AccountUncheckedUpdateManyWithoutAccountsInputSchema)]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  providerAccountId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  access_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  expires_at: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
  token_type: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  id_token: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  session_state: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([z.lazy(() => SessionUpdateWithoutUserInputSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema)]),
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema)]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([z.lazy(() => SessionUpdateWithoutUserInputSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema)]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([z.lazy(() => SessionUpdateManyMutationInputSchema), z.lazy(() => SessionUncheckedUpdateManyWithoutSessionsInputSchema)]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  sessionToken: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
}).strict();

export const UserCreateWithoutConsumptionsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateWithoutConsumptionsInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserUncheckedCreateWithoutConsumptionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateWithoutConsumptionsInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
}).strict();

export const UserCreateOrConnectWithoutConsumptionsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateOrConnectWithoutConsumptionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([z.lazy(() => UserCreateWithoutConsumptionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutConsumptionsInputSchema)]),
}).strict();

export const UserUpsertWithoutConsumptionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpsertWithoutConsumptionsInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutConsumptionsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutConsumptionsInputSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutConsumptionsInputSchema), z.lazy(() => UserUncheckedCreateWithoutConsumptionsInputSchema)]),
}).strict();

export const UserUpdateWithoutConsumptionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateWithoutConsumptionsInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const UserUncheckedUpdateWithoutConsumptionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateWithoutConsumptionsInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
}).strict();

export const ConsumptionCreateManyUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  start: z.date(),
  end: z.date(),
  T_heater: z.string(),
  T_start: z.number(),
  T_end: z.number(),
  SMC_start: z.number(),
  SMC_end: z.number(),
  T_extern: z.number(),
  createdAt: z.date().optional(),
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  sessionToken: z.string(),
  expires: z.date(),
}).strict();

export const ConsumptionUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpdateWithoutUserInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  T_heater: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  T_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_extern: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ConsumptionUncheckedUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  T_heater: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  T_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_extern: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const ConsumptionUncheckedUpdateManyWithoutConsumptionsInputSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUncheckedUpdateManyWithoutConsumptionsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  start: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  end: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  T_heater: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  T_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_start: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  SMC_end: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  T_extern: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateWithoutUserInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyWithoutAccountsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  access_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  expires_at: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  token_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  scope: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  id_token: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  session_state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateManyWithoutSessionsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AccountFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict();

export const AccountFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AccountScalarFieldEnumSchema.array().optional(),
}).strict();

export const AccountAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountAggregateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AccountGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.AccountGroupByArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([AccountOrderByWithAggregationInputSchema.array(), AccountOrderByWithAggregationInputSchema]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AccountFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict();

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict();

export const SessionFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict();

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict();

export const SessionFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SessionScalarFieldEnumSchema.array().optional(),
}).strict();

export const SessionAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.SessionAggregateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SessionGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.SessionGroupByArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([SessionOrderByWithAggregationInputSchema.array(), SessionOrderByWithAggregationInputSchema]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SessionFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict();

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict();

export const UserFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict();

export const UserAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.UserAggregateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.UserGroupByArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const VerificationTokenFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([VerificationTokenOrderByWithRelationInputSchema.array(), VerificationTokenOrderByWithRelationInputSchema]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict();

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([VerificationTokenOrderByWithRelationInputSchema.array(), VerificationTokenOrderByWithRelationInputSchema]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict();

export const VerificationTokenFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([VerificationTokenOrderByWithRelationInputSchema.array(), VerificationTokenOrderByWithRelationInputSchema]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict();

export const VerificationTokenAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenAggregateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([VerificationTokenOrderByWithRelationInputSchema.array(), VerificationTokenOrderByWithRelationInputSchema]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const VerificationTokenGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenGroupByArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([VerificationTokenOrderByWithAggregationInputSchema.array(), VerificationTokenOrderByWithAggregationInputSchema]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict();

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict();

export const ConsumptionFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionFindFirstArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  where: ConsumptionWhereInputSchema.optional(),
  orderBy: z.union([ConsumptionOrderByWithRelationInputSchema.array(), ConsumptionOrderByWithRelationInputSchema]).optional(),
  cursor: ConsumptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ConsumptionScalarFieldEnumSchema.array().optional(),
}).strict();

export const ConsumptionFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionFindFirstOrThrowArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  where: ConsumptionWhereInputSchema.optional(),
  orderBy: z.union([ConsumptionOrderByWithRelationInputSchema.array(), ConsumptionOrderByWithRelationInputSchema]).optional(),
  cursor: ConsumptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ConsumptionScalarFieldEnumSchema.array().optional(),
}).strict();

export const ConsumptionFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionFindManyArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  where: ConsumptionWhereInputSchema.optional(),
  orderBy: z.union([ConsumptionOrderByWithRelationInputSchema.array(), ConsumptionOrderByWithRelationInputSchema]).optional(),
  cursor: ConsumptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ConsumptionScalarFieldEnumSchema.array().optional(),
}).strict();

export const ConsumptionAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionAggregateArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  where: ConsumptionWhereInputSchema.optional(),
  orderBy: z.union([ConsumptionOrderByWithRelationInputSchema.array(), ConsumptionOrderByWithRelationInputSchema]).optional(),
  cursor: ConsumptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ConsumptionGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionGroupByArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  where: ConsumptionWhereInputSchema.optional(),
  orderBy: z.union([ConsumptionOrderByWithAggregationInputSchema.array(), ConsumptionOrderByWithAggregationInputSchema]).optional(),
  by: ConsumptionScalarFieldEnumSchema.array(),
  having: ConsumptionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ConsumptionFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionFindUniqueArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  where: ConsumptionWhereUniqueInputSchema,
}).strict();

export const ConsumptionFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionFindUniqueOrThrowArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  where: ConsumptionWhereUniqueInputSchema,
}).strict();

export const AccountCreateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([AccountCreateInputSchema, AccountUncheckedCreateInputSchema]),
}).strict();

export const AccountUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([AccountCreateInputSchema, AccountUncheckedCreateInputSchema]),
  update: z.union([AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema]),
}).strict();

export const AccountCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyArgs> = z.object({
  data: AccountCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AccountDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict();

export const AccountUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema]),
  where: AccountWhereUniqueInputSchema,
}).strict();

export const AccountUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([AccountUpdateManyMutationInputSchema, AccountUncheckedUpdateManyInputSchema]),
  where: AccountWhereInputSchema.optional(),
}).strict();

export const AccountDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict();

export const SessionCreateArgsSchema: z.ZodType<PrismaClient.Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([SessionCreateInputSchema, SessionUncheckedCreateInputSchema]),
}).strict();

export const SessionUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([SessionCreateInputSchema, SessionUncheckedCreateInputSchema]),
  update: z.union([SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema]),
}).strict();

export const SessionCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.SessionCreateManyArgs> = z.object({
  data: SessionCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SessionDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict();

export const SessionUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema]),
  where: SessionWhereUniqueInputSchema,
}).strict();

export const SessionUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([SessionUpdateManyMutationInputSchema, SessionUncheckedUpdateManyInputSchema]),
  where: SessionWhereInputSchema.optional(),
}).strict();

export const SessionDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict();

export const UserCreateArgsSchema: z.ZodType<PrismaClient.Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
}).strict();

export const UserUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
}).strict();

export const UserCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserCreateManyArgs> = z.object({
  data: UserCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  where: UserWhereUniqueInputSchema,
}).strict();

export const UserUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
  where: UserWhereInputSchema.optional(),
}).strict();

export const UserDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict();

export const VerificationTokenCreateArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([VerificationTokenCreateInputSchema, VerificationTokenUncheckedCreateInputSchema]),
}).strict();

export const VerificationTokenUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([VerificationTokenCreateInputSchema, VerificationTokenUncheckedCreateInputSchema]),
  update: z.union([VerificationTokenUpdateInputSchema, VerificationTokenUncheckedUpdateInputSchema]),
}).strict();

export const VerificationTokenCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: VerificationTokenCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const VerificationTokenDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict();

export const VerificationTokenUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([VerificationTokenUpdateInputSchema, VerificationTokenUncheckedUpdateInputSchema]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict();

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([VerificationTokenUpdateManyMutationInputSchema, VerificationTokenUncheckedUpdateManyInputSchema]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict();

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict();

export const ConsumptionCreateArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCreateArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  data: z.union([ConsumptionCreateInputSchema, ConsumptionUncheckedCreateInputSchema]),
}).strict();

export const ConsumptionUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpsertArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  where: ConsumptionWhereUniqueInputSchema,
  create: z.union([ConsumptionCreateInputSchema, ConsumptionUncheckedCreateInputSchema]),
  update: z.union([ConsumptionUpdateInputSchema, ConsumptionUncheckedUpdateInputSchema]),
}).strict();

export const ConsumptionCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionCreateManyArgs> = z.object({
  data: ConsumptionCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ConsumptionDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionDeleteArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  where: ConsumptionWhereUniqueInputSchema,
}).strict();

export const ConsumptionUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpdateArgs> = z.object({
  select: ConsumptionSelectSchema.optional(),
  include: ConsumptionIncludeSchema.optional(),
  data: z.union([ConsumptionUpdateInputSchema, ConsumptionUncheckedUpdateInputSchema]),
  where: ConsumptionWhereUniqueInputSchema,
}).strict();

export const ConsumptionUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionUpdateManyArgs> = z.object({
  data: z.union([ConsumptionUpdateManyMutationInputSchema, ConsumptionUncheckedUpdateManyInputSchema]),
  where: ConsumptionWhereInputSchema.optional(),
}).strict();

export const ConsumptionDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.ConsumptionDeleteManyArgs> = z.object({
  where: ConsumptionWhereInputSchema.optional(),
}).strict();
