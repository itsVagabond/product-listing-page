import {
    FETCH_FILTERS,
    FETCH_FILTERS_SUCCESS,
    FETCH_FILTERS_FAILURE,

    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,

    FETCH_FILTERED_PRODUCTS
} from "../constants";

export function fetchFilters() {
    return {
        type: FETCH_FILTERS,
    }
}

export function fetchFiltersSuccess(payload) {
    return {
        type: FETCH_FILTERS_SUCCESS,
        payload
    }
}

export function fetchFiltersFailure(payload) {
    return {
        type: FETCH_FILTERS_FAILURE,
        payload
    }
}

export function fetchProducts() {
    return {
        type: FETCH_PRODUCTS,
    }
}

export function fetchProductsSuccess(payload) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload
    }
}

export function fetchProductsFailure(payload) {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload
    }
}

export function fetchFilteredProducts(payload) {
    return {
        type: FETCH_FILTERED_PRODUCTS,
        payload
    }
}