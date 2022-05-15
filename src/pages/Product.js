import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from 'react-bootstrap';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth:380,
        width: 380,
        border: 'solid silver 1px',
        borderRadius: 3,
        margin: 7,
        textAlign: "initial",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'black',
    },
    imgContainer: {
        height: 340,
        position: 'relative',
    },
    img: {
        width: '100%',
        height: '100%', 
        objectFit: 'cover',
    },
    title: {
        margin: '0px 16px',
        textAlign: "initial",
        color: "white",
        fontSize: 20,
        height: 42,
        paddingTop: 10,
        paddingLeft: 12,
        position: 'relative',
    },
    order: {
        cursor: 'pointer',
        backgroundColor: "black",
        border: 'solid #08a51b 2px',
        borderRadius: 3,
        fontSize: 24,
        paddingLeft: 7,

        fontFamily: "TTNorms Light",
        fontWeight: "bold",
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        textDecoration: "none",
        color: "green",
        padding: 7,
        marginLeft: 22,
        marginRight: 50,
        display: 'inline-block',
    },

    text: {
        color: "white",
        fontSize: 22,
        marginLeft: -84,
        
    },
    otherbg: {
        backgroundColor: "black",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    Button:{
        width: 35,
        border: "solid 2px white",
        background: "none",
        color: "white",
        textAlign: "center",
        borderRadius: 7, 
    }
    
}));

export default function Product(props) {
    const { product, addToCart} = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className={classes.root}>
            <div className={classes.imgContainer}>
                <img className={classes.img} src={product.src}/>
            </div>

            <div className={classes.otherbg}>
                <div className={classes.title}>
                    {product.name}
                    <Button 
                        style={{
                            width: 35, 
                            borderColor:"white", 
                            border:"solid 1px",  
                            background: "none",  
                        color: "white", 
                        textAlign: "center", 
                        borderRadius: 7,
                        position: 'absolute',
                        right: 8,
                        cursor: 'pointer',
                    }} 
                    // onClick={() => showMessage(product.name, <pre>{product.description}</pre>, product.src)}
                    onClick={() => setExpanded(!expanded)}
                    >
                        <text style={{color: "white", webkitTextSecurity: "disc"}}>...</text>
                    </Button>
                </div>
                <Collapse in={expanded} timeout="auto">
                    <Typography 
                        style={{
                            color: 'white',
                            padding: '12px 28px',
                        }}
                    >
                        {product.description}
                    </Typography>
                </Collapse>
                <div style={{position: 'relative', height: 60, paddingTop: 16}}>
                    <div className={classes.order} onClick={() => addToCart(product)}>В корзину  </div>
                    <span 
                        className={classes.text}
                        style={{
                            position: 'absolute',
                            right: 24,
                        }}
                    >
                        {product.price}₴
                    </span>
                </div>
            </div>
        </div>
    )
}