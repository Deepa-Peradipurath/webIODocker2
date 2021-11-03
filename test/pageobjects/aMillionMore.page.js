const Page = require('./page');
/**
 * A million More page containing specific selectors and methods for a specific page
 */
class AMillionMorePage extends Page {
    /**
     * define selectors using getter methods
     */
    get mainHeading() { return $('#ModelIntro-1 section h2')};
    get subHeading() { return $('#ModelIntro-1 section p')};
    get logo() { return $('a[href="https://www.volvocars.com/intl"]')};
    get ourCarBtn() { return $('#nav\\:topNavCarMenu')};
    get cookieModalLogo(){ return $('div[class="optanon-alert-box-logo"]')};
    get cookieModalTxtBody(){ return $('div[class="optanon-alert-box-body"]')};
    get cookieModalBodyTxt(){ return $('div[class="optanon-alert-box-body"] #alert-box-message')};
    get cookieSettingsBtn(){ return $('button[class="optanon-toggle-display cookie-settings-button"]')};
    get acceptCookieBtn() { return $('button[class="optanon-allow-all accept-cookies-button"]')};
    get hamburgerMenuBtn() { return $('#sitenav-sidenav-toggle')};
    get closeMenu() { return $('button[data-autoid="nav:siteNavCloseIcon"]')};
    get sideMenuLogoLink() { return $('a[href="https://www.volvocars.com/intl"]')};
    get sideMenuItems(){ return $$('button[data-autoid="nav:sideNavLinksMenuDrawer"]')};
    get backToSideMenu() { return $('button[aria-label="Go back in Site Navigation"]')};
    get internationalSideMenuLink() { return $('button[data-autoid="nav:sideNavMarketContainer"]')};
    get socialNetworking(){ return $('div[data-autoid="nav:sideNavFooterContainer"]')};
    get socialNetworkingLinks(){ return $$('div[data-autoid="nav:sideNavSocialIcon"]')};
    get mainVideo() { return $('source[src="https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/volvo_amm_hero_16x9_loop_clean.mp4"')};
    get watchTheStoryBtn() { return $$('#Video-1 button')[1]};
    get millionMoreTxt() { return $$('#TextStatement-1 p span')[0]};
    get statementTxt() { return $$('#TextStatement-1 p span')[1]};
    get iconCallOutsItems() { return $$('div[data-autoid="iconCallouts\\:iconTextItem"]')};
    get learnMoreLink() { return $('a[data-autoid="iconCallouts:cta"]')};
    get videoTestimonialTitle() { return $('#VideoTestimonials-1 h2')};
    get videoTestimonialSubTitle() { return $('#VideoTestimonials-1 p')};
    get videoTestimonialItems() { return $$('div[data-autoid="videoTestimonials\\:container"]')};
    get videoTestimonialPlay() { return $('div[data-autoid="videoTestimonials:container"]')};
    get imageWithTextPic(){ return $('#ImageWithText-1 picture')};
    get imageWithTextTitle(){ return $('#ImageWithText-1 h2[data-autoid="imageWithText:title"]')};
    get imageWithTextDesc(){ return $('#ImageWithText-1 p[data-autoid="imageWithText:description"]')};
    get imageWithTextLearnMoreBtn() { return $('a[data-autoid="imageWithText:primaryCta"]')};
    get productsTitle(){ return $("#ProductListCarousel-1 h2")};
    get productItems() { return $$('div[data-autoid="springCarouselPane:carouselItem"]')};
    get productItemsImg() { return $$('div[data-autoid="springCarouselPane:carouselItem"] a picture')};
    get rechargeLink() { return $('a[href="/intl/v/cars/recharge"]')};
    get mildHybridCarsLink(){return $('a[href="/intl/v/cars/other-powertrains"]')};
    get disclaimerTopTxt(){ return $$('#Disclaimer-1 p')[0]};
    get disclaimerBottomTxt(){ return $$('#Disclaimer-1 p')[1]};
    get copyRightTxt() { return $('span[data-autoid="footer:copyright"]')};
    get footerLinksTxt() { return $$('span[class="_SiteFooter-_ajs819"]')};

    /**
     * a method to interact with the page : To click the hanburger menu to show
     */
     async showMenu () {
        await this.acceptCookieBtn.click();
        await this.hamburgerMenuBtn.click();
        await this.sideMenuItems[0].click();
        await browser.pause(2000);
        await this.backToSideMenu.click();
        await this.sideMenuItems[1].click();
        await browser.pause(2000);
        await this.backToSideMenu.click();
        await this.sideMenuItems[2].click();
        await browser.pause(2000);
        await this.backToSideMenu.click();
        await this.sideMenuItems[3].click();
        await browser.pause(2000);
        await this.backToSideMenu.click();
        await this.sideMenuItems[4].click();
        await browser.pause(2000);
        await this.backToSideMenu.click();
        await this.internationalSideMenuLink.click();
        await browser.pause(2000);
        await this.backToSideMenu.click();
    }
    /**
     * a method to interact with the page : To click the hanburger menu to close 
     */
     async hideMenu () {
        await this.closeMenu.click();
    }
    /**
     * a method to interact with the page : To watch Main Video 
     */
    async watchMainVideo(){
        await this.watchTheStoryBtn.click();
    }
    /**
     * a method to interact with the page : To watch Testimonial Video 
     */
     async watchTestimonialVideo(){
        await this.videoTestimonialPlay.click();
    }
    /**
     * a method to interact with the page : open Page in browser
     */
    open () {
        return super.open();
    }
}
module.exports = new AMillionMorePage();