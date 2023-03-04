let booksArr = [{
    "author": "Douglas Crockford",
    "imageLink": "https://s1.livelib.ru/boocover/1000704615/200x305/546c/boocover.jpg",
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
    "imageLink": "https://m.media-amazon.com/images/I/91WlvEND3rL.jpg",
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
    "imageLink": "https://images.manning.com/book/a/b85f344-edd7-4833-adf3-d98878088441/resig.png",
    "title": "Secrets of the JavaScript Ninja",
    "price": 33,
    "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
}
]



//CREATE THE MAIN BLOCK
const main_content = document.createElement('div');
main_content.classList.add('main-content');

document.body.prepend(main_content)

//CREATE A HEADER

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

// CREATE THE BANNER

const banner = document.createElement('section');
banner.classList.add('banner-section');

const banner_info = document.createElement('div');
banner_info.classList.add('banner-info');

const banner_h3 = document.createElement('h3');
banner_h3.textContent = 'What book are you looking for?';

const banner_text1 = document.createElement('p');
banner_text1.textContent =
    "From bestselling blockbusters to hidden gems waiting to be discovered, our online book store has it all - so why wait? Start exploring today and find your next great read.";


const btn_explore_more = document.createElement('a');
btn_explore_more.textContent = 'Explore now';
btn_explore_more.classList.add('btn');
btn_explore_more.classList.add('btn-explore-more');
btn_explore_more.setAttribute('href', '#book-catalog');

const banner_img = document.createElement('img');
banner_img.setAttribute('src', '../../assets/images/Tea, Coffee, and Books.png');
banner_img.setAttribute('alt', 'girl reading book');

banner_info.appendChild(banner_h3);
banner_info.appendChild(banner_text1);
banner_info.appendChild(btn_explore_more);

banner.appendChild(banner_info);
banner.appendChild(banner_img);

main_content.appendChild(banner);

// CREATE CATALOG AND BAG

const bookshop = document.createElement('section');
bookshop.setAttribute('id', 'catalog-order');


const catalog = document.createElement('div');
catalog.setAttribute('id', 'book-catalog');

const catalog_h3 = document.createElement('h3');
catalog_h3.textContent = "Book catalog";
catalog.appendChild(catalog_h3);

// ADD BOOK CARD

(function () {
    for (let i = 0; i < booksArr.length; i++) {
        let data = booksArr[i];

        let book_card = document.createElement('div');
        book_card.classList.add('book-card');
        book_card.setAttribute('data-id', i);

        const img = document.createElement('img');
        img.setAttribute('src', data.imageLink);
        img.classList.add('img-book');

        const book_info = document.createElement('div');
        book_info.classList.add('book-info');

        const title = document.createElement('h4');
        title.textContent = data.title;

        const author = document.createElement('p');
        author.textContent = `by ${data.author}`;

        const price = document.createElement('h5');
        price.textContent = `$${data.price}`

        const btn_catalog = document.createElement('div');
        btn_catalog.classList.add('btn-catalog');

        const btn_showMore = document.createElement('span');
        btn_showMore.classList.add('btn');
        btn_showMore.classList.add('btn-show-more');
        btn_showMore.textContent = 'Show more';

        const btn_addToBag = document.createElement('span');
        btn_addToBag.classList.add('btn');
        btn_addToBag.textContent = 'Add to bag';

        btn_catalog.appendChild(btn_showMore);
        btn_catalog.appendChild(btn_addToBag);


        book_info.appendChild(title);
        book_info.appendChild(author);
        book_info.appendChild(price);
        book_info.appendChild(btn_catalog);


        book_card.appendChild(img);
        book_card.appendChild(book_info);
        catalog.appendChild(book_card);

        // book_card.addEventListener('click', clickPopup);
    }
})()


const order = document.createElement('div');
order.setAttribute('id', 'order');

const order_h3 = document.createElement('h3');
order_h3.textContent = 'Order books';
order.appendChild(order_h3);

bookshop.appendChild(catalog);
bookshop.appendChild(order);
main_content.appendChild(bookshop);














