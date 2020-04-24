import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import DisplayData from "../components/DisplayData";
import { fetchData } from "../actions";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  aside {
    min-width: 35vh;
    display: flex;
    justify-content: flex-end;
  }
  main {
    flex: 1 0 350px;
    ${"" /* not responsive */} padding: 0 5rem;
  }
`;

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { title, subtitle, paragraphs } = this.props.data;
    const countTotal = this.props.data.numberOfRecommends;
    return (
      <StyledApp>
        <main>
          {this.props.isLoadingData ? (
            "Loading . . ."
          ) : (
            <DisplayData
              title={title}
              subtitle={subtitle}
              paragraphs={paragraphs}
            />
          )}
        </main>
      </StyledApp>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(App);
