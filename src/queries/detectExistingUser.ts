import React from 'react';

import {Query} from '@queries/query';

interface QueryProps {
  email: String;
}

export interface DetectExistingUserResponseParams {
  message: String;
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
