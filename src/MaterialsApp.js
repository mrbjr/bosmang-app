import React, {Component} from 'react'

class MaterialsListHeaderHeavy extends Component {

    render(){
        return(
            <thead>
            <tr className="table_header_row">
                <th className="table_first_colun">Descrição</th>
                <th className="table_second_colun">Marca</th>
                <th>ρ (kg/m³)</th>
                <th>C<sub>L</sub> (m/s)</th>
                <th>η<sub>i</sub></th>
                <th></th>
            </tr>
            </thead>
        )
    }

}

class MaterialsListHeaderFloat extends Component {

    render(){
        return(
            <thead>
            <tr className="table_header_row">
                <th className="table_first_colun">Descrição</th>
                <th className="table_second_colun">Marca</th>
                <th>ρ (kg/m³)</th>
                <th>s' (N/m²)</th>
                <th>Tipo</th>
                <th></th>
            </tr>
            </thead>
        )
    }

}

class MaterialsListBodyHeavy extends Component {

    render(){

        const {materialData, removeMaterial} = this.props

        const heavyMaterials = materialData.filter(element =>(element.categ === 'heavy'))
        
        const rows = heavyMaterials.map((row, index) => {
            return (
              <tr key={index} className="table_row" name={index}>
                <td className="table_first_colun">{row.name}</td>
                <td className="table_second_colun">{row.brand}</td>
                <td className="table_colun">{row.density}</td>
                <td className="table_colun">{row.wave}</td>
                <td className="table_colun">{row.loss}</td>
                <td className="table_colun"><img className="imge_act" src="./_imge/_icons/delete_red.svg" onClick={() => removeMaterial(index,row.categ)} alt="Remover material" /></td>
              </tr>
            )
          })

        return(<tbody>{rows}</tbody>)
        

    }

}

class MaterialsListBodyFloat extends Component {

    render(){

        const {materialData, removeMaterial} = this.props

        const floatMaterials = materialData.filter(element =>(element.categ === 'float'))
        
        const rows = floatMaterials.map((row, index) => {
            return (
              <tr key={index} className="table_row" name={index}>
                <td className="table_first_colun">{row.name}</td>
                <td className="table_second_colun">{row.brand}</td>
                <td className="table_colun">{row.density}</td>
                <td className="table_colun">{row.ym}</td>
                <td className="table_colun">{row.tp}</td>
                <td className="table_colun"><img className="imge_act" src="./_imge/_icons/delete_red.svg" onClick={() => removeMaterial(index,row.categ)}  alt="Remover material" /></td>
              </tr>
            )
          })

        return(<tbody>{rows}</tbody>)
        

    }

}

class MaterialFormHeavy extends Component{

    initialState = {
        categ: 'heavy',
		name: '',
		brand: '',
		density: '',
		ym: undefined,
		pm: undefined,
		wave: '',
        loss: '',
        ide: '',
    }
    
    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
      
        this.setState({
          [name]: value,
        })
      }
    
    submitForm = () => {

        this.state.ide = this.props.materialData.length + 1

        this.props.handleSubmit(this.state)
        
        this.setState(this.initialState)

        
      }

    render(){

        

        const {categ,name,brand,density,ym,	pm,	wave,loss} = this.state
        
        return(
            <form>
                <table>
                    <tbody>
                        <tr id="input_material" className="table_row">
                            <td className="table_first_colun"><input
                                type="text"
                                name="name"
                                id="material_name"
                                className="material_list_input"
                                placeholder="Descrição"
                                value={name}
                                onChange = {this.handleChange}
                                /></td>
                            
                            <td className="table_second_colun"><input
                                type="text"
                                name="brand"
                                id="material_brand"
                                className="material_list_input"
                                placeholder="Marca"
                                value={brand}
                                onChange = {this.handleChange} 
                                /></td>

                            <td className="table_colun"><input
                                type="number"
                                name="density"
                                id="material_density"
                                className="material_list_input"
                                placeholder="ρ (kg/m³)"
                                value={density}
                                onChange = {this.handleChange} 
                                /></td>
                                
                            <td className="table_colun"><input
                                type="number"
                                name="wave"
                                id="material_wave"
                                className="material_list_input"
                                placeholder="CL (m/s)"
                                value={wave}
                                onChange = {this.handleChange}
                                /></td>

                            <td className="table_colun"><input
                                type="number"
                                name="loss"
                                id="material_loss"
                                className="material_list_input"
                                placeholder="ηi"
                                value={loss}
                                onChange = {this.handleChange}
                                /></td>

                            <td className="table_colun">
                                <img src="./_imge/_icons/add_green.svg" className="imge_act" onClick = {this.submitForm} alt="Remover material" />
                            </td>
                        </tr>
                    </tbody>
                </table>    
            </form>
        )
    }
}

