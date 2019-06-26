import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { fetchCharacters } from '../actions';
class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <p>Fetching data from a galaxy far far away...</p>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => {
  return {
    fetching: charsReducer.fetching,
    characters: charsReducer.characters
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchCharacters
  }
)(CharacterListView);
