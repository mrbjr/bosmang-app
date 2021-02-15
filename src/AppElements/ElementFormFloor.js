import React, {Component} from 'react'

class ElementFormFloor extends Component {

    constructor(props){
        super(props);
        this.state ={
            materials: this.props.materialData,
            element_floor_material: this.props.element_floor_material,
            element_floor_thin: this.props.element_floor_thin,
            element_float_material: this.props.element_float_material,
            element_float_thin: this.props.element_float_thin,
        }
      }

      handleChange = (event) => {
        const {name, type, value} = event.target

        const {materials} = this.state

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

    render(){

        const {element_floor_thin,element_float_thin,element_floor_material,element_float_material} = this.state

        const heavyMaterials = this.props.materialData.filter(element =>(element.categ === 'heavy'))

        const floatMaterials = this.props.materialData.filter(element =>(element.categ === 'float'))

        const optionsHeavy = heavyMaterials.map((row, index) => {
            return (
            <option value={row.ide} key={index}>{row.name}</option>
            )
        })

        const optionsFloat = floatMaterials.map((row, index) => {
            return (
                <option value={row.ide} key={index}>{row.name}</option>
            )
        })

        return(


            <table className="table_list">
                    <thead>
                        <tr className="table_header_row"><th></th><th>Material</th><th>Espessura (mm)</th></tr></thead>
                        <tbody>

                            <tr className="table_row">
                                <td className="table_first_colun">Piso</td>
                                <td className="table_colun">
                                <select name="element_floor_material" className="material_list_input" onChange = {this.handleChange} value={element_floor_material.ide}><option value="" selected disabled>Selecione</option>{optionsHeavy}</select>
                                </td>
                                <td className="table_colun"><input
                                    type="number"
                                    name="element_floor_thin"
                                    id="element_floor_thin"
                                    className="material_list_input"
                                    placeholder="(mm)"
                                    value={element_floor_thin}
                                    onChange = {this.handleChange}
                                    /></td>
                            </tr>

                            <tr className="table_row">
                                <td className="table_first_colun">Piso flutuante (adicionar botão para desabilitar)</td>
                                <td className="table_colun">
                                    <select name="element_float_material" className="material_list_input" onChange = {this.handleChange} value={element_float_material.ide}><option value="" selected disabled>Selecione</option>{optionsFloat}</select>
                                </td>
                                <td className="table_colun"><input
                                    type="number"
                                    name="element_float_thin"
                                    id="element_float_thin"
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


        )
    }

}

export default ElementFormFloor