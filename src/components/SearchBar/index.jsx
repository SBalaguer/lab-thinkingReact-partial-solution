import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class SearchBar extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="search"
            placeholder="Search Products"
            name="searchQuery"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Display only products on Stock"
            name="displayInStockProducts"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar;
