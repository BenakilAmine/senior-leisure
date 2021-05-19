import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_CITY } from '../utils/querie/weather';
import { Button } from 'antd';
import { Layout, Breadcrumb } from 'antd';
const {Content } = Layout;
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
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            Accueil
        </div>
    )
}

export default Home
