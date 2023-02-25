import { FETCH_WARD_DATA, POST_WARD_DATA } from "../Types/ActionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (wards = [], action) => {
  switch (action.type) {
    case FETCH_WARD_DATA:
      return action.payload;
    case POST_WARD_DATA:
      return [...wards, action.payload];
    default:
      return wards;
  }
};
