/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <div className="section text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ml-auto mr-auto">
                <h3>Hello to you !</h3>
                <p>Let me introduce you to Eternium, a Free Company created to give new, returning and veteran players a place to experience content at a relaxed pace with no pressure or unrealistic expectations. A FC that is made by people with over a decade long friendship. A place where the members understands that everyone move at their own pace. You choose how you want to explore the world and the characters you play. </p>
                <p>We will help you and guide you, in the degree that you want us to. Eternium is as stated a social FC, but that does not mean we will not offer much of the same content other FC do. Bok will still offer raiding, trial groups and so on. Our members do all the content in the game, the difference is that we do it with a more relaxed approach.  We don’t have a goal to be large and competitive, we prefer the small to medium size so all our members can get to know each other more personally. </p>
                <p>Most of our members are between 25-40 years old. We all have jobs, some of us have kids as well. We understand that people have a life outside the PC. We don’t expect people to be on every day, we will also not force you to join our discord (but recommend) as we know some people struggle with language or have anxiety. A place for everyone !</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
