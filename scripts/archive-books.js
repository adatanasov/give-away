(() => {
    'use strict'

    function getBookMarkup (bookUrl, picUrl, to) {
        return `<span class="book-wrapper">
                    <span class="saved-overlay">ПОДАРЕНА</span> <!-- ${to} -->
                    <a href="${bookUrl}" target="_blank">
                        <img class="saved" style="height: 400px;"  src="${picUrl}" />
                    </a>
                    <br>
                    <a class="details-btn" href="${bookUrl}" target="_blank">Виж детайли</a>
                </span>`
    }

    let books = [
        { "bookUrl": "https://www.goodreads.com/book/show/44420517", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552458877l/44420517._SY400_.jpg", "to": "bibi" },
        { "bookUrl": "https://www.goodreads.com/book/show/42525694", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1540811475l/42525694._SY400_.jpg", "to": "kosta" },
        { "bookUrl": "https://www.goodreads.com/book/show/11219658", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1303810386l/11219658._SY400_.jpg", "to": "gogo" },
        { "bookUrl": "https://www.goodreads.com/book/show/34218533", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1486751252l/34218533._SY400_.jpg", "to": "krasi" },
        { "bookUrl": "https://www.goodreads.com/book/show/21075609", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401541299l/21075609._SY400_.jpg", "to": "misho" },
        { "bookUrl": "https://www.goodreads.com/book/show/15756255", "picUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342531486l/15756255._SY400_.jpg", "to": "krasi" }
    ];

    let books_markup = '';
    books.forEach((book) => {
        books_markup += getBookMarkup(book.bookUrl, book.picUrl, book.to);
    });

    document.querySelector('.js-books-holder').innerHTML = books_markup;
    
})()