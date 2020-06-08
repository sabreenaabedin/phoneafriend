/*eslint-disable*/
import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';

const searchClient = algoliasearch('GZ8KQTAT6T', '703ac21cdbe53afa5221672363c84cfb');

const Hit = ({hit}) =>
  <div className="hit">
      <div className = "hitName">
        {hit.name}
      </div>
  </div>

const Content = () =>
  <div className = "content">
    <Hits hitComponent = {Hit}/>
  </div>

class App extends Component {
  render() {
    return(
      <InstantSearch searchClient={searchClient} indexName="test_phoneafriend_query_suggestions">
        <header>
          <SearchBox translations = {{placeholder:'Search'}}/>
        </header>
        <main>
          <Content/>
        </main>
      </InstantSearch>
    )
  }
};

export default App;
