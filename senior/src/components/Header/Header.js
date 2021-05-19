import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./header.css"
import { Layout, Menu } from 'antd';
const { Header  } = Layout;
function HeaderComponent() {
    return (
        <Header theme="light" style={{maxWidth: "1100px", zIndex: 1 }}>
            <div className="logo" />
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">Acceuil</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/activite">Activités</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/contact">Contact</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderComponent
