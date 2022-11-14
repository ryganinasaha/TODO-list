import { createRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";


export default function TodoListForm() {
    const nameRef = createRef();
    const dateRef = createRef();
    const [description, setDescription] = useState();
    const [tags, setTags] = useState({
        Работа: false,
        Учёба: true,
        'Домашнии дела': false
    });

    function updateTags(key) {
        tags[key] = !tags[key];

        setTags({ ...tags });
    }

    function handlSubmit(event) {
        event.preventDefault();

        console.log('submit');

        const tagsArr = [];

        for (let tagKey of Object.keys(tags)) {
            const tagValue = tags[tagKey];

            if (tagValue) {
                tagsArr.push(tagKey);
            }
        }

        const formDate = {
            name: nameRef.current.value,
            description: description,
            date: dateRef.current.value,
            tags: tagsArr
        };

        console.log(formDate);
    }

    return (
        <Form onSubmit={handlSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Название</Form.Label>
            <Form.Control type="text" name="name" placeholder="Введите название" ref={nameRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Описание</Form.Label>
            <Form.Control as="textarea" name="description" placeholder="Опишите действие" value={description} onChange={(event) => setDescription(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Дата</Form.Label>
            <Form.Control type="text" name="date" placeholder="Введите дату" ref={dateRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTegs">
            <Form.Label>Теги</Form.Label>
            <div>
               <Form.Check inline label="Работа" name="work" type="checkbox" checked={tags.Работа} onChange={() => updateTags('Работа')}></Form.Check>
               <Form.Check inline as="input" label="Учёба" name="study" type="checkbox" checked={tags.Учёба} onChange={() => updateTags('Учёба')}></Form.Check>
               <Form.Check inline label="Домашние дела" name="homework" type="checkbox" checked={tags["Домашнии дела"]} onChange={() => updateTags('Домашнии дела')}></Form.Check> 
            </div>
            
          </Form.Group>
            <Button variant="primary" type="submit">
                Применить
            </Button>
        </Form>
        
    );
}
