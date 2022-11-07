import TodoList from "../components/todo-list";

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
        <TodoList list={list}></TodoList>
    );
}

