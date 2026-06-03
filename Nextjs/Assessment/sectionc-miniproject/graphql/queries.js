import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetProfile {
    profile {
      name
      bio
    }
  }
`;

export const GET_LINKS = gql`
  query GetLinks {
    links {
      id
      title
      url
    }
  }
`;