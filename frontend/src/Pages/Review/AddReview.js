import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postWardReview } from "../../Actions/ReviewActions";
import { getWardData } from "../../Actions/WardActions";

const AddReview = ({ ward }) => {
  const [userReview, setUserReview] = useState({
    name: "",
    review: "",
    rating: "",
  });
  console.log(ward);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWardData());
  }, []);

  const wardsData = useSelector((state) => state.wards);
  const currentWardData = wardsData.find((w) => w.wardName === ward);
  console.log(currentWardData);
  const onSubmitReviewFormHandler = (e) => {
    e.preventDefault();
    dispatch(postWardReview(currentWardData._id, userReview));
  };
  return (
    <form
      className="max-w-lg mx-auto mt-8 p-8 bg-white rounded-lg shadow-md"
      onSubmit={onSubmitReviewFormHandler}
    >
      <h2 className="text-2xl text-center font-semibold mb-4">
        {ward} Review Form
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setUserReview({ ...userReview, name: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="ward">
          Review:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ward"
          type="text"
          placeholder="Enter the ward name"
          onChange={(e) => {
            setUserReview({ ...userReview, review: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
          Rating (1-5):
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          onChange={(e) => {
            setUserReview({ ...userReview, rating: e.target.value });
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="flex justify-center">
        <Button
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
        >
          Reviews
        </Button>
      </div>
    </form>
  );
};

export default AddReview;
