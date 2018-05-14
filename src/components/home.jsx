import React, { Componet } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Loadable from 'react-loadable';
import asyncComponent from '@src/components/Common/asyncComponent'
import Content from '@src/components/Content';
import './index.css';

const LoadablePrePage = asyncComponent(() => import('@src/components/PrePage'));
const LoadableNextPage = asyncComponent(() => import('@src/components/NextPage'));

const menus = [{
  name: 'content',
  component: Content,
}, {
  name: 'pre',
  component: LoadablePrePage,
}, {
  name: 'next',
  component: LoadableNextPage,
}];

const Home = () => (
  <Router>
    <div>
      <h1>React Components</h1>
      <div className="content">
        <ul>
          {
            menus.map(({ name }, index) => (
              <li key={`link_${name}`}>
                <span>{index + 1}.&nbsp;</span><Link to={`/${name}`}>{name}</Link>
              </li>
            ))
          }
        </ul>
        {
          menus.map(({ name, component }, index) => (
            <Route key={`route_${name}`} path={`/${name}`} component={component} />
          ))
        }
      </div>
    </div>
  </Router>
);

export default Home;
