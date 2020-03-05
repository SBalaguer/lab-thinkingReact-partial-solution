import React, { Component } from 'react';
import SearchBar from './../SearchBar';
import ProductTable from './../ProductTable';
import { Container } from 'react-bootstrap';

export class FilterableProductTable extends Component {
  render() {
    return (
      <Container>
        <h1>Iron Store</h1>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </Container>
    );
  }
}

export default FilterableProductTable;
