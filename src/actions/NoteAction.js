import { dispatch } from '../dispatcher';
import NoteApiClient from '../services/NoteApiClient';

export default class NoteAction {
  static fetchNotes() {
    console.log('NoteAction#fetchNotes');
    return NoteApiClient.fetchNotes().then(notes => {
      dispatch({ type: 'note/fetch', notes });
    });
  }
}
