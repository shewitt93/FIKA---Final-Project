const initState = { name: "User", games: [] };

function HabitReducer(state = initState, action) {
  let idx;
  switch (action.type) {
    case "LOAD_NAME":
      return { ...state, name: action.payload };
    case "LOAD_ACTIVITIES":
      return { ...state, habits: action.payload };
    case "DELETE_HABIT":
      const newHabits = [
        ...state.habits.slice(0, action.payload),
        ...state.habits.slice(action.payload + 1),
      ];
      return { ...state, habits: newHabits };

    case "ADD_STREAK":
      // let id2 = state.user.habits[action.payload].streak;
      let updatedHabit = state.user.habits[action.payload];
      updatedHabit.streak += 1;
      // let updatedStreak = state.user.habits[action.payload].streak += 1;
      const EditedList = [
        ...state.user.habits.slice(0, action.payload),
        updatedHabit,
        ...state.user.habits.slice(action.payload + 1),
      ];
      const newUser = state.user;
      newUser.habits = EditedList;
      return { ...state, user: newUser };
    // case 'ADD_STREAK_ALL':
    // let id3 = state.user.habits.streak;
    // let updatedStreakAll = state.user.habits.streak += 1;
    // const EditedListAll = [
    //   ...state.user.habits.slice(0, id3),
    //   updatedStreakAll,
    //   ...state.user.habits.slice(id3 + 1),
    // ];
    // return { ...state, all: EditedListAll };
    default:
      return state;
  }
}

export default HabitReducer;
