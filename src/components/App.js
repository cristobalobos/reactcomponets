import React , { Component} from "react"
import { get } from "http";
import DataTable from './DataTable'
import SimpleDataTable from './SimpleDataTable'

class App extends Component{
    // contendra propiedades
    state= {
        products : [
            {id:1,name:'Azucar',unitPrice:19.50, unitStock:50},
            {id:2,name:'Leche',unitPrice:8, unitStock:150},
            {id:3,name:'Frijol',unitPrice:8, unitStock:300},
        ]
    }

    // Filter devuelve los datos bajo la condicción definida
    // En este caso muestra todos los que tienen un id distinto
    removeProduct = productId => {
        const newProducts = 
        this.state.products.filter((product,i) => { 
            return productId !== product.id
        })
        //actualizar el estado
        this.setState({
            products: newProducts
        })
    }
    render(){       
        return (        
            <div className='container'>
                <SimpleDataTable 
                productsData={this.state.products}
                removeProduct={this.removeProduct}/>
            </div>
        )
    }
}

//exportar el componente App en otro lugar
export default App