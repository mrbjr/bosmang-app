import React, {Component} from 'react'

class LogoutButton extends Component {

    loginOut = () => {

        this.props.loginStateCheck('false');

    }

    closeFullScreen = () =>{
        alert('ainda nao ativo')
    }

    render(){
        return (<div>
        <img className="imge_bt left_align" id="imge_bt" src="./_imge/_icons/power.svg" width="25px" alt="addAlt" name="logout" onClick={this.loginOut} /><br></br>
        
        </div>
        )
    }

}

export default LogoutButton;

//<img className="imge_bt left_align" id="imge_bt" src="./_imge/_icons/ratio.svg" width="25px" alt="addAlt" name="logout" onClick={this.closeFullScreen} />