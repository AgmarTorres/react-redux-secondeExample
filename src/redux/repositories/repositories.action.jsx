export function getData(page) {
  return function(dispatch) {
    return fetch(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${page}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json, page: page });
      });
  };
}
