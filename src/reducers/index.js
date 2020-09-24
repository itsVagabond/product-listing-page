import {
    FETCH_FILTERS,
    FETCH_FILTERS_SUCCESS,
    FETCH_FILTERS_FAILURE,

    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,

    FETCH_FILTERED_PRODUCTS
} from "../constants";

const defaultState = {
    filters: {
        pending: null,
        error: null,
        data: null
    },
    products: {
        pending: null,
        error: null,
        data: null
    },
    filteredProducts: null
}

export default function reducer(state = defaultState, action) {
    const { type, payload } = action;
    switch(type) {
        case FETCH_FILTERS: return {
            ...state,
            filters: {
                pending: true,
                error: false,
                data: null
            }
        };
        case FETCH_FILTERS_SUCCESS: return {
            ...state,
            filters: {
                pending: false,
                error: false,
                data: payload
            }
        };
        case FETCH_FILTERS_FAILURE: return {
            ...state,
            filters: {
                pending: false,
                error: payload,
                data: null
            }
        };
        case FETCH_PRODUCTS: return {
            ...state,
            products: {
                pending: true,
                error: false,
                data: null
            }
        };
        case FETCH_PRODUCTS_SUCCESS: return {
                ...state,
                products: {
                    pending: false,
                    error: false,
                    data: payload
                },
                filteredProducts: payload
            };
        case FETCH_PRODUCTS_FAILURE: return {
            ...state,
            products: {
                pending: false,
                error: payload,
                data: null
            }
        };
        case FETCH_FILTERED_PRODUCTS: {
            let filteredProducts;
            const { data } = state.products;

            if(payload.length === 0) {
                filteredProducts = data;
            } else {
                filteredProducts = data.filter(res => payload.indexOf(res.CategoryName) > -1);
            }
            
            return {
                ...state,
                filteredProducts
            };

        }
        default: return state;
    }
}