import faker from 'faker';

let cartString = `<div>You have ${faker.datatype.number(10)} item in your cart.</div>`;

document.querySelector('#cart-list').innerHTML = cartString;