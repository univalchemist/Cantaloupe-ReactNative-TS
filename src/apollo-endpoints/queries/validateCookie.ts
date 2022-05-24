import {Query} from '@apollo-endpoints/query';

//  Will need to import the model from @models on screen used
const VALIDATE_COOKIE = `
  query ValidateCookie {
    validateCookie {
      isValid
    }
  }
`;

export const validateCookie = async () => {
  const results = await Query({
    gqlQuery: VALIDATE_COOKIE,
  });
  return results?.data?.validateCookie;
};
