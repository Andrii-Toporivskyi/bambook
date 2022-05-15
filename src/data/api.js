import uuidv1 from 'uuid/v1';

export async function payment(data, orderNumber){
    console.log("data", data)
    const sum = data.cart.reduce((sum, item) => sum + parseFloat(item.price) * item.count, 0);

    var wayforpay = new window.Wayforpay(); 	

	return new Promise((resolve, reject) => {
        wayforpay.run(
            { 			
                	
                merchantAccount : "bambook_lviv_ua4", 				
                merchantDomainName : "bambook.lviv.ua", 				
                authorizationType : "SimpleSignature", 				
                merchantSignature : "a47da6c4ac8e70eb44186b0adef2d0bc26d268d6", 				
                orderReference : `${orderNumber}`, 				
                orderDate : (new Date()).getTime(), 				
                amount : `${sum}`, 				
                currency : "UAH", 				
                productName : "Оплата замовлення", 				
                productPrice : `${sum}`, 					
                productCount : "1", 				
                clientFirstName : data.name, 				
                clientLastName : data.lastName, 				
                clientEmail : "", 				
                clientPhone: data.phone, 				
                language: "UA" 			
            }, 			
            function (response) {
                resolve("approved"); // on approved				 			
            }, 			
            function (response) {
                resolve("declined"); // on declined 			
            }, 			
            function (response) {
                resolve("pending"); // on pending or in processing 			
            } 		
        ); 	
    })
}

async function getToken() {
    const response = await fetch("https://loyalty.syrve.live/api/0/auth/access_token?user_id=Bambooksushi&user_secret=Bambooksushi2022", {
        method: 'GET',
    });

    const token = await response.text();
    return token.substring(1, token.length - 1);
}

function getDate() {
    var dt = new Date();
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset())
    return dt.toISOString().substring(0, 19).replace("T", " ");
}

export async function sendOrder(data) {
    const token = await getToken();
    console.log("token", token);
    const url = `https://loyalty.syrve.live/api/0/orders/add?access_token=${token}&request_timeout=0:0:30`;


    let comment = data.comment;
    if (data.noCall){
        comment = comment + "\nНе перезвонювати";
    }
    if (data.restFrom){
        comment = comment + `\nПотрібна решта з: ${data.restFrom}`;
    }
    comment = comment + `\n${data.sitePay ? 'Оплата на сайті' : 'Оплата готівкою'}`

    const orderData = {
        organization: "0ba20000-29b3-b8cb-d586-08da29156598",
        deliveryTerminalId: "a7349d2b-c80c-a3f8-0180-7013b164640c",
        customer: {
            id: uuidv1(),
            name: data.name,
            phone: data.phone,
        },
        order: {
            id: uuidv1(),
            phone: data.phone,
            isSelfService: "false",
            address: {
                city:"Львів",
                street: data.street,
                home: data.home,
            },
            date: getDate(),
            personsCount: 1,
            items: data.cart.map(item => ({
                id: item.id,
                name: item.name,
                amount: item.count,
                modifiers: [{
                    groupId: 'd1365834-d01b-4f36-a2d5-83aaacdf2b90',
                    id: 'c28aaf12-367a-4856-8e36-6c00b669d6e1',
                    amount: 1,
                    groupName: 'Додаткові товари',
                    name: "МОД/Серветки сухі",
                }]

            })),
            comment,
        }
    }

    console.log("orderData", orderData);

    return await fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
    })
}

export async function processOrder(data){
    const response = await sendOrder(data);
    if (response.ok){
        const responseData = await response.json();

        const orderNumber = responseData.number;
        if (data.sitePay){
            const paymentResponse = await payment(data, orderNumber);
            if (paymentResponse === 'approved') {
                return true;
            }
        } else {
            return true;
        }
    }
}