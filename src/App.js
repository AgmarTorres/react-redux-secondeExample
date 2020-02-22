import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Repository from './components/repository/repository.component'
import { connect } from "react-redux";
import { getData } from "./redux/repositories/repositories.action";
import './App.css';

class App extends React.Component {
  
componentDidMount() {
  const page = this.props.page ? this.props.page : 1;  
  this.props.getData(page);
}

fetchMoreData(){
  const page = this.props.page ? this.props.page : 1;  
  console.log(page)
  getData(parseInt(page)+1);
};

  render(){
    return (
      <div className="App">
      <h1 className="title"> Git Repositories</h1>
         {
            <InfiniteScroll
            dataLength={this.props.items.length}
            next={() =>{ this.props.getData(parseInt(this.props.page)+1);
            }}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>All repositories was apresented </b>
              </p>
            }
          >
            {this.props.items.map((item, index) => <Repository id={index} key={index} item={item}></Repository> )}
            </InfiniteScroll>
        }
    
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.repositories.items,
    page: state.repositories.page
  };
}

export default connect(
  mapStateToProps,
{ getData }
)(App);