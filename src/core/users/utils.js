import { IMAGE_XLARGE_SIZE,IMAGE_DEFAULT_SIZE } from 'src/core/constants';

export function tracklistIdForUserLikes(userId) {
  return `users/${userId}/likes`;
}

export function tracklistIdForUserTracks(userId) {
  return `users/${userId}/tracks`;
}

export function imageUrl(str,size = IMAGE_XLARGE_SIZE) {
  let url = str
  return url.replace(IMAGE_DEFAULT_SIZE,size);
}
