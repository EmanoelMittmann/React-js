const Challenge = () => {


    var a = 19;
    var b = 15;

    const Something = () =>{
        
        return(
            <button onClick={()=> console.log(a + b)}>click aqui</button>
        ); 
        
    }
    


    return(
        <div className="container">
            <h1> a: {a}  b: {b}</h1>
            {Something()}
        </div>
    );
}
export default Challenge