import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./Footer";

export default function Consumer() {

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
            <div className="container fluid">
                <div className="container md:pt-32 pt-24">
                    <div className="row pt-12">
                        <h1 className="text-[#0E1133] font-bold pb-6">
                            Consumer Terms Of Sale
                        </h1>
                        <div className="col-md-8">
                            <h2 className="text-[#0E1133] font-bold">
                                Terms of Sales
                            </h2>
                            <p className="pt-3 pb-2">
                                Effective as of December 5, 2021
                            </p>
                            <p>
                                KUDIGO, Inc. (“KUDIGO,” “we” or “us”) makes products available for purchase through our website and mobile applications. Your purchase of any SOMTINSOMTIN product is governed by these Terms of Sale (“Terms”). Your purchase of a Vendor’s gift voucher, described in Section 1.3 below, is governed by the applicable terms and conditions of that gift voucher and these Terms will cease to apply at the time of such purchase. Your use of the SOMTINSOMTIN websites and mobile applications is governed by our Terms of Service, see here. These Terms are a legal agreement between you (“you,” or “your”) and SOMTINSOMTIN. By purchasing SOMTINSOMTIN products and/or clicking to “Accept” these Terms where that option is made available to you, you agree to be bound by these Terms. If you do not agree to these Terms, do not make any purchases from SOMTINSOMTIN. SOMTINSOMTIN reserves the right to change, modify, add or remove all or part of these Terms at any time and in our sole discretion. If we make changes to these Terms, we will provide notice of such changes by posting such changes on our websites or mobile applications and updating the “Last Updated” date at the top of these Terms. We encourage you to review these Terms each time you make a purchase from SOMTINSOMTIN to ensure you understand the terms and conditions that apply to such purchase. Your continued use of SOMTINSOMTIN products indicates your acceptance of any changes to the Terms.


                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                1.1 Virtual SOMTINSOMTIN vouchers.
                            </h4>
                            <p>
                                Our websites and mobile applications allow you to buy and send our reloadable SOMTINSOMTIN voucher (“SOMTINSOMTIN voucher”). The SOMTINSOMTIN voucher may be initially loaded in variable amounts with specified increments but no more than GHS 2,000 per voucher and is only valid for the purchase by you (or the recipient of your SOMTINSOMTIN voucher) of Vendor gift vouchers via the SOMTINSOMTIN websites or mobile applications. SOMTINSOMTIN vouchers can NOT be used in retail stores. If you purchase multiple SOMTINSOMTIN vouchers on a single day, the total/aggregate amount that you load on all the vouchers should not exceed GHS 10,000 in a single day. SOMTINSOMTIN vouchers have no fees and will never expire; however, based upon the laws in the applicable state, if you (or the recipient of your SOMTINSOMTIN voucher) do not use the SOMTINSOMTIN voucher your funds may be escheated to such applicable state. SOMTINSOMTIN vouchers are not redeemable for cash and no refunds or exchanges will be provided for SOMTINSOMTIN vouchers (except as required by law).
                            </p>
                        </div>
                        <div className="col-md-8 pt- pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2">
                                1.2 Gift vouchers.
                            </h4>
                            <p>
                                We offer a variety of gift vouchers and gift codes (collectively, “Gift vouchers”) for purchase via our websites or mobile applications. SOMTINSOMTIN accepts various forms of payment, including by debit card (each, a “Payment card”), Mobile Money, Apple Pay, Google Wallet. In addition, Gift vouchers can be purchased with a virtual SOMTINSOMTIN voucher (described in Section 1.1 above). All Gift vouchers are subject to availability and we reserve the right to impose quantity limits on any order, to reject all or any part of an order and to discontinue products without notice, even if you have already placed your order. The total/aggregate amount that you may load on one or multiple Gift vouchers in a single day should not exceed GHS 10,000. All prices are subject to change without notice and the price charged to you will be the price displayed at the time you place your order. After purchasing a Gift voucher, these Terms will no longer apply and you (or the recipient of the Gift voucher) must activate the Gift voucher by following the instructions provided by the Vendor, defined below. The Gift voucher will only function upon such activation. Activated Gift vouchers may be available within seconds; however, additional time may be required for certain activations. If your Gift voucher has not been activated within 30 seconds, please contact us at support@SOMTINSOMTIN.com.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Gift voucher Vendor Terms and Liability.
                            </h4>
                            <p>
                                Gift vouchers purchased via our websites or mobile applications are issued and activated by participating third-party merchants, retailers and vendors (collectively “Vendors”). Your purchase of each Gift voucher will be governed by certain terms and conditions established by the issuing Vendor. Depending on the applicable law of your jurisdiction and the promotional nature of certain Gift vouchers, Vendors may set expiration dates for such Gift vouchers, in addition to other restrictions and requirements. You should review and familiarize yourself with all applicable Vendor terms and conditions prior to purchasing any Gift voucher. If you have questions regarding the applicable Vendor terms, please contact the issuing Vendor. As issuers of the Gift vouchers, Vendors (and not SOMTINSOMTIN) are fully responsible for all aspects of their Gift voucher programs. Vendors are also responsible for any and all liabilities, damages and costs suffered by you or any other customer in connection with your purchase and use of their Gift voucher. While SOMTINSOMTIN strives to work with reputable Vendors, SOMTINSOMTIN has no liability for (i) the sale of products or services to you by a Vendor through the use of any Gift voucher; and (ii) any Vendor’s failure to honor a Gift voucher. You will need to look solely to the Vendor for any remedy in connection with the foregoing issues.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Gift voucher Errors.
                            </h4>
                            <p>
                                We attempt to be as accurate as possible and to eliminate errors on the products that we sale; however, SOMTINSOMTIN does not represent or warrant that any Gift voucher and information about the Gift voucher (including the description, Vendor information or pricing information) provided is accurate, complete, reliable, current or error-free. In the event of an error, in an order confirmation, in processing a Gift voucher purchase or otherwise, we reserve the right to correct such error and revise your order accordingly (including charging the correct price) or to cancel the order and refund any amount charged.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Disclaimers
                            </h4>
                            <p>
                                In addition to the disclaimers, limits on liability and indemnification obligations set forth in the Terms of Service, which apply to these Terms and are incorporated herein by this reference, you waive and release SOMTINSOMTIN and its subsidiaries, affiliates, partners, officers, directors, employees and agents from any liabilities, damages and costs arising from or related to (i) your loss or the theft of any SOMTINSOMTIN product (including Gift vouchers); and (ii) any act or omission of a Vendor in connection with a Gift voucher it provides. With respect to the SOMTINSOMTIN products, risk of loss and title for such products pass to you when you complete your purchase of the applicable product. SOMTINSOMTIN is not responsible for any damage or loss resulting from stolen or lost SOMTINSOMTIN product (including Gift vouchers) or any use of your SOMTINSOMTIN product (including Gift vouchers) without your permission. SOMTINSOMTIN is not responsible for replacing your damaged or lost SOMTINSOMTIN product or Gift voucher. SOMTINSOMTIN and its licensees, affiliates, and licensors make no warranties, express or implied, with respect to the SOMTINSOMTIN products, including without limitation, any express or implied warranty of merchantability or fitness for a particular purpose. Subject to the monetary caps described in Section 1 above, SOMTINSOMTIN products are transferrable within the domiciled country; however, you can NOT resale SOMTINSOMTIN vouchers to a third party. These disclaimers and limitations may or may not apply to you and are void where prohibited.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Payment Options
                            </h4>
                            <p>
                                When making a purchase on the website or a mobile application, SOMTINSOMTIN accepts various forms of payment, including Payment Card, Mobile Money, Apple Pay, Google Wallet. Unless otherwise indicated, the denominated value of the SOMTINSOMTIN product (including Gift voucher) will be billed in full at the time you purchase, and SOMTINSOMTIN provides the SOMTINSOMTIN product or Gift voucher. By making the purchase, you acknowledge that you are authorized to use the designated Payment voucher or other payment method and you authorize us to charge your purchase order to that Payment voucher or other payment method. le for resolving any problem we encounter in order to proceed with your order.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2">
                                SOMTINSOMTIN voucher Balances
                            </h4>
                            <p>
                                When you purchase a SOMTINSOMTIN voucher via the website or mobile application, the value of that SOMTINSOMTIN voucher (or multiple SOMTINSOMTIN vouchers) will be the “SOMTINSOMTIN voucher Balance” in your account. You may not have a SOMTINSOMTIN voucher Balance of over GHS 2,000 in any single day. On the checkout page, any remaining SOMTINSOMTIN voucher Balance will be automatically applied towards your purchase. You can choose to not use your SOMTINSOMTIN voucher Balance towards a purchase. The SOMTINSOMTIN voucher Balance is also valid for purchase of any Gift vouchers and can be used in combination with other payment methods. Your SOMTINSOMTIN voucher Balance and SOMTINSOMTIN Points cannot be used together towards a purchase.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Taxes
                            </h4>
                            <p>
                                With respect to the Gift vouchers that you purchase on the website or mobile applications, the amount paid for any Gift voucher does not include sales, value added or use taxes, which may be charged to you separately by the applicable Vendor at the time you purchase products or services from the Vendor using the Gift voucher.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                SOMTINSOMTIN Points
                            </h4>
                            <p>
                                You will earn SOMTINSOMTIN Points on the purchase of a Vendor’s Gift voucher. You DO NOT, however, earn SOMTINSOMTIN Points on (i) your purchase of a SOMTINSOMTIN voucher; or (ii) the value of the subsequent purchase of a Vendor’s Gift voucher with your SOMTINSOMTIN voucher or with your SOMTINSOMTIN voucher Balance. Please see the Terms of Service [at https://SOMTINSOMTIN.com/consumer-terms.html] for details.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Cancellations; No Returns
                            </h4>
                            <p>
                                All purchases made on the websites or mobile applications are final. Purchased Gift vouchers are non-returnable and non-refundable, provided, however, that if a Gift voucher does not function, we may, in our sole discretion, either refund you the Gift voucher purchase amount or replace the defective Gift voucher with an alternative Gift voucher or with products or services of equal value for the same Gift voucher Vendor. If you have any questions or problems with your order, please contact support@SOMTINSOMTIN.com.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Privacy
                            </h4>
                            <p>
                                Please refer to our Privacy Policy for information about how we collect, use and disclose information and data. Severability If any provision of these Terms shall be deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.
                            </p>
                            <p>
                                Waiver Enforcement of the Terms is solely in our discretion and our failure to enforce a provision in some instances does not constitute a waiver of our right to enforce such provision in other instances. Contact Us If you have any questions or concerns regarding these Terms or the SOMTINSOMTIN products, please contact us at: support@SOMTINSOMTIN.com;
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