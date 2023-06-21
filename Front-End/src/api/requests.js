import { axiosInstance } from "./config";

export const searchForVid = (type, category, name) => {
  return axiosInstance.get("movies/search", {
    params: { type, category, name },
  });
};

export const getAllFavorites = ()=>{
 return axiosInstance.get("user/favorites")
}

export const addToFavorites = (id) => {
 return axiosInstance.patch("/user/favorites", {
    id,
  });
};
export const deleteFromFavorites = (id) => {
return  axiosInstance.delete(`user/favorites/${id}`);
};
