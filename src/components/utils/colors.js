export const getBackground = (type) => {
  switch (type) {
    case 'fire':
      return '#FD7D24';
      break;
    case 'grass':
      return '#7FFFD4';
      break;
    case 'water':
      return '#4592C4';
      break;
    case 'electric':
      return '#EED535';
      break;
    default:
      return '#ffb';
  }
};

export const getTitle = (type) => {
  switch (type) {
    case 'fire':
      return '#fff';
      break;
    default:
      return '#222';
  }
};
