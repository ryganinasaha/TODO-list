import TodoList from "../components/todo-list";
import TodoListSidebar from "../components/todo-list-sidebar";
import { useState } from "react";

export default function TodoListPage() {
    const [list, setList] = useState([
        {
            "name":"Посуда",
            "date": "3 ноября",
            "description": "Помыть всю грязную посуду",
            "tegs": ["Домашеие дела"],
            "priority": "Средний", // Низкий, Средний, Высокий
            "status": "Ожидание" 
        },
        {
            "name":"Физика",
            "date": "15:00:11",
            "description": "Сходить к репетитору по физики",
            "tegs": ["Уроки"],
            "priority": "Средний", // Низкий, Средний, Высокий
            "status": "Ожидание"
        }
    ]); 

    function removeItem(index){
        const newList = list.filter(FilterCondition);
        
        setList(newList);

        function FilterCondition(item, i) {
            return index !== i;
        } 
    }

    function changeStatus(index) {
        list[index].status = "Завершино";

        setList([].concat(list));
    }

    

    return (
        <div>
            <TodoListSidebar></TodoListSidebar>
            <TodoList list={list} removeItem={removeItem} changeStatus={changeStatus}></TodoList> 
        </div>
        
    );
}

