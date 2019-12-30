import { simpleRequest } from "./API";
/**
 * returns the avatar file_name and path from the api
 * @param {integer} avatar_id the id for the avatar image
 * @returns {object}
 */
export const getAvatarById = avatarId => {
  return simpleRequest("GET_AVATAR", { id: avatarId });
};
/**
 * Gets all avatars from a specific household based on the household id
 * @param {integer} householdId
 * @returns {array}
 */
export const getAvatarsByHousehold = id => {
  return simpleRequest("GET_HOUSEHOLD_AVATARS", { id: id });
};
