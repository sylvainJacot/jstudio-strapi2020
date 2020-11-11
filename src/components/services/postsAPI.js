import { API_URL } from "../../config";

// Va chercher tous les posts API
const findAll = () => {
  return fetch(API_URL + "/posts", {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
};

const findOne = (id) => {
    return fetch(`${API_URL}/posts/${id}`).then((res) => res.json());
}

export default {
  findAll,
  findOne,
};
