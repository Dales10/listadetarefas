import React, { useState } from "react";
import style from '../App.module.css';
import AddArea from "../components/AddArea";
import ListItem from "../components/ListItem/ListItem";
import { Item } from "../types/item";

const App: React.FC = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o pão na padaria', done: false},
    {id: 2, name: 'Comprar um bolo na padaria', done: true}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <div className={style.conteiner}>
      <div className={style.area}>
        <div className={style.header}>Lista de Tarefas</div>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => {
          return <ListItem list={list} key={index} index={index} item={item} />
        })}
      </div>
    </div>
  );
}

export default App;