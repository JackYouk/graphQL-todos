import {gql} from '@apollo/client';

export const FETCH_USERS_QUERY = gql`
    query Users {
        users {
            _id
            username
            email
        }
    }
`;