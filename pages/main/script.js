let booksArr = [{
    "author": "Douglas Crockford",
    "imageLink": "https://s1.livelib.ru/boocover/1000315672/200x305/4e4b/boocover.jpg",
    "title": "JavaScript: The Good Parts: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
},
{
    "author": "David Herman",
    "imageLink": "https://m.media-amazon.com/images/I/416VUkOt3QL.jpg",
    "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "price": 22,
    "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
},
{
    "author": "David Flanagan",
    "imageLink": "https://m.media-amazon.com/images/I/718DC5KZiZL.jpg",
    "title": "JavaScript: The Definitive Guide",
    "price": 40,
    "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
},
{
    "author": " Eric Elliott",
    "imageLink": "https://m.media-amazon.com/images/I/71MoeDs395L._AC_UF1000,1000_QL80_.jpg",
    "title": "Programming JavaScript Applications",
    "price": 19,
    "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
},
{
    "author": "Addy Osmani",
    "imageLink": "https://rukminim1.flixcart.com/image/416/416/jzn0tjk0/book/7/0/7/learning-javascript-design-patterns-original-imafjhf397f8ynby.jpeg?q=70",
    "title": "Learning JavaScript Design Patterns",
    "price": 32,
    "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
},
{
    "author": "Boris Cherny",
    "imageLink": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4920/9781492037651.jpg",
    "title": "Programming TypeScript",
    "price": 28,
    "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
},
{
    "author": "Alex Banks, Eve Porcello",
    "imageLink": "https://raw.githubusercontent.com/MoonHighway/learning-react/second-edition/learning-react.jpg",
    "title": "Learning React, 2nd Edition",
    "price": 25,
    "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
},
{
    "author": "Bradley Meck Alex Young and Mike Cantelon",
    "imageLink": "https://deals.manning.com/wp-content/uploads/2019/06/Cantelon-Node-2ed.jpg",
    "title": "Node.js in Action",
    "price": 38,
    "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
},
{
    "author": "Kyle Simpson",
    "imageLink": "https://m.media-amazon.com/images/I/61sAMmSyhZL._AC_UF1000,1000_QL80_.jpg",
    "title": "You Don't Know JS Yet: Get Started",
    "price": 26,
    "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
},
{
    "author": "John Resig and Bear Bibeault",
    "imageLink": "https://m.media-amazon.com/images/I/71OcrNWJv3L._AC_UF1000,1000_QL80_.jpg",
    "title": "Secrets of the JavaScript Ninja",
    "price": 33,
    "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
}
]

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

//BANNER

(function () {
    const banner = document.createElement('section');
    banner.setAttribute('id', 'banner-section');

    const banner_info = document.createElement('div');
    banner_info.classList.add('banner-info');

    banner_info.appendChild(createElement('h3', 'What book are you looking for?'));
    banner_info.appendChild(
        createElement('p', "From bestselling blockbusters to hidden gems waiting to be discovered, our online book store has it all - so why wait? Start exploring today and find your next great read."));

    const btn_explore_more = document.createElement('a');
    btn_explore_more.textContent = 'Explore now';
    btn_explore_more.classList.add('btn');
    btn_explore_more.classList.add('btn-explore-more');
    btn_explore_more.setAttribute('href', '#book-catalog');

    const banner_img = document.createElement('img');
    banner_img.setAttribute('src', '../../assets/images/Tea, Coffee, and Books.png');
    banner_img.setAttribute('alt', 'girl reading book');

    banner_info.appendChild(btn_explore_more);

    appendChildren(banner, banner_info, banner_img);

    main_content.appendChild(banner);
})();

// CATALOG AND BAG

const bookshop = document.createElement('section');
bookshop.setAttribute('id', 'catalog-order');


const catalog = document.createElement('div');
catalog.setAttribute('id', 'book-catalog');

const catalog_h3 = document.createElement('h3');
catalog_h3.textContent = "Book catalog";
catalog.appendChild(catalog_h3);

// ADD BOOK CARD

for (let i = 0; i < booksArr.length; i++) {
    let data = booksArr[i];

    const book_card = document.createElement('div');
    book_card.classList.add('book-card');

    const cover = document.createElement('img');
    cover.setAttribute('src', data.imageLink);
    cover.classList.add('img-book');
    cover.setAttribute('draggable', 'true');
    cover.setAttribute('data-id', i);

    cover.addEventListener('dragstart', function (e) {
        let idCard = e.currentTarget.dataset.id;
        e.dataTransfer.setData('id', idCard);
        order.classList.add('drop-field');
        drop_text.style.display = 'block';
    });

    cover.addEventListener('dragend', function () {
        order.classList.remove('drop-field');
        drop_text.style.display = 'none';
    });

    const book_info = document.createElement('div');
    book_info.classList.add('book-info');

    const btn_catalog = document.createElement('div');
    btn_catalog.classList.add('btn-catalog');

    const btn_showMore = document.createElement('span');
    btn_showMore.classList.add('btn');
    btn_showMore.classList.add('btn-show-more');
    btn_showMore.textContent = 'Show more';
    btn_showMore.setAttribute('data-id', i);

    const btn_addToBag = document.createElement('span');
    btn_addToBag.classList.add('btn');
    btn_addToBag.textContent = 'Add to bag';
    btn_addToBag.setAttribute('data-id', i);

    appendChildren(btn_catalog, btn_showMore, btn_addToBag);

    appendChildren(book_info,
        createElement('h4', data.title),
        createElement('p', `by ${data.author}`),
        createElement('span', `$${data.price}`, 'price'),
        btn_catalog);

    appendChildren(book_card, cover, book_info);

    catalog.appendChild(book_card);

    btn_showMore.addEventListener('click',
        function (e) {
            let idCard = e.currentTarget.dataset.id;
            title_description.innerHTML = booksArr[idCard].title;
            author_description.innerHTML = `by ${booksArr[idCard].author}`;
            description.innerHTML = booksArr[idCard].description;
            price_description.innerHTML = `$${booksArr[idCard].price}`;
            body.classList.add('overlay');
            popup.classList.add('open');
        });

    btn_addToBag.addEventListener('click', function (e) {
        let idCard = e.currentTarget.dataset.id;
        bag.push({ ...booksArr[idCard] });
        displayCart()
    });
}

