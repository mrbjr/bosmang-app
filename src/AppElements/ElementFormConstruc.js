import React, {Component} from 'react'

class ElementFormConstruc extends Component {

    constructor(props){
        super(props);
        this.state ={
            x: this.props.x,
            y: this.props.y,
            z1: this.props.z1,
            z2: this.props.z2,
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

        const {x,y,z1,z2} = this.state

        return(
            <table className="table_list"><thead>
                <tr className="table_header_row">
                    <th></th>
                    <th>Largura X (m)</th>
                    <th>Comprimento Y (m)</th>
                    <th>Altura superior (m)</th>
                    <th>Altura inferior (m)</th>
                </tr>
                </thead>
                <tbody>
                <tr className="table_row">
                    <td className="table_first_colun">Construção</td>
                    <td className="table_colun"><input
                                    type="number"
                                    name="x"
                                    id="element_x"
                                    className="material_list_input"
                                    placeholder="(m)"
                                    value={x}
                                    onChange = {this.handleChange}
                                    /></td>
                    <td className="table_colun"><input
                                    type="number"
                                    name="y"
                                    id="element_y"
                                    className="material_list_input"
                                    placeholder="(m)"
                                    value={y}
                                    onChange = {this.handleChange}
                                    /></td>
                    <td className="table_colun"><input
                                    type="number"
                                    name="z1"
                                    id="element_z1"
                                    className="material_list_input"
                                    placeholder="(m)"
                                    value={z1}
                                    onChange = {this.handleChange}
                                    /></td>
                    <td className="table_colun"><input
                                    type="number"
                                    name="z2"
                                    id="element_z2"
                                    className="material_list_input"
                                    placeholder="(m)"
                                    value={z2}
                                    onChange = {this.handleChange}
                                    /></td>
                </tr>
                </tbody>
                </table>
        )
    }

}

export default ElementFormConstruc;