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

const fragment = document.createDocumentFragment();

//HEADER

(function () {
    const header = createElement('h1');
    const a = document.createElement('a');
    a.setAttribute('href', '../../pages/main/index.html');
    a.appendChild(createElement('span', 'Book', 'word-1'));
    a.appendChild(createElement('span', 'Shop', 'word-2'));

    header.appendChild(a);
    fragment.appendChild(header);
})();


//ORDER FORM
const form = document.createElement('form');
form.setAttribute('id', 'order-form');

form.appendChild(
    createElement('h3', 'Order form'));

//APPEND ELEMENTS

form.appendChild(
    createField('name',
        createLabel('name', 'name'),
        createInput('name', 'text'),
        {
            event: 'blur',
            requiredCheck: true,
            callback: function (input) {
                if (input.value.length < 4) {
                    return 'The length of name should be not less than 4 symbols';
                }
                if (/[\d\s]/.test(input.value)) {
                    return 'Name cannot contain numbers and spaces';
                }
            },
        }
    )
);

form.appendChild(
    createField('surname',
        createLabel('surname', 'surname'),
        createInput('surname', 'text'),
        {
            event: 'blur',
            requiredCheck: true,
            callback: function (input) {
                if (input.value.length < 5) {
                    return 'The length of surname should be not less than 5 symbols';
                }
                if (/[\d\s]/.test(input.value)) {
                    return 'Surname cannot contain numbers and spaces';
                }
            },
        }
    )
);

form.appendChild(
    createField('delivery-date',
        createLabel('delivery-date', 'delivery date'),
        createInput('delivery-date', 'date'),
        {
            event: 'blur',
            requiredCheck: true,
            callback: function (input) {
                if (input.value === '') {
                    return 'Delivery date cannot be empty';
                }
                if (new Date(input.value) <= new Date()) {
                    return 'Delivery date cannot be earlier than tomorrow';
                }
            },
        }
    )
);

form.appendChild(
    createField('street',
        createLabel('street', 'street'),
        createInput('street', 'text'),
        {
            event: 'blur',
            requiredCheck: true,
            callback: function (input) {
                if (input.value.length < 5) {
                    return 'The length of street should be not less than 5 symbols';
                }
            },
        }
    )
);

form.appendChild(
    createField('house',
        createLabel('house', 'house'),
        createInput('house', 'text'),
        {
            event: 'blur',
            requiredCheck: true,
            callback: function (input) {
                if (input.value === '') {
                    return 'House cannot be empty';
                }
                const houseInt = input.value * 1;
                if (isNaN(houseInt) || houseInt < 0) {
                    return 'House can contain only positive numbers';
                }
            },
        }
    )
);

form.appendChild(
    createField('flat',
        createLabel('flat', 'flat'),
        createInput('flat', 'text'),
        {
            event: 'blur',
            requiredCheck: true,
            callback: function (input) {
                if (input.value === '') {
                    return 'Flat cannot be empty';
                }
                if (!/^\d+(-\d+)*$/.test(input.value)) {
                    return 'Flat can contain only positive numbers with dashes';
                }
            },
        }
    )
);

form.appendChild(
    createField('payment-method',
        createHeader('payment method'),
        createRadioList('payment-method', [{ label: 'cash', value: 'cash' }, { label: 'card', value: 'card' }]),
        {
            event: 'change',
            requiredCheck: true,
            callback: function (input) {
                if (input.querySelector('input:checked') === null) {
                    return 'You must choose payment method';
                }
            },
        }
    )
)

form.appendChild(
    createField('gift',
        createHeader('Choose 2 gifts'),
        createCheckboxList('gift', [
            { label: 'Pack as a gift', value: 'pack' },
            { label: 'Add postcard', value: 'postcard' },
            { label: 'Provide 2% discount to the next time', value: 'discount' },
            { label: 'Branded pen or pencil', value: 'pencil' }
        ]),
        {
            event: 'change',
            requiredCheck: false,
            callback: function (input) {
                if (input.querySelectorAll('input:checked').length > 2) {
                    return 'You can choose only 2 gifts';
                }
            },
        }
    )
)

//COMPLETE BTN
const complete_btn = document.createElement('button');
complete_btn.setAttribute('type', 'submit');
complete_btn.setAttribute('disabled', 'disabled');
complete_btn.textContent = 'Complete';
complete_btn.classList.add('btn');
form.appendChild(complete_btn);

fragment.appendChild(form);

complete_btn.addEventListener('click',
    function () {
        const popup_msg = document.createElement('div');
        popup_msg.setAttribute('class', 'popup-window');

        const btn_back = document.createElement('a');
        btn_back.setAttribute('href', '../../pages/main/index.html');
        btn_back.classList.add('btn');
        btn_back.classList.add('back');
        btn_back.textContent = 'back to catalog';

        appendChildren(popup_msg,
            createElement('h3', 'Order has been created successfully!'),
            createElement('p', `The delivery address is ${sum_info.street} street house ${sum_info.house} flat ${sum_info.flat}.`),
            createElement('p', `Customer ${sum_info.name} ${sum_info.surname}.`),
            btn_back);

        fragment.appendChild(popup_msg);

        let body = document.querySelector('body');

        body.classList.add('overlay');
        popup_msg.classList.add('open');
    });

//FUNCTIONS TO CREATE ELEMENTS
function createField(id, label, input, validator) {
    let field = document.createElement('div');
    field.setAttribute('id', 'field-' + id);
    field.classList.add('field');

    if (validator.requiredCheck) {
        field.classList.add('not-checked');
    }

    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');

    input.addEventListener(validator.event, function () {
        let error = validator.callback(input);
        if (error === undefined) {
            sum_info[id] = input.value;
            field.classList.remove('invalid');
            errorMessage.innerHTML = '';
        } else {
            field.classList.add('invalid');
            errorMessage.innerHTML = error;
        }

        field.classList.remove('not-checked');
        form.dispatchEvent(new Event('validate'));
    });

    appendChildren(field, label, input, errorMessage);
    return field;
}

function createInput(id, type) {
    let input = document.createElement('input');
    input.setAttribute('id', 'input-' + id);
    input.setAttribute('name', id);
    input.setAttribute('type', type);
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

form.addEventListener('validate', function () {
    if (form.querySelectorAll('.field.invalid, .field.not-checked').length) {
        complete_btn.setAttribute('disabled', 'disabled');
    } else {
        complete_btn.removeAttribute('disabled');
    }
})

//SUMMARIZED INFORMATION

let sum_info = {};

const popup_msg = document.createElement('div');
popup_msg.setAttribute('class', 'popup-window');

form.addEventListener('submit', e => {

    const btn_back = document.createElement('a');
    btn_back.setAttribute('href', '../../pages/main/index.html');
    btn_back.classList.add('btn');
    btn_back.classList.add('back');
    btn_back.textContent = 'back to catalog';

    appendChildren(popup_msg,
        createElement('h3', 'Order has been created successfully!'),
        createElement('p', `The delivery address is ${sum_info.street} street house ${sum_info.house} flat ${sum_info.flat}.`),
        createElement('p', `Customer ${sum_info.name} ${sum_info.surname}.`),
        btn_back);



    document.querySelector('body').classList.add('overlay');
    popup_msg.classList.add('open');
    e.preventDefault();
});

fragment.appendChild(popup_msg);
main_content.appendChild(fragment);