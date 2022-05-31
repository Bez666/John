const body = document.body;

const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');

const divHeader = document.createElement('div');
divHeader.classList.add('header');

const divContainerHeader = document.createElement('div');
divContainerHeader.classList.add('header__container');
divContainerHeader.classList.add('_container-header');

const divHeaderBox = document.createElement('div');
divHeaderBox.classList.add('header-box');
const a1 = document.createElement('a');
a1.classList.add('header__link');
a1.href = 'childrens/works/works.html';
a1.textContent = `Works`;

const a2 = document.createElement('a');
a2.classList.add('header__link');
a2.href = 'childrens/blog/blog.html';
a2.textContent = `Blog`;

const a3 = document.createElement('a');
a3.classList.add('header__link');
a3.classList.add('header__link_noMargin');
a3.classList.add('header__link_active');
a3.href = 'childrens/contact/contact.html';
a3.textContent = `Contact`;

const main = document.createElement('main');
main.classList.add('content');

const sectionCard = document.createElement('section');
sectionCard.classList.add('card');
const cardContainer = document.createElement('div');
cardContainer.classList.add('card__container');
cardContainer.classList.add('_container');

const cardBlock = document.createElement('div');
cardBlock.classList.add('card-block');

const cardBlockProfile = document.createElement('div');
cardBlockProfile.classList.add('card-block__profile');

const cardText = document.createElement('div');
cardText.classList.add('profile__text');

const profileTitle = document.createElement('h1');
profileTitle.classList.add('profile__title');
profileTitle.textContent =
    `Hi, I am John, Creative Technologist`;

const profileSubtitle = document.createElement('p');
profileSubtitle.classList.add('profile__subtitle');
profileSubtitle.textContent =
    `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`;

const profileImage = document.createElement('div');
profileImage.classList.add('profile__image');

const profilePhoto = document.createElement('img');
profilePhoto.classList.add('profile__photo');
profilePhoto.src = 'https://i.ibb.co/7C0f2z8/photo.jpg';

const cardBlockButton = document.createElement('div');
cardBlockButton.classList.add('card-block__button');

const button = document.createElement('a');
button.classList.add('button');
button.download;
button.href = '../file.txt';
button.textContent = 'Download Resume';

const sectionRecent = document.createElement('section');
sectionRecent.classList.add('recent');

const recentContainer = document.createElement('div');
recentContainer.classList.add('recent__container');
recentContainer.classList.add('_container');

const recentBlock = document.createElement('div');
recentBlock.classList.add('recent-block');

const recentBlockTop = document.createElement('div');
recentBlockTop.classList.add('recent-block__top');

const recentBlockTopLeft = document.createElement('h2');
recentBlockTopLeft.classList.add('top__left');
recentBlockTopLeft.textContent = `Recent posts`;

const recentBlockTopRight = document.createElement('a');
recentBlockTopRight.classList.add('top__right');
recentBlockTopRight.textContent = `View all`;
recentBlockTopRight.href = '#';

const recentBlockBottom = document.createElement('div');
recentBlockBottom.classList.add('recent-block__bottom');

const bottom = document.createElement('div');
bottom.classList.add('bottom');

const recentTitle = document.createElement('h2');
recentTitle.classList.add('recent__title');
recentTitle.textContent = 
    `Making a design system from scratch`;

const bottomDate = document.createElement('div');
bottomDate.classList.add('bottom-date');

const date = document.createElement('div');
date.classList.add('date');
date.textContent = 
    `12 Feb 2020`;

const span = document.createElement('div');
span.classList.add('span');

const dateProfession = document.createElement('div');
dateProfession.classList.add('date__profession');
dateProfession.textContent = 
    `Design, Pattern`;

const bottomText = document.createElement('p');
bottomText.classList.add('bottom__text');
bottomText.textContent = 
    `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`;

const bottomTwo = document.createElement('div');
bottomTwo.classList.add('bottom');
bottomTwo.classList.add('bottom__right');

const recentTitleTwo = document.createElement('h2');
recentTitleTwo.classList.add('recent__title');
recentTitleTwo.textContent = 
    `Creating pixel perfect icons in Figma`;

const bottomDateTwo = document.createElement('div');
bottomDateTwo.classList.add('bottom-date');

const dateTwo = document.createElement('div');
dateTwo.classList.add('date');
dateTwo.textContent = 
    `12 Feb 2020`;

const spanTwo = document.createElement('div');
spanTwo.classList.add('span');

const dateProfessionTwo = document.createElement('div');
dateProfessionTwo.classList.add('date__profession');
dateProfessionTwo.textContent = 
    `Figma, Icon Design`;

const bottomTextTwo = document.createElement('p');
bottomTextTwo.classList.add('bottom__text');
bottomTextTwo.textContent = 
    `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`;

const sectionFeatured = document.createElement('section');
sectionFeatured.classList.add('featured');

const featuredContainer = document.createElement('div');
featuredContainer.classList.add('featured__container');
featuredContainer.classList.add('_container');

