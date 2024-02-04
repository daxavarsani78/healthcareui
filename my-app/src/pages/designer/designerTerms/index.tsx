import { Box, Typography } from "@mui/material";
import React from "react";
import DesignerHeader from "../../../components/designer/designerHeader";
import { termsHomeBanner } from "../../../assets/images";
import DesignerFooter from "../../../components/designer/designerFooter";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const DesignerTerms: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="overlay" onClick={(e) => document.body.classList.toggle('sidebar-toggle')}></div>
      <DesignerHeader bgColor="bg-transparent" />
      <section className="terms-home">
        <Box className="container">
          <Box className="terms-home-content">
            <Typography variant="h1" className="terms-home-heading">
              Terms & Conditions
            </Typography>
          </Box>
          <Box className="terms-home-banner">
            <img src={termsHomeBanner} alt="Banner" />
          </Box>
        </Box>
      </section>
      <section className="terms-list-section">
        <Box className="container">

          <Box className="terms-list-content">
            <Box className="terms-list-box">
              <ul className="nav-items">
                <li className="nav-item">
                  <Link activeClass="active" to="section1" spy={true} offset={-142} duration={500}>
                    About the Website
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section2" spy={true} offset={-142} duration={500}>
                    Acceptance of the Terms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section3" spy={true} offset={-142} duration={500}>
                    Registration to use the Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section4" spy={true} offset={-142} duration={500}>
                    Your obligations as a Member
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section5" spy={true} offset={-142} duration={500} >
                    Payment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section6" spy={true} offset={-142} duration={500}>
                    Refund Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section7" spy={true} offset={-142} duration={500}>
                    Copyright and Intellectual Property
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section8" spy={true} offset={-142} duration={500}>
                    Privacy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section9" spy={true} offset={-142} duration={500}>
                    General Disclaimer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section10" spy={true} offset={-142} duration={500}>
                    Limitation of liability
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section11" spy={true} offset={-142} duration={500}>
                    Termination of Contract
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section12" spy={true} offset={-142} duration={500}>
                    Indemnity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section13" spy={true} offset={-142} duration={500}>
                    Dispute Resolution
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section14" spy={true} offset={-142} duration={500}>
                    Venue and Jurisdiction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section15" spy={true} smooth={true} isDynamic={true} offset={-142} duration={500}>
                    Governing Law
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section16" spy={true} smooth={true} isDynamic={true} offset={-142} duration={500}>
                    Independent Legal Advice
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" to="section17" spy={true} smooth={true} isDynamic={true} offset={-142} duration={500}>
                    Severance
                  </Link>
                </li>
              </ul>
            </Box>
            <Box className="terms-list-items" id="scrollContainer">
              <Element name="section1" className="element">
                <Typography variant="h3" className="title">1.	About the Website</Typography>
                <Typography variant="h6" className="terms-text">
                  &#40;a&#41; Welcome to www.carecircuit.com.au &#40;the ‘Website’&#41;. The Website provides home care and disability support services &#40;the ‘Services ‘&#41;.<br /><br />
                  &#40;b&#41; The Website is operated by CareCircuit Home and Disability Services Pty Ltd&#40;ABN 77 647 210 740&#41;. Access to and use of the Website, or any of its associated Products or Services, is provided by CareCircuit Home and Disability Services Pty Ltd. Please read these terms and conditions &#40;the ‘Terms ‘&#41; carefully. By using, browsing and/or reading the Website, this signifies that you have read, understood and agree to be bound by the Terms. If you do not agree with the Terms, you must cease usage of the Website, or any of Services, immediately.<br /><br />
                  &#40;c&#41; CareCircuit Home and Disability Services Pty Ltd reserves the right to review and change any of the Terms by updating this page at its sole discretion. When CareCircuit Home and Disability Services Pty Ltd updates the Terms, it will use reasonable endeavours to provide you with notice of updates to the Terms. Any changes to the Terms take immediate effect from the date of their publication. Before you continue, we recommend you keep a copy of the Terms for your records.
                </Typography>
              </Element>
              <Element name="section2" className="element">
                <Typography variant="h3" className="title">2. Acceptance of the Terms</Typography>
                <Typography variant="h6" className="terms-text">
                  You accept the Terms by remaining on the Website. You may also accept the Terms by clicking to accept or agree to the Terms where this option is made available to you by CareCircuit Home and Disability Services Pty Ltd in the user interface.
                </Typography>
              </Element>
              <Element name="section3" className="element">
                <Typography variant="h3" className="title">3. Registration to use the Services</Typography>
                <Typography variant="h6" className="terms-text">
                  &#40;a&#41; In order to access the Services, you must first register for an account through the Website &#40;the ‘Account’&#41;.<br /><br />
                  &#40;b&#41; As part of the registration process, or as part of your continued use of the Services, you may be required to provide personal information about yourself &#40;such as identification or contact details&#41;, including:<br /><br />
                  &#40;i&#41; Email address<br /><br />
                  &#40;ii&#41; Preferred username<br /><br />
                  &#40;iii&#41; Mailing address<br /><br />
                  &#40;iv&#41; Telephone number<br /><br />
                  &#40;v&#41; First Name, Last Name, Email Address<br /><br />
                  &#40;c&#41; You warrant that any information you give to CareCircuit Home and Disability Services Pty Ltd in the course of completing the registration process will always be accurate, correct and up to date.<br /><br />
                  &#40;d&#41; Once you have completed the registration process, you will be a registered member of the Website &#40;‘Member ‘&#41; and agree to be bound by the Terms.<br /><br />
                  &#40;e&#41; You may not use the Services and may not accept the Terms if:<br /><br />
                  &#40;i&#41; you are not of legal age to form a binding contract with CareCircuit Home and Disability Services Pty Ltd; or<br /><br />
                  &#40;ii&#41; you are a person barred from receiving the Services under the laws of Australia or other countries including the country in which you are resident or from which you use the Services.
                </Typography>
              </Element>
              <Element name="section4" className="element">
                <Typography variant="h3" className="title">4. Your obligations as a Member</Typography>
                <Typography variant="h6" className="terms-text">
                  &#40;a&#41; As a Member, you agree to comply with the following:<br /><br />
                  &#40;i&#41; you will use the Services only for purposes that are permitted by:<br /><br />
                  &#40;A&#41; the Terms; and<br /><br />
                  &#40;B&#41; any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions;<br /><br />
                  &#40;ii&#41; you have the sole responsibility for protecting the confidentiality of your password and/or email address. Use of your password by any other person may result in the immediate cancellation of the Services;<br /><br />
                  &#40;iii&#41; any use of your registration information by any other person, or third parties, is strictly prohibited. You agree to immediately notify CareCircuit Home and Disability Services Pty Ltd of any unauthorised use of your password or email address or any breach of security of which you have become aware;<br /><br />
                  &#40;iv&#41; access and use of the Website is limited, non-transferable and allows for the sole use of the Website by you for the purposes of CareCircuit Home and Disability Services Pty Ltd providing the Services;<br /><br />
                  &#40;v&#41; you will not use the Services or the Website in connection with any commercial endeavours except those that are specifically endorsed or approved by the management of CareCircuit Home and Disability Services Pty Ltd;<br /><br />
                  &#40;vi&#41; you will not use the Services or Website for any illegal and/or unauthorised use which includes collecting email addresses of Members by electronic or
                  other means for the purpose of sending unsolicited email or unauthorised framing of or linking to the Website;<br /><br />
                  &#40;vii&#41; you agree that commercial advertisements, affiliate links, and other forms of solicitation may be removed from the Website without notice and may result in termination of the Services. Appropriate legal action will be taken by CareCircuit Home and Disability Services Pty Ltd for any illegal or unauthorised use of the Website; and<br /><br />
                  &#40;viii&#41; you acknowledge and agree that any automated use of the Website or its Services is prohibited.<br /><br />
                </Typography>
              </Element>
              <Element name="section5" className="element">
                <Typography variant="h3" className="title">5. Payment</Typography>
                <Typography variant="h6" className="terms-text">
                  &#40;a&#41; Where the option is given to you, you may make payment for the Services &#40;the ‘ Services Fee’&#41; by way of:<br /><br />
                  &#40;b&#41; All payments made in the course of your use of the Services are made using . In using the Website, the Services or when making any payment in relation to your use of the Services, you warrant that you have read, understood and agree to be bound by the terms and conditions which are available on their website.<br /><br />
                  &#40;c&#41; You acknowledge and agree that where a request for the payment of the Services Fee is returned or denied, for whatever reason, by your financial institution or is unpaid by you for any other reason, then you are liable for any costs, including banking fees and charges, associated with the Services Fee.<br /><br />
                  &#40;d&#41; You agree and acknowledge that CareCircuit Home and Disability Services Pty Ltd can vary the Services Fee at any time.
                </Typography>
              </Element>
              <Element name="section6" className="element">
                <Typography variant="h3" className="title">6. Refund Policy</Typography>
                <Typography variant="h6" className="terms-text">
                  CareCircuit Home and Disability Services Pty Ltd will only provide you with a refund of the Services Fee in the event they are unable to continue to provide the Services or if the manager of CareCircuit Home and Disability Services Pty Ltd makes a decision, at its absolute discretion, that it is reasonable to do so under the circumstances &#40;the ‘Refund’&#41;.
                </Typography>
              </Element>
              <Element name="section7" className="element">
                <Typography variant="h3" className="title">7.	Copyright and Intellectual Property</Typography>
                <Typography variant="h6" className="terms-text">
                  Your personal information will not be disclosed to recipients outside Australia unless you expressly request us to do so. If you request us to transfer your personal information to an overseas recipient, the overseas recipient will not be required to comply with the Australian Privacy Principles and we will not be liable for any mishandling of your information in such circumstances.
                </Typography>
              </Element>
              <Element name="section8" className="element">
                <Typography variant="h3" className="title">8. Privacy</Typography>
                <Typography variant="h6" className="terms-text">
                  CareCircuit Home and Disability Services Pty Ltd takes your privacy seriously and any information provided through your use of the Website and/or Services are
                  subject to CareCircuit Home and Disability Services Pty Ltd’s Privacy Policy, which is available on the Website.
                </Typography>
              </Element>
              <Element name="section9" className="element">
                <Typography variant="h3" className="title">9.	General Disclaimer</Typography>
                <Typography variant="h6" className="terms-text">
                  &#40;a&#41; Nothing in the Terms limits or excludes any guarantees, warranties, representations or conditions implied or imposed by law, including the Australian Consumer Law &#40;or any liability under them&#41; which by law may not be limited or excluded.<br /><br />
                  &#40;b&#41; Subject to this clause, and to the extent permitted by law:<br /><br />
                  &#40;i&#41; all terms, guarantees, warranties, representations or conditions which are not expressly stated in the Terms are excluded; and<br /><br />
                  &#40;ii&#41; CareCircuit Home and Disability Services Pty Ltd will not be liable for any special, indirect or consequential loss or damage &#40;unless such loss or damage is reasonably foreseeable resulting from our failure to meet an applicable Consumer Guarantee&#41;, loss of profit or opportunity, or damage to goodwill arising out of or in connection with the Services or these Terms &#40;including as a result of not being able to use the Services or the late supply of the Services&#41;, whether at common law, under contract, tort &#40;including negligence&#41;, in equity, pursuant to statute or otherwise.<br /><br />
                  &#40;c&#41; Use of the Website and the Services is at your own risk. Everything on the Website and the Services is provided to you “as is” and “as available” without warranty or condition of any kind. None of the affiliates, directors, officers, employees, agents, contributors and licensors of CareCircuit Home and Disability Services Pty Ltd make any express or implied representation or warranty about the Services or any products or Services &#40;including the products or Services of CareCircuit Home and Disability Services Pty Ltd&#41; referred to on the Website. This includes &#40;but is not restricted to&#41; loss or damage you might suffer as a result of any of the following:<br /><br />
                  &#40;i&#41; failure of performance, error, omission, interruption, deletion, defect, failure to correct defects, delay in operation or transmission, computer virus or other harmful component, loss of data, communication line failure, unlawful third party conduct, or theft, destruction, alteration or unauthorised access to records;<br /><br />
                  &#40;ii&#41; the accuracy, suitability or currency of any information on the Website, the Services, or any of its Services related products &#40;including third party material and advertisements on the Website&#41;;<br /><br />
                  &#40;iii&#41; costs incurred as a result of you using the Website, the Services or any of the products of CareCircuit Home and Disability Services Pty Ltd; and<br /><br />
                  &#40;iv&#41; the Services or operation in respect to links which are provided for your convenience.<br /><br />
                </Typography>
              </Element>
              <Element name="section10" className="element">
                <Typography variant="h3" className="title">10. Limitation of liability</Typography>
                <Typography variant="h6" className="terms-text">
                  &#40;a&#41; CareCircuit Home and Disability Services Pty Ltd’s total liability arising out of or in connection with the Services or these Terms, however arising, including under contract, tort &#40;including negligence&#41;, in equity, under statute or otherwise, will not exceed the resupply of the Services to you.<br /><br />
                  &#40;b&#41; You expressly understand and agree that CareCircuit Home and Disability Services Pty Ltd, its affiliates, employees, agents, contributors and licensors shall not be liable to you for any direct, indirect, incidental, special consequential or exemplary damages which may be incurred by you, however caused and under any theory of liability. This shall include, but is not limited to, any loss of profit &#40;whether incurred directly or indirectly&#41;, any loss of goodwill or business reputation and any other intangible loss.
                </Typography>
              </Element>
              <Element name="section11" className="element">
                <Typography variant="h3" className="title">11.	Termination of Contract</Typography>
                <Typography variant="h6" className="terms-text">
                  &#40;a&#41; The Terms will continue to apply until terminated by either you or by CareCircuit Home and Disability Services Pty Ltd as set out below.<br /><br />
                  &#40;b&#41; If you want to terminate the Terms, you may do so by:<br /><br />
                  &#40;i&#41; not renewing the Subscription prior to the end of the Subscription Period;<br /><br />
                  &#40;ii&#41; providing CareCircuit Home and Disability Services Pty Ltd with 14 days’ notice of your intention to terminate; and<br /><br />
                  &#40;iii&#41; closing your accounts for all of the services which you use, where CareCircuit Home and Disability Services Pty Ltd has made this option available to you.<br /><br />
                  Your notice should be sent, in writing, to CareCircuit Home and Disability Services Pty Ltd via the ‘Contact Us’ link on our homepage.<br /><br />
                  &#40;c&#41; CareCircuit Home and Disability Services Pty Ltd may at any time, terminate the Terms with you if:<br /><br />
                  &#40;i&#41; you do not renew the Subscription at the end of the Subscription Period;<br /><br />
                  &#40;ii&#41; you have breached any provision of the Terms or intend to breach any provision;<br /><br />
                  &#40;iii&#41; CareCircuit Home and Disability Services Pty Ltd is required to do so by law;<br /><br />
                  &#40;iv&#41; the provision of the Services to you by CareCircuit Home and Disability Services Pty Ltd is, in the opinion of CareCircuit Home and Disability Services Pty Ltd, no longer commercially viable.<br /><br />
                  &#40;d&#41; Subject to local applicable laws, CareCircuit Home and Disability Services Pty Ltd reserves the right to discontinue or cancel your membership at any time and may suspend or deny, in its sole discretion, your access to all or any portion of the Website or the Services without notice if you breach any provision of the Terms or any applicable law or if your conduct impacts CareCircuit Home and Disability Services Pty Ltd’s name or reputation or violates the rights of those of another party.
                </Typography>
              </Element>
              <Element name="section12" className="element">
                <Typography variant="h3" className="title">12.	Indemnity</Typography>
                <Typography variant="h6" className="terms-text">
                  &#40;a&#41; You agree to indemnify CareCircuit Home and Disability Services Pty Ltd, its affiliates, employees, agents, contributors, third party content providers and licensors from and against:<br /><br />
                  &#40;i&#41; all actions, suits, claims, demands, liabilities, costs, expenses, loss and damage &#40;including legal fees on a full indemnity basis&#41; incurred, suffered or arising out of or in connection with your content;<br /><br />
                  &#40;ii&#41; any direct or indirect consequences of you accessing, using or transacting on the Website or attempts to do so; and/or<br /><br />
                  &#40;iii&#41; any breach of the Terms.<br /><br />
                </Typography>
              </Element>
              <Element name="section13" className="element">
                <Typography variant="h3" className="title">13.	Dispute Resolution</Typography>
                <Typography variant="h6" className="terms-text">
                  &#40;a&#41; Compulsory:<br /><br />
                  If a dispute arises out of or relates to the Terms, either party may not commence any Tribunal or Court proceedings in relation to the dispute, unless the following clauses have been complied with &#40;except where urgent interlocutory relief is sought&#41;.<br /><br />
                  &#40;b&#41; Notice:<br /><br />
                  A party to the Terms claiming a dispute &#40;‘Dispute’&#41; has arisen under the Terms, must give written notice to the other party detailing the nature of the dispute, the desired outcome and the action required to settle the Dispute.<br /><br />
                  &#40;c&#41; Resolution:<br /><br />
                  On receipt of that notice &#40;‘Notice’&#41; by that other party, the parties to the Terms &#40;‘Parties ‘&#41; must:<br /><br />
                  &#40;i&#41; Within 15 days of the Notice endeavour in good faith to resolve the Dispute
                  expeditiously by negotiation or such other means upon which they may mutually agree;<br /><br />
                  &#40;ii&#41; If for any reason whatsoever, 14 days after the date of the Notice, the Dispute has not been resolved, the Parties must either agree upon selection of a mediator or request that an appropriate mediator be appointed by the President of the Conflict Resolution Service or his or her nominee;<br /><br />
                  &#40;iii&#41; The Parties are equally liable for the fees and reasonable expenses of a mediator and the cost of the venue of the mediation and without limiting the foregoing undertake to pay any amounts requested by the mediator as a pre-condition to the mediation commencing. The Parties must each pay their own costs associated with the mediation;<br /><br />
                  &#40;iv&#41; The mediation will be held in Melbourne, Australia.<br /><br />
                  &#40;d&#41; Confidential:<br /><br />
                  All communications concerning negotiations made by the Parties arising out of and in connection with this dispute resolution clause are confidential and to the extent possible, must be treated as “without prejudice” negotiations for the purpose of applicable laws of evidence.<br /><br />
                  &#40;e&#41; Termination of Mediation:<br /><br />
                  If 1 month have elapsed after the start of a mediation of the Dispute and the Dispute has not been resolved, either Party may ask the mediator to terminate the mediation and the mediator must do so.<br /><br />
                </Typography>
              </Element>
              <Element name="section14" className="element">
                <Typography variant="h3" className="title">14.	Venue and Jurisdiction</Typography>
                <Typography variant="h6" className="terms-text">
                  The Services offered by CareCircuit Home and Disability Services Pty Ltd is intended to be viewed by residents of Australia. In the event of any dispute arising out of or in relation to the Website, you agree that the exclusive venue for resolving any dispute shall be in the courts of Victoria, Australia.
                </Typography>
              </Element>
              <Element name="section15" className="element">
                <Typography variant="h3" className="title">15.	Governing Law</Typography>
                <Typography variant="h6" className="terms-text">
                  The Terms are governed by the laws of Victoria, Australia. Any dispute, controversy, proceeding or claim of whatever nature arising out of or in any way relating to the Terms and the rights created hereby shall be governed, interpreted and construed by, under and pursuant to the laws of Victoria, Australia, without reference to conflict of law principles, notwithstanding mandatory rules. The validity of this governing law clause is not contested. The Terms shall be binding to the benefit of the parties hereto and their successors and assigns.
                </Typography>
              </Element>
              <Element name="section16" className="element">
                <Typography variant="h3" className="title">16.	Independent Legal Advice</Typography>
                <Typography variant="h6" className="terms-text">
                  Both parties confirm and declare that the provisions of the Terms are fair and reasonable and both parties having taken the opportunity to obtain independent legal advice and declare the Terms are not against public policy on the grounds of inequality or bargaining power or general grounds of restraint of trade.
                </Typography>
              </Element>
              <Element name="section17" className="element">
                <Typography variant="h3" className="title">17.	Severance</Typography>
                <Typography variant="h6" className="terms-text">
                  If any part of these Terms is found to be void or unenforceable by a Court of competent jurisdiction, that part shall be severed and the rest of the Terms shall remain in force.
                </Typography>
              </Element>
            </Box>
          </Box>
        </Box>
      </section>
      <DesignerFooter />
    </div>
  );
};
export default DesignerTerms;