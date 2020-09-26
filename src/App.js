import React from 'react';
import './App.css';
import Navigation from './navigation/Navigation';
import { BrowserRouter, Route, Redirect, Switch, useLocation  } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import ItemDetails from './item-details/Item-details';
import UserList from './user-list/User-list';
import UserProfile from './user-profile/User-profile';
import { ItemForm } from './item-form/Item-form';
import AuthProtected from './auth/AuthProtected';
import { Wallet } from './wallet/Wallet';
import { Lists } from './main-list/Lists';

function App() {
  return <BrowserRouter>   
        <div className="containerWrapper" >
          <AuthProtected>
            <Switch>
              <Route
                path="/user-list"
                component={UserList}
              />
              <Route
                path="/item-form"
                component={ItemForm}
              />
              <Route
                path='/userProfile'
                component={UserProfile}
              />
              <Route
                path="/dashboard"
                component={Dashboard}
              />
              <Route
              path="/wallet"
              component={Wallet}
            />
              <Route
                path="/item-add"
                component={ItemForm}
              />
              <Route
                path="/items/:id"
                component={ItemDetails}
                exact
              />
              <Route
                path="/"
                component={Lists}
              />
              <Redirect to="/" />
            </Switch>
          </AuthProtected>
        
        </div>
        <Navigation />
      </BrowserRouter>;
}

export default App;
