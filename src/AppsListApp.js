import React, {Component} from 'react'

class AppsDesign extends Component {
    
    render(){
        const iconName = "./_imge/_icons/" + this.props.AppIcon
        const {AppName} = this.props
        return (
            <div className="app_container" name={AppName} onClick={()=>this.props.selectApp(AppName)}>
                
                <div className="app_design"><img className="app_icon" src={iconName} alt={AppName}/></div>
                <div className="app_description"><label>{AppName}</label></div>
                
            </div>
        )
    }

}


class AppsList extends Component {

    constructor(props){
        super(props)
       this.state = {activeApp: 'default'}
    }

    render(){

        return (
            <div>
                <AppsDesign AppName="Materiais" AppIcon="materials.svg" selectApp={this.props.selectApp} />
                <AppsDesign AppName="Elementos" AppIcon="elements.svg" selectApp={this.props.selectApp} />
                <AppsDesign AppName="Resultados" AppIcon="results.svg" selectApp={this.props.selectApp} />
            </div>
        )
    }

}

export default AppsList;