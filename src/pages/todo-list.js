import Table from 'react-bootstrap/Table';
import TodoListItem from './todo-list-item';

export default function TodoList() {
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
            "priority": "Высокий" // Низкий, Средний, Высокий
        }
    ];

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Дата выполнения</th>
                        <th>Теги</th>
                        <th>Приоритет</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index)=> (
                        <TodoListItem item={item} index={index +1} key={index}></TodoListItem> 
                    ))}  
                </tbody>
            </Table>
        </div>
    );
}

