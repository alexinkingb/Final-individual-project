const nav = document.querySelector('.navigation');

nav.addEventListener('click', function (event) {
    // on which element the click was
    let clickTarget = event.target;
    
    let header = document.querySelector('.header');
    let main_info = document.querySelector('.main-info');
    let main__news_block = document.querySelector('.main__news-block');
    let about_the_authors = document.querySelector('.about-the-authors');
    let news_text__desc_1 = document.querySelector('.news-text__desc-1');
    let news_text__desc_2 = document.querySelector('.news-text__desc-2');
    let news_text__desc_3 = document.querySelector('.news-text__desc-3');

    // searching an element with a class 'active-border' in the iPhone card
    // let activeButtonColor = iPhone.querySelector('.active-border');

    // creating a variable for a pack color
    // let packColor = iPhone.querySelector('.pack');

    // the FUNCTION of the colour changing
    if (clickTarget.classList.contains('themetoggle') && 
        !clickTarget.classList.contains('dark')) {
            clickTarget.classList.add('dark');
    }

    // the FUNCTION of the changing of gigobites-button colour
    if (clickTarget.classList.contains('themetoggle') && 
        clickTarget.classList.contains('dark')) {
            header.classList.add('header-dark');
            header.classList.remove('header');
            
            main_info.classList.add('main-info-dark');
            main_info.classList.remove('main-info');
            
            main__news_block.classList.add('main__news-block-dark');
            main__news_block.classList.remove('main__news-block');
            
            about_the_authors.classList.add('about-the-authors-dark');
            about_the_authors.classList.remove('about-the-authors');

            news_text__desc_1.classList.add('.news-text__desc-1-dark');
            news_text__desc_1.classList.remove('.news-text__desc-1');

            news_text__desc_2.classList.add('.news-text__desc-2-dark');
            news_text__desc_2.classList.remove('.news-text__desc-2');

            news_text__desc_3.classList.add('.news-text__desc-3-dark');
            news_text__desc_3.classList.remove('.news-text__desc-3');
    }

    
})