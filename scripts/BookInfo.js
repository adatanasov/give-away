class BookInfo extends HTMLElement {

    constructor() {
        super();
    }
    
    connectedCallback() {
        const bookUrl = this.getAttribute("bookUrl");
        const picUrl = this.getAttribute("picUrl");
        const to = this.getAttribute("to");
        this.innerHTML = this.getBookMarkup(bookUrl, picUrl, to);
    }

    getBookMarkup (bookUrl, picUrl, to) {
        let gifted = to !== undefined && to !== null && to.length > 0;

        return `<span>
                    ${gifted ? `<span class="saved-overlay">ПОДАРЕНА</span> <!-- ${to} -->` : ''}
                    <a href="${bookUrl}" target="_blank">
                        <img class="${gifted ? 'saved ' : ''}book-img" src="${picUrl}" />
                    </a>
                    <br>
                    <a class="details-btn" href="${bookUrl}" target="_blank">Виж детайли</a>
                </span>`;
    }
}

customElements.define("book-info", BookInfo);