import React, { Component } from "react"
import * as jsSearch from "js-search"

import CategoryGrid from "./categoryGrid"

import "./categoryGridSearchEngine.scss"

class CategorySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      searchQuery: ``,
      searchResult: [],
    }

    this.categories = {}
  }

  // it's an arrow function to bind it into the parent class
  searchData = (event) => {
    const { search } = this.state;
    const searchQuery = event.target.value;
    const searchQueryResult = search.search(searchQuery);
    this.setState({ searchQuery,  searchResult: searchQueryResult });
  }

  componentDidMount() {
    const indexes = [
      'name',
      'mainColor',
      'children',
      'description',
      'iconName',
    ]
    // setting up the search engine
    const jsSearchInstance = new jsSearch.Search("name");
    jsSearchInstance.indexStrategy = new jsSearch.AllSubstringsIndexStrategy()

    indexes.forEach(index => jsSearchInstance.addIndex(index));
    jsSearchInstance.addDocuments(Object.values(this.categories));

    this.setState({ search: jsSearchInstance });
  }

  render() {
    const { categories } = this.props;
    const { searchQuery, searchResult } = this.state;
    const searchResults = (searchQuery) ? searchResult : Object.values(this.categories);
    this.categories = categories;

    return (
      <section>
        <small>Search for category</small>
        <input className="category-search" onChange={ this.searchData } value={ searchQuery } tabIndex="2" />
        <CategoryGrid categories={ searchResults }/>
      </section>
    )
  }
}

export default CategorySearch;
