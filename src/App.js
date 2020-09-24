import React, { Component } from 'react';
import './App.css';
import { Row } from 'antd';
import { connect } from "react-redux"
import {
  fetchFilters,
  fetchFiltersSuccess,
  fetchFiltersFailure,

  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,

  fetchFilteredProducts
} from "./actions";
import { fetchFiltersByAPI, fetchProductsByAPI } from "./mockAPICalls";
import ProductCard from "./components/ProductCard";
import CategoryInput from "./components/CategoryInput";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilters: []
    }
  }

  componentDidMount() {
    this.props.getFilters();
    this.props.getProducts();
  }

  onChangeCategory = (event) => {
    const { checked, id } = event.target;

    if (!checked) {
      this.setState((state) => {
        const { selectedFilters } = state;
        const index = selectedFilters.indexOf(id);
        selectedFilters.splice(index, 1);

        return {
          ...state,
          selectedFilters
        };
      }, () => this.props.getFilteredProducts(this.state.selectedFilters));
      return;
    }

    this.setState((state) => {
      const { selectedFilters } = state;
      selectedFilters.push(id);

      return {
        ...state,
        selectedFilters
      };
    }, () => this.props.getFilteredProducts(this.state.selectedFilters));
  }

  render() {
    const { filters, filteredProducts } = this.props;
    const { selectedFilters } = this.state;

    return (
      <div className="main">
        <div className="categories">
          <h1>FILTERS</h1>
          {
            filters.data &&
            filters.data.map(filter => 
              <CategoryInput filter={filter} flag={selectedFilters.indexOf(filter.CategoryName) <= -1} onChangeCategory={this.onChangeCategory} />
            )
          }
        </div>
        <div className="cards">
          <h1>PRODUCTS ({filteredProducts && filteredProducts.length})</h1>
          <Row gutter={16}>
            {
              filteredProducts &&
              filteredProducts.map((prod) => <ProductCard product={prod} />)
            }
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilters: async () => {
      dispatch(fetchFilters());

      try {
        const response = await fetchFiltersByAPI();
        dispatch(fetchFiltersSuccess(response));
      } catch (err) {
        console.error(err);
        dispatch(fetchFiltersFailure(err));
      }
    },
    getProducts: async () => {
      dispatch(fetchProducts());

      try {
        const response = await fetchProductsByAPI();
        dispatch(fetchProductsSuccess(response));
      } catch (err) {
        console.error(err);
        dispatch(fetchProductsFailure(err));
      }
    },
    getFilteredProducts: (selectedFilters) => dispatch(fetchFilteredProducts(selectedFilters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
