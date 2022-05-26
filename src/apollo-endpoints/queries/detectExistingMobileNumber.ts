import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  mobile: String;
}

export interface DetectExistingMobileNumberResponse {
  message: String;
  isExistingMobileNumber: boolean;
}

const DETECT_EXISTING_MOBILE_NUMBER = `
  query DetectExistingMobileNumber($mobile: String!) {
    detectExistingMobileNumber(mobile: $mobile) {
      isExistingMobileNumber
      message
    }
  }
`;

export const getIsExistingMobileNumber = async ({mobile}: QueryProps) => {
  const results = await Query({
    gqlQuery: DETECT_EXISTING_MOBILE_NUMBER,
    params: {mobile: mobile},
  });
  return results?.data?.detectExistingMobileNumber;
};
