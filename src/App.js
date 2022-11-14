import TodoListPage from "./pages/todo-list-page";
import TodoListForm from "./components/todo-list-forms.js";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <TodoListPage></TodoListPage>
      <TodoListForm></TodoListForm>
    </div>
  );
}

export default App;
