import AnotherComponent from "./AnotherComponent"

function FirstComponent(){
    //algum comentário
    const name = "Emanoel";
    return(
        <div className="firstComponent">
            {/* Comentario no JSX*/}
            <p> primeiro componente</p>
            {2 + 2}
            <p>Nome: {name}</p>
            <AnotherComponent/>
        </div>
    )

}
export default FirstComponent