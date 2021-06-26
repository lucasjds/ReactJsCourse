import React from 'react';

const Equipe = (props) =>{
    return (
        <div>
            <Sobre username={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social fb={props.facebook}></Social>
            <hr></hr>
        </div>
    )
}

const Sobre =(props) =>{
    return (
        <div>
            <h2>ola sou {props.username}</h2>
            <h3>cargo: {props.cargo}</h3>
            <h3>tenho: {props.idade} anos</h3>
        </div>
    )
}

const Social =(props) =>{
    return (
    <div>
        <a href={props.fb}>Facebook</a>
        <a>Linkedin</a>
        <a>Youtube</a>
    </div>)
}


function App(){
    return (
        <div>
            <h1> Conheça nossa equipe
                <Equipe nome="Lucas" cargo="Programador" idade="30" facebook="www.google.com"></Equipe>
            </h1>
        </div>
    );
}

export default App;