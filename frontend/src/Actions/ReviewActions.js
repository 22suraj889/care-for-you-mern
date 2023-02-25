import * as api from "../Api/Api";
import { FETCH_REVIEW, POST_REVIEW, UPVOTE_REVIEW } from "../Types/ActionTypes";
export const wardReview = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReview();
    console.log(data);
    dispatch({ type: FETCH_REVIEW, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postWardReview = (id, review) => async (dispatch) => {
  try {
    const { data } = await api.postReview(id, review);
    console.log(data);
    dispatch({ type: POST_REVIEW, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const upvoteWardReview = (id) => async (dispatch) => {
  try {
    const { data } = await api.upvoteReview(id);
    console.log(data);
    dispatch({ type: UPVOTE_REVIEW, payload: data });
  } catch (error) {
    console.log(error);
  }
};
