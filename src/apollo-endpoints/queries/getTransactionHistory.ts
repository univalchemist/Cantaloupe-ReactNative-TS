import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  startTime: String;
  endTime: String;
  maxRows: number;
}
//  Will need to import the model from @models on screen used
const GET_TRANSACTION_HISTORY = `
 query GetTransactionHistory(
    $startTime: String!
    $endTime: String!
    $maxRows: Int!
  ) {
    getTransactionHistory(
      input: {startTime: $startTime, endTime: $endTime, maxRows: $maxRows}
    ) {
      id
      address1
      address2
      city
      postal
      state
      country
      currencyCd
      date
      location
      card
      companyName
      discount
      purchase
      replenish
      type
    }
  }
  `;

export const getTransactionHistory = async ({
  startTime,
  endTime,
  maxRows,
}: QueryProps) => {
  const results = await Query({
    gqlQuery: GET_TRANSACTION_HISTORY,
    params: {startTime: startTime, endTime: endTime, maxRows: maxRows},
  });
  return results?.data?.getTransactionHistory;
};
