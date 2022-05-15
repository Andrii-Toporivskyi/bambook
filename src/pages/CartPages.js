import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CartItem from './CartItem';
import { textAlign } from '@mui/system';


const images = [
  {
    url: "image/slide1.jpg",
    title: 'Повернутись в меню',
    width: '40%',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    flexWrap: 'wrap',
    minWidth: 300,
    width: '67%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    border: "solid",
    fontSize: 22,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function CartPages(props) {
  const { isMobile } = props;
  const { cart, setCart } = props;
  console.log("cart", cart)

  const classes = useStyles();

  const updateItem = React.useCallback(item => {
    const newCart = cart.map(cartItem => {
      if (cartItem.name === item.name) {
        return { ...item }
      }
      return cartItem;
    })

    setCart(newCart);
  }, [cart])

  const deleteItem = React.useCallback(item => {
    setCart(cart.filter(cartItem => cartItem !== item));
  }, [cart])

  const sum = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.count, 0);

  return (
    <div className='cart-preview'>
      <div className='cart-title' style={{ color: "white", fontSize: 30, width: 360, margin: "auto", paddingBottom: 100, }}>
        КОШИК
      </div>
      <div className='border-cart' style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div className='cart-subtext' style={{ fontSize: 25, color: "white", width: '100%' }}>
          {Boolean(cart.length)
            ? cart.map(item => <CartItem  item={item} updateItem={updateItem} deleteItem={deleteItem}/>)
            : <span style={{ padding: 10 }}>Ваш кошик порожній.</span>
          }
        </div>
      </div>

      <div className='title-text-pages' style={{ padding: 8, marginTop: 20, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft:"7%", columnGap:15, marginRight:'7%' }}>
        <pre style={{ flex: '1 1 auto', textAlign: 'left', color: 'white', fontSize: 25 ,width:600}}>

          <div className='title-cart-' >
        <div style={{flex: '1 1 auto'}}></div>
        
            <div  >
            <p className='card-info'>Сума мінімального замовлення складає 200 грн </p>
            </div>
            <div style={{flex: '1 1 auto'}}></div>
            <div className='title-card-' style={{ textAlign: "left",flex: '1 1 auto',   }}>
              <p className='card-info'>Замовлення комплектується імбирем,<br></br>васабі та
              соєвим соусом з розрахунку 1 порція/1 рол.<br></br><br></br>
              Додаткові порції можна замовити у оператора,<br></br>
              або вказавши про це в коментарі до замовлення<br></br>
              </p>
            </div>

          </div>


        </pre>
        <div className='price-cart' style={{ color: "white", fontSize: 30, flex: '1 1 auto' }}>Загалом:</div>
        <div className='price-cart-red' style={{ color: "red", fontSize: 25, paddingTop: 6,flex: '1 1 auto' }}>{sum}₴</div>

        <button className='button-check' style={{ width: 225, background: "black", color: "white", border: "inset", fontSize: 22, height: 60, fontWeight: 600, cursor: "pointer", fontWeight: 600 }} onClick={() => window.location.href = "/checkout"}>Оформлення</button>
      </div>


    </div>

  );
}
