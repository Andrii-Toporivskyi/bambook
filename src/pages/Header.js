import React from 'react';
import { makeStyles } from '@mui/styles';
import { FaShoppingCart } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '12%'

    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        fontSize: 22,
        flexWrap: "wrap",

    },
    menuItem: {
        padding: 20,
        color: '#ffffff',
        cursor: 'pointer',
        "&:hover": {
            color: '#cccccc',
        },
    },
    logo: {
        width: 185,
        height: 60,
        objectFit: 'contain',
    },
    navbarButton: {
        color: 'white',
        marginLeft: 8,
    }
}))

function MenuItem(props) {
    const { title } = props;
    const classes = useStyles();

    return (
        <div className={classes.menuItem} onClick={props.onClick}>
            {title}
        </div>
    )
}




export default function Header(props) {
    const { showMessage, showSidebar, cart, cartOpen, setCartOpen } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className='fundament' style={{ color: "white", paddingTop: 10, fontSize: 24, backgroundColor: "#08a51b", paddingBottom: 10, letterSpacing: 4 }}>
               <p className='fundament'> Приймаємо замовлення з 12:00 до 21:00</p>
            </div>

            <div className={classes.header}>
                <div className='header' style={{ display: "flex", flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className='logo'>
                        <img className={classes.logo} src="image/logo.png" onClick={() => { window.location.href = "/home" }} />
                    </div>
                    <div className={classes.menuContainer}>
                        <MenuItem title="Головна" onClick={() => { window.location.href = "/home" }} />
                        <div class="dropdown">
                            <button class="dropbtn-menu">Меню</button>
                            <div class="dropdown-content">
                                <a onClick={() => { window.location.href = "/product" }}>Роли</a>
                                <a onClick={() => { window.location.href = "/Sets" }}>Сети</a>
                                <a onClick={() => { window.location.href = "/SushiGunk" }}>Суші і Гункани</a>
                                <a onClick={() => { window.location.href = "/Hotrolls" }}>Теплі роли</a>
                                <a onClick={() => { window.location.href = "/Drinks" }}>Напої</a>
                            </div>
                        </div>

                        {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:"white"}}>Меню</Button> 
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}  >
                    <MenuItem style={{paddind:32}} onClick={() => { window.location.href = "/product" }}>Роли</MenuItem>
                    <MenuItem onClick={handleClose}>Сети</MenuItem>
                    <MenuItem onClick={handleClose}>Суші і Гункани</MenuItem>
                    <MenuItem onClick={handleClose}>Теплі роли</MenuItem>
                    <MenuItem onClick={handleClose}>Напої</MenuItem>
                </Menu>  */}
                        <MenuItem
                            title="Доставка"
                            onClick={() => { window.location.href = "/home#delivery" }}
                        />
                        <MenuItem
                            title="Клубні карти" onClick={() => { window.location.href = "/promotions" }} />

                        <div style={{ flex: '1 1 auto' }} />
                        {/* <MenuItem
                        title={<a style={{ textDecoration: 'none', marginLeft:100 }} href="tel:+380669011818">+38(066)901 18 18</a>}
                    onClick={() => { window.location.href = ".delivery" }} 
                    /> */}


                        <div class="dropdown" >
                            <button class="dropbtn">Контакти</button>
                            <div class="dropdown-content2">
                                <a href="tel:+380669011818">+38(066)901 18 18</a>
                                <a href="tel:+380739011818">+38(073)901 18 18</a>
                                <a href="tel:+380689011818">+38(068)901 18 18</a>
                            </div>
                        </div>
                        {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:"white"}}>
                +38(068)901 18 18
                </Button>
                <Menu 
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>+38(073)901 18 18</MenuItem>
                    <MenuItem onClick={handleClose}>+38(066)901 18 18</MenuItem>

                </Menu> */}

                    </div>
                    <div className='cart' >
                        <FaShoppingCart onClick={() => { window.location.href = "/cartpages" }}/* onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} */ />
                    </div>

                    <div style={{ width: 161 }} />
                </div>
            </div>
        </React.Fragment>
    )
}