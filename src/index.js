import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './Components/store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from 'jwt-decode';
import * as Types from './Components/store/action/types'
import SetAuthToken from './utils/SetAuthToken';


  //user ke browser e save rakhar jonno 
  const token = localStorage.getItem('auth_token')
    if(token){
      let decode = jwtDecode(token)
      SetAuthToken(token)
      store.dispatch({
        type : Types.SET_USER,
        payload : {
          user : decode
        }
        
      })
    }

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
