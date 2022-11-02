import Table from 'react-bootstrap/Table';

export default function TodoList() {

    const list = [
        {
            "name":"Посуда",
            "date": "3 ноября",
            "description": "Помыть всю грязную посуду",
            "tegs": ["Дела"],
            "priority": "Средний"
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
                    <tr>
                        <td>1</td>
                        <td>{list[0].name}</td>
                        <td>{list[0].description}</td>
                        <td>{list[0].date}</td>
                        <td>{list[0].tegs}</td>
                        <td>{list[0].priority}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

