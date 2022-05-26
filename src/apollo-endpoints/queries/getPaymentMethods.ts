import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  email: String;
}
//  Will need to import the model from @models on screen used
const GET_PAYMENT_METHODS = `
     query GetPaymentMethods {
      getPaymentMethods {
        promoTotal
        replenishTotal
        discount
        points
        cardType
        cardId
        cardNum
        balance
        currencyCd
        primary
      }
    }
  `;

export const getPaymentMethods = async ({email}: QueryProps) => {
  const results = await Query({
    gqlQuery: GET_PAYMENT_METHODS,
    params: {email: email},
  });
  return results?.data?.getPaymentMethods;
};
