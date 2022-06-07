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
        mfoEligible
      }
    }
  `;

export const getPaymentMethods = async () => {
  const results = await Query({
    gqlQuery: GET_PAYMENT_METHODS,
  }).catch(error => {
    console.error("getPayments api caught an error", { error });
  });
  return results?.data?.getPaymentMethods;
};
