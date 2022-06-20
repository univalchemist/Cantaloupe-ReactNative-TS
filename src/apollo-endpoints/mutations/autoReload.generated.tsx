import * as Types from '../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SetupReplenishMutationVariables = Types.Exact<{
  cardId: Types.Scalars['Int'];
  replenishCardNumber: Types.Scalars['String'];
  replenishExpMonth: Types.Scalars['Int'];
  replenishExpYear: Types.Scalars['Int'];
  replenishSecurityCode: Types.Scalars['String'];
  replenishType: Types.Scalars['Int'];
  amount: Types.Scalars['Int'];
  threshold: Types.Scalars['Int'];
  address1: Types.Scalars['String'];
  city: Types.Scalars['String'];
  state: Types.Scalars['String'];
  postal: Types.Scalars['String'];
  country: Types.Scalars['String'];
}>;


export type SetupReplenishMutation = { __typename?: 'Mutation', setupReplenish?: { __typename?: 'SetupReplenishResponse', success?: boolean | null, message?: string | null } | null };


export const SetupReplenishDocument = gql`
    mutation SetupReplenish($cardId: Int!, $replenishCardNumber: String!, $replenishExpMonth: Int!, $replenishExpYear: Int!, $replenishSecurityCode: String!, $replenishType: Int!, $amount: Int!, $threshold: Int!, $address1: String!, $city: String!, $state: String!, $postal: String!, $country: String!) {
  setupReplenish(
    input: {cardId: $cardId, replenishCardNumber: $replenishCardNumber, replenishExpMonth: $replenishExpMonth, replenishExpYear: $replenishExpYear, replenishSecurityCode: $replenishSecurityCode, replenishType: $replenishType, amount: $amount, threshold: $threshold, address1: $address1, city: $city, state: $state, postal: $postal, country: $country}
  ) {
    success
    message
  }
}
    `;
export type SetupReplenishMutationFn = Apollo.MutationFunction<SetupReplenishMutation, SetupReplenishMutationVariables>;

/**
 * __useSetupReplenishMutation__
 *
 * To run a mutation, you first call `useSetupReplenishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetupReplenishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setupReplenishMutation, { data, loading, error }] = useSetupReplenishMutation({
 *   variables: {
 *      cardId: // value for 'cardId'
 *      replenishCardNumber: // value for 'replenishCardNumber'
 *      replenishExpMonth: // value for 'replenishExpMonth'
 *      replenishExpYear: // value for 'replenishExpYear'
 *      replenishSecurityCode: // value for 'replenishSecurityCode'
 *      replenishType: // value for 'replenishType'
 *      amount: // value for 'amount'
 *      threshold: // value for 'threshold'
 *      address1: // value for 'address1'
 *      city: // value for 'city'
 *      state: // value for 'state'
 *      postal: // value for 'postal'
 *      country: // value for 'country'
 *   },
 * });
 */
export function useSetupReplenishMutation(baseOptions?: Apollo.MutationHookOptions<SetupReplenishMutation, SetupReplenishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetupReplenishMutation, SetupReplenishMutationVariables>(SetupReplenishDocument, options);
      }
export type SetupReplenishMutationHookResult = ReturnType<typeof useSetupReplenishMutation>;
export type SetupReplenishMutationResult = Apollo.MutationResult<SetupReplenishMutation>;
export type SetupReplenishMutationOptions = Apollo.BaseMutationOptions<SetupReplenishMutation, SetupReplenishMutationVariables>;