class MaterialFormFloat extends Component{

    initialState = {
        categ: 'float',
		name: '',
		brand: '',
		density: '',
		ym: '',
        tp: '',
      }
    
    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
      
        this.setState({
          [name]: value,
        })
      }
    
    submitForm = () => {

        this.state.ide = this.props.materialData.length + 1

        this.props.handleSubmit(this.state)

        this.setState(this.initialState)
      }

    render(){

        const {categ,name,brand,density,ym,	tp} = this.state
        
        return(
            <form>
                <table>
                    <tbody>
                        <tr id="input_material" className="table_row">
                            <td className="table_first_colun"><input
                                type="text"
                                name="name"
                                id="material_name"
                                className="material_list_input"
                                placeholder="Descrição"
                                value={name}
                                onChange = {this.handleChange}
                                /></td>
                            
                            <td className="table_second_colun"><input
                                type="text"
                                name="brand"
                                id="material_brand"
                                className="material_list_input"
                                placeholder="Marca"
                                value={brand}
                                onChange = {this.handleChange} 
                                /></td>

                            <td className="table_colun"><input
                                type="number"
                                name="density"
                                id="material_density"
                                className="material_list_input"
                                placeholder="ρ (kg/m³)"
                                value={density}
                                onChange = {this.handleChange} 
                                /></td>
                                
                            <td className="table_colun"><input
                                type="number"
                                name="ym"
                                id="material_ym"
                                className="material_list_input"
                                placeholder="s' (N/m²)"
                                value={ym}
                                onChange = {this.handleChange}
                                /></td>

                            <td className="table_colun"><select
                                type="select"
                                name="tp"
                                id="material_tp"
                                className="material_list_input"
                                onChange = {this.handleChange}>
                                    <option disabled selected>Selecione</option>
                                    <option value='sand'>Arenoso/cimentício ou cálcio-sulfato</option>
                                    <option value='asphalt'>Asfaltico/Seco</option>
                                </select></td>

                            <td className="table_colun">
                                <img src="./_imge/_icons/add_green.svg" className="imge_act" onClick = {this.submitForm} alt="Novo material"/>
                            </td>
                        </tr>
                    </tbody>
                </table>    
            </form>
        )
    }
}

class MaterialsList extends Component {

    constructor(props){
        super(props);
        this.state ={
          materials: this.props.materialData}
      }

    //  checkCookies={this.checkCookies} setCookie={this.setCookie}

    removeMaterial = (index,categ) => {
        const {materials} = this.state

        const dataFilter = materials.filter(element =>(element.categ === categ))

        const dataPush =  materials.filter(element =>(element.categ !== categ))

        const dataResult = dataFilter.filter((character, i) => {
            return i !== index
          }).concat(dataPush)
          
        this.setState({
            materials: dataResult,
        })

        this.props.updateState('materials',dataResult)

     //   this.props.setCookie('database_materials','[{obj1},{obj2}]')
        
      }
      
    handleSubmit = (newMaterial) => {

        this.setState({materials: [...this.state.materials, newMaterial]})

        
       this.props.updateState('materials',[...this.state.materials, newMaterial])
      }

    render(){
        return (
            <div>
                <div className="table_title">Materiais Rígidos</div>
                <table className="table_list">
                    <MaterialsListHeaderHeavy />
                    <MaterialsListBodyHeavy materialData={this.state.materials} removeMaterial={this.removeMaterial}/>
                </table>
                <div>
                <MaterialFormHeavy handleSubmit={this.handleSubmit} materialData={this.state.materials}/>
                </div>


                <div className="table_title">Materiais Resilientes</div>
                <table className="table_list">
                    <MaterialsListHeaderFloat />
                    <MaterialsListBodyFloat materialData={this.state.materials} removeMaterial={this.removeMaterial}/>
                </table>
                <div>
                <MaterialFormFloat handleSubmit={this.handleSubmit} materialData={this.state.materials}/>
                </div>

                <label className="minilabel">Descrição: descrição do material | Marca: marca do material | ρ: denidade do material (kg/m³) | C<sub>L</sub>: velocidade de propagação da onda (m/s) | η<sub>i</sub>: perda interna do material | E: módulo de elasticidade (N/m²) | υ: coeficiente de poisson </label>
            </div>
        )
    }

}

export default MaterialsList;