const featuredBlock = document.createElement('div');
featuredBlock.classList.add('featured-block');

const featuredBlockTitle = document.createElement('h2');
featuredBlockTitle.classList.add('featured-block__title');
featuredBlockTitle.textContent = `Featured works`;

const featuredBlockContentWrapper = document.createElement('div');
featuredBlockContentWrapper.classList.add('featured-block__content-wrapper');

const featuredBlockContent = document.createElement('div');
featuredBlockContent.classList.add('featured-block__content');

const featuredBlockContentCard = document.createElement('div');
featuredBlockContentCard.classList.add('featured-block__content-card');

const contentCardImage = document.createElement('div');
contentCardImage.classList.add('content-card__image');

const contentCardPhoto = document.createElement('img');
contentCardPhoto.classList.add('content-card__photo');
contentCardPhoto.src = 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=';

const cardTextWrapper = document.createElement('div');
cardTextWrapper.classList.add('card-text__wrapper');

const cardTitle = document.createElement('h3');
cardTitle.classList.add('card__title');
cardTitle.textContent = `Designing Dashboards`;

const cardInfoPanel = document.createElement('div');
cardInfoPanel.classList.add('card__info-panel');

const InfoPanelYearBg = document.createElement('div');
InfoPanelYearBg.classList.add('info-panel__year_bg');

const infoPanelYear = document.createElement('p');
infoPanelYear.classList.add('info-panel__year');
infoPanelYear.textContent = '2020';

const infoPanelType = document.createElement('p');
infoPanelType.classList.add('info-panel__type');
infoPanelType.textContent = 'Dashboard';

const contentCardText = document.createElement('p');
contentCardText.classList.add('content-card__text');
contentCardText.textContent = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.';



const featuredBlockContentTwo = document.createElement('div');
featuredBlockContentTwo.classList.add('featured-block__content');

const featuredBlockContentCardTwo = document.createElement('div');
featuredBlockContentCardTwo.classList.add('featured-block__content-card');

const contentCardImageTwo = document.createElement('div');
contentCardImageTwo.classList.add('content-card__image');

const contentCardPhotoTwo = document.createElement('img');
contentCardPhotoTwo.classList.add('content-card__photo');
contentCardPhotoTwo.src = 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg';

const cardTextWrapperTwo = document.createElement('div');
cardTextWrapperTwo.classList.add('card-text__wrapper');

const cardTitleTwo = document.createElement('h3');
cardTitleTwo.classList.add('card__title');
cardTitleTwo.textContent = `Vibrant Portraits of 2020`;

const cardInfoPanelTwo = document.createElement('div');
cardInfoPanelTwo.classList.add('card__info-panel');

const InfoPanelYearBgTwo = document.createElement('div');
InfoPanelYearBgTwo.classList.add('info-panel__year_bg');

const infoPanelYearTwo = document.createElement('p');
infoPanelYearTwo.classList.add('info-panel__year');
infoPanelYearTwo.textContent = '2018';

const infoPanelTypeTwo = document.createElement('p');
infoPanelTypeTwo.classList.add('info-panel__type');
infoPanelTypeTwo.textContent = 'Illustration';

const contentCardTextTwo = document.createElement('p');
contentCardTextTwo.classList.add('content-card__text');
contentCardTextTwo.textContent = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.';



const featuredBlockContentThree = document.createElement('div');
featuredBlockContentThree.classList.add('featured-block__content');

const featuredBlockContentCardThree = document.createElement('div');
featuredBlockContentCardThree.classList.add('featured-block__content-card');

const contentCardImageThree = document.createElement('div');
contentCardImageThree.classList.add('content-card__image');

const contentCardPhotoThree = document.createElement('img');
contentCardPhotoThree.classList.add('content-card__photo');
contentCardPhotoThree.src = 'https://st2.depositphotos.com/1035350/7461/i/950/depositphotos_74611623-stock-photo-jefferson-memorial-in-spring.jpg';

const cardTextWrapperThree = document.createElement('div');
cardTextWrapperThree.classList.add('card-text__wrapper');

const cardTitleThree = document.createElement('h3');
cardTitleThree.classList.add('card__title');
cardTitleThree.textContent = `36 Days of Malayalam type`;

const cardInfoPanelThree = document.createElement('div');
cardInfoPanelThree.classList.add('card__info-panel');

const InfoPanelYearBgThree = document.createElement('div');
InfoPanelYearBgThree.classList.add('info-panel__year_bg');

const infoPanelYearThree = document.createElement('p');
infoPanelYearThree.classList.add('info-panel__year');
infoPanelYearThree.textContent = '2018';

const infoPanelTypeThree = document.createElement('p');
infoPanelTypeThree.classList.add('info-panel__type');
infoPanelTypeThree.textContent = 'Typography';

