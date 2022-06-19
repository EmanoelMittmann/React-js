import HookUseReducer from "../Components/HookUseReducer"
import HookUseState from "../Components/HookUseState"
import HookUseEffect from "../Components/HookUseEffect"
import HookUseContext from "../Components/HookUseContext"

//useContext
import { useContext } from "react";
import { SomeContext } from "../Components/HookUseContext";
import HookUseRef from "../Components/HookUseRef";
import HookUseCallBack from "../Components/HookUseCallBack";
import HookUseMemo from "../Components/HookUseMemo";
import HookUseLayoutEffect from "../Components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../Components/HookUseImperativeHandle";
import HookCustom from "../Components/HookCustom";

const Home = () => {

    const {contextValue} = useContext(SomeContext);

  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>Usecontent</h2>
        <p>Valor do Context: {contextValue}</p>
        <hr />
        <HookUseRef/>
        <HookUseCallBack/>
        <HookUseMemo/>
        <HookUseLayoutEffect/>
        <HookUseImperativeHandle/>
        <HookCustom/>
    </div>
  )
}

export default Home