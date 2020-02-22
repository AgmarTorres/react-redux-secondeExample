const initialState = {
    repositories:[],
    items: [],
    page: 1,
    hasMore: true
  };
  
  function repositorieReducer(state = initialState, action) {
  
    
      if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
          repositories: state.repositories.concat(action.payload.repositories), 
          items: state.items.concat(action.payload.items),
          page: action.page
        });
      }
      return state;
    
    }

export default repositorieReducer