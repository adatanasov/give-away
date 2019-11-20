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

    let elements = document.getElementsByTagName("book");
    let books_markup = '';

    for (let i = 0; i < elements.length; i++) {
        let bookUrl = elements[i].getAttribute("bookUrl");
        let picUrl = elements[i].getAttribute("picUrl");
        books_markup += getBookMarkup(bookUrl, picUrl);
    }

    document.querySelector('.js-books-holder').innerHTML = books_markup;
    
})()