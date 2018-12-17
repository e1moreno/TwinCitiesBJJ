const KEY_ENTER = 13;
const KEY_SPACE = 32;

export default (event, action) => {
  event.stopPropagation();

  switch (event.which) {
    case KEY_ENTER:
    case KEY_SPACE:
      action();
      break;
    default:
      break;
  }
};
