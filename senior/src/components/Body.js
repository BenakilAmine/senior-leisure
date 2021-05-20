import './App.less';
import Home from './home/Home';
import HeaderComponent from './header/Header';
import FooterComponent from './footer/Footer';
import { Layout } from 'antd';
import {
  Switch,
  Route,
} from "react-router-dom";
import Activite from './activite/Activite';
import Contact from './contact/Contact';
const {Content } = Layout;

function Body() {
  return (
    <Layout theme="light"  style={{margin: "auto"}}>
      <HeaderComponent />
      <Content className="site-layout">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/activite">
            <Activite/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Content>
        <FooterComponent/>
      </Layout>
  )
}

export default Body;
