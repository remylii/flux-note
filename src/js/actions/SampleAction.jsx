import ConstAction from '../constants/SampleActionType';

export function addItem(text) {
  return {
    type: ConstAction.ADD_ITEM,
    text
  };
}
