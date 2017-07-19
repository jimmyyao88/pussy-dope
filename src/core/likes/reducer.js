import { List } from 'immutable';
import { TRACKS_PER_PAGE } from 'src/core/constants';
import { likeActions } from './actions';
import { Likelist } from './likelist';
import { createLike } from './like';


export function likelistReducer(state = new Map(),{ payload,type }) {
  switch(type){
    case likeActions.FETCH_LIKES_FULFILLED:
      return state.withMutations(likes => {
        payload.collection.forEach(trackData => {
          likes.set(trackData.id, createTrack(trackData));
        });
      })
  }
}
