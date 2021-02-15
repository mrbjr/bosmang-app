import React, {Component} from 'react'
import './App.css'
import database from './scripts'
import LoginForm from './LoginFormApp'
import LogoutButton from './LogoutApp'
import AppsList from './AppsListApp'
import AppDisplay from './AppDisplay'


class BosmangApp extends Component {

 constructor(props){
   super(props)
   this.state = {login: this.checkCookies('loginState')||'false'}
 }

  checkCookies = (name) => {
      let cookies = document.cookie;
      let prefix = name + "=";
      let begin = cookies.indexOf("; " + prefix);
  
      if (begin === -1) {
  
          begin = cookies.indexOf(prefix);
          
          if (begin !== 0) {
              return null;
          }
  
      } else {
          begin += 2;
      }
  
      let end = cookies.indexOf(";", begin);
      
      if (end === -1) {
          end = cookies.length;                        
      }
  
      return unescape(cookies.substring(begin + prefix.length, end));
    
  }

  setCookie = (name, value, duration) => {
    let cookie = name + "=" + escape(value) + "; expires=Thu, 31 Dec 2050 12:00:00 UTC";

    document.cookie = cookie;
  }  

  setLoginState = (LoginState) => {

    this.setState({login: LoginState})

    this.setCookie('loginState',LoginState)

  }

  selectApp = (appName) =>{
    this.setState({
        activeApp: appName,
    })
}

  render (){

    const user_database = database.user_database_js

    const {login,activeApp} = this.state

    if (login === ('false')){

      return(	<LoginForm userDatabase = {user_database} loginStateCheck={this.setLoginState} /> )

    } else {

      return(
        <div>
          <div>
            <div name="botão"><LogoutButton loginStateCheck={this.setLoginState} /></div>
            <div name="lista inteira" className="app_list"><AppsList selectApp={this.selectApp} /></div>
            <div name="materials" className="app_open"><AppDisplay activeApp={activeApp} /></div>
          </div>
        </div>
        )

    }
  }
}

export default BosmangApp;


