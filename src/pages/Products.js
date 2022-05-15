import React from 'react';
import products from '../data/products.json';
import Product from './Product';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: "row",
        margin: '0px 10%',
        justifyContent: "center"
    }
    
    
    }
));

export default function Products(props) {
    const { addToCart, showMessage } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {products.map(product => <Product product={product} addToCart={addToCart} showMessage={showMessage}/>)}
        </div>
    )
}