import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./Footer";

export default function Corporate() {
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
                            Corporate Terms & Conditions
                        </h1>
                        <div className="col-md-8">
                            <h2 className="text-[#0E1133] font-bold pb-2">
                                Corporate Terms of Sale
                            </h2>
                            <p>
                                Effective as of December 5, 2021 PLEASE READ THESE CORPORATE TERMS OF SALE (“TERMS”) CAREFULLY BEFORE PURCHASING PRODUCTS IN BULK FROM THE SOMTINSOMTIN.COM WEBSITE (“SOMTINSOMTIN SITE”). THESE TERMS APPLY TO YOU, AS A VALIDLY EXISTING BUSINESS, AND ONLY ADDRESS YOUR PURCHASE OF CLOSED LOOP RETAIL VOUCHERS, IN BULK, FOR THE SOLE PURPOSE OF REDISTRIBUTION TO CONSUMER OR END USERS. To understand your rights and obligations related to your general access to and use of the SOMTINSOMTIN Site and mobile applications, please read our Terms of Service located on the SOMTINSOMTIN Site (see www.SOMTINSOMTIN.com/terms). KUDIGO, Inc. (“KUDIGO,” “we” or “us”) makes products available for purchase through the SOMTINSOMTIN Site and mobile applications. Your purchase of any SOMTINSOMTIN products in bulk is governed by these Terms. Keep in mind that the products that you purchase in bulk will have their own terms and conditions as described in the Use of Gift Vouchers section below. When you purchase our SOMTINSOMTIN products in bulk, you are agreeing to be bound by these Terms and you acknowledge that such agreement constitutes a binding contract between you and SOMTINSOMTIN and its Affiliates. If you do not agree to these Terms, do not make any purchases from SOMTINSOMTIN. Because you are agreeing to the Terms on behalf of a business/company, you represent and warrant that you have the authority to bind such entity to the Terms and the terms “you” or “your” refer to such company/business. SOMTINSOMTIN reserves the right to change, modify, add or remove all or part of these Terms at any time and in our sole discretion. If we make changes to these Terms, we will provide notice of such changes by posting such changes on our websites or mobile applications and updating the “Last Updated” date at the top of these Terms. We encourage you to review these Terms each time you make a bulk purchase from SOMTINSOMTIN to ensure you understand the terms and conditions that apply to such bulk purchase. Your continued use of SOMTINSOMTIN products indicates your acceptance of any changes to the Terms.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h2 className="text-[#0E1133] font-bold pb-2 ">
                                PURCHASING GIFT VOUCHERS IN BULK
                            </h2>
                            <h4 className="text-[#0E1133] font-bold pt-2">
                                Enrollment
                            </h4>
                            <p>
                                Subject to completing our enrollment requirements, various gift VOUCHERs, eGift VOUCHER and gift codes (collectively, “Gift VOUCHERs”) will be available for you to purchase, in bulk, for your business. In order to enroll, you will need to submit an inquiry to SOMTINSOMTIN via the SOMTINSOMTIN Site at www.SOMTINSOMTIN.com/bulk/. On the SOMTINSOMTIN Site, you will be asked to provide us with information about you and your business (including: name, email, phone number, website URL and details about your gift VOUCHER use) to allow SOMTINSOMTIN to conduct due diligence on your business and, if deemed appropriate, approve your request for an account. Protection of Confidential and Proprietary Information during Enrollment and Due Diligence: The information that you and SOMTINSOMTIN may exchange during the enrollment process and the information that you provide to SOMTINSOMTIN during due diligence is considered confidential and proprietary information of the disclosing party. Each of us, as the recipient of such confidential and propriety information, will: (a) protect the discloser’s confidential and proprietary information using at least reasonable care; (b) use the discloser’s confidential and proprietary information only in connection with the enrollment process, due diligence and SOMTINSOMTIN’s provision of the SOMTINSOMTIN products; (c) not share the discloser’s confidential and proprietary information with anyone other than courts, government authorities, employees/agents of the recipient who need it to do their jobs; (d) be responsible for any person listed in subsection (c) that fails to protect or handle the discloser’s confidential and proprietary information in the manner required herein; and (e) promptly notify the discloser (if legally allowed) of any subpoena, order, or request to share the discloser’s confidential and proprietary information that the recipient receives from a court or government authority and, if asked, cooperate reasonably with discloser’s efforts to obtain a protective order. After due diligence is complete and you are approved, you will set the username and password for your account. Usernames and passwords are confidential and must not be distributed or disclosed by you to third parties. If you wish to change your password in the future, you can do so within the SOMTINSOMTIN Site by clicking the “Forgot Password” link.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                General Requirements and Restrictions
                            </h4>
                            <p>
                                You must be a valid and legally existing business that is organized and existing in good standing under the laws of the country in which you are incorporated. You also agree that you are solely responsible for complying with all laws and regulations that are applicable to your business and your use of SOMTINSOMTIN’s products, including but not limited to consumer privacy laws and data security/safeguarding laws. You may only purchase Gift VOUCHERs, in bulk, for redistribution to end users (including, your employees or other consumers) in your country of operation only. You may only enroll for one account and you agree to: (i) provide accurate, current and complete information; (ii) maintain and promptly update your account information to keep it accurate, current and complete; (iii) maintain the security of your account and accept all risks of unauthorized access to your account; and (iv) promptly notify SOMTINSOMTIN (at www.SOMTINSOMTIN.com/contact-us/) if you discover or otherwise suspect that your account or password has been subject to unauthorized use. During the period of time that you maintain an account with us, you agree to maintain a valid email address where we may deliver information, notifications and disclosures to you. You will promptly notify us of any change in your email address. You understand that our ability to provide you this information is dependent upon this maintenance of a valid email address. SOMTINSOMTIN may reject enrollment and refuse access to or use of our Gift VOUCHERs, products or services to anyone at any time, in its sole discretion. If your account is disabled by us, you, or anyone acting under your discretion, is/are strictly prohibited from creating another account on the SOMTINSOMTIN Site. After enrollment is complete, you may purchase Gift VOUCHERs in bulk amounts from the SOMTINSOMTIN Site, based upon your balance of funds and in accordance with these Terms, our Terms of Service and our Privacy Policy (all available on the SOMTINSOMTIN Site).
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Payment and Your Available Balance
                            </h4>
                            <p>
                                SOMTINSOMTIN customer service will contact you to finalize your account terms and to receive your initial payment. All payments made by you must be either (a) via wire transfer from your bank account; MOBILE MONEY, or (b) by debit CARD (Visa or MasterCARD). In the event that we do not receive your payment (including, for example, because your debit CARD cannot be verified, is invalid or is not otherwise acceptable), we may suspend or cancel your account and your bulk Gift VOUCHER order will automatically cancel. You are responsible for resolving any problem we encounter in order to proceed with your order. You will be able to view your account balance, for future purchases, by going to partner.SOMTINSOMTIN.com. You may also add additional funds to your account by contacting your SOMTINSOMTIN sales representative.
                                Restricting Access to Account Funds for Investigations We may restrict access to funds in your account to allow us to investigate the use of your account, resolve any pending dispute, in response to a court order or if otherwise requested by law enforcement or any governmental entity. We may restrict access to funds in your account for the time that it takes for us to complete any pending investigation or resolve a pending dispute. We also may restrict access to your funds as required by law, court order, or if we receive a lawful request from law enforcement or governmental entity.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                GIFT VOUCHER TERMS AND CONDITIONS
                            </h4>
                            <p>
                                No Return of Gift VOUCHERs All purchases that you make on the SOMTINSOMTIN Site are final and the Gift VOUCHERs that you purchase in bulk are non-refundable and non-returnable, provided, however, that if a Gift VOUCHER does not function, we will, either refund you the Gift VOUCHER purchase amount or replace the defective Gift VOUCHER with an alternative Gift VOUCHER or with products or services of equal value for the same Gift VOUCHER Vendor, defined below. If you have any questions or problems with your order, please contact us at www.SOMTINSOMTIN.com/contact-us/.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Order Errors
                            </h4>
                            <p>
                                We attempt to be as accurate as possible and to eliminate errors on the products that we sale; however, SOMTINSOMTIN does not represent or warrant that any Gift VOUCHER and information about the Gift VOUCHER (including the description, Vendor information or pricing information) provided is accurate, complete, reliable, current or error-free. In the event of an error in an order confirmation, in processing a Gift VOUCHER purchase or otherwise, we reserve the right to correct such error and revise your order accordingly (including charging the correct price) or to cancel the order and refund any amount charged.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Use of Gift VOUCHERs
                            </h4>
                            <p>
                                The Gift VOUCHERs that you purchase are issued and activated by participating third-party merchants, retailers and vendors (collectively “Vendors”). After purchasing a Gift VOUCHER, these Terms will no longer apply and the Gift VOUCHER will be governed by certain terms and conditions established by the issuing Vendor. Depending on the applicable law of your jurisdiction and the promotional nature of certain Gift VOUCHERs, Vendors may set expiration dates for such Gift VOUCHERs, in addition to other restrictions and requirements. You (or the recipient of the Gift VOUCHER) should review and familiarize yourself with all applicable Vendor terms and conditions. If you have questions regarding the applicable Vendor terms, please contact the issuing Vendor. As issuers of the Gift VOUCHERs, Vendors (and not SOMTINSOMTIN) are fully responsible for all aspects of their Gift VOUCHER programs. Vendors are also responsible for any and all liabilities, damages and costs suffered by you (or the recipient of the Gift VOUCHER) in connection with your purchase and the use of their Gift VOUCHER. While SOMTINSOMTIN strives to work with reputable Vendors, SOMTINSOMTIN has no liability for (i) the sale of products or services through the use of any Gift VOUCHER; and (ii) any Vendor’s failure to honor a Gift VOUCHER.
                            </p>
                        </div>
                        <div className="col-md-8 pb-2 pt-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Documentation of Bulk Transactions and Account Inquiries
                            </h4>
                            <p>
                                At the time of your bulk purchase, you will receive an email receipt for the transaction. Retain the receipt for your records. You can access your current balance on your account after each purchase at partner.SOMTINSOMTIN.com. If you think a receipt is wrong or you have a question concerning your account, you may send a letter to us at: KUDIGO INC (℅ KUDIGO LIMITED), BLOCK A, ACCRA DIGITAL CENTER, RING ROAD WEST - ACCRA GHANA, or visit www.SOMTINSOMTIN.com/contact-us as soon as you can. We must hear from you no later than 60 days after your purchase/transaction date and you must provide the following information: (i) your name and your company name; (ii) a description of the error or the transaction you are unsure about, and an explanation as to why you believe it is an error or why you need more information; (iii) the amount of the suspected error; and (iv) your account username or email address. If you tell us verbally, we may require that you send us your complaint or question in writing within 10 business days.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                No Liability for Gift VOUCHERs Subsequent to Delivery
                            </h4>
                            <p>
                                SOMTINSOMTIN is not responsible for any value lost from a Gift VOUCHER subsequent to your purchase and our delivery to you. To reduce the likelihood of such a loss, however, SOMTINSOMTIN recommends protecting your computers, systems and devices with an appropriate password. Disputes with Merchants You (or the recipient of the Gift VOUCHER) agree to make a good faith effort to settle all disputes about purchases made using the Gift VOUCHER with the merchant who accepted the Gift VOUCHER.
                                Expiration The expiration of your Gift VOUCHER is dependent on the specific Vendor policies. We have no control over the expiration date, however, most Gift VOUCHERs have no less than a 5 year expiration date, and many have no expiration date. After the Gift VOUCHER has expired or is deactivated, it is no longer valid. All transactions will be declined.
                            </p>
                            <p>
                                ADDITIONAL SERVICES In addition to your purchase of Gift VOUCHERs in bulk, your enrollment and account includes access to the following: Customer service via live chat during chat hours; Customizable emails to the recipients of your Gift VOUCHERs; Access to your balance; Order confirmation emails and ongoing email communications from SOMTINSOMTIN.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Disclaimer of Liability
                            </h4>
                            <p>
                                In addition to the disclaimers, limits on liability and indemnification obligations applicable to your use of any products and services on www.SOMTINSOMTIN.com and set forth in the Terms of Service, you waive and release SOMTINSOMTIN and its subsidiaries, Affiliates, partners, vendors, distributors, officers, directors, employees and agents from any liabilities, damages and costs arising from or related to (i) your loss or the theft of any SOMTINSOMTIN product (including Gift VOUCHERs); and (ii) any act or omission of a Vendor in connection with a Gift VOUCHER it provides. With respect to all SOMTINSOMTIN products, risk of loss and title for such products pass to you when you complete your purchase of the applicable product or Gift VOUCHERs. SOMTINSOMTIN is not responsible for any damage or loss resulting from stolen or lost products (including Gift VOUCHERs) or any use of your SOMTINSOMTIN products (including Gift VOUCHERs) without your permission. SOMTINSOMTIN is not responsible for replacing your damaged or lost Gift VOUCHER. SOMTINSOMTIN and its vendors, distributors, licensees, Affiliates, and licensors make no warranties, express or implied, with respect to the SOMTINSOMTIN products (including Gift VOUCHERs), including without limitation, any express or implied warranty of merchantability or fitness for a particular purpose. All Gift VOUCHERs are freely transferrable within the country of origin. These disclaimers and limitations may or may not apply to you and are void where prohibited. In providing Gift VOUCHERs, we disclaim any duty or responsibility other than those expressly set forth in these Terms and the Terms of Service on www.SOMTINSOMTIN.com. Among other things, SOMTINSOMTIN is not liable for the following: If your transaction or bulk order for Gift VOUCHERs would exceed the funds available. If your connectivity, computer, system or device is not working properly. If circumstances beyond our control (such as flood or fire or other natural disaster) prevent the transaction or fulfillment of your order, despite reasonable precautions that we may have taken. Any issue covered by the Disclaimer of Liability section above. As otherwise stated in these Terms or provided by law.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Termination or Suspension
                            </h4>
                            <p>
                                We reserve the right to close your account or take other appropriate actions if you violate these Terms or any policies or terms on www.SOMTINSOMTIN.com in whole or part. We may modify or close your account for any reason or no reason at any time with or without notice, and without liability of any kind or nature to you or any third party. We may also suspend your access to your account (including the funds in your account) if you (a) have violated these Terms, (b) pose an unacceptable risk to us, or (c) provide any false, incomplete, inaccurate, or misleading information or otherwise engage in fraudulent or illegal conduct. If your account is terminated for any reason or no reason you agree: (a) to immediately stop using your account and placing bulk orders; (b) that we reserve the right, but have no obligation, to delete your information and account data stored on our servers; and (c) that we shall not be liable to you or any third party for termination of your account or deletion of your information or account data. You may terminate or close your account at any time. Upon closure of an account, any pending transactions will be cancelled and we will erase your balance from your account. Any funds that we are holding in custody for you at the time of closure, less any applicable fees, will be paid out to you in a reasonable time. If an investigation is pending at the time you close your account, we may hold your funds as described herein. If you are later determined to be entitled to some or all of the funds in dispute, we will release those funds to you. Upon termination of your account, you will remain liable for all amounts due under your account up to and including the date of termination. Excluded Users and Territories You are not permitted to make purchases from SOMTINSOMTIN if you are (i) not a validly existing business that is purchasing Gift VOUCHERs, in bulk, for the sole purpose of redistribution to consumers in the domiciled country; Privacy Please refer to our Privacy Policy for information about how we collect, use and disclose information and data [see https://giftsolutions.wpengine.com/privacy]. Severability If any provision of these Terms shall be deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.
                                Waiver Enforcement of the Terms is solely in our discretion and our failure to enforce a provision in some instances does not constitute a waiver of our right to enforce such provision in other instances. Contact Us If you have any questions or concerns regarding these Terms or the SOMTINSOMTIN products and services, please contact us at: support@SOMTINSOMTIN.com Entire Agreement, Severability, Affiliates These Terms constitute the entire agreement between you and SOMTINSOMTIN with respect to your purchase of Gift VOUCHERs in bulk and supersedes any other agreement, proposals and communications, written or oral, between SOMTINSOMTIN and you with respect to the subject matter hereof. If a court should find that one or more rights or provisions contained herein are invalid, you agree that the remainder of the Terms shall be enforceable.
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