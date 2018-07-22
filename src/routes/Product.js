import React from "react";
import { connect } from "dva"
import ProductList from '../components/ProductList'

const Products = ({dispatch,products}) => {
    function handlerDelete(id){
        dispatch({
            type: 'products/delete',
            payload: id
        });
    }
    return(
        <div>
            <h2>产品列表</h2>
            <ProductList onDelete={handlerDelete} products={products}></ProductList>
        </div>
    )
};
//export default connect((products)=>({products}))(Products);
export default connect(({ products }) => ({
    products,
  }))(Products);