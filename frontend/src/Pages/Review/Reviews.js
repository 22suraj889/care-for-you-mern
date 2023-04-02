import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upvoteWardReview, wardReview } from "../../Actions/ReviewActions";
import Likes from "./Likes";

const FilledRating = ({ filled }) => {
  let htmlElement = [];
  for (let i = 0; i < filled; i++) {
    htmlElement.push(
      <span key={i} className="text-yellow-500">
        &#9733;
      </span>
    );
  }
  return htmlElement;
};

const UnfilledRating = ({ notFilled }) => {
  let htmlElement = [];
  for (let i = 0; i < notFilled; i++) {
    htmlElement.push(
      <span key={5 - i} className="text-yellow-500">
        &#9734;
      </span>
    );
  }
  return htmlElement;
};

const Reviews = ({ ward }) => {
  const wardsData = useSelector((state) => state.wards);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [currentWardData] = wardsData?.filter((w) => w.wardName === ward);
  const reviewsIds = currentWardData?.wardReview;
  console.log(reviewsIds);
  useEffect(() => {
    console.log("Hi");
    dispatch(wardReview());
  }, []);

  const reviews = useSelector((state) => state.reviews);
  console.log(reviews);
  let currentWardReviews = [];
  for (let id of reviewsIds) {
    const review = reviews?.find((r) => r._id === id);
    currentWardReviews.push(review);
  }

  const likeHandler = (id) => {
    console.log(id);
    dispatch(upvoteWardReview(id));
  };
  console.log(currentWardReviews);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
      <p className="text-center text-3xl font-semibold">{ward}</p>;
      <h1 className="text-3xl mb-6 md:mb-8 lg:mb-12">User Reviews</h1>
      {currentWardReviews.length === 0 ? (
        <p className="text-lg font-bold mb-2 text-gray-900">No reviews yet.</p>
      ) : (
        currentWardReviews.map((review) => (
          <div
            key={review?._id}
            className="border-b border-gray-200 mb-6 md:mb-8 lg:mb-12 pb-6 md:pb-8 lg:pb-12 relative"
          >
            <p className="text-lg font-bold mb-2 text-gray-900">
              {review?.review}
            </p>
            <p className="text-gray-500 absolute bottom-0 right-0 text-sm">
              {review?.name}
            </p>
            <div className="mt-2">
              <FilledRating filled={review?.rating} />
              <UnfilledRating notFilled={5 - review?.rating} />
            </div>
            <Button
              size="small"
              color="primary"
              disabled={!user?.result}
              onClick={() => likeHandler(review?._id)}
            >
              <Likes review={review} />
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
