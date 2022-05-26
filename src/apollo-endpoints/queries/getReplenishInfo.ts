import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  replenishmentId: number;
  cardId: number;
}
//  Will need to import the model from @models on screen used
const GET_REPLENISH_INFO = `
  query GetReplenishmentInfo($cardId: Int!, $replenishmentId: Long!) {
    getReplenishmentInfo(cardId: $cardId, replenishmentId: $replenishmentId)
  }
`;

export const getReplenishInfo = async ({
  cardId,
  replenishmentId,
}: QueryProps) => {
  const results = await Query({
    gqlQuery: GET_REPLENISH_INFO,
    params: {cardId: cardId, replenishmentId: replenishmentId},
  });
  return results?.data?.getReplenishInfo;
};
