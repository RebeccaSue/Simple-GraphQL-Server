import React from 'react';
import { Layout } from '../components';
import { gql } from '@apollo/client';

export const fetchAllUsers = gql`
  query fetchAllUsers {
    usersList {
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
      pastPosts {
        id
      }
    }
  }


`;

export const fetchAllPosts = gql `
  query fetchAllPosts {
    postsList {
      id
      author
      title
      body
      date {
        year
        month
        day
        hour
        minute
        second
      }
    }
  }
`



/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
