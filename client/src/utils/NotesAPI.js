import axios from "axios";
export default {
  getUserNotes: id => {
    axios
      .get(`/api/user/${id}/notes`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        },
      })
      .then(response => {
        return response;
      });
  },

  // sign up a user to our service
  createNote: (id, data) => {
    return axios
      .post(
        `api/user/${id}/notes`,
        {
          data,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("id_token")}`,
          },
        },
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  },
  // // sign up a user to our service
  // deleteNote: (id, noteID) => {
  //   return axios.post(
  //     `api/user/${id}/notes/${noteID}`,
  //     {
  //       data,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("id_token")}`,
  //       },
  //     },
  //   );
  // },
};
