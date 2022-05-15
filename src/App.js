import './App.css';
import React from 'react';
import Header from './pages/Header';
import Message from './pages/Message';
import Products from './pages/Products';
import useLocalStorageState from './utils/useLocalStorageState';
import Footer from './pages/Footer';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Sets from './pages/Sets';
import Home from './pages/Home';
import Promotions from './pages/Promotions';
import News from './pages/News';
import Hotrolls from './pages/Hotrolls';
import Drinks from './pages/Drinks';
import SushiGunk from './pages/SushiGunk';
import CartPages from './pages/CartPages';
import Checkout from './pages/Checkout'


/* import 'bootstrap/dist/css/bootstrap.min.css'; */
/* import { Button } from 'react-bootstrap'; */
/* import { NaviBar } from './components/Navibar'; */
/* import { Switch } from '@mui/material'; */
/* import { Route } from 'react-router-dom'; */

// import ParticlesBackground from './components/ParticlesBackground';


function App() {
    const [windowDimenion, detectHW] = React.useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }

    React.useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [])

    const isMobile = windowDimenion.winWidth < 600;

    const history = useHistory();

    const [message, setMessage] = React.useState();
    const [cart, setCart] = useLocalStorageState("myStorage", "cart", []);
    const [sidebar, setSidebar] = React.useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [cartOpen, setCartOpen] = React.useState(false)

    const showMessage = React.useCallback((title, content, img, width) => setMessage({ title, content, img, width }));
    const addToCart = React.useCallback(product => {
        let newCart = [...cart];
        const existing = newCart.find(item => item.name === product.name);
        if (existing) {
            existing.count++;
        } else {
            newCart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                count: 1,
                src: product.src,
            })
        }
        setCart(newCart);
    }, [cart])



    return (
        <div className="App">
            <Router>
            <Header showMessage={showMessage} showSidebar={showSidebar} cart={cart} cartOpen={cartOpen} setCartOpen={setCartOpen} />
                <div className='content'>

                    <Switch>
                        <Route path="/sets">
                            <Sets addToCart={addToCart} showMessage={showMessage} />
                        </Route>
                        <Route path="/product">
                            <Products addToCart={addToCart} showMessage={showMessage} />
                        </Route>
                        <Route path="/sushigunk">
                            <SushiGunk addToCart={addToCart} showMessage={showMessage} />
                        </Route>
                        <Route path="/promotions">
                            <Promotions />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/hotrolls">
                            <Hotrolls addToCart={addToCart} showMessage={showMessage} />
                        </Route>
                        <Route path="/drinks">
                            <Drinks addToCart={addToCart} showMessage={showMessage} />
                        </Route>
                        <Route path="/cartpages">
                            <CartPages cart={cart} setCart={setCart} />
                        </Route>
                        <Route path="/checkout">
                            <Checkout cart={cart} setCart={setCart} />
                        </Route>
                        <Route path="/">
                            <Home isMobile={isMobile} />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
                {Boolean(message) &&
                    <Message {...message} close={() => setMessage()} />

                }
                {cartOpen &&
                    <Cart cart={cart} setCart={setCart} />
                }

            </Router>


        </div>
    )
}

export default App;
