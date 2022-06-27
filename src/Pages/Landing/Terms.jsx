import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Navbar from "../../Components/Navbar/Navbar";

export default function Terms() {
    const [ showButton, setShowButton ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 250 ) {
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
        <main className="">
            <Navbar />
            <div className="container-fluid">
                <div className="container md:pt-32 pt-24">
                    <div className="row pt-12">
                        <div className="col-md-8">
                            <h1 className="text-[#0E1133] font-bold ">
                                Terms & Conditions
                            </h1>
                            <p>
                                Last Updated: December 5, 2021 These Terms of Service (the “Terms”) set forth the terms and conditions that govern access to, and use of, the websites and SOMTINSOMTIN mobile applications made available by KUDIGO , Inc. (“KUDIGO”, “we,” or “us”) that enable a user to purchase, send or manage gift VOUCHERs and receive the other services from SOMTINSOMTIN as described herein (collectively, the “Services”). These Terms are a legal agreement between you (“you,” or “your”) and SOMTINSOMTIN. By clicking to “Accept” these Terms where this option is made available to you and/or by using our Services, you agree to be bound by these Terms. These Terms do not alter in any way the terms or conditions of any other agreement you may have with any other party for products, services or otherwise. SOMTINSOMTIN reserves the right to change or modify these Terms at any time and in our sole discretion. If SOMTINSOMTIN makes changes to these Terms, we will provide notice of such changes, by providing notice through the Services, by e-mail and/or by updating these Terms (as indicated by the “Last Updated” date found at the top of these Terms) on the SOMTINSOMTIN website found at https://SOMTINSOMTIN.com/terms-of-service/. You agree to receive notifications through these means and your continued use of the Services will indicate your acceptance of the revised Terms. If you do not agree to any amended Terms, you must stop using the Services.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Privacy Policy
                            </h4>
                            <p>
                                Please refer to our Privacy Policy for information about how we collect, use and disclose information about our users. Additional Terms If you purchase products (i.e., gift VOUCHERs) from SOMTINSOMTIN, our Terms of Sale will apply. These Terms of Sale are subject to change at any time and in our sole discretion, so you should review the Terms of Sale each time you make a purchase. Eligibility, Registration and Account Our Services are intended solely for users who are 13 years of age or older. If you are under the age of 13, then you are not permitted to register for an account with SOMTINSOMTIN. In addition, if you are between the ages of 13 and 18 (or the age of legal majority under applicable law), you may only use the Services under the supervision of a parent or legal guardian who registers for an account with SOMTINSOMTIN and thereby agrees to be bound by these Terms. By using the Services, you represent and warrant that you are 13 years of age or older. In order to use the Services, you will be required to register for an account with SOMTINSOMTIN. You may only register for one account and you agree to: (i) provide accurate, current and complete information; (ii) maintain and promptly update your account information to keep it accurate, current and complete; (iii) maintain the security of your account and accept all risks of unauthorized access to your account; and (iv) promptly notify SOMTINSOMTIN if you discover or otherwise suspect that your account has been subject to hacking or other unauthorized use.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                SOMTINSOMTIN Services Description
                            </h4>
                            <p>
                                Upload a gift VOUCHER you own. You may upload information about gift VOUCHERs you own to electronically manage those gift VOUCHERs. For example, depending on the features made available by the issuer of the gift VOUCHER, after uploading information about your gift VOUCHER, you may redeem or re-gift the gift VOUCHER solely within the domiciled country pursuant to the terms and conditions of the issuer of the gift VOUCHER, view gift VOUCHER details (e.g. check your gift VOUCHER balance) to the extent the issuer of the gift VOUCHER makes such details available to SOMTINSOMTIN, or visit the website of the issuer of the gift VOUCHER. Buy a gift VOUCHER. You may buy a gift VOUCHER for yourself. The Terms of Sale will apply to the purchase of such gift VOUCHERs and you agree to comply with such Terms of Sale. Send a gift VOUCHER. You may buy a gift VOUCHER to send to a friend. The Terms of Sale will apply to the purchase of such gift VOUCHER and you agree to comply with such Terms of Sale. SOMTINSOMTIN will use reasonable efforts to notify the recipient of the gift VOUCHER you send in accordance with the method that you select to send the gift VOUCHER. Use your SOMTINSOMTIN VOUCHER Balance. When you register for an account with SOMTINSOMTIN and purchase our virtual SOMTINSOMTIN VOUCHER, the amount that you load onto your virtual VOUCHER will remain in your account until you purchase a gift VOUCHER and apply that SOMTINSOMTIN VOUCHER Balance amount to your purchase. The Terms of Sale describe the use of and the restrictions associated with your SOMTINSOMTIN VOUCHER Balance, including, but not limited to, the GHS 2,000 cap on your daily SOMTINSOMTIN VOUCHER Balance.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                SOMTINSOMTIN Points
                            </h4>
                            <p>
                                SOMTINSOMTIN Points is a rewards program that allows a SOMTINSOMTIN user to earn promotional points (“Points”) and apply them to receive discounts on future purchases: Eligibility; Participation. SOMTINSOMTIN users are automatically enrolled to participate in the SOMTINSOMTIN Points program, although we reserve the right to limit participation in our sole discretion. Earning Points. You may earn Points by taking certain actions when you interact with SOMTINSOMTIN or authorized third parties. Points Balance. Each time you earn Points, we will update your Points balance, which you can view by logging into your online account. If we post Points to your account for any activity that is subsequently voided or cancelled, we will remove those Points from your account. If you believe that you have validly earned Points that have not been posted to your account, please contact us at support@SOMTINSOMTIN.com.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Redeeming Points.
                            </h4>
                            <p>
                                The Points you earn may be applied toward future gift VOUCHER purchases, provided that Points may be redeemed only for the purchase of eligible gift VOUCHERs. Your Points and your SOMTINSOMTIN VOUCHER Balance may not be used together to make a gift VOUCHER purchase. Eligible gift VOUCHERs may change over time. Please click here for information about how Points may be applied toward purchases. Restrictions. Points cannot be purchased, resold, transferred, redeemed for cash or applied to any other account. We may limit the number of Points you can earn or use within certain periods of time or implement other restrictions on the receipt or use of Points. You acknowledge and agree that Points may be redeemed solely by SOMTINSOMTIN and that Points do not constitute the property of any SOMTINSOMTIN user. Expiration. Unless we expressly state in writing otherwise, Points automatically expire at the end of the calendar year following the year in which such Points were earned or received (for example, Points earned in June 2014 will expire on December 31, 2015). Termination. We reserve the right to suspend or terminate your participation in the SOMTINSOMTIN Points program, and your access to the Points in your account, if you violate these Terms. We may also suspend, cancel or otherwise limit your access to Points if we suspect fraudulent, abusive or unlawful activity associated with your account. If we determine you fraudulently obtained Points or used fraudulently-obtained Points, we may revoke those Points and suspend or terminate your account.
                            </p>
                            <p>
                                Changes to the SOMTINSOMTIN Points Program. We may change, suspend or terminate the SOMTINSOMTIN Points program, or any part of it, at any time and in our sole discretion. If we decide to terminate the SOMTINSOMTIN Points program, we will provide you with advance notice using the means of providing notice described above. Upon termination of the program, Points earned but not used by you will automatically expire. Taxes. It is your responsibility for determining if you may be liable for any federal, state or local taxes as a result of earning or using any Points. Intellectual Property and Limited License Unless otherwise indicated by SOMTINSOMTIN, the Services and all content and other materials therein, including, without limitation, the SOMTINSOMTIN logo, the Terms of Sale and all other designs, text, graphics, pictures, information, data, software, sound files, other files made available within the Services and the selection and arrangement thereof, and any documentation or other ancillary material provided to you by or behalf of SOMTINSOMTIN (collectively, “SOMTINSOMTIN Content”) are the proprietary property of KUDIGO INC or our licensors or users and are protected by U.S. and international intellectual property laws.
                            </p>
                            <p>
                                SOMTINSOMTIN hereby grants you a limited, nonexclusive, non-sublicensable license to access and use the Services and SOMTINSOMTIN Content solely for the purpose of purchasing, sending or managing gift VOUCHERs or receiving other services under these Terms; however, such license is subject to these Terms and you are not permitted to (a) sell, rent, lease, lend, redistribute, sublicense or make commercial use of the Services or the SOMTINSOMTIN Content; (b) copy, reverse engineer, decompile, disassemble or attempt to discover the source code of our Services or SOMTINSOMTIN Content; (c) modify, alter or otherwise make any derivative uses of the Services or the SOMTINSOMTIN Content, or any portion thereof; (d) remove, alter or obscure any copyright, trademark or other proprietary rights notice included in the Services or SOMTINSOMTIN Content; (e) use any data mining, robots or similar data gathering or extraction methods; (f) download (other than the page caching) any portion of the Services or the SOMTINSOMTIN Content, except as expressly permitted via the Services; and (g) use the Services or the SOMTINSOMTIN Content other than for their intended purposes. Any use of the Services or the SOMTINSOMTIN Content other than as specifically authorized herein, without the prior written permission of SOMTINSOMTIN, is strictly prohibited and will terminate the license granted in this Section 5. Such unauthorized use may also violate applicable laws, including without limitation, copyright and trademark laws and applicable communications regulations and statutes. Unless explicitly stated by SOMTINSOMTIN, nothing in these Terms shall be construed as conferring any license to intellectual property rights, whether by estoppel, implication or otherwise. This license is revocable at any time.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Trademarks
                            </h4>
                            <p>
                                “SOMTINSOMTIN” and the SOMTINSOMTIN logo and any other SOMTINSOMTIN product or service names, logos or slogans are SOMTINSOMTIN’s trademarks in the United States and in other countries, and may not be copied, imitated or used, in whole or in part, without the prior written permission of SOMTINSOMTIN. All other trademarks, registered trademarks, product names and company names or logos mentioned in the Services are the property of their respective owners and may not be used without permission of the applicable trademark holder. Reference to any products, services, processes or other information, by name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation by SOMTINSOMTIN.
                            </p>
                            <p>
                                Repeat Infringer Policy; Copyright Complaints In accordance with the Digital Millennium Copyright Act (“DMCA”) and other applicable laws, SOMTINSOMTIN has adopted a policy of terminating, in appropriate circumstances and at SOMTINSOMTIN’s sole discretion, users who are deemed to be repeat infringers. SOMTINSOMTIN may also, in our sole discretion, limit access to the Services and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement. If you believe that anything on the Services infringes upon any copyright which you own or control, you may file a notification of such infringement with our Designated Agent Email: copyright@SOMTINSOMTIN.com If you knowingly misrepresent in your notification that the material or activity is infringing, you will be liable for any damages, including costs and attorneys’ fees, incurred by us or the alleged infringer as the result of our relying upon such misrepresentation in removing or disabling access to the material or activity claimed to be infringing.


                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2">
                                Third-Party Services; Third-Party Materials
                            </h4>
                            <p>
                                SOMTINSOMTIN may provide links to third-party websites, apps, mobile services or other third-party services (“Third-Party Services”) and may also display, link to or otherwise make available third-party content, data, information, events, apps or materials (“Third-Party Materials”) on the Services. SOMTINSOMTIN does not endorse or control, and makes no representations or warranties of any kind, regarding any Third-Party Services or Third-Party Materials including, but not limited to, the content, accuracy, quality, nature, appropriateness, decency, functionality, performance, reliability, completeness, timeliness, validity, safety, legality or any other aspect thereof. Your use of Third-Party Services and Third-Party Materials is at your own risk. SOMTINSOMTIN is not responsible for any issues, legal or otherwise, that may result from your use of the Third-Party Services or Third-Party Materials, including any loss, damage or harm of any sort incurred as a result of your use of Third-Party Services or Third-Party Materials. If you access or use any Third-Party Services or Third-Party Materials, SOMTINSOMTIN’s terms and policies, including these Terms, no longer govern. You should review the applicable terms and policies including, but not limited to, privacy and data gathering practices, of any Third-Party Service to which you navigate from the Services. For the avoidance of doubt the terms and policies for Third-Party Services are solely between you and the Third-Party Services provider and not SOMTINSOMTIN. User Content You are solely responsible for all content you post, upload to, transmit, distribute, store, create or otherwise publish through the Services (“User Content”). The User Content you provide must comply with the rules set forth below. These rules do not create any private right of action on the part of any third-party or any reasonable expectation that the Services will not contain any content that is prohibited by such rules. You agree not to post, upload to, transmit, distribute, store, create or otherwise publish through the Services any of the following: User Content that is libelous, defamatory, profane, obscene, pornographic, sexually explicit, indecent, lewd, vulgar, suggestive, violent, harassing, hateful, threatening, offensive, discriminatory, bigoted, abusive, inflammatory, invasive of privacy or publicity rights, fraudulent, deceptive or otherwise objectionable; User Content that is illegal or unlawful, that would constitute, encourage or provide instructions for a criminal offense, violate the rights of any party, or otherwise create liability or violate any local, state, national or international law; User Content that may infringe or violate any patent, trademark, trade secret, copyright, or other intellectual or other right of any party; User Content that contains or depicts any statements, remarks or claims that do not reflect your honest views and experiences; User Content that impersonates any person or entity or otherwise misrepresents your affiliation with a person or entity; Private information of any third-party including, but not limited to, addresses, phone numbers, email addresses, Social Security numbers or credit VOUCHER numbers; Unsolicited promotions, political campaigning, or commercial messages (SPAM) or any chain messages; User Content designed to deceive or trick the user of the Services; Viruses, corrupted data or other harmful, disruptive or destructive files or code, script or other software designed to automate any functionality on the Services; or User Content that, in the sole judgment of SOMTINSOMTIN, is objectionable. Although SOMTINSOMTIN does not control and has no obligation to screen, edit or monitor any of the User Content posted, stored or uploaded on (or otherwise made available via) the Services, SOMTINSOMTIN reserves the right, and has absolute discretion, to remove, screen or edit any User Content posted, stored or uploaded on the Services at any time and for any reason without notice, and you are solely responsible for creating backup copies of and replacing any User Content you post, store or upload on (or otherwise make available via) the Services at your sole cost and expense. SOMTINSOMTIN takes no responsibility and assumes no liability for any User Content posted, stored or uploaded on (or otherwise made available via) the Services.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Referrals
                            </h4>
                            <p>
                                Except for any Feedback you provide with respect to the Services, you retain ownership of the User Content you post, store or upload on (or otherwise make available via) the Services. You hereby grant SOMTINSOMTIN and our affiliates a non-exclusive, royalty-free, perpetual, irrevocable and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display such User Content throughout the world in any manner or media, on or off the Services. You represent and warrant that: (i) you own and control all of the rights to the User Content that you post, store or upload on (or otherwise make available via) the Services or you otherwise have the right to make available such User Content via the Services and grant the rights granted in these Terms; (ii) the User Content that you post, store or upload on (or otherwise make available via) the Services is accurate and not misleading; and (iii) SOMTINSOMTIN’s use of the User Content you supply does not violate these Terms and will not violate any rights of, or cause injury to, any person or entity. User Conduct You are solely responsible for your conduct and the conduct of anyone who uses your account with respect to the Services, and you agree that you will not and will not permit anyone using your account to do any of the following in connection with the Services: Use the Services in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying the Services or that could damage, disable, overburden or impair the functionality of the Services in any manner or in any way inconsistent with any documentation provided to or made available to you by SOMTINSOMTIN concerning the Services; Flag content or report abuse for improper purposes or without good reason; Use the Services for any illegal or unauthorized purpose or engage in, encourage, or promote any illegal activity, or any activity that violates these Terms or any other rules or polices established from time to time by SOMTINSOMTIN; Attempt to indicate in any manner that you have a relationship with us or that we have endorsed you or any products or services for any purpose; Create an account or post, store or upload (or otherwise make available) any User Content if you are not over 13 years of age; Use or attempt to use another user’s account without authorization from such user and SOMTINSOMTIN; Modify, adapt, hack or emulate the Services; Use any robot, spider, crawler, scraper or other automated means or interface not provided by us to access the Services or to extract data; Develop any third-party applications that interact with User Content or the Services without our prior consent; Circumvent or attempt to circumvent any filtering, security measures or other features designed to protect the Services or third-parties; and Infringe upon or violate the rights of SOMTINSOMTIN, our users or any third-party. If your account is disabled, you, or anyone acting under your discretion, is/are strictly prohibited from creating another account with SOMTINSOMTIN. SOMTINSOMTIN takes no responsibility and assumes no liability for any user conduct, mistakes, defamation, slander, libel, omissions, falsehoods, obscenity, pornography or profanity you may encounter while using the Services. Your use of the Services is at your own risk. Any use of the Services in violation of the foregoing violates these Terms and may result in, among other things, termination or suspension of your rights to use the Services. Feedback You can submit questions, comments, suggestions, ideas, plans, notes, drawings, original or creative materials or other information or materials about SOMTINSOMTIN and the Services (collectively, “Feedback”). Feedback, whether submitted through the Services or otherwise, is non-confidential and shall become the sole property of SOMTINSOMTIN. SOMTINSOMTIN shall own exclusive rights, including all intellectual property rights, in and to such Feedback and shall be entitled to the unrestricted use and dissemination of this Feedback for any purpose, commercial or otherwise, without acknowledgment or compensation to you.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2">
                                Disclaimers
                            </h4>
                            <p>
                                YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SERVICES AND SOMTINSOMTIN CONTENT IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, SAFETY, ACCURACY AND EFFORT IS WITH YOU. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES AND SOMTINSOMTIN CONTENT ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. SOMTINSOMTIN DISCLAIMS ANY AND ALL WARRANTIES AND REPRESENTATIONS (EXPRESS OR IMPLIED, ORAL OR WRITTEN) WITH RESPECT TO THE SERVICES AND THE SOMTINSOMTIN CONTENT CONTAINED THEREIN, INCLUDING ANY AND ALL: (I) IMPLIED WARRANTIES OF MERCHANTABILITY; (II) IMPLIED WARRANTIES OF FITNESS OR SUITABILITY FOR ANY PURPOSE (WHETHER OR NOT SOMTINSOMTIN KNOWS, HAS REASON TO KNOW, HAS BEEN ADVISED OR IS OTHERWISE AWARE OF ANY SUCH PURPOSE); AND (III) WARRANTIES OF NON-INFRINGEMENT OR CONDITION OF TITLE. SOMTINSOMTIN DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE SERVICES WILL BE ACCURATE OR MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT ANY DEFECTS IN THE SERVICES WILL BE CORRECTED. NO ORAL OR WRITTEN INFORMATION, GUIDELINES OR ADVICE GIVEN BY SOMTINSOMTIN OR OUR AUTHORIZED REPRESENTATIVE WILL CREATE A WARRANTY. SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF IMPLIED TERMS IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE DISCLAIMERS IN THIS SECTION 13 MAY NOT APPLY TO YOU. Indemnification You agree, at your sole expense, to defend, indemnify and hold us, our service providers and consultants, and our and their respective directors, employees and agents, harmless from and against any and all actual or threatened suits, actions, proceedings (at law or in equity), claims, damages, payments, deficiencies, fines, judgments, settlements, liabilities, losses, costs and expenses (including, but not limited to, reasonable attorney fees, costs, penalties, interest and disbursements) caused by, arising out of, resulting from, attributable to or in any way incidental to: (i) your use of the Services or SOMTINSOMTIN Content; (ii) your violation of these Terms or the rights of any third-party; or (iii) any User Content you post, upload, use, distribute, store or otherwise transmit on or through the Services.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Limitation of Liability
                            </h4>
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT WILL SOMTINSOMTIN BE LIABLE TO YOU OR ANY THIRD-PARTY FOR ANY INCIDENTAL, SPECIAL, INDIRECT, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES WHATSOEVER INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO THE SERVICES AND THE CONTENT THEREIN, INCLUDING BUT NOT LIMITED TO, THE GIFT VOUCHERS, GIFT PROMOTIONS, RELATED PRODUCTS AND SERVICES (INCLUDING, BUT NOT LIMITED TO, THE REDEEMABILITY OF GIFT VOUCHERS OR GIFT PROMOTIONS), USER CONTENT, SOMTINSOMTIN CONTENT, THIRD-PARTY SERVICES AND/OR THIRD-PARTY MATERIALS, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE, WHETHER ACTIVE, PASSIVE OR IMPUTED), PRODUCT LIABILITY, STRICT LIABILITY OR OTHER THEORY) AND EVEN IF SOMTINSOMTIN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. IN NO EVENT WILL SOMTINSOMTIN’S TOTAL LIABILITY, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE, WHETHER ACTIVE, PASSIVE OR IMPUTED), PRODUCT LIABILITY, STRICT LIABILITY OR OTHER THEORY, ARISING OUT OF OR RELATING TO THE USE OF OR INABILITY TO USE THE SERVICES EXCEED FIFTY DOLLARS ($50.00) (AS OPPOSED TO ANY OTHER FEES/COSTS INCLUDING, BUT NOT LIMITED TO, ANY FEES ASSOCIATED WITH YOUR DEVICE, THE COST TO PURCHASE AND OPERATE YOUR DEVICE, THE COST OF ANY GIFT VOUCHERS OR THE COST OF ANY PRODUCTS OR SERVICES PURCHASED WITH A GIFT VOUCHER). Applicable Law KUDIGO INC is based in the United States and our Services are subject to U.S. law. We make no representations or warranties that the Services are appropriate or available for use in other locations. If you choose to access or use the Services from locations outside the United States, you do so at your own risk and are responsible for compliance with all applicable laws, rules and regulations. The laws of the State of New York, excluding its conflicts of law rules, govern your use of the Services. Your use of the Services may also be subject to other local, state, national, or international laws. jurisdiction of such courts over any suit, action or proceeding arising out of the Services (including, but not limited to, your use of the Services).
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                Termination or Modification of Services
                            </h4>
                            <p>
                                SOMTINSOMTIN reserves the right to change, suspend, remove, discontinue or disable access to the Services at any time and without notice. In no event will SOMTINSOMTIN be liable for the removal of or disabling of access to any portion or feature of the Services. Severability If any provision of these Terms shall be deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. Waiver Enforcement of the Terms is solely in our discretion and our failure to enforce a provision in some instances does not constitute a waiver of our right to enforce such provision in other instances. Assignment SOMTINSOMTIN may assign these Terms and its rights or delegate its obligations under without your consent. All provisions contained in these Terms shall extend to and be binding upon you and SOMTINSOMTIN’s successors and assigns. You may not assign these Terms to another person or entity.
                            </p>
                            <p>
                                Contact Us If you have any questions or concerns regarding these Terms or our Services, please contact us at support@SOMTINSOMTIN.com
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                SPECIAL PROVISIONS FOR iOS MOBILE APP USERS
                            </h4>
                            <p>
                                Notwithstanding anything to the contrary in the Terms, the additional terms set forth in this Section 22 (“Section 22 Terms”) will apply to the installation and use of SOMTINSOMTIN’s mobile applications on iOS devices. These Section 22 Terms govern any updates to, or supplements or replacements for, SOMTINSOMTIN’s mobile applications, unless separate terms accompany such updates, supplements or replacements, in which case the separate terms will apply. 22.1 Acknowledgement You acknowledge that the Section 22 Terms are solely between you and SOMTINSOMTIN, and not with Apple, Inc. (“Apple”), and SOMTINSOMTIN, not Apple, is solely responsible for SOMTINSOMTIN’s mobile applications and the content contained therein. You further acknowledge that your use of SOMTINSOMTIN’s mobile applications are subject to any additional restrictions set forth in the Usage Rules for the Apple App Store Terms of Service as of the date you download SOMTINSOMTIN’s mobile applications. In the event of any conflict between the terms and conditions of the Usage Rules for the Apple App Store Terms of Service and the terms and conditions of the Terms, the terms and conditions of the Usage Rules for the Apple App Store Terms of Service will govern.
                            </p>
                        </div>
                        <div className="col-md-8 pt- 2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                22.2 Scope of License
                            </h4>
                            <p>
                                SOMTINSOMTIN hereby grants you a nonexclusive, nontransferable, limited license to install and use SOMTINSOMTIN’s mobile applications on any iOS device that you own or control, solely as permitted by the Terms and the Usage Rules set forth in the Apple App Store Terms of Service. 22.3 Maintenance and Support You acknowledge and agree that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to SOMTINSOMTIN’s mobile applications.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4 className="text-[#0E1133] font-bold pb-2 ">
                                22.4 Warranty
                            </h4>
                            <p>
                                You acknowledge and agree that Apple is not responsible for any product warranties, whether express or implied by law, with respect to SOMTINSOMTIN’s mobile applications. In the event of any failure of SOMTINSOMTIN’s mobile applications to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any, paid by you to Apple for the SOMTINSOMTIN mobile applications; and to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to such applications. You also acknowledge and agree that to the extent that there are any applicable warranties, or any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any such applicable warranty; such will be the sole responsibility of SOMTINSOMTIN. However, you understand and agree that in accordance with the Terms, SOMTINSOMTIN has disclaimed all warranties of any kind with respect to SOMTINSOMTIN’s mobile applications, and therefore, there are no warranties applicable to such applications.
                            </p>
                        </div>
                        <div className="col-md-8 pt-2 pb-2">
                            <h4>
                                22.5 Product Claims
                            </h4>
                            <p>
                                You acknowledge and agree that as between Apple and SOMTINSOMTIN, SOMTINSOMTIN, not Apple, is responsible for addressing any of your claims or any third-party claims relating to SOMTINSOMTIN’s mobile applications or your possession and/or use of such applications, including, but not limited to: (i) product liability claims; (ii) any claim that the applications fail to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation. 22.6 Intellectual Property Rights You acknowledge and agree that, in the event of any third-party claim that SOMTINSOMTIN’s mobile applications, or your possession and use thereof, infringe that third-party’s intellectual property rights, SOMTINSOMTIN, and not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim to the extent required under these Terms. 22.7 Legal Compliance You represent and warrant that: (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties. 22.8 Third-Party Beneficiary You acknowledge and agree that Apple, and Apple’s subsidiaries, are third-party beneficiaries of the Section 22 Terms, and that, upon your acceptance of the Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce Section 22 Terms against you as a third-party beneficiary thereof.
                            </p>
                            <p>
                                Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC. The merchants represented are not sponsors of SOMTINSOMTIN or otherwise affiliated with SOMTINSOMTIN. The logos and other identifying marks attached are trademarks of and owned by each represented company and/or its affiliates. Please visit each company’s website for additional terms and conditions.
                            </p>
                        </div>
                    </div>
                </div>
                { showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <BsFillArrowUpSquareFill />
                </button>
            )}
            </div>
        </main>
    )
}