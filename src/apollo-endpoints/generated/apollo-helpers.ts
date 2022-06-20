import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ChangePasswordResponseKeySpecifier = ('message' | 'success' | ChangePasswordResponseKeySpecifier)[];
export type ChangePasswordResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompleteForgotPasswordResponseKeySpecifier = ('message' | CompleteForgotPasswordResponseKeySpecifier)[];
export type CompleteForgotPasswordResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectToBakktResponseKeySpecifier = ('signInUrl' | ConnectToBakktResponseKeySpecifier)[];
export type ConnectToBakktResponseFieldPolicy = {
	signInUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateOrFindProntoPassResponseKeySpecifier = ('prontoPassId' | 'prontoPassURLAndroid' | 'prontoPassURLiOS' | CreateOrFindProntoPassResponseKeySpecifier)[];
export type CreateOrFindProntoPassResponseFieldPolicy = {
	prontoPassId?: FieldPolicy<any> | FieldReadFunction<any>,
	prontoPassURLAndroid?: FieldPolicy<any> | FieldReadFunction<any>,
	prontoPassURLiOS?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUserResponseKeySpecifier = ('accessToken' | 'isAuth0' | 'message' | 'success' | CreateUserResponseKeySpecifier)[];
export type CreateUserResponseFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	isAuth0?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DetectExistingMobileNumberResponseKeySpecifier = ('isExistingMobileNumber' | 'message' | DetectExistingMobileNumberResponseKeySpecifier)[];
export type DetectExistingMobileNumberResponseFieldPolicy = {
	isExistingMobileNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DetectExistingUserResponseKeySpecifier = ('isExistingUser' | 'message' | DetectExistingUserResponseKeySpecifier)[];
export type DetectExistingUserResponseFieldPolicy = {
	isExistingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FinalizeBakktResponseKeySpecifier = ('success' | FinalizeBakktResponseKeySpecifier)[];
export type FinalizeBakktResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForgotPasswordResponseKeySpecifier = ('isAuth0' | 'message' | 'success' | ForgotPasswordResponseKeySpecifier)[];
export type ForgotPasswordResponseFieldPolicy = {
	isAuth0?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetUserResponseKeySpecifier = ('address1' | 'bakktConnectionStatus' | 'carrierId' | 'city' | 'consumerId' | 'consumerTypeId' | 'country' | 'created' | 'email' | 'firstName' | 'id' | 'isAuth0' | 'lastName' | 'mobile' | 'postal' | 'preferredCommType' | 'registered' | 'state' | GetUserResponseKeySpecifier)[];
export type GetUserResponseFieldPolicy = {
	address1?: FieldPolicy<any> | FieldReadFunction<any>,
	bakktConnectionStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	carrierId?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	consumerId?: FieldPolicy<any> | FieldReadFunction<any>,
	consumerTypeId?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAuth0?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	mobile?: FieldPolicy<any> | FieldReadFunction<any>,
	postal?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredCommType?: FieldPolicy<any> | FieldReadFunction<any>,
	registered?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginUserResponseKeySpecifier = ('accessToken' | 'address1' | 'bakktConnectionStatus' | 'carrierId' | 'city' | 'consumerId' | 'consumerTypeId' | 'country' | 'created' | 'email' | 'firstName' | 'id' | 'isAuth0' | 'lastName' | 'mobile' | 'postal' | 'preferredCommType' | 'registered' | 'state' | LoginUserResponseKeySpecifier)[];
export type LoginUserResponseFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	address1?: FieldPolicy<any> | FieldReadFunction<any>,
	bakktConnectionStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	carrierId?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	consumerId?: FieldPolicy<any> | FieldReadFunction<any>,
	consumerTypeId?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAuth0?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	mobile?: FieldPolicy<any> | FieldReadFunction<any>,
	postal?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredCommType?: FieldPolicy<any> | FieldReadFunction<any>,
	registered?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('changePassword' | 'completeForgotPassword' | 'connectToBakkt' | 'createOrFindProntoPass' | 'createUser' | 'finalizeBakkt' | 'forgotPassword' | 'registerPayrollDeductCard' | 'registerStoredValueCard' | 'registerUnclaimedStoredValueCard' | 'requestC2PReplenish' | 'setupReplenish' | 'updatePrimaryStoredValueCard' | 'updateReplenish' | 'updateUser' | 'verifyUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	changePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	completeForgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	connectToBakkt?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrFindProntoPass?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	finalizeBakkt?: FieldPolicy<any> | FieldReadFunction<any>,
	forgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	registerPayrollDeductCard?: FieldPolicy<any> | FieldReadFunction<any>,
	registerStoredValueCard?: FieldPolicy<any> | FieldReadFunction<any>,
	registerUnclaimedStoredValueCard?: FieldPolicy<any> | FieldReadFunction<any>,
	requestC2PReplenish?: FieldPolicy<any> | FieldReadFunction<any>,
	setupReplenish?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePrimaryStoredValueCard?: FieldPolicy<any> | FieldReadFunction<any>,
	updateReplenish?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PrepaidAccountKeySpecifier = ('balance' | 'cardId' | 'cardNum' | 'cardType' | 'currencyCd' | 'discount' | 'mfoEligible' | 'points' | 'primary' | 'promoTotal' | 'replenishTotal' | PrepaidAccountKeySpecifier)[];
export type PrepaidAccountFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	cardId?: FieldPolicy<any> | FieldReadFunction<any>,
	cardNum?: FieldPolicy<any> | FieldReadFunction<any>,
	cardType?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCd?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	mfoEligible?: FieldPolicy<any> | FieldReadFunction<any>,
	points?: FieldPolicy<any> | FieldReadFunction<any>,
	primary?: FieldPolicy<any> | FieldReadFunction<any>,
	promoTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	replenishTotal?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('detectExistingMobileNumber' | 'detectExistingUser' | 'getPaymentMethods' | 'getReplenishmentInfo' | 'getReplenishments' | 'getTransactionHistory' | 'getUser' | 'loginUser' | 'signOut' | 'testCookie' | 'validateCookie' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	detectExistingMobileNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	detectExistingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getPaymentMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	getReplenishmentInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	getReplenishments?: FieldPolicy<any> | FieldReadFunction<any>,
	getTransactionHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	getUser?: FieldPolicy<any> | FieldReadFunction<any>,
	loginUser?: FieldPolicy<any> | FieldReadFunction<any>,
	signOut?: FieldPolicy<any> | FieldReadFunction<any>,
	testCookie?: FieldPolicy<any> | FieldReadFunction<any>,
	validateCookie?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegisterPayrollDeductCardResponseKeySpecifier = ('message' | 'success' | RegisterPayrollDeductCardResponseKeySpecifier)[];
export type RegisterPayrollDeductCardResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegisterStoredValueCardResponseKeySpecifier = ('message' | 'success' | RegisterStoredValueCardResponseKeySpecifier)[];
export type RegisterStoredValueCardResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegisterUnclaimedStoredValueCardResponseKeySpecifier = ('cardId' | 'message' | 'success' | RegisterUnclaimedStoredValueCardResponseKeySpecifier)[];
export type RegisterUnclaimedStoredValueCardResponseFieldPolicy = {
	cardId?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReplenishmentKeySpecifier = ('amount' | 'currencyCd' | 'date' | 'id' | 'info' | 'replenishedCard' | 'type' | ReplenishmentKeySpecifier)[];
export type ReplenishmentFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCd?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	replenishedCard?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReplenishmentInfoKeySpecifier = ('currencyCd' | 'priority' | 'replenishAmount' | 'replenishCardKey' | 'replenishCardNum' | 'replenishDate' | 'replenishId' | 'replenishThreshold' | 'replenishType' | ReplenishmentInfoKeySpecifier)[];
export type ReplenishmentInfoFieldPolicy = {
	currencyCd?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	replenishAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	replenishCardKey?: FieldPolicy<any> | FieldReadFunction<any>,
	replenishCardNum?: FieldPolicy<any> | FieldReadFunction<any>,
	replenishDate?: FieldPolicy<any> | FieldReadFunction<any>,
	replenishId?: FieldPolicy<any> | FieldReadFunction<any>,
	replenishThreshold?: FieldPolicy<any> | FieldReadFunction<any>,
	replenishType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestC2PReplenishResponseKeySpecifier = ('message' | 'success' | RequestC2PReplenishResponseKeySpecifier)[];
export type RequestC2PReplenishResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetupReplenishResponseKeySpecifier = ('message' | 'success' | SetupReplenishResponseKeySpecifier)[];
export type SetupReplenishResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SignOutResponseKeySpecifier = ('success' | SignOutResponseKeySpecifier)[];
export type SignOutResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestCookieResponseKeySpecifier = ('message' | TestCookieResponseKeySpecifier)[];
export type TestCookieResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionKeySpecifier = ('address1' | 'address2' | 'cardNumber' | 'cashback' | 'city' | 'companyName' | 'country' | 'currencyCd' | 'date' | 'discount' | 'id' | 'isDebit' | 'location' | 'postal' | 'purchase' | 'replenish' | 'state' | 'type' | TransactionKeySpecifier)[];
export type TransactionFieldPolicy = {
	address1?: FieldPolicy<any> | FieldReadFunction<any>,
	address2?: FieldPolicy<any> | FieldReadFunction<any>,
	cardNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	cashback?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCd?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDebit?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	postal?: FieldPolicy<any> | FieldReadFunction<any>,
	purchase?: FieldPolicy<any> | FieldReadFunction<any>,
	replenish?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePrimaryStoredValueCardResponseKeySpecifier = ('message' | 'success' | UpdatePrimaryStoredValueCardResponseKeySpecifier)[];
export type UpdatePrimaryStoredValueCardResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateReplenishResponseKeySpecifier = ('message' | 'success' | UpdateReplenishResponseKeySpecifier)[];
export type UpdateReplenishResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUserResponseKeySpecifier = ('message' | 'success' | UpdateUserResponseKeySpecifier)[];
export type UpdateUserResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidateCookieResponseKeySpecifier = ('isValid' | ValidateCookieResponseKeySpecifier)[];
export type ValidateCookieResponseFieldPolicy = {
	isValid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyUserResponseKeySpecifier = ('result' | VerifyUserResponseKeySpecifier)[];
export type VerifyUserResponseFieldPolicy = {
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ChangePasswordResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangePasswordResponseKeySpecifier | (() => undefined | ChangePasswordResponseKeySpecifier),
		fields?: ChangePasswordResponseFieldPolicy,
	},
	CompleteForgotPasswordResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompleteForgotPasswordResponseKeySpecifier | (() => undefined | CompleteForgotPasswordResponseKeySpecifier),
		fields?: CompleteForgotPasswordResponseFieldPolicy,
	},
	ConnectToBakktResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectToBakktResponseKeySpecifier | (() => undefined | ConnectToBakktResponseKeySpecifier),
		fields?: ConnectToBakktResponseFieldPolicy,
	},
	CreateOrFindProntoPassResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateOrFindProntoPassResponseKeySpecifier | (() => undefined | CreateOrFindProntoPassResponseKeySpecifier),
		fields?: CreateOrFindProntoPassResponseFieldPolicy,
	},
	CreateUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUserResponseKeySpecifier | (() => undefined | CreateUserResponseKeySpecifier),
		fields?: CreateUserResponseFieldPolicy,
	},
	DetectExistingMobileNumberResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DetectExistingMobileNumberResponseKeySpecifier | (() => undefined | DetectExistingMobileNumberResponseKeySpecifier),
		fields?: DetectExistingMobileNumberResponseFieldPolicy,
	},
	DetectExistingUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DetectExistingUserResponseKeySpecifier | (() => undefined | DetectExistingUserResponseKeySpecifier),
		fields?: DetectExistingUserResponseFieldPolicy,
	},
	FinalizeBakktResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FinalizeBakktResponseKeySpecifier | (() => undefined | FinalizeBakktResponseKeySpecifier),
		fields?: FinalizeBakktResponseFieldPolicy,
	},
	ForgotPasswordResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForgotPasswordResponseKeySpecifier | (() => undefined | ForgotPasswordResponseKeySpecifier),
		fields?: ForgotPasswordResponseFieldPolicy,
	},
	GetUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetUserResponseKeySpecifier | (() => undefined | GetUserResponseKeySpecifier),
		fields?: GetUserResponseFieldPolicy,
	},
	LoginUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginUserResponseKeySpecifier | (() => undefined | LoginUserResponseKeySpecifier),
		fields?: LoginUserResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	PrepaidAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PrepaidAccountKeySpecifier | (() => undefined | PrepaidAccountKeySpecifier),
		fields?: PrepaidAccountFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RegisterPayrollDeductCardResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegisterPayrollDeductCardResponseKeySpecifier | (() => undefined | RegisterPayrollDeductCardResponseKeySpecifier),
		fields?: RegisterPayrollDeductCardResponseFieldPolicy,
	},
	RegisterStoredValueCardResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegisterStoredValueCardResponseKeySpecifier | (() => undefined | RegisterStoredValueCardResponseKeySpecifier),
		fields?: RegisterStoredValueCardResponseFieldPolicy,
	},
	RegisterUnclaimedStoredValueCardResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegisterUnclaimedStoredValueCardResponseKeySpecifier | (() => undefined | RegisterUnclaimedStoredValueCardResponseKeySpecifier),
		fields?: RegisterUnclaimedStoredValueCardResponseFieldPolicy,
	},
	Replenishment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReplenishmentKeySpecifier | (() => undefined | ReplenishmentKeySpecifier),
		fields?: ReplenishmentFieldPolicy,
	},
	ReplenishmentInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReplenishmentInfoKeySpecifier | (() => undefined | ReplenishmentInfoKeySpecifier),
		fields?: ReplenishmentInfoFieldPolicy,
	},
	RequestC2PReplenishResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestC2PReplenishResponseKeySpecifier | (() => undefined | RequestC2PReplenishResponseKeySpecifier),
		fields?: RequestC2PReplenishResponseFieldPolicy,
	},
	SetupReplenishResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetupReplenishResponseKeySpecifier | (() => undefined | SetupReplenishResponseKeySpecifier),
		fields?: SetupReplenishResponseFieldPolicy,
	},
	SignOutResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SignOutResponseKeySpecifier | (() => undefined | SignOutResponseKeySpecifier),
		fields?: SignOutResponseFieldPolicy,
	},
	TestCookieResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestCookieResponseKeySpecifier | (() => undefined | TestCookieResponseKeySpecifier),
		fields?: TestCookieResponseFieldPolicy,
	},
	Transaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionKeySpecifier | (() => undefined | TransactionKeySpecifier),
		fields?: TransactionFieldPolicy,
	},
	UpdatePrimaryStoredValueCardResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePrimaryStoredValueCardResponseKeySpecifier | (() => undefined | UpdatePrimaryStoredValueCardResponseKeySpecifier),
		fields?: UpdatePrimaryStoredValueCardResponseFieldPolicy,
	},
	UpdateReplenishResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateReplenishResponseKeySpecifier | (() => undefined | UpdateReplenishResponseKeySpecifier),
		fields?: UpdateReplenishResponseFieldPolicy,
	},
	UpdateUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUserResponseKeySpecifier | (() => undefined | UpdateUserResponseKeySpecifier),
		fields?: UpdateUserResponseFieldPolicy,
	},
	ValidateCookieResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidateCookieResponseKeySpecifier | (() => undefined | ValidateCookieResponseKeySpecifier),
		fields?: ValidateCookieResponseFieldPolicy,
	},
	VerifyUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifyUserResponseKeySpecifier | (() => undefined | VerifyUserResponseKeySpecifier),
		fields?: VerifyUserResponseFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;