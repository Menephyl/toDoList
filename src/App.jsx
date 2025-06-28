import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem,Aviso, Check, Trash } from './styles.js'

function App() {

  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');


  function InputChange(event) {
    setInputTask(event.target.value)


  }
  // no js quando colocamos chave e valor  com o mesmo nome, podemos simplificá-lo, no exmeplo abaixo o task é mesma chave e nome da variavel
  function addButton() {
   if(inputTask){
     setList([...list, { id: uuid(), task: inputTask,finished:false }])
   }
  }
function finalizarTarefa(id){
 const newList = list.map( item => (item.id=== id ? {...item, finished: !item.finished}: item

  ))
setList(newList)
}
function deletarItem(id){
const newList =list.filter(item=>item.id !== id)
setList (newList)
}
  return (
    <Container>
      <div>

        <ToDoList>
          <Input onChange={InputChange} type="text" placeholder="  O que tenho que fazer..." />
          <Button onClick={addButton}>Adicionar Tarefa</Button>

          <ul>
          
            {
            list.length > 0 ? (

            
              
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li > {item.task} </li>
                <Trash onClick={()=> deletarItem(item.id)} />
              </ListItem>
          ))
          ) : (
            <div>
              <Aviso>Não há itens na lista!!!</Aviso>
              <h5>Coloque sua primeira tarefa preguiçoso(a).
                Fazer nada também é fazer alguma coisa </h5>
            </div>
          )}

          </ul>
        </ToDoList>
      </div>
      <div>

      </div>
    </Container>
  )
}

export default App
