import {BASE_URL} from '@helpers/constants';

//  AFTER REACT 18 UPGRADE (requires React Native 0.69.0)
//  import {useQuery, gql} from '@apollo/client';

export interface QueryParamProps {
  gqlQuery: String;
  params?: any;
}

export const Query = async ({gqlQuery, params}: QueryParamProps) => {
  //  AFTER UPGRADES: switch to useQuery hook with gql instead of fetch
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: gqlQuery,
      variables: params,
    }),
  });
  const results = await response.json();
  return results;
};
