//CREATE THE MAIN BLOCK
const main_content = document.createElement('div');
main_content.classList.add('main-content');

document.body.prepend(main_content)

//HEADER

const header = document.createElement('header');
const h1 = document.createElement('h1');
const h1_span1 = document.createElement('span');
const h1_span2 = document.createElement('span');

h1_span1.textContent = 'Book';
h1_span2.textContent = 'Shop';

h1_span1.classList.add('word-1');
h1_span2.classList.add('word-2');

h1.appendChild(h1_span1);
h1.appendChild(h1_span2);

header.appendChild(h1);
main_content.appendChild(header);


//ORDER FORM

const form = document.createElement('form');
form.setAttribute('id', 'order-form');

const header_form = document.createElement('h3');
header_form.textContent = 'Order form';

//NAME
const name_form = document.createElement('div');
name_form.classList.add('name');

const label_name = document.createElement('label');
label_name.setAttribute('for', 'name');
label_name.textContent = 'Name ';

const input_name = document.createElement('input');
input_name.setAttribute('type', 'text');
input_name.setAttribute('name', 'name');
input_name.setAttribute('id', 'name');
input_name.setAttribute('required', '');

//SURNAME
const surname = document.createElement('div');
surname.classList.add('surname');

const label_surname = document.createElement('label');
label_surname.setAttribute('for', 'surname');
label_surname.textContent = 'Surname '

const input_surname = document.createElement('input');
input_surname.setAttribute('type', 'text');
input_surname.setAttribute('id', 'surname');
input_surname.setAttribute('name', 'surname');
input_surname.setAttribute('required', '');

//DELIVERY DAY
const delivery_day = document.createElement('div');
delivery_day.classList.add('delivery-day');

const label_date = document.createElement('label');
label_date.setAttribute('for', 'date-input');
label_date.textContent = 'Delivery date ';

const input_date = document.createElement('input');
input_date.setAttribute('type', 'date');
input_date.setAttribute('id', 'date-input');
input_date.setAttribute('name', 'date');
input_date.setAttribute('required', '');

//STREET
const street = document.createElement('div');
street.classList.add('street');

const label_street = document.createElement('label');
label_street.setAttribute('for', 'street');
label_street.textContent = 'Street ';

const input_street = document.createElement('input');
input_street.setAttribute('type', 'text');
input_street.setAttribute('name', 'street');
input_street.setAttribute('id', 'street');
input_street.setAttribute('required', '');

//HOUSE
const house = document.createElement('div');
house.classList.add('house');

const label_house = document.createElement('label');
label_house.setAttribute('for', 'house');
label_house.textContent = 'House ';

const input_house = document.createElement('input');
input_house.setAttribute('type', 'text');
input_house.setAttribute('name', 'house');
input_house.setAttribute('id', 'house');
input_house.setAttribute('required', '');

//FLAT
const flat = document.createElement('div');
flat.classList.add('house');

const label_flat = document.createElement('label');
label_flat.setAttribute('for', 'flat');
label_flat.textContent = 'Flat number ';

const input_flat = document.createElement('input');
input_flat.setAttribute('type', 'text');
input_flat.setAttribute('name', 'flat');
input_flat.setAttribute('id', 'flat');
input_flat.setAttribute('required', '');

//Payment method
const payment_method = document.createElement('div');
payment_method.classList.add('payment');

const payment_head= document.createElement('span');
payment_head.textContent = 'Payment method ';

const label_cash = document.createElement('label');
label_cash.textContent = 'Cash ';
label_cash.setAttribute('for', 'cash');

const input_cash = document.createElement('input');
input_cash.setAttribute('type', 'radio');
input_cash.setAttribute('id', 'cash');
input_cash.setAttribute('name', 'cashOrcardGroup');
input_cash.setAttribute('value', 'cash');
input_cash.setAttribute('required', '');

const label_card = document.createElement('label');
label_card.textContent = 'Card ';
label_card.setAttribute('for', 'card');

const input_card = document.createElement('input');
input_card.setAttribute('type', 'radio');
input_cash.setAttribute('id', 'card');
input_card.setAttribute('name', 'cashOrcardGroup');
input_card.setAttribute('value', 'card');

//Gift
const gift = document.createElement('div');
gift.classList.add('gift-section');

const gift_head = document.createElement('span');
gift_head.textContent = 'Choose 2 gifts ';

const input_packing = document.createElement('input');
input_packing.setAttribute('type', 'checkbox');
input_packing.setAttribute('id', 'packing');
input_packing.setAttribute('name', 'gift');
input_packing.setAttribute('value', 'pack as a gift');

const label_packing = document.createElement('label');
label_packing.setAttribute('for', 'packing');
label_packing.textContent = 'Pack as a gift';

const input_postcard = document.createElement('input');
input_postcard.setAttribute('type', 'checkbox');
input_postcard.setAttribute('id', 'postcard');
input_postcard.setAttribute('name', 'gift');
input_postcard.setAttribute('value', 'add postcard');

const label_postcard = document.createElement('label');
label_postcard.setAttribute('for', 'postcard');
label_postcard.textContent = 'Add postcard';

const input_discount = document.createElement('input');
input_discount.setAttribute('type', 'checkbox');
input_discount.setAttribute('id', 'discount');
input_discount.setAttribute('name', 'gift');
input_discount.setAttribute('value', 'provide 2% discount to the next time');

const label_discount = document.createElement('label');
label_discount.setAttribute('for', 'discount');
label_discount.textContent = 'Provide 2% discount to the next time';

const input_pen = document.createElement('input');
input_pen.setAttribute('type', 'checkbox');
input_pen.setAttribute('id', 'pen');
input_pen.setAttribute('name', 'gift');
input_pen.setAttribute('value', 'branded pen or pencil');

const label_pen = document.createElement('label');
label_pen.setAttribute('for', 'discount');
label_pen.textContent = 'Branded pen or pencil';

//APPEND ELEMENTS
form.appendChild(header_form);

name_form.appendChild(label_name);
name_form.appendChild(input_name);
form.appendChild(name_form);


surname.appendChild(label_surname);
surname.appendChild(input_surname);
form.appendChild(surname);

delivery_day.appendChild(label_date);
delivery_day.appendChild(input_date);
form.appendChild(delivery_day);

street.appendChild(label_street);
street.appendChild(input_street);
form.appendChild(street);

house.appendChild(label_house);
house.appendChild(input_house);
form.appendChild(house);

flat.appendChild(label_flat);
flat.appendChild(input_flat);
form.appendChild(flat);


payment_method.appendChild(payment_head);
payment_method.appendChild(input_cash);
payment_method.appendChild(label_cash);
payment_method.appendChild(input_card);
payment_method.appendChild(label_card);

form.appendChild(payment_method);

gift.appendChild(gift_head);
gift.appendChild(input_packing);
gift.appendChild(label_packing);
gift.appendChild(input_postcard);
gift.appendChild(label_postcard);
gift.appendChild(input_discount);
gift.appendChild(label_discount);
gift.appendChild(input_pen);
gift.appendChild(label_pen);

form.appendChild(gift);

main_content.appendChild(form);