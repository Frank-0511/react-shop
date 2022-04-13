import * as React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import '../styles/global.scss';

import Home from '@pages/Home';
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import NotFound from '@pages/NotFound';
import RecoveryPassword from '@containers/RecoveryPassword';

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='login' element={<Login />} />
          <Route
            exact
            path='recovery-password'
            element={<RecoveryPassword />}
          />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
        <div className='list'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='login'>Login</Link>
            </li>
            <li>
              <Link to='recovery-password'>RecoveryPassword</Link>
            </li>
            <li>
              <Link to='page3'>Page 3</Link>
            </li>
          </ul>
        </div>
      </Router>
    </Layout>
  );
};

export default App;
