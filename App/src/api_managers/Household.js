import { simpleRequest } from "./API";

export const getHouseholdData = id => {
  return simpleRequest("GET_HOUSEHOLD_DATA", { id: id }, test_data);
};
