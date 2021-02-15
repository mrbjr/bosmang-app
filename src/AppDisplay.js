import React, {Component} from 'react'
import database from './scripts'
import MaterialsList from './MaterialsApp'
import ElementsApp from './ElementsApp'
import ResultsApp from './ResultsApp'

class AppDisplay extends Component {
    constructor(props){
        super(props);

            this.state = {
                materials: database.materials,
                x: 0,
                y: 0,
                z1: 0,
                z2: 0,

                element_floor_material: {ide: 0},
                element_floor_thin: 0,
                element_float_material: {
                    ide: 0,
                    density: 0,
                    ym: 0,
                    tp: 'sand'},
                element_float_thin: 0,

                side_a: {
                    psup: {
                        material: {ide: 0},
                        thin: 0,
                    },
                    pinf:{
                        material: 0,
                        thin: 0,
                        clone: true,
                    },
                    padc:{ //piso adicional (qundo junção for X)
                        material: 0,
                        thin: 0,
                        clone: true,
                    },
                   },

                side_b: {
                    psup: {
                        material: {ide: 0},
                        thin: 0,
                    },
                    pinf:{
                        material: 0,
                        thin: 0,
                        clone: true,
                    },
                    padc:{ //piso adicional (qundo junção for X)
                        material: 0,
                        thin: 0,
                        clone: true,
                    },
                   },

                side_c: {
                    psup: {
                        material: {ide: 0},
                        thin: 0,
                    },
                    pinf:{
                        material: 0,
                        thin: 0,
                        clone: true,
                    },
                    padc:{ //piso adicional (qundo junção for X)
                        material: 0,
                        thin: 0,
                        clone: true,
                    },
                   },

                side_d: {
                    psup: {
                        material: {ide: 0},
                        thin: 0,
                    },
                    pinf:{
                        material: 0,
                        thin: 0,
                        clone: true,
                    },
                    padc:{ //piso adicional (qundo junção for X)
                        material: 0,
                        thin: 0,
                        clone: true,
                    },
                   },

                side_a_junction: 0,
                side_b_junction: 0,
                side_c_junction: 0,
                side_d_junction: 0,

                junctionsGroup: [undefined,undefined,undefined,undefined],
                junctionsWalls: [undefined,undefined,undefined,undefined],
            }
            
        }

    updateState = (stateName,data) => {
        this.setState({
            [stateName]: data,
        })
    }

    render(){

        const {materials,
                x,y,z1,z2,
                element_floor_material,element_floor_thin,
                element_float_material,element_float_thin,

                side_a, side_b, side_c, side_d,
                
                side_a_junction,
                side_b_junction,
                side_c_junction,
                side_d_junction,

                junctionsGroup,
                junctionsWalls,

            } = this.state


        const activeApp = this.props.activeApp

        switch(activeApp){
            case 'Materiais':
                return <MaterialsList materialData={materials} updateState={this.updateState}/>

            case 'Elementos':
                return <ElementsApp materialData={materials}
                                    updateState={this.updateState}
                                    update3level={this.update3level}
                                    x={x} y={y} z1={z1} z2={z2}
                                    
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

            case 'Junções':
                return 'junctions'

            case 'Resultados':
                return <ResultsApp materialData={materials}
                updateState={this.updateState}
                x={x} y={y} z1={z1} z2={z2}
                
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

            default:
                return 'defaut'
        }

    }

}

export default AppDisplay;