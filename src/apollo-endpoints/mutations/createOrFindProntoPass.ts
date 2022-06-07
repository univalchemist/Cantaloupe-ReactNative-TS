import {Query} from '@apollo-endpoints/query';

interface QueryProps {
  cardId: number;
}

//  TODO: move to models
export interface CreateOrFindProntoPassResponse {
  prontoPassURLiOS: string;
}

const CREATE_OR_FIND_PRONTO_PASS = `
  mutation CreateOrFindProntoPass($cardId: Int!) {
    createOrFindProntoPass(cardId: $cardId) {
      prontoPassURLiOS
    }
  }
`;
export const fetchProntoPass = async ({cardId}: QueryProps) => {
  const results = await Query({
    gqlQuery: CREATE_OR_FIND_PRONTO_PASS,
    params: {cardId: cardId},
  }).catch(error => {
    //  handle error
  });

  if (results.errors) {
    //  handle error
  }

  return results?.data?.createOrFindProntoPass;
};
