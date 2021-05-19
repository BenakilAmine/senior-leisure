import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_CITY } from '../utils/querie/weather';

// const GET_CITY = gql`
// {
//     getCityByName(name: "Lyon"){
//         name,
//         weather{
//             temperature{
//                 actual
//             }
//         }
//     }
// }
// `
function Home() {
    const { data } = useQuery(GET_CITY)
    console.log('data', data)
    return (
        <div>
            <h1>{data.getCityByName.name}</h1>
        </div>
    )
}

export default Home
