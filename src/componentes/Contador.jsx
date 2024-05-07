import { Component } from 'react'

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={valor:0}
    }
    restar(){
        this.stateState({valor: this.state.valor - 1});
    }
    sumar(){
        this.stateState({valor: this.state.valor + 1});
    }
    
    
    render(){
        return(
            <div className='Contador'>
                <span className='Valor'>{this.state.valor}</span>
                <div className='Botonera'>
                    <Boton simbolo='-'
                    accion={() => alert("Resta")}
                    />
                    <Boton simbolo='+'
                    accion={() => alert("Suma")}
                    />
                </div>
            </div>
        )
    }
}
