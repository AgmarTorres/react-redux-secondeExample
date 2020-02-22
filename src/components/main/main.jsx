import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../redux/repositories/repositories.action";


export class Main extends Component {
  constructor(props) {
    super(props);
  }

  
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
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
)(Main);

