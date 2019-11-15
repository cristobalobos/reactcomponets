import React, {Component} from 'react'
import {Table} from 'reactstrap'

class DataTable extends Component {
    render(){
        return (
            <Table striped>
                <thead className='thead-dark'>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio Unitario</th>
                        <th>Unidades en existencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>2</th>
                        <th>Leche</th>
                        <th>17</th>
                        <th>400</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Azucar</th>
                        <th>17</th>
                        <th>400</th>
                    </tr>
                </tbody>
            </Table>
        )
    }
 }

 export default DataTable