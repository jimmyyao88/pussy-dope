import { createSelector } from 'reselect';


export function getUsers(state) {
  return state.users;
}
export function getLikes(state){
  return state.likes;
}

export function getUserById(state, userId) {
  return getUsers(state).get(userId);
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getCurrentUser = createSelector(
  getUsers,
  users => users.get(users.get('currentUserId'))
);

export const getUserLikes = createSelector(
  getLikes,
  likes => ({likes})
)
