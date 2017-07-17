import { FEATURED_TRACKLIST_ID, FEATURED_TRACKLIST_USER_ID } from 'src/core/constants';


export const tracklistActions = {
  FETCH_TRACKS_FAILED: 'FETCH_TRACKS_FAILED',
  FETCH_TRACKS_FULFILLED: 'FETCH_TRACKS_FULFILLED',
  FETCH_TRACKS_PENDING: 'FETCH_TRACKS_PENDING',

  LOAD_FEATURED_TRACKS: 'LOAD_FEATURED_TRACKS',
  LOAD_NEXT_TRACKS: 'LOAD_NEXT_TRACKS',
  MOUNT_TRACKLIST: 'MOUNT_TRACKLIST',
  UPDATE_PAGINATION: 'UPDATE_PAGINATION',

  FETCH_LIKES_FAILED: 'FETCH_LIKES_FAILED',
  FETCH_LIKES_FULFILLED: 'FETCH_LIKES_FULFILLED',
  FETCH_LIKES_PENDING: 'FETCH_LIKES_PENDING',

  fetchTracksFailed: error => ({
    type: tracklistActions.FETCH_TRACKS_FAILED,
    payload: error
  }),
  fetchLikesFailed: error => ({
    type: tracklistActions.FETCH_LIKES_FAILED,
    payload: error
  }),
  fetchLikesFulfilled: (tracklistId, data) => ({
    type: tracklistActions.FETCH_LIKES_FULFILLED,
    payload: {
      ...data,
      tracklistId
    }
  }),
  fetchLikesPending: tracklistId => ({
    type: tracklistActions.FETCH_LIKES_PENDING,
    payload: {
      tracklistId
    }
  }),
  fetchTracksFulfilled: (tracklistId, data) => ({
    type: tracklistActions.FETCH_TRACKS_FULFILLED,
    payload: {
      ...data,
      tracklistId
    }
  }),
  fetchTracksPending: tracklistId => ({
    type: tracklistActions.FETCH_TRACKS_PENDING,
    payload: {
      tracklistId
    }
  }),

  loadFeaturedTracks: () => ({
    type: tracklistActions.LOAD_FEATURED_TRACKS,
    payload: {
      tracklistId: FEATURED_TRACKLIST_ID,
      userId: FEATURED_TRACKLIST_USER_ID
    }
  }),

  loadNextTracks: () => ({
    type: tracklistActions.LOAD_NEXT_TRACKS
  }),

  mountTracklist: tracklistId => ({
    type: tracklistActions.MOUNT_TRACKLIST,
    payload: {
      tracklistId
    }
  }),

  updatePagination: page => ({
    type: tracklistActions.UPDATE_PAGINATION,
    payload: {
      page
    }
  })
};


export const tracklistRequestActions = {
  failed: tracklistActions.fetchTracksFailed,
  fulfilled: tracklistActions.fetchTracksFulfilled,
  pending: tracklistActions.fetchTracksPending
};

export const likelistRequestActions = {
  failed: tracklistActions.fetchLikesFailed,
  fulfilled:tracklistActions.fetchLikesFulfilled,
  pending:tracklistActions.fetchLikesPending
}
