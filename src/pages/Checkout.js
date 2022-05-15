import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Radio, FormControlLabel } from '@material-ui/core';
import { processOrder } from '../data/api';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch'


        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
            color: "white"
        },

    },
}));

export default function Checkout(props) {
    const { cart, setCart } = props;

    const classes = useStyles();
    const [noCall, setNoCall] = React.useState(false);
    const [sitePay, setSitePay] = React.useState(true);

    const [name, setName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [street, setStreet] = React.useState("");
    const [entrance, setEntrance] = React.useState("");
    const [apartment, setApartment] = React.useState("");
    const [home, setHome] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [birthday, setBirthday] = React.useState("");
    const [restFrom, setRestFrom] = React.useState("");

    const getData = () => {
        let dob = birthday;
        if (dob.length === 10) {
            dob = `${dob.substring(8, 10)}-${dob.substring(5, 7)}-${dob.substring(0, 4)}`
        }

        return {
            name,
            lastName,
            phone,
            street,
            entrance,
            apartment,
            home,
            comment,
            birthday: dob,
            restFrom,
            noCall,
            sitePay,
            cart,
        }
    }

    const process = async () => {
        if (await processOrder(getData())) {
            setCart([]);
        }
    }

    return (
        <div className='checkout-menu' >
            <div className='zakaz-design' style={{ color: 'white', fontSize: 32, paddindTop: 15, paddingBottom: 50 }}>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</div>
            <div className='checkoutbg' style={{ borderBottom: "2px ", borderColor: "white", background: "white", marginLeft: "12%", marginRight: "12%", width: "78%" }}>


                <form className={classes.root} noValidate autoComplete="off" style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, width: "100%", fontSize: 27, paddindTop: 54 }}>
                    <TextField id="standard-basic" label="Ім'я" value={name} onChange={e => setName(e.target.value)} />

                    <TextField id="standard-basic" label="Телефон" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+38..." />
                    <TextField id="standard-basic" label="Назва вулиці" value={street} onChange={e => setStreet(e.target.value)} />

                </form>
                <form className={classes.root} noValidate autoComplete="off" style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, width: "100%", fontSize: 27, }}>
                    <TextField id="standard-basic" label="Під'їзд/корпус" value={entrance} onChange={e => setEntrance(e.target.value)} />
                    <TextField id="standard-basic" label="Квартира/офіс" value={apartment} onChange={e => setApartment(e.target.value)} />
                    <TextField id="standard-basic" label="Будинок" value={home} onChange={e => setHome(e.target.value)} />
                    <TextField id="standard-basic" label="Коментар до замовлення / Кількість паличок" value={comment} onChange={e => setComment(e.target.value)}/* placeholder="Кількість паличок" */ />
                    <TextField
                        id="date"
                        label="День Народження"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                    />
                </form>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' , justifyContent:"center", flexWrap:'wrap' }}>
                <div>
                    <div className='title-order' style={{ color: "white", paddingTop: 34, paddingBottom: 15, textAlign: "left", marginLeft: "15%", fontSize: 25 }}>
                        <p className='title-order'>Не потрібне підтвердження замовлення -</p>
                        <Checkbox style={{ color: "white" }}
                            label="Test"
                            checked={noCall}
                            onChange={e => setNoCall(e.target.checked)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                    <div>
                        <p style={{ color: "white", fontSize: 25 }}>
                            Оберіть спосіб оплати:
                        </p>
                    </div>


                    <div style={{ color: "white", marginLeft: '2%', paddingTop: 10 }}>


                        <FormControlLabel
                            control={
                                <GreenRadio
                                    checked={sitePay}
                                    onChange={e => setSitePay(true)}
                                    value="c"
                                    label="Start"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'C' }}
                                />
                            }
                            label="Оплата на сайті"
                        />
                        <FormControlLabel
                            control={
                                <GreenRadio
                                    checked={!sitePay}
                                    onChange={e => setSitePay(false)}
                                    value="c"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'C' }}
                                />
                            }
                            label="Оплата готівкою"
                        />
                        <TextField style={{ backgroundColor: "white", paddindTop: 17, marginLeft: 30 }} value={restFrom} onChange={e => setRestFrom(e.target.value)} label="Необхідна решта з:" />
                    </div>
                </div>
                <div style={{ paddingTop: '4%',}}>
                    <button className='button-done' onClick={process}>Підтвердити замовлення</button>
                </div>
            </div>




        </div>



    );
}
