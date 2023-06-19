import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { getMovieReviews, addMovieReview } from "./../../../api/apiReview";
import { getUserData } from "./../../../api/apiData";
import "./reviews.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);

  const params = useParams();
  const [user, setUser] = useState({});
  const [newReview, setNewReview] = useState("");
  const [visibleReviews, setVisibleReviews] = useState(5);

  useEffect(() => {
    getUser();
    getAllReviews();
  }, []);

  function getUser() {
    getUserData()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAllReviews() {
    getMovieReviews(params.id)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleViewMore = () => {
    setVisibleReviews(visibleReviews + 5);
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter((review) => review._id !== id));
  };

  const handleUpdateReview = (id, updatedReview) => {
    // use review api to update data {content:updatedReview}


    // then get and update review
    //getAllReviews();
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? { ...review, review: updatedReview, isEditing: false }
          : review
      )
    );
  };

  const handleAddReview = async () => {
    await addMovieReview(params.id, { content: newReview });
    getAllReviews();
    setNewReview("");
  };

  return (
    <div>
      <div id="reviews" className="mt-5">
        <h2 className="mb-4">Reviews</h2>
        <ul className="list-group">
          {reviews.slice(0, visibleReviews).map((review) => (
            <li key={review._id} className="list-group-item">
              <div className="d-flex align-items-start">
                <Avatar className="me-3">
                  {review.user_id.firstName && review.user_id.firstName.charAt(0)}
                </Avatar>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 me-2">{`${review.user_id.firstName} ${review.user_id.lastName} `}</h5>
                  </div>
                  {review.isEditing ? (
                    <div className="d-flex mt-2">
                      <textarea
                        className="form-control me-2"
                        rows="2"
                        value={review.updatedReview || review.content}
                        onChange={(e) =>
                          setReviews((prevReviews) =>
                            prevReviews.map((prevReview) =>
                              prevReview._id === review._id
                                ? {
                                    ...prevReview,
                                    updatedReview: e.target.value,
                                  }
                                : prevReview
                            )
                          )
                        }
                      ></textarea>
                      <button
                        id="review-save-btn"
                        className="btn btn-sm fw-bold"
                        onClick={() =>
                          handleUpdateReview(review._id, review.updatedReview)
                        }
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="mt-2 mb-0">{review.content}</p>
                      <div className="review-btns mt-2">
                        <button
                          className="btn btn-link btn-sm"
                          onClick={() =>
                            setReviews((prevReviews) =>
                              prevReviews.map((prevReview) =>
                                prevReview._id === review._id
                                  ? { ...prevReview, isEditing: true }
                                  : prevReview
                              )
                            )
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-link btn-sm"
                          onClick={() => handleDeleteReview(review._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        {visibleReviews < reviews.length && (
          <div className="text-center mt-4">
            <button className="btn btn-secondary" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
      </div>

      <div id="add-review-container" className="container mt-5">
        <h2 className="text-center mb-4">Add Your Review</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="Write your review..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            ></textarea>
            <button
              id="post-review"
              className="btn fw-bold"
              onClick={handleAddReview}
            >
              Post Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
