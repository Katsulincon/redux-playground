export default function(state = 0, action) {

  //handle action
  switch (action.type) {
    case 'INCREMENT':
      return state.count + 1;
    default:
      return state;
  }
}
