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

const test_data = {
  parents: [
    {
      nickname: "jnizzle",
      avatar: "http://localhost/KidzKoinz/Server/avatars/lego_batman.jpg"
    }
  ],
  children: [
    {
      nickname: "Flynnie",
      avatar: "http://localhost/KidzKoinz/Server/avatars/my_little_pony.jpg"
    },
    {
      nickname: "Jessica",
      avatar: "http://localhost/KidzKoinz/Server/avatars/my_little_pony.jpg"
    },
    {
      nickname: "Jason",
      avatar: "http://localhost/KidzKoinz/Server/avatars/my_little_pony.jpg"
    },
    {
      nickname: "Athena",
      avatar: "http://localhost/KidzKoinz/Server/avatars/powerpuff_girl.jpg"
    }
  ]
};
export const getAvatarsByHousehold = id => {
  return simpleRequest("GET_HOUSEHOLD_AVATARS", { id: id }, test_data);
};
