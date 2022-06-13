import Challenge from "./Challenge"

const Events = () =>{

    const handleMyEvent = () => {
        console.log("Ativou o evento!")
    }

    const renderSomething = (x) => {
        
        if(x){

            return <h1>Renderizando Isso!</h1>

        } else {

            return <h1>Também posso renderizar isso!</h1>
        
        }

    }
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou!')}>Clique aqui também!</button>
                <button onClick={() =>{
                    if(true){
                        console.log("Isso não deveria existir =)")
                    }
                }}>
                    Clica aqui, Por favor.
                </button>
            </div>
            {renderSomething(true)}
            {Challenge()}
        </div>
    )
}
export default Events;