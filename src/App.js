import React, {Component} from 'react';

class Equipe extends Component{
    render (){
        return  (
            <div>
                <Sobre username={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <Social fb={this.props.facebook}></Social>
                <hr></hr>
            </div>
        )
    };
}

class Sobre extends Component{
    render(){
        return (
            <div>
                <h2>ola sou {this.props.username}</h2>
                <h3>cargo: {this.props.cargo}</h3>
                <h3>tenho: {this.props.idade} anos</h3>
            </div>
        )
    };
}

const Social =(props) =>{
    return (
    <div>
        <a href={props.fb}>Facebook</a>
        <a>Linkedin</a>
        <a>Youtube</a>
    </div>)
}


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome : 'Mateus',
            contador : 0
        }

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert("chegou no zero");
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }
    render(){
        return (
            <div>
                <h1>Contador</h1>
                {this.state.nome}
                <button onClick={this.diminuir}>
                    -
                </button>
                {this.state.contador}
                <button onClick={this.aumentar}>
                    +
                </button>
                <h1> Conheça nossa equipe
                    <Equipe nome="Lucas" cargo="Programador" idade="30" facebook="www.google.com"></Equipe>
                </h1>
            </div>
        );
    }
    
}

export default App;