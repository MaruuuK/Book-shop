
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



