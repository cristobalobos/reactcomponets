import React, {Component} from 'react'
import {Table} from 'reactstrap'
import { cpus } from 'os';

const TableHeader =() => {
    return (
        <thead className='thead-dark'>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Precio Unitario</th>
                <th>Unidades en existencia</th>
            </tr>
    </thead>
    )
}

const TableBody = (props) => {
    const tableRows = props.productsData.map((product,index) => {
        return (
            <tr key={product.id}>
                <th>{product.id}</th>
                <th>{product.name}</th>
                <th>{product.unitPrice}</th>
                <th>{product.unitStock}</th>
                <th> 
                    <button onClick={()=> props.removeProduct(product.id)}
                        className='btn btn-primary'>
                        Eliminar
                    </button>
                    
                </th>
            </tr>
        )
    }
)
    return (
        <tbody>{tableRows}</tbody>        
    )
}

class SimpleDataTable extends Component {
    render(){
        return (
            <Table striped>
                <TableHeader/>
                <TableBody productsData={this.props.productsData}
                    removeProduct={this.props.removeProduct}/>
            </Table>
        )
    }
}

export default SimpleDataTable
