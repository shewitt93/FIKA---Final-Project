export const loadData = (data) => ({
  
  type: "LOAD_DATA",
  payload: data,

});

export const loadChat = (data) => ({
  type: "LOAD_CHAT",
  payload: data,
});

export const getUser = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      };
      const resp = await fetch(
        "http://localhost:8000/core/current_user",
        options
      );
      const userdata = await resp.json();
      dispatch(loadData(userdata));
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
// export const getOrg = () => {
//   return async (dispatch) => {
//     try {
//       const options = {
//         method: "GET",
//         headers: {
//           "Content-type": "application/json",
//           Authorization: `JWT ${localStorage.getItem("token")}`,
//         },
//       };
//       const resp = await fetch("http://localhost:8000/core/chat", options);
//       const userdata = await resp.json();
//       dispatch(loadData(userdata));
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   };
// };
export const getChat = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      };
      const resp = await fetch("http://localhost:8000/core/message/", options);
      const messagedata = await resp.json();
      dispatch(loadChat(messagedata));
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
