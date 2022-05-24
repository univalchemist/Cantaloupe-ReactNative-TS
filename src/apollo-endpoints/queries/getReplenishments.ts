import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  cardId: number;
  startTime: String;
  endTime: String;
  maxRows: number;
}
//  Will need to import the model from @models on screen used
const GET_REPLENISHMENTS = `
query GetReplenishments(
    $cardId: Int!
    $startTime: String!
    $endTime: String!
    $maxRows: Int!
  ) {
    getReplenishments(
      input: {
        cardId: $cardId
        startTime: $startTime
        endTime: $endTime
        maxRows: $maxRows
      }
    ) {
      id
      replenishedCard
      date
      amount
      currencyCd
      type
      info {
        currencyCd
        priority
        replenishAmount
        replenishCardKey
        replenishCardNum
        replenishDate
        replenishId
        replenishThreshold
        replenishType
      }
    }
  }
  `;

export const getReplenishments = async ({
  cardId,
  startTime,
  endTime,
  maxRows,
}: QueryProps) => {
  const results = await Query({
    gqlQuery: GET_REPLENISHMENTS,
    params: {cardId: cardId, startTime: startTime, endTime: endTime, maxRows},
  });
  return results?.data?.getReplenishments;
};
