const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order['name'];
  const phone = order['phoneNumber']; 
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  // console.log(`Olá ${deliveryPerson}, entrega para: ${name}, telefone: ${phone}, rua ${street}, número ${number}, apartamento ${apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newPerson = order.name = 'Giorno Giovanna';
  const newValue = order.payment.total = '50';
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;

  console.log(`Olá ${newPerson}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é de R$ ${newValue},00.`);
}

orderModifier(order);
