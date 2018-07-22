import React from "react"
import PropTypes from "prop-types"
import {Button,Popconfirm,Table} from "antd"

const ProductList = ({onDelete,products})=>{
    const columns=[
        {
            title:"Name",
            dataIndex:"name"
        },
        {
            title:"操作",
            render:(text,record)=>{
                return (
                    <Popconfirm title="确认删除？" onComfirm={()=>onDelete(record.id)}>
                        <Button>删除</Button>
                    </Popconfirm>
                );
            }
        }
    ];
    return (
        <Table dataSource={products} columns={columns}>
    
        </Table>
    );

};

ProductList.propTypes={
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};
export default ProductList;