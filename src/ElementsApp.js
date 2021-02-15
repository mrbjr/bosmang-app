import React, {Component} from 'react'
import ElementFormConstruc from './AppElements/ElementFormConstruc'
import ElementFormFloor from './AppElements/ElementFormFloor'
import ElementFormWall from './AppElements/ElementFormWall'

class ElementsApp extends Component {

    constructor(props){
        super(props);
        this.state ={
            materials: this.props.materialData,
            x: this.props.x,
            y: this.props.y,
            z1: this.props.z1,
            z2: this.props.z2,

            element_floor_material: this.props.element_floor_material,
            element_floor_thin: this.props.element_floor_thin,
            element_float_material: this.props.element_float_material,
            element_float_thin: this.props.element_float_thin,

            side_a: this.props.side_a,
            side_b: this.props.side_b,
            side_c: this.props.side_c,
            side_d: this.props.side_d,
            
            side_a_junction: this.props.side_a_junction,
            side_b_junction: this.props.side_b_junction,
            side_c_junction: this.props.side_c_junction,
            side_d_junction: this.props.side_d_junction,

            junctionsGroup: this.props.junctionsGroup,
            junctionsWalls: this.props.junctionsWalls,
        }
      }

    handleChange = (event) => {
        const {name, value} = event.target
      
        this.setState({
          [name]: value,
        })

        this.props.updateState([name],value)
      }
    
    render(){

        const {x,y,z1,z2,

            element_floor_material,
            element_floor_thin,
            element_float_material,
            element_float_thin,

            side_a, side_b, side_c, side_d,
            
            side_a_junction,
            side_b_junction,
            side_c_junction,
            side_d_junction,

            junctionsGroup,
            junctionsWalls,
        
        } = this.state

        const {materials} = this.state

        return (
            <div>
                    <ElementFormConstruc updateState={this.props.updateState} x={x} y={y} z1={z1} z2={z2} />

                    

                    <ElementFormWall materialData={materials} updateState={this.props.updateState}
                            update3level={this.props.update3level}
                            element_floor_material={element_floor_material}
                            element_floor_thin={element_floor_thin}
                            element_float_material={element_float_material}
                            element_float_thin={element_float_thin}

                                side_a={side_a} side_b={side_b} side_c={side_c} side_d={side_d}
                            
                                side_a_junction={side_a_junction}
                                side_b_junction={side_b_junction}
                                side_c_junction={side_c_junction}
                                side_d_junction={side_d_junction}
                                junctionsGroup={junctionsGroup}
                                junctionsWalls={junctionsWalls}
                    
                    />
            </div>
        )
    }

}

export default ElementsApp;