const videos = (state = [], action) => {
  switch (action.type) {
    case 'SET_VIDEOS':
      return [...action.payload];

    default:
      return state;
  }
};

export default videos;
