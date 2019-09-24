import React from 'react';
import './App.css';
import './bootstrap.min.css'
import { Route } from 'react-router-dom';

import Header from './components/Header'
import RegisterForm from './components/RegisterForm';
import CreateItem from './components/CreateItem';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import ItemList from './components/ItemList';

function App() {
  return (
      <div className="App">
        {/* <Header /> */}
        <Route exact path='/' render={props => <LoginForm {...props}/>} />
        <Route path ='/register-form' component={RegisterForm} />
        {/*<CreateItem />*/}
        <PrivateRoute path='home/profilepage' component={'home/profilepage'} />
        {/*<ItemList />*/}
      </div>

  );
}

export default App;
