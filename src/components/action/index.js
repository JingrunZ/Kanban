export const addList = (title,listID) => {
    return{
        type:"ADDLIST",
        payload:{title,listID}
    };
};

export const addCard = (title,text,cardID) => {
    return{
        type:"ADDCARD",
        payload:{title,text,cardID}
    };
};

export const reorder = (droppableIdStart,droppableIdEnd,droppableIndexStart,droppableIndexEnd,draggableId) => {
    return{
        type:"REORDER",
        payload:{droppableIdStart,droppableIdEnd,droppableIndexStart,droppableIndexEnd,draggableId}
    };
};
