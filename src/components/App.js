import React , { Component} from "react"
import { get } from "http";

class App extends Component{
    render(){
        //JSK className es porque class es una palabra reservada        
        /*const mesagge = <div className='text-center'>
                            <h1>Hola, React from variable!</h1>
                        </div>*/
        // createElement  
        /*const mesagge = React.createElement(
             'div',{className:'text-center'},
             React.createElement('h1',null,'Holas, React.CreateComponet')
        );*/

        const title = 'React!';
        const date = new Date();

        return <div className='text-center'>
                    <h3>Hello {title} son los {date.getHours()} horas y {date.getMinutes()} minutos</h3>    
                </div>


        //return  mesagge 
    }
}

//exportar el componente App en otro lugar
export default App