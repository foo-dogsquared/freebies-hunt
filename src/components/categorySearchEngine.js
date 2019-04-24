import React, { Component } from "react"
import CategoryGrid from "./categoryGrid"
import * as jsSearch from "js-search"

class CategorySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      searchList: [],
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
    console.log(searchQuery, searchQueryResult);
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
        <input onChange={ this.searchData } value={ searchQuery }/>
        <CategoryGrid categories={ searchResults }/>
      </section>
    )
  }
}

export default CategorySearch;
