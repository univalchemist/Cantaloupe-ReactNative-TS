import {BASE_URL} from '@helpers/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

//  AFTER REACT 18 UPGRADE (requires React Native 0.69.0)
//  import {useQuery, gql} from '@apollo/client';

export interface QueryParamProps {
  gqlQuery: string;
  params?: any;
}

export const Query = async ({gqlQuery, params}: QueryParamProps) => {
  const token = await AsyncStorage.getItem('token');

  const headersToAdd = new Headers();
  headersToAdd.append('Content-Type', 'application/json');

  if (token && token?.length > 0) {
    headersToAdd.append('Authorization', 'Bearer ' + token);
  }

  //  AFTER UPGRADES: switch to useQuery hook with gql instead of fetch
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: headersToAdd,
    body: JSON.stringify({
      query: gqlQuery,
      variables: params,
    }),
  });
  const results = await response.json();
  return results;
};