// ADD TO CART
let bag = [];

function displayCart() {
    let totalSum = 0;
    if (bag.length === 0) {
        cartItems.innerHTML = "Your bag is empty";
        cartItems.classList.add('cart-text');
        sum.innerHTML = `$ ${totalSum.toFixed(2)}`;
        btn_confirm.removeAttribute('href');
        btn_confirm.classList.add('disabled');
    } else {
        cartItems.classList.remove('cart-text');
        btn_confirm.setAttribute('href', '../../pages/order/index.html');
        btn_confirm.classList.remove('disabled');
        cartItems.innerHTML = "";
        for (let i = 0; i < bag.length; i++) {
            totalSum += bag[i].price;
            sum.innerHTML = `$ ${totalSum.toFixed(2)}`;

            const bagItem = document.createElement('div');
            bagItem.classList.add("book-card");

            const imageBag = document.createElement('img');
            imageBag.setAttribute('src', bag[i].imageLink);
            imageBag.classList.add('img-book');

            const btn_delete_item = document.createElement('span');
            btn_delete_item.classList.add('btn-del');
            btn_delete_item.setAttribute('data-id', i);

            btn_delete_item.addEventListener('click', function (e) {
                let idCard = e.currentTarget.dataset.id;
                bag.splice(idCard, 1);
                displayCart();
            });

            const book_info = document.createElement('div');
            book_info.classList.add('book-info');

            appendChildren(book_info,
                createElement('h4', bag[i].title),
                createElement('p', `by ${bag[i].author}`),
                createElement('span', `$${bag[i].price}`, 'price'),
            );

            appendChildren(bagItem, btn_delete_item, imageBag, book_info);

            cartItems.appendChild(bagItem);
        }
    }
}

//ORDER BOOKS

const order = document.createElement('div');
order.setAttribute('id', 'order');

const drop_text = document.createElement('span');
drop_text.setAttribute('class', 'drop-text');
drop_text.textContent = 'Drop here';

const cartItems = document.createElement('div');
cartItems.innerHTML = "Your bag is empty";
cartItems.classList.add('cart-text');

const total_price = document.createElement('div');
total_price.classList.add('total-price');

const sum = document.createElement('span');
sum.textContent = '$ 0.00';
sum.classList.add('total-sum');

appendChildren(total_price,
    createElement('span', 'Total', 'total-text'),
    sum);


const btn_confirm = document.createElement('a');
btn_confirm.classList.add('btn-confirm-order');
btn_confirm.classList.add('btn');
btn_confirm.textContent = 'Confirm order';
btn_confirm.classList.add('disabled');

appendChildren(order,
    createElement('h3', 'Order books'),
    cartItems,
    total_price,
    btn_confirm,
    drop_text
)


//DRAG AND DROP
order.addEventListener('dragover', (e) => {
    e.preventDefault();
})

order.addEventListener('drop', function (e) {
    bag.push({ ...booksArr[e.dataTransfer.getData('id')] });
    displayCart();
    order.classList.remove('drop-field');
    drop_text.style.display = 'none';
});

//POPUP

const popup = document.createElement('div');
popup.setAttribute('class', 'popup-window');

const btn_close = document.createElement('span');
btn_close.classList.add('btn-close');

const book_description = document.createElement('div');
book_description.classList.add('book-description');

const title_description = document.createElement('h4');

const author_description = document.createElement('p');
author_description.classList.add('author');

const description = document.createElement('p');
description.classList.add('description');

const price_description = document.createElement('span');
price_description.classList.add('price');

appendChildren(book_description,
    title_description,
    author_description,
    description,
    price_description);

appendChildren(popup, btn_close, book_description);

btn_close.addEventListener('click', closeOverlay);


//OVERLAY

let body = document.querySelector('body');

function closeOverlay() {
    body.classList.remove('overlay');
    popup.classList.remove('open');
}

body.addEventListener('click', function (e) {
    if (e.target.nodeName === 'BODY') {
        closeOverlay();
    }
});

window.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
        closeOverlay();
    }
});

appendChildren(bookshop, catalog, popup, order);

main_content.appendChild(bookshop);









