import { configAxios } from "./config.js";

export const getAllReviews = async () => {
  try {
    const check = await configAxios.get("reviews");
    if (check?.data) return check.data;
  } catch (error) {
    return error;
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const check = await configAxios.delete(`review/${reviewId}`);
    if (check?.data) return check.data;
  } catch (error) {
    return error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const check = await configAxios.get(`reviews/${movieId}`);
    if (check?.data) return check.data;
  } catch (error) {
    return error;
  }
};


export const addMovieReview = async (movieId,data) => {
  try {
    const check = await configAxios.post(`reviews/${movieId}`,data);
    console.log(check)
    if (check?.data) return check.data;
  } catch (error) {
    return error;
  }
};



export const updateMovieReview = async (reviewId, data) => {
  try {
    const check = await configAxios.patch(`reviews/${reviewId}`,data);
    console.log(check)
    if (check?.data) return check.data;
  } catch (error) {
    return error;
  }
};
