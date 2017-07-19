export function getLikes(state) {
  return state.likes;
}

export function getLikeById(state, trackId) {
  return getLikes(state).get(trackId);
}
