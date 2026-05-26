import ReturnCompo from "./Lab/Component/ReturnCompo";
import Age from "./Lab/ConditionalRend/Age";
import Login from "./Lab/ConditionalRend/Login";
import Button from "./Lab/Event/Button";
import Form from "./Lab/Event/Form";
import FormTask from "./Lab/Form";
import CounterwithHook from "./Lab/Hooks/CounterwithHook";
import UseEffectTask from "./Lab/Hooks/UseEffectTask";
import Introduction from "./Lab/Introduction";
import JavaScriptXML from "./Lab/JavaScriptXML";
import Lifecycle from "./Lab/Lifecycle";
import LifecycleUpdate from "./Lab/LifecycleUpdate";
import Map from "./Lab/ListandKey/Map";
import User from "./Lab/ListandKey/User";
import Counter from "./Lab/PropsState/Counter";
import ReturnProps from "./Lab/PropsState/ReturnProps";

function App() {
  return (
    <div className="App">
      {/* <Introduction/>
      <JavaScriptXML/>
      <ReturnCompo/>
      <ReturnProps/>
      <Counter/>
      <Button/>
      <Form/>
      <Login/> */}
      {/* <Age/>
      <Map/>
      <User/>
      <FormTask/> */}
      {/* <Lifecycle/>
      <LifecycleUpdate/> */}
      <CounterwithHook/>
      <UseEffectTask/>
    </div>
  );
}

export default App;
