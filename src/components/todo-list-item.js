/* eslint-disable react/prop-types */

import Button from "@restart/ui/esm/Button";

export default function TodoListItem(props) {
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.item.name}</td>
            <td>{props.item.description}</td>
            <td>{props.item.date}</td>
            <td>{props.item.tegs}</td>
            <td>{props.item.priority}</td>
            <td>{props.item.status}</td>
            <td>
                <Button onClick={() => props.removeItem(props.index - 1)}>Удалить</Button>
                <Button onClick={() => props.changeStatus(props.index - 1)}>Завершить</Button>
            </td>
         </tr>
    );
}