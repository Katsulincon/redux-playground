export default function(state, action) {
  if (state === undefined) {
    return 0;
  }

  //handle action
  switch (action.type) {
    case 'INCREMENT':
      return state.count + 1;
    default:
      return state;
  }
}
