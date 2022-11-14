// actions

const CHECK = 'CHECK';

// reducer

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
}

// action creator for check category

export const checkStatus = () => ({
  type: CHECK,
});
