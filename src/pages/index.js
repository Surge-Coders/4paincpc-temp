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
        <Link to="providers" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="providers"
        title="Our Providers Will Help You Succeed"
        subtitle="Each practitioner in our clinic is qualified to address your pain. 
        We take the time to listen to you and we want to make sure that we understand your concerns."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk3Img}
            alt="smiling face"
            title="Mari Pinzl, APNP-BC"
            content="Education: Marquette University"
          />
          <Perk
            img={perk3Img}
            alt="smiling face"
            title="Mary Kofigah, APNP-BC"
            content="Education: Concordia University"
          />
          </div>
          <div className="flex-container trio-block">
          <Perk
            img={perk3Img}
            alt="smiling face"
            title="Mary Beth Checkai, APNP-BC"
            content="Over three decades of clinical experience"
          />
          <Perk
            img={perk3Img}
            alt="smiling face"
            title="Dr. James Halikas, M.D."
            content="Education: Medical College of Wisconsin"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Our Services are a Process"
        para="We look at your health and previous treatments comprehensively. Then we come up with a plan for treatment. We see our patients on a monthly basis."
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
                <MdDone />Medical History
              </li>
              <li>
                <MdDone />
                Tests, Scans, etc
              </li>
              <li >
                <MdDone />
                Previous Treatments
              </li>
              <li >
                <MdDone />
                Pain History
              </li>
            </ul>
            {/* <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link> */}
          </Package>
          <Package title="Office Visits" active={true}>
            <ul>
              <li>
                <MdDone />
                Vitals and Urine Sample
              </li>
              <li>
                <MdDone />
                Assess, Review, Adjust
              </li>
              <li>
                <MdDone />
                Initial Visit: 50 Minutes
              </li>
              <li>
                <MdDone />
                Follow-up Visits: 20-30 Minutes
              </li>
            </ul>
            {/* <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link> */}
          </Package>
          <Package title="Treatment">
            <ul>
              <li>
                <MdDone />
                Medication
              </li>
              <li>
                <MdDone />
                Medication Management
              </li>
              <li>
                <MdDone />
                Physical Therapy (Referral)
              </li>
              <li >
                <MdDone />
                Collaborative Care
              </li>
            </ul>
            {/* <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link> */}
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Contact Clinical Pain Consultants today to see how we can work together"
        subtitle="Appointments are required for every office visit. Drop us a message to inquire about an 
        appointment or for general questions. (Please do not include sensitive information in your message below.)"
      />
    </>
  )
}

export default HomePage
