import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  email: string;
}

//  TODO: move to models
export interface DetectExistingUserResponse {
  message: string;
  isExistingUser: boolean;
}

const QUERY = `
    query DetectExistingUser($email: String!) {
      detectExistingUser(email: $email) {
        isExistingUser
        message
      }
    }
  `;

export const getIsExistingUser = async ({email}: QueryProps) => {
  const results = await Query({
    gqlQuery: QUERY,
    params: {email: email},
  });
  return results?.data?.detectExistingUser;
};
