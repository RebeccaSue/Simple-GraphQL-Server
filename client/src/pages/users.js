import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';

export const USERS = gql`
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

export const POSTS = gql `
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
 * the function Users return the information of all of the users 
 */
const Users = () => {
  const {loading, error, data} = useQuery(USERS);

  if (loading) return 'Loading users...'
  if (error) return `ERROR: Users loading is failed! ${error.message}`

  return <Layout grid> {

    JSON.stringify(data)
  }
  </Layout>;
};





export default Users;