import {Query} from '@apollo-endpoints/query';

//  Will need to import the model from @models on screen used
const SIGN_OUT = `
  query SignOut {
    signOut {
      success
    }
  }
`;

export const signOut = async () => {
  const results = await Query({
    gqlQuery: SIGN_OUT,
  });
  return results?.data?.signOut;
};
