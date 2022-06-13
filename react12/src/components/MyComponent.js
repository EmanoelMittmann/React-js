import Style from './MyComponent.module.css'

const myComponent = ({car}) => {
  return (
    <div className={Style.blocos}>
        <h1 className={Style.estilos}>marca: {car.marca}</h1>
        <p className={Style.paragrafo}>tipo: {car.tipo}</p>
        <p className={Style.paragrafo}>modelo: {car.modelo}</p>
        <p className={Style.paragrafo}>cor: {car.color}</p>
        <p className={Style.paragrafo}>ano: {car.ano}</p>
    </div>
  )
}

export default myComponent