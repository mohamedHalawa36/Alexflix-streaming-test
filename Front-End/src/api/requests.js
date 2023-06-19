import { axiosInstance } from "./config";

export const searchForVid = (type, category, name) => {
  return axiosInstance.get("movies/search", {
    params: { type, category, name },
  });
};

export const addToFavorites = (id) => {
  axiosInstance.patch("/user/favorites", {
    id,
  });
};
export const deleteFromFavorites = (id) => {
  axiosInstance.delete("/user/favorites", {
    id,
  });
};
