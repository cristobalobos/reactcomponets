import React , { Component} from "react"
import { get } from "http";
import DataTable from './DataTable'
import SimpleDataTable from './SimpleDataTable'

class App extends Component{
    render(){
       
        return (        
        <div className='container'>
            <div>DataTable:</div>
            <DataTable/>
            <div>SimpleDataTable:</div>
            <SimpleDataTable />
        </div>

        )
    }
}

//exportar el componente App en otro lugar
export default App