const initState = { userData: [], orgData: [], message: [] };

function FikaReducer(state = initState, action) {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, userData: action.payload };
    case "LOAD_ORG":
      return { ...state, orgData: action.payload };

    case "LOAD_CHAT":
      return { ...state, message: action.payload };

    default:
      return state;
  }
}

export default FikaReducer;
