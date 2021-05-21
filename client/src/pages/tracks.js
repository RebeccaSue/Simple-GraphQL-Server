import React from 'react';
import { Layout } from '../components';
import { gql } from '@apollo/client';

export const fetchUser = gql`
query ExampleQuery {
  postsList {
    id
    author {
      id
      name
      joinDate {
        year
        month
        day
        hour
        minute
        second
      }
      avatar
      pastPosts
    }
  }
}
`;




/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
