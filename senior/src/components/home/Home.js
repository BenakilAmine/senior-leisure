import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import {GetAllCity}  from '../utils/store/weather';
import "./index.css"
import { Row, Col, Input } from "antd"
import AdvancedSearchForm from './Search';
const { Search } = Input;

function Home() {
    const [city, setCity] = useState("")
    const { data, loading } = GetAllCity({city})
    if(loading) return <div>Loading...</div>
    const myCity = data?.weatherByCity.name.toLowerCase()
    console.log('data', myCity)
    const onSearch = (value) => {
        setCity(value)
    };
    console.log('onSearch', city)

    return (
        <>
            <Row align="middle" style={{ maxWidth: "1100px", margin: "auto"}}>
                <Col md={12} >
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380,textAlign: 'center'}}>
                        <img src={"./img/kingdom-394.svg"} alt="test"/>
                    </div>
                </Col>
                <Col md={12}>
                    <div className="site-layout-background"  style={{ padding: 24, minHeight: 380}}>
                        <h1>LES SÉNIORISSIMES</h1>
                        <p style={{ fontSize: 15}} >Lorem ipsum dolor, Quae magnam illum ullam veritatis deleniti accusantium, fuga ut, quaerat consequatur perferendis in explicabo ipsam, eius amet.</p>
                        <p style={{ fontSize: 12}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae magnam illum ullam veritatis deleniti accusantium, fuga ut, quaerat consequatur perferendis in explicabo ipsam, eius amet.atur perferendis in explicabo ipsam, eius amet atur perferendis in explicabo ipsam, eius amet</p>
                    </div>
                </Col>
            </Row>
            <div className="site-page-header-ghost-wrapper" align="center">
                <h1>RECHERCHER PAR VILLE</h1>
                <p style={{width:"50%"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab. Dolorem corporis assumenda neque sint sed libero beatae nam, ullam aliquid voluptates possimus esse commodi alias accusantium nemo, minus quo.</p>
                <Search rules={[{ required: true}]} placeholder="input search text" onSearch={onSearch} enterButton style={{width: "40%"}} />
            </div>
            <AdvancedSearchForm />
            <div>
                {city &&
                    <div>{myCity }</div>}

            </div>
        </>
    )
}

export default Home
