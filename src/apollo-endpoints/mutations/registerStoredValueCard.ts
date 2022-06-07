import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  cardNumber: string;
  code: string;
}

//  TODO: move to models
export interface RegisterStoredValueCardPassResponse {
  success: boolean;
  message: string;
}

const REGISTER_STORED_VALUE_CARD = `
  mutation RegisterStoredValueCard(
    $cardNumber: String!
    $securityCode: String!
  ) {
    registerStoredValueCard(
      cardNumber: $cardNumber
      securityCode: $securityCode
    ) {
      success
      message
    }
  }
`;
export const registerStoredValueCard = async ({
  cardNumber,
  code,
}: QueryProps) => {
  const results = await Query({
    gqlQuery: REGISTER_STORED_VALUE_CARD,
    params: {cardNumber: cardNumber, securityCode: code},
  }).catch(error => {
    console.log(error);
    const response: RegisterStoredValueCardPassResponse = {
      success: false,
      message: error.message,
    };
    return response;
  });

  if (results.errors && results.errors[0] && results.errors[0].message) {
    const response: RegisterStoredValueCardPassResponse = {
      success: false,
      message: results.errors[0].message,
    };
    return response;
  }

  return results?.data?.registerStoredValueCard;
};
