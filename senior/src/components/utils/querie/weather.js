import {gql} from 'graphql-tag';

export const GET_CITY = gql`
    {getCityByName(name: "Lyon"){
        name,
        weather{
            temperature{
                actual
            }
        }
    }
    }
`;


