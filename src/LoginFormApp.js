import React, {Component} from 'react'
import database from './scripts'

class LoginForm extends Component {

  constructor(props){
      super(props);
      this.state ={
        login: false,
        name: 'Insira seu email',
        email: '',
        passw: '',
        login_pass: 'minhoca46x4c54ex24c8e4sa',}
    }
  
    handleChangeEmail = event => {
        const {name, value} = event.target

        const searchName = database.user_database_js.filter((element) => {return element.email === value})

        searchName.push({name:'NO USER',passw:'minhoca46x4c54ex24c8e4sa'})

        this.setState({
          [name]: value,
          name: searchName[0].name,
          login_pass: searchName[0].passw,
        })

      }

      handleChangePassw = event => {
        const {name, value} = event.target

        this.setState({
          [name]: value,
        })

      }

    clearPassw = (event) => {
        const {name} = event.target

        this.setState({
            [name]: '',
        })
    } 

    loginCheck = (event) => {

      const {name} = event.target

      if (name === "login") {

                  if (this.state.login_pass === this.state.passw){

                    this.setState({
                        login: true,
                    })

                    document.documentElement.requestFullscreen()

                    setTimeout(() => {this.props.loginStateCheck(true)}, 1000);

                  } else {

                    this.setState({
                      login: false,
                    })

                    this.props.loginStateCheck(false);

                  }
        } else {

          this.setState({
            login: false,
          })

          this.props.loginStateCheck(false);

        }

    }
  
    render() {

        const { name, email, passw, login } = this.state
        if (login === false) {
      return (
            <div id="user_box" className="user_box">
                <div id="user_imge" className="user_imge"></div>
                <div className="input_div_box">
                  <form>
                    
                    <label id="user_name" className="user_name"><h4 className="user_name_txt">{name}</h4></label>

                    <input
                      type="text"
                      name="email"
                      id="input_box_email"
                      className="input_box"
                      placeholder="E-mail"
                      value={email}
                      onChange={this.handleChangeEmail} />
                    
                    <input
                      type="password"
                      name="passw"
                      id="input_box"
                      className="input_box"
                      placeholder="Senha"
                      value={passw}
                      onChange={this.handleChangePassw}
                      onClick={this.clearPassw} />

                    <img className="imge_bt" id="imge_bt" src="./_imge/_icons/login.svg" alt="addAlt" name="login" onClick={this.loginCheck} />
                  </form>
                </div>
              </div>
        )} else {
            return (
              <div id="user_box" className="user_box">
                <div id="user_imge" className="user_imge"></div>
                <div className="input_div_box">
                  <form>
                      <label id="user_name" className="user_name"><h4 className="user_name_txt">{name}</h4></label>
                      <label id="user_name" className="user_name"><h4 className="user_name_txt">Logado com sucesso!</h4></label>
                  </form>
                </div>
              </div>
            )
        }
      }
    }

export default LoginForm;