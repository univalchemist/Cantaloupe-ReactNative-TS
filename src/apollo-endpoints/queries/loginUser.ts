import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  email: string;
  password: string;
}
//  Will need to import the model from @models on screen used
const LOGIN_USER = `
  query LoginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      id
      email
      firstName
      lastName
      address1
      city
      state
      postal
      country
      created
      consumerId
      consumerTypeId
      registered
      carrierId
      preferredCommType
      bakktConnectionStatus
      accessToken
      isAuth0
    }
  }
`;

export const loginUser = async ({email, password}: QueryProps) => {
  const results = await Query({
    gqlQuery: LOGIN_USER,
    params: {email: email, password: password},
  });

  return results?.data?.loginUser;
};
