const AnotherComponent = () => {

    const handleClick = () => console.log("TU CLICOU");

    return (
        <div>
            <p> Segundo Componente</p>
            <button onClick={handleClick}>Evento</button>
            <hr/>
            <button onClick={() => console.log("Olhe o Whatsapp")}> Evento de click </button>
        </div>
    );
};

export default AnotherComponent;