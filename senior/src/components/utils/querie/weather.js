import {gql} from 'graphql-tag';

export const GET_CITY = gql`
    {weatherByCity(name: "Lyon"){
        name,
        weather{
            temperature{
                actual
            }
        }
    }
    }
`;