const contentCardTextThree = document.createElement('p');
contentCardTextThree.classList.add('content-card__text');
contentCardTextThree.textContent = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.';
/* -----BODY---------------------------------------- */
body.appendChild(divWrapper);
divWrapper.appendChild(divHeader);
divWrapper.appendChild(main);
/* -----HEADER---------------------------------------- */
divHeader.appendChild(divContainerHeader);
divContainerHeader.appendChild(divHeaderBox);
divHeaderBox.appendChild(a1);
divHeaderBox.appendChild(a2);
divHeaderBox.appendChild(a3);
/* -----MAIN---------------------------------------- */
main.appendChild(sectionCard);
main.appendChild(sectionRecent);
main.appendChild(sectionFeatured);
/* -----SECTION__CARD---------------------------------------- */
sectionCard.appendChild(cardContainer);
cardContainer.appendChild(cardBlock);
cardBlock.appendChild(cardBlockProfile);
cardBlockProfile.appendChild(cardText);
cardText.appendChild(profileTitle);
cardText.appendChild(profileSubtitle);
cardBlockProfile.appendChild(profileImage);
profileImage.appendChild(profilePhoto);
cardBlock.appendChild(cardBlockButton);
cardBlockButton.appendChild(button);
/* -----SECTION__RECENT---------------------------------------- */
sectionRecent.appendChild(recentContainer);
recentContainer.appendChild(recentBlock);
recentBlock.appendChild(recentBlockTop);
recentBlockTop.appendChild(recentBlockTopLeft);
recentBlockTop.appendChild(recentBlockTopRight);
recentBlock.appendChild(recentBlockBottom);
recentBlockBottom.appendChild(bottom);
bottom.appendChild(recentTitle);
bottom.appendChild(bottomDate);
bottomDate.appendChild(date);
bottomDate.appendChild(span);
bottomDate.appendChild(dateProfession);
bottom.appendChild(bottomText);
recentBlockBottom.appendChild(bottomTwo);
bottomTwo.appendChild(recentTitleTwo);
bottomTwo.appendChild(bottomDateTwo);
bottomDateTwo.appendChild(dateTwo);
bottomDateTwo.appendChild(spanTwo);
bottomDateTwo.appendChild(dateProfessionTwo);
bottomTwo.appendChild(bottomTextTwo);
/* -----SECTION__FEATURED---------------------------------------- */
sectionFeatured.appendChild(featuredContainer);
featuredContainer.appendChild(featuredBlock);
featuredBlock.appendChild(featuredBlockTitle);
featuredBlock.appendChild(featuredBlockContentWrapper);
featuredBlockContentWrapper.appendChild(featuredBlockContent);
featuredBlockContent.appendChild(featuredBlockContentCard);
featuredBlockContentCard.appendChild(contentCardImage);
contentCardImage.appendChild(contentCardPhoto);
featuredBlockContentCard.appendChild(cardTextWrapper);
cardTextWrapper.appendChild(cardTitle);
cardTextWrapper.appendChild(cardInfoPanel);
cardInfoPanel.appendChild(InfoPanelYearBg);
InfoPanelYearBg.appendChild(infoPanelYear);
cardInfoPanel.appendChild(infoPanelType);
cardTextWrapper.appendChild(contentCardText);

featuredBlockContentWrapper.appendChild(featuredBlockContentTwo);
featuredBlockContentTwo.appendChild(featuredBlockContentCardTwo);
featuredBlockContentCardTwo.appendChild(contentCardImageTwo);
contentCardImageTwo.appendChild(contentCardPhotoTwo);
featuredBlockContentCardTwo.appendChild(cardTextWrapperTwo);
cardTextWrapperTwo.appendChild(cardTitleTwo);
cardTextWrapperTwo.appendChild(cardInfoPanelTwo);
cardInfoPanelTwo.appendChild(InfoPanelYearBgTwo);
InfoPanelYearBgTwo.appendChild(infoPanelYearTwo);
cardInfoPanelTwo.appendChild(infoPanelTypeTwo);
cardTextWrapperTwo.appendChild(contentCardTextTwo);

featuredBlockContentWrapper.appendChild(featuredBlockContentThree);
featuredBlockContentThree.appendChild(featuredBlockContentCardThree);
featuredBlockContentCardThree.appendChild(contentCardImageThree);
contentCardImageThree.appendChild(contentCardPhotoThree);
featuredBlockContentCardThree.appendChild(cardTextWrapperThree);
cardTextWrapperThree.appendChild(cardTitleThree);
cardTextWrapperThree.appendChild(cardInfoPanelThree);
cardInfoPanelThree.appendChild(InfoPanelYearBgThree);
InfoPanelYearBgThree.appendChild(infoPanelYearThree);
cardInfoPanelThree.appendChild(infoPanelTypeThree);
cardTextWrapperThree.appendChild(contentCardTextThree);

const footer = document.querySelector('.footer');
divWrapper.append(footer);
/* headerLink.addEventListener('click', () => {
    if (headerLink.clicked == true) {
        headerLink.classList.toggle('active');
        console.log('Check');
    }
}) */

/* 
console.log(headerLink); */

console.log();