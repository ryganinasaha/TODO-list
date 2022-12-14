/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';
import TodoListItem from './todo-list-item';


export default function TodoList(props) {
    

    return (
        <div>
            <Table striped bordered hover size="sm"  style={{marginTop : '30px', width : '87%', marginLeft : '60px'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Дата выполнения</th>
                        <th>Теги</th>
                        <th>Приоритет</th>
                        <th>Статус</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((item, index)=> (
                        <TodoListItem item={item} index={index +1} key={index} removeItem={props.removeItem} changeStatus={props.changeStatus}></TodoListItem> 
                    ))}  
                </tbody>
            </Table>
        </div>
    );
}

