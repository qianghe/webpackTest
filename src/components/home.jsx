import React, { Componet } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable';
import Content from '@src/components/Content';
import Loading from '@src/components/Common/Loading';
import './index.css';

const LoadableNextPage = Loadable({
  loader: () => import('@src/components/NextPage'),
  loading: Loading,
});
const LoadablePrePage = Loadable({
  loader: () => import('@src/components/prePage'),
  loading: Loading,
});

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
