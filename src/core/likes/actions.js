export const likeActions = {
  FETCH_LIKES_FAILED: 'FETCH_LIKES_FAILED',
  FETCH_LIKES_FULFILLED: 'FETCH_LIKES_FULFILLED',
  FETCH_LIKES_PENDING: 'FETCH_LIKES_PENDING',
  fetchLikesFulfilled: (tracklistId,data) => ({
    type:likeActions.FETCH_TRACKS_FULFILLED,
    payload:{
      ...data,
      tracklistId
    }
  }),
  fetchLikesPending: tracklistId => ({
    type:likeActions.FETCH_LIKES_PENDING,
    payload:{
      tracklistId
    }
  }),
  fetchLikesFailed: error => ({
    type: likeActions.FETCH_LIKES_FAILED,
    payload: error
  })
}



export const likelistRequestActions = {
  failed: likeActions.fetchLikesFailed,
  fulfilled:likeActions.fetchLikesFulfilled,
  pending:likeActions.fetchLikesPending
}
