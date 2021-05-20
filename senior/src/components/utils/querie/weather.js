import {gql} from 'graphql-tag';

export const GET_WEATHER_CITY = gql`
  query  weatherCity($city:String!){
    weatherByCity(city: $city) {
        id
        name
        base
        coord {
            lon
            lat
        }
        main {
            temp
            feelsLike
        }
        weather {
            id
            main
            description
            icon
        }
    }
    }

`;


