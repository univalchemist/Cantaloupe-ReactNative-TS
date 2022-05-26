import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  replenishmentId: number;
  cardId: number;
}
//  Will need to import the model from @models on screen used
const GET_REPLENISHMENT_INFO = `
query GetReplenishmentInfo($cardId: Int!, $replenishmentId: Long!) {
    getReplenishmentInfo(cardId: $cardId, replenishmentId: $replenishmentId) {
      currencyCd
      priority
      replenishAmount
      replenishCardKey
      replenishCardNum
      replenishDate
      replenishId
      replenishThreshhold
      replenishType
    }
  }
  `;

export const getReplenishmentInfo = async ({
  cardId,
  replenishmentId,
}: QueryProps) => {
  const results = await Query({
    gqlQuery: GET_REPLENISHMENT_INFO,
    params: {cardId: cardId, replenishmentId: replenishmentId},
  });
  return results?.data?.getReplenishmentInfo;
};
