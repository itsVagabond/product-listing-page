import {
    fetchFilters,
    fetchFiltersSuccess,
    fetchFiltersFailure,

    fetchProducts,
    fetchProductsSuccess,
    fetchProductsFailure
} from "../actions";
import { fetchFiltersByAPI, fetchProductsByAPI } from "../mockAPICalls";

export const getFilters = async (dispatch) => {
    dispatch(fetchFilters());

    try {
        const response = await fetchFiltersByAPI();
        dispatch(fetchFiltersSuccess(response));
    } catch (err) {
        console.error(err);
        dispatch(fetchFiltersFailure(err));
    }
};

export const getProducts = async (dispatch) => {
    dispatch(fetchProducts());

    try {
        const response = await fetchProductsByAPI();
        dispatch(fetchProductsSuccess(response));
    } catch (err) {
        console.error(err);
        dispatch(fetchProductsFailure(err));
    }
};