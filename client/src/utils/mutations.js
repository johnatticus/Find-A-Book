// LOGIN_USER will execute the LoginUser mutation set up using Apollo Server
export const LOGIN_USER = gql`
  mutation loginUser($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

// ADD_USER will execute the addUser mutation
export const ADD_USER = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

// SAVE_BOOK will execute the saveBook mutation

// REMOVE_BOOK will execute the removeBook mutation