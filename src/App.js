import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main/main'


import { connect } from "react-redux";
import { getData } from "./redux/repositories/repositories.action";

class App extends React.Component {
  constructor(props) {
  super(props);
  
}
  
componentDidMount() {
  this.props.getData();
}

  render(){
    return (
      <div className="App">
        <ul>
          {this.props.articles.map(el => (
            <li key={el.id}>{el.title}</li>
         ))}
      </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    articles: state.articles.remoteArticles.slice(0, 10)
  };
}


export default connect(
  mapStateToProps,
{ getData }
)(App);