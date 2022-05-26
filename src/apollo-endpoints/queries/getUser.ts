import {Query} from '@apollo-endpoints/query';

//  Will need to import the model from @models on screen used
const GET_USER = `
 query GetUser {
    getUser {
      id
      consumerId
      carrierId
      email
      firstName
      lastName
      mobile
      address1
      city
      state
      postal
      country
      registered
      bakktConnectionStatus
      isAuth0
    }
  }
  `;

export const getUser = async () => {
  const results = await Query({
    gqlQuery: GET_USER,
  });
  return results?.data?.getUser;
};
