import React, { Component } from "react"

// npm scripts
import * as jsSearch from "js-search"

// components
import FreebieList from "./freebieList"

class FreebieSearchInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      searchQuery: ``,
      searchResult: [],
    }

    this.freebies = [];
  }

  searchData = (event) => {
    const { search } = this.state;
    const searchQuery = event.target.value;
    const searchQueryResult = search.search(searchQuery);
    this.setState({ searchQuery,  searchResult: searchQueryResult });
  }

  componentDidMount() {
    const indexes = [
      'name',
      'url',
      'description',
      'personalComment'
    ];

    const jsSearchInstance = new jsSearch.Search("name");
    indexes.forEach(index => jsSearchInstance.addIndex(index));

    jsSearchInstance.addDocuments(this.freebies);

    this.setState({ search: jsSearchInstance });
  }

  render() {
    const { freebies } = this.props;
    const { searchQuery, searchResult } = this.state
    this.freebies = freebies;

    const searchResults = (searchQuery) ? searchResult : freebies;

    return (
    <section>
      <small>Search for freebie</small>
      <input className="freebie-search" onChange={ this.searchData } value={ searchQuery } />
      <FreebieList freebies={ searchResults } />
    </section>
    )
  }
}

export default FreebieSearchInterface;
