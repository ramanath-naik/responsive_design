import uuid from 'react-uuid';

const lReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WISH":
      {
        const newWish = {...action.payload, "id": uuid(), "isDone": false};
        return [...state, newWish];
      }
    case "REMOVE_WISH":
      {
        const wishRemained = state.filter((wish) => wish.id !== action.payload);
        return [...wishRemained]
      }
    case "DONE_WISH":
      {
        const index = state.findIndex((wish) => wish.id === action.payload);
        const doneWish = [...state];
        doneWish[index].isDone = true;
        return [...doneWish];
      }
    default:
      return state;    
  }
};

const formReducer = (state, action) => {
  switch(action.type) {
    case "INPUT_TEXT":
      return {
        ...state,
        [action.field]: action.payload
      };
    case "INPUT_TOGGLE":     //if there is any toggle fields like select or radio button
      return  {
        ...state,
        [action.payload]: !action.payload
      };
    default:
      return state;  
  }
};

export {lReducer, formReducer};