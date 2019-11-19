(() => {
    'use strict'

    function getBookMarkup (bookUrl, picUrl) {
        return `<span class="book-wrapper">
                    <a href="${bookUrl}" target="_blank">
                        <img style="height: 400px;" src="${picUrl}" />
                    </a>
                    <br>
                    <a class="details-btn" href="${bookUrl}" target="_blank">Виж детайли</a>
                </span>`
    }

    let books = [
        { "bookUrl": "https://www.goodreads.com/book/show/44428132", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552556883l/44428132._SY400_.jpg" },
        { "bookUrl": "https://www.goodreads.com/book/show/39345484", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1521719318l/39345484._SY400_.jpg" },
        { "bookUrl": "https://www.goodreads.com/book/show/23346490", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435515337l/23346490._SY400_.jpg" },
        { "bookUrl": "https://www.goodreads.com/book/show/17553446", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1376381888l/17553446._SY400_.jpg" }
    ];

    let books_markup = '';
    books.forEach((book) => {
        books_markup += getBookMarkup(book.bookUrl, book.picUrl);
    });

    document.querySelector('.js-books-holder').innerHTML = books_markup;
    
})()