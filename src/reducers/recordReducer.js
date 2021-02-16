export const initialState = {
  current: '#FF0000',
  before: [],
  after: [],
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'UNDO':
      return { 
        ...state, 
        after: [state.current, ...state.after],
        current: state.before[state.before.length - 1], 
        before: state.before.slice(0, -1)
      };
    case 'REDO':
      return { 
        ...state,
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slice(1)
      };
    case 'RECORD':
      return { ...state, 
        before: [...state.before, state.current], 
        current: action.payload };
    default:
      return state;
  }
};
