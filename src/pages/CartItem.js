import React from "react";
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    item: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        margin: 10,
        justifyContent:'space-between',
        padding:'0px 10%',
        alignItems:'center', 
        columnGap:15,
    },
    name: {
        width: '300px',
        paddingTop: 4,
        fontWeight: 'bold',
        flex: '1 1 auto',
    },
    countButton: {
        border: 'solid 1px black',
        backgroundColor: 'white',
        borderRadius: 14,
        width: 14,
        padding: 6,
        fontWeight: 'bold',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: 'gray',
        }
    },
    countBlock: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        fontWeight: 'bold',


    },
    price: {
        width: 90,
        paddingTop: 4,
        fontWeight: 'bold',
        paddingLeft: 7,

    },
    deleteButton: {
        marginLeftt: 25,
        color: 'red',
        border: 'solid 1px black',
        borderRadius: 10,
        background: 'White',
        cursor: 'pointer',
        padding: 4,
        "&:hover": {
            background: 'gray',
        }

    },
}))

export default function CartItem(props) {
    const { item, updateItem, deleteItem } = props;
    const classes = useStyles();

    return (
        <div className={clsx(classes.item, {
            [classes.staticItem]: item.isStatic,
        })}>
            <div className="cart-img">
                <img  src={item.src} style={{ width: 200, height: 200, flex: '1 1 auto', borderRadius: 26 }} />
            </div>

            <div className={classes.name} style={{  flex: '1 1 auto',columnGap: 42}}>{item.name}</div>
            <div className={classes.price} >
                {item.price}
            </div>

            <div className={classes.countBlock} style={{ height: 41, display:'flex', columnGap:15 }}>

                <span
                    className={classes.countButton} style={{ color: "black", lineHeight: '22px' }}
                    onClick={() => {
                        item.count = Math.max(item.count - 1, 0);
                        updateItem(item);
                    }}
                >-</span>

                <span style={{ flex: '1 1 auto', paddingTop: '4px' }}>{item.count}</span>
                <span
                    className={classes.countButton} style={{ color: "black" }}
                    onClick={() => {
                        item.count = item.count + 1;
                        updateItem(item);
                    }}
                >+</span>
            </div>

            <div className="delete-button" style={{ width: 40, }}>
                <span
                    className={classes.deleteButton}
                    onClick={() => deleteItem(item)}
                >
                    X
                </span>
            </div>

        </div>
    )
}
