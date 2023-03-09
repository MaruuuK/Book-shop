//GENERAL
function createElement(tagName, text, className) {
    let element = document.createElement(tagName);
    element.textContent = text;
    if (className !== undefined) {
        element.classList.add(className);
    }
    return element;
}

function appendChildren(element, ...children) {
    for (let child of children) {
        element.appendChild(child);
    }
    return element;
}



//CREATE THE MAIN BLOCK
const main_content = document.createElement('main');

document.body.prepend(main_content);

//HEADER

(function () {
    const header = createElement('h1');
    const a = document.createElement('a');
    a.setAttribute('href', '../../pages/main/index.html');
    a.appendChild(createElement('span', 'Book', 'word-1'));
    a.appendChild(createElement('span', 'Shop', 'word-2'));

    header.appendChild(a);
    main_content.appendChild(header);
})();


//ORDER FORM

const form = document.createElement('form');
form.setAttribute('id', 'order-form');

form.appendChild(
    createElement('h3', 'Order form'));

//Gift
const gift = document.createElement('div');
gift.classList.add('gift-section');

const gift_head = document.createElement('span');
gift_head.textContent = 'Choose 2 gifts ';

const gift1 = document.createElement('div');
gift1.classList.add('gift-item');

const input_packing = document.createElement('input');
input_packing.setAttribute('type', 'checkbox');
input_packing.setAttribute('id', 'packing');
input_packing.setAttribute('name', 'gift');
input_packing.setAttribute('value', 'pack as a gift');

const label_packing = document.createElement('label');
label_packing.setAttribute('for', 'packing');
label_packing.textContent = 'Pack as a gift';

const gift2 = document.createElement('div');
gift2.classList.add('gift-item');

const input_postcard = document.createElement('input');
input_postcard.setAttribute('type', 'checkbox');
input_postcard.setAttribute('id', 'postcard');
input_postcard.setAttribute('name', 'gift');
input_postcard.setAttribute('value', 'add postcard');

const label_postcard = document.createElement('label');
label_postcard.setAttribute('for', 'postcard');
label_postcard.textContent = 'Add postcard';

const gift3 = document.createElement('div');
gift3.classList.add('gift-item');

const input_discount = document.createElement('input');
input_discount.setAttribute('type', 'checkbox');
input_discount.setAttribute('id', 'discount');
input_discount.setAttribute('name', 'gift');
input_discount.setAttribute('value', 'provide 2% discount to the next time');

const label_discount = document.createElement('label');
label_discount.setAttribute('for', 'discount');
label_discount.textContent = 'Provide 2% discount to the next time';

const gift4 = document.createElement('div');
gift4.classList.add('gift-item');

const input_pen = document.createElement('input');
input_pen.setAttribute('type', 'checkbox');
input_pen.setAttribute('id', 'pen');
input_pen.setAttribute('name', 'gift');
input_pen.setAttribute('value', 'branded pen or pencil');

const label_pen = document.createElement('label');
label_pen.setAttribute('for', 'discount');
label_pen.textContent = 'Branded pen or pencil';

//COMPLETE BTN

const complete_btn = document.createElement('button');
complete_btn.setAttribute('type', 'submit');
complete_btn.textContent = 'Complete';
complete_btn.classList.add('btn');

//APPEND ELEMENTS
form.appendChild(
    createField('name',
        createLabel('name', 'name'),
        createInput('name', 'text', 'field'),
    )
);

form.appendChild(
    createField('surname',
        createLabel('surname', 'surname'),
        createInput('surname', 'text', 'field'),
    )
);

form.appendChild(
    createField('delivery-date',
        createLabel('delivery-date', 'delivery date'),
        createInput('delivery-date', 'date'))
);

form.appendChild(
    createField('street',
        createLabel('street', 'street'),
        createInput('street', 'text', 'field')
    )
);

form.appendChild(
    createField('house',
        createLabel('house', 'house'),
        createInput('house', 'text', 'field'),
    )
);

form.appendChild(
    createField('flat',
        createLabel('flat', 'flat'),
        createInput('flat', 'text', 'field'),
    )
);

form.appendChild(
    createField('payment-method',
        createHeader('payment method'),
        createRadioList('payment-method', [{ label: 'cash', value: 'cash' }, { label: 'card', value: 'card' }]))
)

form.appendChild(
    createField('gift',
        createHeader('Choose 2 gifts'),
        createCheckboxList('gift',[
            { label: 'Pack as a gift', value: 'pack' },
            { label: 'Add postcard', value: 'postcard' },
            { label: 'Provide 2% discount to the next time', value: 'discount' },
            { label: 'Branded pen or pencil', value: 'pencil' }
        ]))
)

form.appendChild(complete_btn);

main_content.appendChild(form);


function createField(id, label, input) {
    let field = document.createElement('div');
    field.setAttribute('id', 'field-' + id);

    appendChildren(field, label, input);
    return field;
}

function createInput(id, type, className) {
    let input = document.createElement('input');
    input.setAttribute('id', 'input-' + id);
    input.setAttribute('name', id);
    input.setAttribute('type', type);
    if (className !== undefined) {
        input.classList.add('field');
    }
    return input;
}

function createLabel(id, text) {
    let label = document.createElement('label');
    label.setAttribute('for', 'input-' + id);
    label.textContent = text;
    return label;
}

function createHeader(text) {
    let header = document.createElement('span');
    header.textContent = text;
    header.classList.add('list-header');
    return header;
}

function createRadioList(name, items) {
    let radio = document.createElement('div');
    for (let i = 0; i < items.length; i++) {
        const radioElement = document.createElement('div');
        radioElement.classList.add('radio-item');

        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('id', `radio-${name}-${i}`);
        input.setAttribute('name', name);
        input.setAttribute('value', items[i].value);

        const label = document.createElement('label');
        label.textContent = items[i].label;
        label.setAttribute('for', `radio-${name}-${i}`);

        appendChildren(radioElement, input, label);
        radio.appendChild(radioElement);
    }
    return radio;
}

function createCheckboxList(name, items) {
    let checkbox = document.createElement('div');
    for (let i = 0; i < items.length; i++) {
        const checkboxElement = document.createElement('div');
        checkboxElement.classList.add('checkbox-item');

        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', `checkbox-${name}-${i}`);
        input.setAttribute('name', name);
        input.setAttribute('value', items[i].value);

        const label = document.createElement('label');
        label.textContent = items[i].label;
        label.setAttribute('for', `checkbox-${name}-${i}`);

        appendChildren(checkboxElement, input, label);
        checkbox.appendChild(checkboxElement);
    }
    return checkbox;
}