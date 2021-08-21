import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="Our Philosophy is to Improve Your Quality of Life by Managing Your Pain"
        paragraph="The team at Clinical Pain Consultants, serving the communities of Wauwatosa, Wisconsin, 
        strives to know each patient’s individual concern and develop a care plan to address those concerns. 
        We are committed to serving our patients by providing a wide variety of pain management treatment 
        options to help them resume their lives, pain-free."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="Our Practitioners Will Help You Succeed"
        subtitle="Each practitioner is qualified to address your pain."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Speedy"
            content="Super-fast response times ensure your business is not affected"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Affordable"
            content="A choice of packages to suit every business type and size"
          />
          <Perk
            img={perk3Img}
            alt="Super fast speed increases"
            title="Friendly"
            content="Advisors who are available 24/7, all with exprt knowledge"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Our Process"
        para="We look at your previous experience and health. Then we come up with a plan for treatment. We see our patients on a monthly basis."
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Background">
            <ul>
              <li>
                <MdDone />Medical Records
              </li>
              <li>
                <MdDone />
                1GB Storage
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Office Visits" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Medication">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Contact Clinical Pain Consultants today and see how we can work together"
        subtitle="Appointments are required for every office visit. Drop us a message to inquire about an 
        appointment or for general questions. No private information, please."
      />
    </>
  )
}

export default HomePage
