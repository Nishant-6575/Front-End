import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Header from "./Lab/Header";
import ReduxTask from "./Lab/Hooks/ReduxTask";
import Rerender from "./Lab/Hooks/Rerender";
import Crudusefile from "./Lab/Server/Crudusefile";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />

        <Routes>

          <Route path="/" element={<Introduction />} />
          <Route path="/javascript" element={<JavaScriptXML />} />
          <Route path="/return" element={<ReturnCompo />} />
          <Route path="/returnprops" element={<ReturnProps />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/button" element={<Button />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/age" element={<Age />} />
          <Route path="/map" element={<Map />} />
          <Route path="/user" element={<User />} />
          <Route path="/formtask" element={<FormTask />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/lifecycleupdate" element={<LifecycleUpdate />} />
          <Route path="/counterhook" element={<CounterwithHook />} />
          <Route path="/usereffect" element={<UseEffectTask />} />
          <Route path="/redux" element={<ReduxTask/>} />
          <Route path="/rerender" element={<Rerender/>} />
          <Route path="/crud" element={<Crudusefile/>} />
          
        </Routes>
      </div>

    </BrowserRouter >
  );
}

export default App;
