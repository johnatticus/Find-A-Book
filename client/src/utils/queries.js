// this will hold the query 'GET_ME', which will execute the 'me' query set up using Apollo Server
import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    user {
      _id
      username
      email
      savedBooks {
          bookId
          author
          image
          description
          title
          link
      }
    }
  }
`;

