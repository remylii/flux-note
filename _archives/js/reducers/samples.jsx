import ConstAction from '../constants/SampleActionType';

let itemList = [];

const createItem = (state = {}, action) => {
  switch (action.type) {
    case ConstAction.ADD_ITEM:
      return {
        id: Date.now(),
        text: action.text
      };

    default:
      return state;
  }
}

const samples = (state = itemList, action) => {
  switch (action.type) {
    case ConstAction.ADD_ITEM:
      return [
        ...state,
        createItem(undefined, action)
      ];

    default:
      return state;
  }
}

export default samples;
