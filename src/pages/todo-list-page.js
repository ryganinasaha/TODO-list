import TodoList from "../components/todo-list";
import TodoListSidebar from "../components/todo-list-sidebar";

export default function TodoListPage() {
    const list = [
        {
            "name":"Посуда",
            "date": "3 ноября",
            "description": "Помыть всю грязную посуду",
            "tegs": ["Домашеие дела"],
            "priority": "Средний" // Низкий, Средний, Высокий
        },
        {
            "name":"Физика",
            "date": "15:00:11",
            "description": "Сходить к репетитору по физики",
            "tegs": ["Уроки"],
            "priority": "Средний" // Низкий, Средний, Высокий
        }
    ]; 

    return (
        <div>
            <TodoListSidebar></TodoListSidebar>
            <TodoList list={list}></TodoList> 
        </div>
        
    );
}

