import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class NoteStore extends ReduceStore {
  getInitialState() {
    return { note: null };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'note/fetch':
        console.log('noteStores#note/fetch');
        console.dir(state);
        return { note: action.note };

      default:
        return state;
    }
  }
}
