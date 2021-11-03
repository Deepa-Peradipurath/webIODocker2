const AMillionMorePage = require('../pageobjects/aMillionMore.page');

describe('To Showcase parallel testing: moved all header testcases to this file', () => {
    describe("Header section of the Page Loads succesfully", () => {
        it("Cookie Modal loads successfully", async () => {
            await AMillionMorePage.open();
            await expect(AMillionMorePage.cookieModalLogo).toBePresent();
            await expect(AMillionMorePage.acceptCookieBtn).toBePresent();
            await expect(AMillionMorePage.cookieSettingsBtn).toBePresent();
            await expect(AMillionMorePage.cookieModalTxtBody).toBePresent();
            await expect(AMillionMorePage.cookieModalBodyTxt).toHaveTextContaining('We use cookies and local storage for the best experience on our website, including to personalise content and ads, to provide social media features and to analyse traffic. These cookies include targeted media cookies and advanced analytics cookies. For more information see our Information Notice on the cookie page. By clicking accept you agree to our use of cookies and local storage. To alter the types of cookies we use click “Cookie Settings"');
            
        });
        it("App header section loads successfully", async () => {
            await expect(AMillionMorePage.logo).toBePresent(); 
            await expect(AMillionMorePage.ourCarBtn).toBePresent(); 
            await expect(AMillionMorePage.hamburgerMenuBtn).toBePresent(); 
        });
        it("Show header Side Menu successfully ", async () => {
            await AMillionMorePage.showMenu();
            await expect(AMillionMorePage.sideMenuLogoLink).toBePresent(); 
            await expect(AMillionMorePage.closeMenu).toBePresent(); 
            await expect(AMillionMorePage.sideMenuItems).toBeElementsArrayOfSize({gte :1});
            await expect(AMillionMorePage.internationalSideMenuLink).toBePresent();
            await expect(AMillionMorePage.socialNetworking).toBePresent();
        });
        it("Hide header Menu successfully ", async () => {
            await AMillionMorePage.hideMenu();
        });
        it("App Main section loads successfully", async () => {
            await expect(AMillionMorePage.mainHeading).toHaveTextContaining(
                'Ideas that change the world are often the most controversial.');
            await expect(AMillionMorePage.subHeading).toHaveTextContaining(
                "After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it's time for the next step. For everyone's safety.");
            await expect(AMillionMorePage.mainVideo).toBePresent(); 
            await expect(AMillionMorePage.watchTheStoryBtn).toHaveTextContaining('WATCH THE STORY'); 
            await expect(AMillionMorePage.millionMoreTxt).toHaveTextContaining('A million more.'); 
            await expect(AMillionMorePage.statementTxt).toHaveTextContaining('With new and existing safety features, we are determined to save a million more lives.');    
        });
        it("Main video plays successfully", async () => {
            await AMillionMorePage.watchMainVideo();
        });
        it("App Callout section loads successfully", async () => {
            await expect(AMillionMorePage.iconCallOutsItems).toBeElementsArrayOfSize(4);
            await expect(AMillionMorePage.learnMoreLink).toHaveTextContaining("LEARN MORE ABOUT CAR SAFETY");
        });
        it("App Video Testimonial section loads successfully", async () => {
            await expect(AMillionMorePage.videoTestimonialTitle).toHaveTextContaining("One of a million");
            await expect(AMillionMorePage.videoTestimonialSubTitle).toHaveTextContaining("Hear the stories from real car crash survivors and see how they've managed to turn an accident into a positive change in their lives.");
            await expect(AMillionMorePage.videoTestimonialItems).toBeElementsArrayOfSize(4);
            await expect(AMillionMorePage.imageWithTextPic).toBePresent();
            await expect(AMillionMorePage.imageWithTextTitle).toHaveTextContaining("Decades of innovation");
            await expect(AMillionMorePage.imageWithTextDesc).toHaveTextContaining("Ever since our founding in 1927, we've been designing cars that put people first. Discover our most important safety innovations over the years.");
            await expect(AMillionMorePage.imageWithTextLearnMoreBtn).toHaveTextContaining("LEARN MORE");
        });
        it("Testimonial video plays successfully", async () => {
            await AMillionMorePage.watchTestimonialVideo();
        });
        it("App Products section loads successfully", async () => {
            await expect(AMillionMorePage.productsTitle).toHaveTextContaining("Explore our models");
            await expect(AMillionMorePage.productItems).toBeElementsArrayOfSize({gte : 1});
            await expect (AMillionMorePage.productItemsImg).toBePresent();
            await expect(AMillionMorePage.rechargeLink).toBePresent();
            await expect(AMillionMorePage.mildHybridCarsLink).toBePresent();
        });
        it("Disclaimer section loads successfully", async () => {
            await expect(AMillionMorePage.disclaimerTopTxt).toHaveTextContaining("These films contain true stories from real people, who have been compensated for their participation.");
            await expect(AMillionMorePage.disclaimerBottomTxt).toHaveTextContaining("Volvo Cars' safety features complement safe driving practices and are not intended to enable or encourage distracted, aggressive, or otherwise unsafe or illegal driving. Ultimately, the driver is responsible for safe operation of the vehicle at all times.");
        });
        it("Footer section loads successfully", async () => {
            await expect(AMillionMorePage.copyRightTxt).toHaveTextContaining("Copyright © 2021 Volvo Car Corporation (or its affiliates or licensors)");
            await expect(AMillionMorePage.footerLinksTxt).toBePresent();
            await expect(AMillionMorePage.footerLinksTxt).toBeElementsArrayOfSize({gte : 1});
        });
    });
});
