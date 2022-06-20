export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  Long: any;
};

export enum BakktStatus {
  Cancelled = 'cancelled',
  Failed = 'failed',
  Success = 'success'
}

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  newPasswordConfirm: Scalars['String'];
  password: Scalars['String'];
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CompleteForgotPasswordInput = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  newPasswordConfirm: Scalars['String'];
  passcode: Scalars['String'];
};

export type CompleteForgotPasswordResponse = {
  __typename?: 'CompleteForgotPasswordResponse';
  message: Scalars['String'];
};

export type ConnectToBakktResponse = {
  __typename?: 'ConnectToBakktResponse';
  signInUrl?: Maybe<Scalars['String']>;
};

export type CreateOrFindProntoPassResponse = {
  __typename?: 'CreateOrFindProntoPassResponse';
  prontoPassId: Scalars['String'];
  prontoPassURLAndroid: Scalars['String'];
  prontoPassURLiOS: Scalars['String'];
};

export type CreateUserInput = {
  address1: Scalars['String'];
  city: Scalars['String'];
  confirmPassword: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mobile: Scalars['String'];
  password: Scalars['String'];
  postal: Scalars['String'];
  state: Scalars['String'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  accessToken?: Maybe<Scalars['String']>;
  isAuth0?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DetectExistingMobileNumberResponse = {
  __typename?: 'DetectExistingMobileNumberResponse';
  isExistingMobileNumber: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type DetectExistingUserResponse = {
  __typename?: 'DetectExistingUserResponse';
  isExistingUser?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type FinalizeBakktResponse = {
  __typename?: 'FinalizeBakktResponse';
  success: Scalars['Boolean'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  isAuth0: Scalars['Boolean'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type GetReplenishmentsInput = {
  cardId: Scalars['Int'];
  endTime: Scalars['String'];
  maxRows: Scalars['Int'];
  startTime: Scalars['String'];
};

export type GetTransactionHistoryInput = {
  cardId?: InputMaybe<Scalars['Int']>;
  endTime: Scalars['String'];
  maxRows: Scalars['Int'];
  startTime: Scalars['String'];
};

export type GetUserResponse = {
  __typename?: 'GetUserResponse';
  address1?: Maybe<Scalars['String']>;
  bakktConnectionStatus?: Maybe<BakktStatus>;
  carrierId?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  consumerId?: Maybe<Scalars['Int']>;
  consumerTypeId?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAuth0?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
  preferredCommType?: Maybe<Scalars['Int']>;
  registered?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
};

export type LoginUserResponse = {
  __typename?: 'LoginUserResponse';
  accessToken?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  bakktConnectionStatus?: Maybe<BakktStatus>;
  carrierId?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  consumerId?: Maybe<Scalars['Int']>;
  consumerTypeId?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAuth0?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
  preferredCommType?: Maybe<Scalars['Int']>;
  registered?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: ChangePasswordResponse;
  completeForgotPassword: CompleteForgotPasswordResponse;
  connectToBakkt: ConnectToBakktResponse;
  createOrFindProntoPass: CreateOrFindProntoPassResponse;
  createUser: CreateUserResponse;
  finalizeBakkt: FinalizeBakktResponse;
  forgotPassword: ForgotPasswordResponse;
  registerPayrollDeductCard?: Maybe<RegisterPayrollDeductCardResponse>;
  registerStoredValueCard?: Maybe<RegisterStoredValueCardResponse>;
  registerUnclaimedStoredValueCard?: Maybe<RegisterUnclaimedStoredValueCardResponse>;
  requestC2PReplenish?: Maybe<RequestC2PReplenishResponse>;
  setupReplenish?: Maybe<SetupReplenishResponse>;
  updatePrimaryStoredValueCard?: Maybe<UpdatePrimaryStoredValueCardResponse>;
  updateReplenish?: Maybe<UpdateReplenishResponse>;
  updateUser: UpdateUserResponse;
  verifyUser: VerifyUserResponse;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCompleteForgotPasswordArgs = {
  input: CompleteForgotPasswordInput;
};


export type MutationCreateOrFindProntoPassArgs = {
  cardId: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationFinalizeBakktArgs = {
  status: BakktStatus;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterPayrollDeductCardArgs = {
  cardNumber: Scalars['String'];
  securityCode: Scalars['String'];
};


export type MutationRegisterStoredValueCardArgs = {
  cardNumber: Scalars['String'];
  consumerId?: InputMaybe<Scalars['Int']>;
  makePrimary?: InputMaybe<Scalars['Boolean']>;
  securityCode: Scalars['String'];
};


export type MutationRequestC2PReplenishArgs = {
  input: RequestC2PReplenishInput;
};


export type MutationSetupReplenishArgs = {
  input: SetupReplenishInput;
};


export type MutationUpdatePrimaryStoredValueCardArgs = {
  input: UpdatePrimaryStoredValueCardInput;
};


export type MutationUpdateReplenishArgs = {
  input: UpdateReplenishInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationVerifyUserArgs = {
  input: VerifyUserInput;
};

export type PrepaidAccount = {
  __typename?: 'PrepaidAccount';
  balance?: Maybe<Scalars['Float']>;
  cardId?: Maybe<Scalars['Int']>;
  cardNum?: Maybe<Scalars['String']>;
  cardType?: Maybe<Scalars['String']>;
  currencyCd?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  mfoEligible?: Maybe<Scalars['Boolean']>;
  points?: Maybe<Scalars['Int']>;
  primary?: Maybe<Scalars['Boolean']>;
  promoTotal?: Maybe<Scalars['Float']>;
  replenishTotal?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  detectExistingMobileNumber: DetectExistingMobileNumberResponse;
  detectExistingUser: DetectExistingUserResponse;
  getPaymentMethods: Array<Maybe<PrepaidAccount>>;
  getReplenishmentInfo?: Maybe<Array<Maybe<ReplenishmentInfo>>>;
  getReplenishments?: Maybe<Array<Maybe<Replenishment>>>;
  getTransactionHistory: Array<Maybe<Transaction>>;
  getUser: GetUserResponse;
  loginUser: LoginUserResponse;
  signOut: SignOutResponse;
  testCookie: TestCookieResponse;
  validateCookie: ValidateCookieResponse;
};


export type QueryDetectExistingMobileNumberArgs = {
  mobile: Scalars['String'];
};


export type QueryDetectExistingUserArgs = {
  email: Scalars['String'];
};


export type QueryGetReplenishmentInfoArgs = {
  cardId: Scalars['Int'];
  replenishmentId: Scalars['Long'];
};


export type QueryGetReplenishmentsArgs = {
  input?: InputMaybe<GetReplenishmentsInput>;
};


export type QueryGetTransactionHistoryArgs = {
  input: GetTransactionHistoryInput;
};


export type QueryLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type QueryTestCookieArgs = {
  input?: InputMaybe<TestCookieInput>;
};

export type RegisterPayrollDeductCardResponse = {
  __typename?: 'RegisterPayrollDeductCardResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type RegisterStoredValueCardResponse = {
  __typename?: 'RegisterStoredValueCardResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type RegisterUnclaimedStoredValueCardResponse = {
  __typename?: 'RegisterUnclaimedStoredValueCardResponse';
  cardId?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Replenishment = {
  __typename?: 'Replenishment';
  amount?: Maybe<Scalars['Float']>;
  currencyCd?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  info?: Maybe<Array<Maybe<ReplenishmentInfo>>>;
  replenishedCard?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ReplenishmentInfo = {
  __typename?: 'ReplenishmentInfo';
  currencyCd?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  replenishAmount?: Maybe<Scalars['Long']>;
  replenishCardKey?: Maybe<Scalars['String']>;
  replenishCardNum?: Maybe<Scalars['String']>;
  replenishDate?: Maybe<Scalars['String']>;
  replenishId?: Maybe<Scalars['String']>;
  replenishThreshold?: Maybe<Scalars['Int']>;
  replenishType?: Maybe<Scalars['Int']>;
};

export type RequestC2PReplenishInput = {
  amount: Scalars['Int'];
  cardId: Scalars['Int'];
  merchantTransactionId: Scalars['String'];
  replenCount?: InputMaybe<Scalars['Int']>;
  replenishSecurityCode: Scalars['Int'];
  replenishType: Scalars['Int'];
  srcDpaId: Scalars['String'];
  threshold?: InputMaybe<Scalars['Int']>;
  transactionCurrencyCode: Scalars['String'];
  xSrcCxFlowId: Scalars['String'];
};

export type RequestC2PReplenishResponse = {
  __typename?: 'RequestC2PReplenishResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SetupReplenishInput = {
  address1: Scalars['String'];
  amount: Scalars['Int'];
  cardId: Scalars['Int'];
  city: Scalars['String'];
  country: Scalars['String'];
  postal: Scalars['String'];
  replenishCardNumber: Scalars['String'];
  replenishExpMonth: Scalars['Int'];
  replenishExpYear: Scalars['Int'];
  replenishSecurityCode: Scalars['String'];
  replenishType: Scalars['Int'];
  state: Scalars['String'];
  threshold?: InputMaybe<Scalars['Int']>;
};

export type SetupReplenishResponse = {
  __typename?: 'SetupReplenishResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SignOutResponse = {
  __typename?: 'SignOutResponse';
  success: Scalars['Boolean'];
};

export type TestCookieInput = {
  id: Scalars['String'];
};

export type TestCookieResponse = {
  __typename?: 'TestCookieResponse';
  message: Scalars['String'];
};

export type Transaction = {
  __typename?: 'Transaction';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  cashback?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currencyCd?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  isDebit?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  postal?: Maybe<Scalars['String']>;
  purchase?: Maybe<Scalars['Float']>;
  replenish?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdatePrimaryStoredValueCardInput = {
  cardId?: InputMaybe<Scalars['Int']>;
  consumerId?: InputMaybe<Scalars['Int']>;
};

export type UpdatePrimaryStoredValueCardResponse = {
  __typename?: 'UpdatePrimaryStoredValueCardResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateReplenishInput = {
  address1?: InputMaybe<Scalars['String']>;
  amount: Scalars['Int'];
  cardId: Scalars['Int'];
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postal?: InputMaybe<Scalars['String']>;
  replenCount: Scalars['Int'];
  replenishCardNumber?: InputMaybe<Scalars['String']>;
  replenishExpMonth?: InputMaybe<Scalars['Int']>;
  replenishExpYear?: InputMaybe<Scalars['Int']>;
  replenishId: Scalars['Long'];
  replenishSecurityCode?: InputMaybe<Scalars['String']>;
  replenishType: Scalars['Int'];
  state?: InputMaybe<Scalars['String']>;
  threshold?: InputMaybe<Scalars['Int']>;
};

export type UpdateReplenishResponse = {
  __typename?: 'UpdateReplenishResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserInput = {
  address1: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mobile: Scalars['String'];
  postal: Scalars['String'];
  preferredCommType?: InputMaybe<Scalars['Int']>;
  state: Scalars['String'];
};

export type UpdateUserResponse = {
  __typename?: 'UpdateUserResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ValidateCookieResponse = {
  __typename?: 'ValidateCookieResponse';
  isValid: Scalars['Boolean'];
};

export type VerifyUserInput = {
  email: Scalars['String'];
  passcode: Scalars['String'];
};

export type VerifyUserResponse = {
  __typename?: 'VerifyUserResponse';
  result: Scalars['Boolean'];
};
