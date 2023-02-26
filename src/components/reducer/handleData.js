/**
 * 1. create new card/task panel
 * 2. once new task created, it will be added to todo-col's last slot
 * 3. the last slot id need to be calculated base on exsting todo item
 * 
 * 4. 
 * 
 */

var ListId = 3
var cardId = 5
const defaultState=[
    {
        id:0,
        title:"To Do",
        cards:[
            {
                id:0,
                title:"ENG111 tutorial",
                text:"bring pen"
            },
            {
                id:1,
                title:"CPS Midterm",
                text:"bring ID"
            },
            {
                id:2,
                title:"Vue Midterm",
                text:"bring ID"
            },

        ]
    },
    {
        id:1,
        title:"Doing",
        cards:[
            {
                id:3,
                title:"review React midterm",
                text:"chapter 1 to 6"
            }
        ]
    },
    {
        id:2,
        title:"Done",
        cards:[
            {
                id:4,
                title:"Python Midterm",
                text:"ask question to prof"
            }
        ]
    }
]

//console.log(defaultState)
const Reducer = (state = defaultState, action) =>{
    const cards = action.payload;
    switch(action.type){
        case "ADDLIST":
            const newList ={
                title:"Edit Here",
                cards:[],
                id:ListId
            }
            ListId += 1
            return[...state,newList];
        case "ADDCARD":
            const newCard ={
                id:cardId,
                title:"Edit Here",
                text:"Edit Here"
            };
            cardId += 1
            const res = state.map((list)=>{
                console.log(list.id)
                console.log(action.payload.cardID)
                if(list.id === action.payload.cardID){
                    return{
                        ...list,
                        cards:[...list.cards,newCard]
                    }
                }else{
                    return list
                }
            });
            return res

        case "REORDER":
            //console.log("process action")
            const {droppableIdStart,droppableIdEnd,droppableIndexStart,droppableIndexEnd,draggableId}= action.payload
            const result = [...state]
            if(droppableIdStart == droppableIdEnd){
                const found = state.find(list => list.id==droppableIdStart)
                //console.log(found)
                const card = found.cards.splice(droppableIndexStart,1)
                //console.log(card)
                //console.log(droppableIndexEnd)
                found.cards.splice(droppableIndexEnd,0,...card)
            }
            if(droppableIdStart !== droppableIdEnd){
                //console.log("not same list")
                const firstList = state.find(list => list.id==droppableIdStart)
                const card = firstList.cards.splice(droppableIndexStart,1)
                const destList = state.find(list => list.id==droppableIdEnd)
                destList.cards.splice(droppableIndexEnd,0,...card)
            }
            return result

        default:
            return state;
    }
    
        
}

export default Reducer;