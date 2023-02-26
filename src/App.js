import React from "react"
import Kanban from './components/Kanban/Kanban';
import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import { addList, reorder } from "./components/action/index";
import {DragDropContext} from "react-beautiful-dnd";
import Button from 'react-bootstrap/Button';

function App() {
  const state = useSelector((state) => state.handleData)
  //console.log(state)

  const dispatch = useDispatch()
  const handleAddList = () => {
      dispatch(addList())
  }
  //const handleDrag = (item) =>{
  //  dispatch(reorder(item))
  //  console.log('dispatch success')
  //}


  const onDragEnd=(result)=>{
    const {destination,source,draggableId} = result;
    if(!destination){
      console.log("outside the kanban")
      return;
    }else{
      dispatch(
        reorder(      
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId
        )
      )
      console.log('dispatch success')
    }
    //console.log(source.droppableId)
    //source.droppableId,destination.droppableId,source.index,destination.index,draggableId
  };
 
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h2>Kanban Board</h2>
        <h3>You can directly edit content on the area that you want to change. you also can add a new list and a new item</h3>
        <div className="bigBoard">
          {state.map((list)=>(<Kanban listID={list.id} key={list.id} title={list.title} cards={list.cards} colId={list.id}/>))}
          <Button className="btn" variant="secondary" size="sm" onClick={() => handleAddList()}>Add List</Button>
        </div>
      </div>
    </DragDropContext>
  );
}



export default App;
