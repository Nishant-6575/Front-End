import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter/Page/Counter";
import Todo from "./Todo/Page/Todo";
import CrudList from "./Crud/Page/CrudList";
import EditCRUD from "./Crud/Page/EditCRUD";
import UserForm from "./Crud/Page/UserForm";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/crud" element={<CrudList/>} />
          <Route path="/edit/:id" element={<EditCRUD/>} />
          <Route path="/add" element={<UserForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
