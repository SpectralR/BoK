import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import RulesHeader from "components/Headers/RulesHeader.js"
import Footer from "components/Footers/Footer.js";

function Rules() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("rules");
      return function cleanup() {
        document.body.classList.remove("rules");
      };
    });
    return (
        <>
            <IndexNavbar />
            <RulesHeader />
            <div className="main">
                <div class="section text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 ml-auto mr-auto">
                                <dl>
                                    <dt>Rule #1</dt>
                                    <dd>Respect others. Treat all other players with dignity and respect.
                                        Be respectful of other members of the FC, their abilities, their contributions, and any extra duties they perform to keep the FC running.</dd>
                                    <dt>Rule #2</dt>
                                    <dd>We all play to have fun. Don't ruin it for other people. It Is up to each individual to approach the game as they see fit.</dd>
                                    <dt>Rule #3</dt>
                                    <dd>You are part of a Free Company. We succeed as a group, not as individuals. Self-centred and self-absorbed attitudes are not helpful.</dd>
                                    <dt>Rule #4</dt>
                                    <dd>Not everyone will agree with everyone else.  We are a growing Free Company and conflict will inevitably arise.
                                        As adults, members are expected to either try to resolve disagreements with other players civilly and privately.
                                        Failing that, try to work around it. Approach an Officer for assistance if you have exhausted all other options.</dd>
                                    <dt>Rule #5</dt>
                                    <dd>Breaches of the Code of Conduct will result in disciplinary action from the Free Company Leadership
                                        appropriate to the player's rank and the nature of the breach. </dd>
                                    <dt>Rule #6</dt>
                                    <dd>We are a 18+ age FC.</dd>
                                    <dt>Rule #7</dt>
                                    <dd>We do also follow Square enix set of rules for ffxiv. Violation of this will result with a ban and reported to Square enix.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
        
export default Rules;