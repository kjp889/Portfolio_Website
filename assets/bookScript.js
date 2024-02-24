//===========TURN PAGES=================
const turnPageBtn = document.querySelectorAll('.nextprev_btn');

turnPageBtn.forEach((el, index) => {
	el.onclick = () => {
		const pageTurnId = el.getAttribute('data-page');
		const pageTurn = document.getElementById(pageTurnId);

		if(pageTurn.classList.contains('turn')){
			pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index
            }, 500);
		} else {
			pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index
            }, 500);
		}
	}
})

const pages = document.querySelectorAll('.book_page.page_right');
let totalPages = pages.length;
let pageNum = 0;

function reverseIndex(){
    pageNum--;
    if(pageNum < 0){
        pageNum = totalPages - 1;
    }
}

const rightCover = document.querySelector('.cover.cover_right');
const leftPage= document.querySelector('.book_page.page_left');

setTimeout(() => {
    rightCover.classList.add('turn');
}, 2100)

setTimeout(() => {
    rightCover.style.zIndex = -1;
}, 2800)

setTimeout(() => {
    leftPage.style.zIndex = 20;
}, 3200)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNum].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNum].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})
