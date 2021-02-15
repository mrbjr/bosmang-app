import React, {Component} from 'react'

class ElementFormWall extends Component {

    constructor(props){
        super(props);
        this.state ={
            side: this.props.side,
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
        const {name, type, value} = event.target
        const {materials} = this.state

        const side = 'side_' + name.slice(5,6)
        const part =  name.slice(7,11)
        const statefinal = name.slice(12,20)

        if ((name.slice(0,4) === 'side') && (name.slice(7,20) === 'junction')){
            this.setState({
                [name]:value,
            })

            this.props.updateState(name,value)

        }
        
        if ((name.slice(0,4) === 'side') && (name.slice(7,20) !== 'junction')){
            if (type === 'select-one'){
                const materialResult = materials.filter(element =>(element.ide === Number(value)))[0]
                this.state[side][part]['material'] = materialResult||value  
                this.setState({[side]: this.state[side]})  
            } else {
                this.state[side][part]['thin'] = value  
                this.setState({[side]: this.state[side]})
            }
        }
        
        if ((name.slice(0,4) !== 'side') && (name.slice(7,20) !== 'junction')){
        
                if (type === 'select-one'){
                    const materialResult = materials.filter(element =>(element.ide === Number(value)))[0]
                    this.setState({
                        [name]: materialResult||value,
                    })

                    this.props.updateState([name],materialResult||value)  

                } else {

                    this.setState({
                        [name]: value,
                    })

                    this.props.updateState([name],value)
                }
        }

        if((name === 'element_floor_thin')||(name === 'element_floor_material')){

            if (this.state['side_a']['padc']['clone'] === true) {
                if (name === 'element_floor_thin'){
                    this.state['side_a']['padc']['thin'] = value
                    this.setState({side_a: this.state.side_a})
                }
                if (name === 'element_floor_material'){
                    const materialResult = materials.filter(element =>(element.ide === Number(value)))[0]
                    this.state['side_a']['padc']['material'] = materialResult
                    this.setState({side_a: this.state.side_a})
                }  
            }
        
            if (this.state['side_b']['padc']['clone'] === true) {
                if (name === 'element_floor_thin'){
                    this.state['side_b']['padc']['thin'] = value
                    this.setState({side_b: this.state.side_b})
                }
                if (name === 'element_floor_material'){
                    const materialResult = materials.filter(element =>(element.ide === Number(value)))[0]
                    this.state['side_b']['padc']['material'] = materialResult
                    this.setState({side_b: this.state.side_b})
                }     
            }
        
            if (this.state['side_c']['padc']['clone'] === true) {
                if (name === 'element_floor_thin'){
                    this.state['side_c']['padc']['thin'] = value
                    this.setState({side_c: this.state.side_c})
        
                }
                if (name === 'element_floor_material'){
                    const materialResult = materials.filter(element =>(element.ide === Number(value)))[0]
                    this.state['side_c']['padc']['material'] = materialResult
                    this.setState({side_c: this.state.side_c})
                } 
            }
        
            if (this.state['side_d']['padc']['clone'] === true) {
                if (name === 'element_floor_thin'){
                    this.state['side_d']['padc']['thin'] = value
                    this.setState({side_d: this.state.side_d})
                }
                if (name === 'element_floor_material'){
                    const materialResult = materials.filter(element =>(element.ide === Number(value)))[0]
                    this.state['side_d']['padc']['material'] = materialResult
                    this.setState({side_d: this.state.side_d})
                }  
            }
        
        }

        if ((name.slice(0,4) === 'side') && (name.slice(7,20) !== 'junction') && (part !== 'padc')){
            
            if (this.state[side]['pinf']['clone'] === true){
                if (statefinal === 'material'){
                    const materialResult = materials.filter(element =>(element.ide === Number(value)))[0]
                    this.state[side]['pinf']['material'] = materialResult
                    this.setState({[side]: this.state[side]})             
                }
                if (statefinal === 'thin'){
                    this.state[side]['pinf']['thin'] = value
                    this.setState({[side]: this.state[side]})            
                    
                }
            }
        }

      }

      junctionsGroupSolve = (index,e)=>{

        const {junctionsGroup} = this.state

        const endGroup = junctionsGroup

        const {value} = e.target

        endGroup[index.index] = value

        this.setState({
            junctionsGroup: endGroup,
        })

        this.props.updateState('junctionsGroup',endGroup)

        this.junctionsWallsSolve(endGroup)

      }

      junctionsWallsSolve = (junctionsGroup) => {

        const group01 = junctionsGroup[0] + junctionsGroup[1]
        const group02 = junctionsGroup[1] + junctionsGroup[2]
        const group03 = junctionsGroup[2] + junctionsGroup[3]
        const group04 = junctionsGroup[3] + junctionsGroup[0]

        const wallsGroup = [group01,group02,group03,group04]

        const endWalls = this.state.junctionsWalls

        for (var i=0;i<wallsGroup.length;i++){
            switch (wallsGroup[i]){
                case ('XX'):
                    endWalls[i] = 'X'
                break
                case ('XT'):
                    endWalls[i] = 'T'
                break
                case ('TX'):
                    endWalls[i] = 'T2'
                break
                case ('TT'):
                    endWalls[i] = 'L'
                break
                default:
                    endWalls[i] = ''
            }

            this.setState({
                junctionsWalls: endWalls
            })
        }

        this.props.updateState('junctionsWalls',endWalls)

      }

      cloneElements = (event) => {
          const {name} = event.target

            const side = 'side_' + name.slice(5,6)
            const part =  name.slice(7,11)
            const value = this.state[side][part]['clone']        

          if (value === false){

              if (part ==='padc'){
                  var floor_material = this.state.element_floor_material
                  var floor_thin = this.state.element_floor_thin
                  this.state[side]['padc']['material'] = floor_material
                  this.state[side]['padc']['thin'] = floor_thin
                  this.state[side]['padc']['clone'] = !value
                  this.setState({[side]: this.state[side]})
              }

              if (part === 'pinf'){
                    var psup_material = this.state[side]['psup']['material']
                    var psup_thin = this.state[side]['psup']['thin']
                    this.state[side]['pinf']['material'] = psup_material
                    this.state[side]['pinf']['thin'] = psup_thin
                  this.state[side]['pinf']['clone'] = !value
                  this.setState({[side]: this.state[side]})
            }
        
            } else {
                this.state[side][part]['clone'] = !value
                this.setState({[side]: this.state[side]})
            }
      }

    render(){

            const sidearray = ['a','b','c','d']

            const {element_floor_thin,element_float_thin,element_floor_material,element_float_material} = this.state

            const heavyMaterials = this.props.materialData.filter(element =>(element.categ === 'heavy'))
            const floatMaterials = this.props.materialData.filter(element =>(element.categ === 'float'))

            const optionsHeavy = heavyMaterials.map((row, index) => {return (<option value={row.ide} key={index}>{row.name}</option>)})
            const optionsFloat = floatMaterials.map((row, index) => {return (<option value={row.ide} key={index}>{row.name}</option>)})

            const floorForm = 
                
                    <table className="table_list">
                    <thead>
                        <tr className="table_header_row"><th></th><th>Material</th><th>Espessura (mm)</th></tr></thead>
                        <tbody>

                            <tr className="table_row">
                                <td className="table_first_colun">Piso</td>
                                <td className="table_colun">
                                <select name="element_floor_material" className="material_list_input" onChange = {this.handleChange} value={element_floor_material.ide}><option value='0' selected disabled>Selecione</option>{optionsHeavy}</select>
                                </td>
                                <td className="table_colun"><input
                                    type="number"
                                    name="element_floor_thin"
                                    className="material_list_input"
                                    placeholder="(mm)"
                                    value={element_floor_thin}
                                    onChange = {this.handleChange}
                                    /></td>
                            </tr>

                            <tr className="table_row">
                                <td className="table_first_colun">Piso flutuante (adicionar botão para desabilitar)</td>
                                <td className="table_colun">
                                    <select name="element_float_material" className="material_list_input" onChange = {this.handleChange} value={element_float_material.ide}><option value='0' selected disabled>Selecione</option>{optionsFloat}</select>
                                </td>
                                <td className="table_colun"><input
                                    type="number"
                                    name="element_float_thin"
                                    className="material_list_input"
                                    placeholder="(mm)"
                                    value={element_float_thin}
                                    onChange = {this.handleChange}
                                    /></td>
                            </tr>

                            <tr className="table_row">
                                <td className="table_first_colun">Outra camada</td>
                                <td className="table_colun"> FORROS E AFINS</td>
                                <td className="table_colun"> ADICONAR NO FUTURO</td>
                            </tr>

                        </tbody>
                </table>
                
            const eachWallSide = sidearray.map((element, index) =>{
                    
                        const side_name = element.toUpperCase()
                        const side_x = "side_" + element
                        const side_x_junction = side_x+'_junction' 
                        const side_x_psup_material =  side_x+"_psup_material"
                        const side_x_pinf_material =  side_x + "_pinf_material"
                        const side_x_padc_material =  side_x + "_padc_material"
                        const side_x_psup_thin =  side_x + "_psup_thin"
                        const side_x_pinf_thin =  side_x + "_pinf_thin"
                        const side_x_padc_thin =  side_x + "_padc_thin"
                        const side_x_pinf_clone =  side_x + "_pinf_clone"
                        const side_x_padc_clone =  side_x + "_padc_clone"

                        const padc_select = () => {
                            if (this.state[side_x]['padc']['clone'] === true){
                                return (
                                    <tr className="table_row">
                                    <td className="table_first_colun">
                                        Piso adjacente
                                         <img src="./_imge/_icons/same_gray.svg" alt="Clonar" className="imge_mini imge_clone" name={side_x_padc_clone} onClick ={e =>{this.cloneElements(e)}}/>
                                    </td>
                                    <td className="table_colun">
                                    <select name={side_x_padc_material} className="material_list_input" value={this.state[side_x]['padc']['material'].ide} disabled><option value='0' selected disabled>Selecione</option>{optionsHeavy}</select>
                                    </td>
                                    <td className="table_colun"><input
                                        type="number"
                                        name={side_x_padc_thin}
                                        className="material_list_input"
                                        placeholder="(mm)"
                                        value={this.state[side_x]['padc']['thin']}
                                        disabled
                                        /></td>
                                    </tr>
                                )} else{
                                return (
                                    <tr className="table_row">
                                    <td className="table_first_colun">
                                        Piso adjacente
                                        <img src="./_imge/_icons/same_black.svg" alt="Clonar" className="imge_mini imge_clone" name={side_x_padc_clone} onClick ={e =>{this.cloneElements(e)}}/>
                                    </td>
                                    <td className="table_colun">
                                    <select name={side_x_padc_material} className="material_list_input" value={this.state[side_x]['padc']['material'].ide} onChange = {this.handleChange}><option value='0' selected disabled>Selecione</option>{optionsHeavy}</select>
                                    </td>
                                    <td className="table_colun"><input
                                        type="number"
                                        name={side_x_padc_thin}
                                        className="material_list_input"
                                        placeholder="(mm)"
                                        value={this.state[side_x]['padc']['thin']}
                                        onChange = {this.handleChange}
                                        /></td>
                                    </tr>
                                )
                            }
                        } 

                        const padcDo = () => {if (this.state[side_x_junction] === 'X'){
                            return (

                
                                padc_select()
                        

                            )}
                        } 

                        const pinfDo = () => {
                            if (this.state[side_x]['pinf']['clone'] === true){
                                return(
                                <tr className="table_row">
                                <td className="table_first_colun">
                                    Inferior
                                    <img src="./_imge/_icons/same_gray.svg" alt="Clonar" className="imge_mini imge_clone" name={side_x_pinf_clone} onClick ={e =>{this.cloneElements(e)}}/>
                                </td>
                                <td className="table_colun">
                                    <select name={side_x_pinf_material} className="material_list_input" value={this.state[side_x]['pinf']['material'].ide} disabled><option value='0' selected disabled>Selecione</option>{optionsHeavy}</select>
                                </td>
                                <td className="table_colun"><input
                                    type="number"
                                    name={side_x_pinf_thin}
                                    className="material_list_input"
                                    placeholder="(mm)"
                                    value={this.state[side_x]['pinf']['thin']}
                                    disabled
                                    /></td>
                                </tr>)
                                } else { 
                                    return(
                                    <tr className="table_row">
                                    <td className="table_first_colun">
                                        Inferior
                                        <img src="./_imge/_icons/same_black.svg" alt="Clonar" className="imge_mini imge_clone" name={side_x_pinf_clone} onClick ={e =>{this.cloneElements(e)}}/>
                                    </td>
                                    <td className="table_colun">
                                        <select name={side_x_pinf_material} className="material_list_input" onChange = {this.handleChange} value={this.state[side_x]['pinf']['material'].ide}><option value='0' selected disabled>Selecione</option>{optionsHeavy}</select>
                                    </td>
                                    <td className="table_colun"><input
                                        type="number"
                                        name={side_x_pinf_thin}
                                        className="material_list_input"
                                        placeholder="(mm)"
                                        value={this.state[side_x]['pinf']['thin']}
                                        onChange = {this.handleChange}
                                        /></td>
                                </tr>)
                            }
                            
                        } 

                    return(

                       <table className="table_list" key={index}>
                        <thead>
                            <tr className="table_header_row"><th className="table_first_colun">Lado {side_name} [{index}]</th><th>Material</th><th>Espessura (mm)</th></tr>
                        </thead>

                        <tbody>
                            <tr className="table_row">
                                <td className="table_first_colun">Junção</td>
                                <td className="table_colun">
                                <select name={side_x_junction} className="material_list_input" onChange = {e =>{this.junctionsGroupSolve({index},e);this.handleChange(e)}} value={this.state[side_x_junction]}>
                                    <option value='0' selected disabled>Selecione</option>
                                    <option value="X">X</option>
                                    <option value="T">T</option>
                                    <option value="L">L</option>
                                </select>
                                </td>
                                <td className="table_colun"></td>
                            </tr>

                            <tr className="table_row">
                                <td className="table_first_colun">Superior</td>
                                <td className="table_colun">
                                <select name={side_x_psup_material} className="material_list_input" onChange = {this.handleChange} value={this.state[side_x]['psup']['material'].ide}><option value='0' selected disabled>Selecione</option>{optionsHeavy}</select>
                                </td>
                                <td className="table_colun"><input
                                    type="number"
                                    name={side_x_psup_thin}
                                    className="material_list_input"
                                    placeholder="(mm)"
                                    value={this.state[side_x]['psup']['thin']}
                                    onChange = {this.handleChange}
                                    /></td>
                            </tr>

                           
                            {pinfDo()}

                            {padcDo()}  
                           

                        </tbody>
                        </table> 
                        )
                        })
                        
        return (<div>{floorForm}
        {eachWallSide}</div>)
            
    

    }
    
            
}

export default ElementFormWall