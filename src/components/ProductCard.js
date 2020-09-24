import React, { Component } from "react";
import { Card, Col } from 'antd';

export default class ProductCard extends Component {
    render() {
        const { product } = this.props;
        return (
            <Col span={8}>
                <Card key={product.ProductID} title={product.ProductID} bordered style={{ margin: "1vw", overflow: "scroll" }}>
                    {product.CategoryName}
                </Card>
            </Col>
        );
    }
}