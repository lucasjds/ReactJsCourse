import React from 'react';

const BemVindo = (props) => {
    return(
        <div>
            <h2>Bem vindo(a) {props.nome}</h2>
            <h2>Tenho {props.idade}</h2>
        </div>
    );
};

function App(){
    return <h1> Ola mundo! <BemVindo nome="Lucas" idade="30"></BemVindo></h1>;
}

export default App;