import React, { Component } from "react";

export default class CategoryInput extends Component {
    render() {
        const { filter, flag, onChangeCategory } = this.props;
        return (
            <span key={filter.CategoryId} className={flag ? "categoryName" : "categoryNameSelected"}>
                <label htmlFor={filter.CategoryName}>
                    <input type="checkbox" name="category" id={filter.CategoryName} onChange={onChangeCategory} />
                    {filter.CategoryName}
                </label>
            </span>
        );
    }
}