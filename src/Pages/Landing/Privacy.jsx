import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./Footer";

export default function Privacy() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 250) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <main>
            <Navbar />
            <div className="container-fluid">
                <div className="container md:pt-32 pt-24">
                    <div className="row pt-12">
                        <h1 className="text-[#0E1133] font-bold pb-6">
                            Privacy Policy
                        </h1>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                SomtinSomtin Privacy Notice
                            </h4>
                            <p>
                                Effective as of December 5, 2021 This “Privacy Notice” describes the privacy practices of KUDIGO, Inc. and our subsidiaries and affiliates (collectively, “KUDIGO”, “we”, “us”, or “our”) in connection with the www.somtinsomtin.com website, the SOMTINSOMTIN mobile application, and any other website or mobile application that we own or control and which posts or links to this Privacy Notice (collectively, the “Service”), and the rights and choices available to individuals with respect to their information. SOMTINSOMTIN is a product of KUDIGO INC. This Privacy Notice does not apply to the privacy practices of the merchant whose gift VOUCHER is sold via the Service. We may provide additional or supplemental privacy notices or policies to individuals for specific products or services that we offer at the time we collect personal information. These supplemental privacy policies or notices will govern how we may process the information in the context of the specific product or service.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Personal Information We Collect
                            </h4>
                            <p>
                                Information you give us Personal information you may provide through the Service or otherwise communicate to us includes: Contact information, such as your first and last name, email address, mailing addresses, phone number, and company name. Profile information, such as your username and password that you may set to establish an online account with us, your date of birth, your gender, etc.. Feedback or correspondence, such as information you provide when you contact us with questions, feedback, or otherwise correspond with us online. Payment information, such as your DEBIT CARD information,, or the fact that payment was completed through a third-party payment solution (such as ApplePay or PayPal); and, in the case of corporate sales, bank account information and purchase order number. Precise geolocation information, such as when you authorize our mobile application to access your location. Transaction information, such as information about the gift VOUCHERs you purchase and the personal message you may choose to include in connection with a gift VOUCHER order Gift VOUCHER information, such as your gift VOUCHER number and PIN. Usage information, such as information about how you use the Service and interact with us, including information associated with any content you submit to us. Marketing information, such as information such on your preferences for receiving communications about our offerings and promotions, and details about how you engage with our communications. Other information that we may collect which is not specifically listed here, but which we will use in accordance with this Privacy Notice or as otherwise disclosed at the time of collection. Information we receive about gift VOUCHER recipients When a user of the Service purchases a gift VOUCHER as a gift, we receive the recipient’s name and email address or phone number. The gift buyer must have the recipient’s permission to provide us with the recipient’s contact details so that we may deliver the gift VOUCHER. Information we obtain from third-party platforms and social media networks We may maintain pages for our company, and our products and services on third-party platforms, such as Facebook, LinkedIn, Twitter, Google+, YouTube, Instagram, and other social networking services. When you interact with our pages on those third-party platforms, the third-party’s privacy policy will govern your interactions on the relevant platform. You may choose to provide us with information through the third-party platform, and we will treat such information in accordance with this Privacy Notice. If the third party platform provides us with information about our pages on those platforms or your interactions with them, we will also treat that information in accordance with this Privacy Notice.
                            </p>
                            <p>
                                If you choose to login to the Service via a third-party platform or social media network, or otherwise connect your account on the third-party platform or network to your account through the Service, we may collect information from that platform or network. For example, if you connect via Facebook, this information may include your Facebook username, user ID, profile picture, cover photo, and networks to which you belong (e.g., school, workplace). You may also have the opportunity to provide us with additional information via the third-party platform or network, such as a list of your friends or connections and your email address. You can read more about your privacy choices in the “Third party platforms or social media networks” portion of the “Your Choices” section.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Information we obtain from merchants and third parties
                            </h4>
                            <p>
                                We may receive personal information about you from merchants. For example, a merchant may share your contact information with us if you have expressed interest in purchasing a gift VOUCHER with the merchant or have previously done so. We may obtain your personal information from other third parties, such as marketing partners, and publicly-available sources. Cookies and other information collected by automated means We, our service providers, and our business partners may automatically log information about you, the device you use to access the Service, and your activity on the Service. The information that may be collected automatically includes your device operating system type and version number, manufacturer and model, device identifier (such as the Google Advertising ID or Apple ID for Advertising), browser type, screen resolution, IP address, preferred language, the website you visited before browsing to our website, general location information such as city, state or geographic area; and information about your use of and actions on the Service, such as pages or screens you viewed, how long you spent on a page or screen, navigation paths between pages or screens, information about your activity on a page or screen, access times, and length of access. Our service providers and business partners may collect this type of information over time and across third-party websites and mobile applications. On our webpages, this information is collected using cookies, browser web storage (also known as locally stored objects, or “LSOs”), Flash-based LSOs (also known as “Flash cookies”), web beacons, and similar technologies, and our emails may also contain web beacons. In our mobile application, we may collect this information directly or through our use of third-party software development kits (“SDKs”). SDKs may enable third parties to collect information directly from our mobile application.
                            </p>
                            <p>
                                A “cookie” is a text file that websites send to a visitor‘s computer or other Internet-connected device to uniquely identify the visitor’s browser or to store information or settings in the browser. Browser web storage or LSOs, are used for similar purposes as cookies. Browser web storage enables the storage of a larger amount of data than cookies. A “web beacon,” also known as a pixel tag or clear GIF, is typically used to demonstrate that a webpage was accessed or that certain content on a webpage or in an email was viewed, typically to measure the success of our marketing campaigns or engagement with our emails and to compile statistics about usage of our websites. A SDK is third-party computer code that we may incorporate into our mobile applications that may be used for a variety of purposes, including to provide us with analytics regarding the use of our mobile applications, to integrate with social media, add features or functionality to our app, or to facilitate online advertising. We may also use Flash LSO on our website to collect and store information about your use of our website. Unlike cookies, Flash LSOs cannot be removed or rejected via your browser settings. If you do not want Flash LSOs stored on your computer or mobile device, you can adjust the settings of your Flash player to block Flash LSO storage using the tools contained in the Website Storage Settings Panel. You can also control Flash LSOs by going to the Global Storage Settings Panel and following the instructions. Please note that setting the Flash Player to restrict or limit acceptance of Flash LSOs may reduce or impede the functionality of Flash applications that we may use in connection with our website. Web browsers may offer users of our websites or mobile apps the ability to disable receiving certain types of cookies; however, if cookies are disabled, some features or functionality of our websites may not function correctly. Please see the “Targeted online advertising” section for information about how to exercise choice regarding the use of browsing behavior for purposes of targeted advertising.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Referrals
                            </h4>
                            <p>
                                Users of the Service may have the opportunity to refer friends or other contacts to us. You may submit a referral only if you have permission to provide the referral’s contact information to us so that we may contact them. How We Use Your Personal Information We use your personal information for the following purposes and as otherwise described in this Privacy Notice or at the time of collection: To operate the Service We use personal information to: provide, operate and improve the Service maintain gift VOUCHER wallets on behalf of our users and enable users to export gift VOUCHER to third-party wallets send gift VOUCHERs purchased through the Service provide information about our products and services establish and maintain your user profile on the Service facilitate your login to the Service via third-party identity and access management providers, such as Facebook and Google communicate with you about the Service, including by sending you announcements, updates, security alerts, and support and administrative messages understand your needs and interests, and personalize your experience with the Service and our communications provide support and maintenance for the Service to respond to your requests, questions and feedback For research and development We analyze your use of the Service to analyze and improve the Service and to develop new products and services, including by studying user demographics and use of the Service. To send you marketing and promotional communications We may send you SOMTINSOMTIN-related marketing communications as permitted by law. You will have the ability to opt-out of our marketing and promotional communications as described in the “Opt out of marketing communications” section below.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                To display
                            </h4>
                            <p>
                                Access or update your information If you have registered for an account with us, you may review and update certain personal information in your account profile by logging into the account. Opt out of marketing communications You may opt out of marketing-related emails by following the opt-out or unsubscribe instructions at the bottom of the email, or by contacting us at support@SOMTINSOMTIN.com. You may continue to receive service-related and other non-marketing emails. Targeted online advertising Some of the business partners that collect information about users’ activities on or through the Service may be members of organizations or programs that provide choices to individuals regarding the use of their browsing behavior for purposes of targeted advertising. Users may opt out of receiving targeted advertising on websites through members of the Network Advertising Initiative by clicking here, or the Digital Advertising Alliance by clicking here. Users of our mobile applications may opt out of receiving targeted advertising in mobile apps through participating members of the Digital Advertising Alliance by installing the AppChoices mobile app, available here, and selecting the user’s choices. Please note that we also may work with companies that offer their own opt-out mechanisms and may not participate in the opt-out mechanisms that we linked above.
                            </p>
                            <p>
                                In addition, your mobile device settings may provide functionality to limit our, or our partners’, ability to engage in ad tracking or targeted advertising using the Google Advertising ID or Apple ID for Advertising associated with your mobile device. If you choose to opt-out of targeted advertisements, you will still see advertisements online but they may not be relevant to you. Even if you do choose to opt out, not all companies that serve online behavioral advertising are included in this list, so you may still receive some cookies and tailored advertisements from companies that are not listed. Do Not Track Some Internet browsers may be configured to send “Do Not Track” signals to the online services that you visit. We currently do not respond to “Do Not Track” or similar signals. To find out more about “Do Not Track,” please visit http://www.allaboutdnt.com.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Cookies & browser web storage
                            </h4>
                            <p>
                                We may allow service providers and other third parties to use cookies and similar technologies to track your browsing activity over time and across the Service and third party websites. Most browsers let you remove or reject cookies. To do this, follow the instructions in your browser settings. Many browsers accept cookies by default until you change your settings. Please note that if you set your browser to disable cookies, the Sites may not work properly. Similarly, your browser settings may allow you to clear your browser web storage.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Third-party platforms or social media networks
                            </h4>
                            <p>
                                If you choose to connect to the Service via a third-party platform or social media network, you may have the ability to limit the information that we may obtain from the third-party at the time you login to the Service using the third-party’s authentication service or otherwise connect your account. Subsequently, you may be able to control your settings through the third-party’s platform or service. For example, you may access and change your settings through the Facebook settings page for Apps and Websites. If you withdraw our ability to access certain information from a third-party platform or social media network, that choice will not apply to information that we have already received from that third-party. Choosing not to share your personal information Where we are required by law to collect your personal information, or where we need your personal information in order to provide the Service to you, if you do not provide this information when requested (or you later ask to delete it), we may not be able to provide you with our services. We will tell you what information you must provide to receive the Service by designating it as required at the time of collection or through other appropriate means. Links to other websites and services The Service may contain links to other websites, mobile applications, and other online services operated by third parties. These links are not an endorsement of, or representation that we are affiliated with, any third party. In addition, our content may be included on web pages or in mobile applications or online services that are not associated with us. We do not control third party websites, mobile applications or online services, and we are not responsible for their actions. Other websites and services follow different rules regarding the collection, use and sharing of your personal information. We encourage you to read the privacy policies of the other websites and mobile applications and online services you use. Security practices We take reasonable measures to protect your personal information in an effort to prevent loss, misuse, and unauthorized access, disclosure, alteration and destruction. However, security risk is inherent in all internet and information technologies and we cannot guarantee the security of your personal information. International data transfers We are headquartered in the United States and have service providers in other countries, and your personal information may be transferred to the United States or other locations outside of your state, province, or country where privacy laws may not be as protective as those in your state, province, or country.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Children
                            </h4>
                            <p>
                                The Service is not directed to, and we do not knowingly collect personal information from, anyone under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us. We will delete such information from our files as soon as reasonably practicable.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Changes to this Privacy Notice
                            </h4>
                            <p>
                                We reserve the right to modify this Privacy Notice at any time. We encourage you to periodically review this page for the latest information on our privacy practices. If we make material changes to this Privacy Notice, we will notify you by updating the date of this Privacy Notice and posting it on the Service. We may (and, where required by law, will) also provide notification of changes in another way that we believe is reasonably likely to reach you, such as via e-mail (if you have an account where we have your contact information) or another manner through the Service. Any modifications to this Privacy Notice will be effective upon our posting the new terms and/or upon implementation of the new changes on the Service (or as otherwise indicated at the time of posting). In all cases, your continued use of the Service after the posting of any modified Privacy Notice indicates your acceptance of the terms of the modified Privacy Notice.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                How to Contact Us
                            </h4>
                            <p>
                                If you have a general question about the Service, you may contact our support team at support@SOMTINSOMTIN.com. Depending on the location where you reside at, if you have any questions, concerns, or complaints about this Privacy Notice or our privacy practices, or to request access to your personal information, you may contact:
                            </p>
                            <p>
                                Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC. The merchants represented are not sponsors of SOMTINSOMTIN or otherwise affiliated with SOMTINSOMTIN. The logos and other identifying marks attached are trademarks of and owned by each represented company and/or its affiliates. Please visit each company’s website for additional terms and conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <BsFillArrowUpSquareFill />
                </button>
            )}
        </main>
    )
}