import React , { Component} from "react"
import { get } from "http";
import DataTable from './DataTable'
import SimpleDataTable from './SimpleDataTable'

class App extends Component{
    render(){
       const products = [
           {id:1,name:'Azucar',unitPrice:19.50, unitStock:50},
           {id:2,name:'Leche',unitPrice:8, unitStock:150},
           {id:3,name:'Frijol',unitPrice:8, unitStock:300},
       ]
        return (        
            <div className='container'>
                <SimpleDataTable productsData={products}/>
            </div>
        )
    }
}

//exportar el componente App en otro lugar
export default App