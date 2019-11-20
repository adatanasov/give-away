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

    let elements = document.getElementsByTagName("book");
    let books_markup = '';

    for (let i = 0; i < elements.length; i++) {
        let bookUrl = elements[i].getAttribute("bookUrl");
        let picUrl = elements[i].getAttribute("picUrl");
        let to = elements[i].getAttribute("to");
        books_markup += getBookMarkup(bookUrl, picUrl, to);
    }

    document.querySelector('.js-books-holder').innerHTML = books_markup;
    
})()