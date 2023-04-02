import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

const Likes = ({ review }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  if (review?.votes?.length > 0) {
    return review?.votes?.find(
      (like) => like === (user?.result?.googleId || user?.result?._id)
    ) ? (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;
        {review?.votes?.length > 2
          ? `You and ${review?.votes?.length - 1} others`
          : `${review?.votes?.length} like${
              review?.votes?.length > 1 ? "s" : ""
            }`}
      </>
    ) : (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;{review?.votes?.length}{" "}
        {review?.votes?.length === 1 ? "Like" : "Likes"}
      </>
    );
  }

  return (
    <>
      <ThumbUpAltOutlined fontSize="small" />
      &nbsp;Like
    </>
  );
};

export default Likes;
