import Home from './home/Home';
import HeaderComponent from './header/Header';
import FooterComponent from './footer/Footer';
import { Layout, Breadcrumb } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Activite from './activite/Activite';
import Contact from './contact/Contact';
const {Content } = Layout;

function Body() {
  return (
    <Layout  style={{margin: "auto",maxWidth: "1100px"}}>
      <HeaderComponent />
      <Content className="site-layout" style={{maxWidth: "1100px", padding: '0 50px', margin: "auto" }}>
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
