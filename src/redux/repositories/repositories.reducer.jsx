const initialState = {
    articles: [{id:1, title:1}],
    remoteArticles: []
  };
  
  function repositorieReducer(state = initialState, action) {
      if (action.type === 'ADD_ARTICLE') {
        return Object.assign({}, state, {
          articles: state.articles.concat(action.payload)
        });
      }
    
      if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      }
      return state;
    
    }

export default repositorieReducer