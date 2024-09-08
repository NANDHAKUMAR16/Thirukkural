const initialState = {
    singleKural: []
  };
  
  const kuralSlice = (state, action) => {
    console.log(action.payload);
    switch (action.type){
      case 'SET_KURAL':
        return {
          ...state,
          singleKural: action.payload
        };
      default:
        return state;
    }
  };
  
  export default kuralSlice;
  export { initialState };
  