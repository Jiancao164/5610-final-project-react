import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Privacy extends Component{
    render() {
        return(
            <div className={"container"}>
                <Link className={"col-2"} to={`/`}>
                    <img className={"douban-profile"} src={"https://upload.wikimedia.org/wikipedia/commons/a/aa/Douban_logo.svg"}/>
                </Link>
                <div>
                    <h3>Douban Privacy Notice</h3>
                    <hr/>
                    <h5>What Personal Information About Users Does Douban Gather?</h5>
                    <p>The information we learn from users helps us personalize and continually improve your experience at Douban. Here are the types of information we gather.</p>

                    <p>
                        <b>•	Information You Give Us: </b>
                        We receive and store any information you enter on our Web site or
                        give us in any other way. You can choose not to provide certain
                        information, but then you might not be able to take advantage of many
                        of our features. We use the information that you provide for such
                        purposes as responding to your requests, customizing future
                        browsing for you, improving our site, and communicating with you.
                    </p>
                    <p>
                        <b>•	Automatic Information:  </b>
                        We receive and store certain types of information whenever you interact with us. For example, like many Web sites, we use "cookies," and we obtain certain types of information when your Web browser accesses Douban or advertisements and other content served by or on behalf of Douban on other Web sites.
                    </p>
                    <p>
                        <b>•	E-mail Communications:  </b>
                        To help us make e-mails more useful and interesting, we often receive a confirmation when you open e-mail from Douban if your computer supports such capabilities. We also compare our user list to lists received from other companies, in an effort to avoid sending unnecessary messages to our users.
                    </p>
                    <p>
                        <b>•	Information from Other Sources：  </b>
                        We might receive information about you from other sources and add it to our account information.
                    </p>
                    <h5>What About Cookies?</h5>
                    <p>
                        •	Cookies are alphanumeric identifiers that we transfer to your computer's hard drive through your Web browser to enable our systems to recognize your browser and to provide features such as Watchlist, local show times, and browsing preferences.

                    </p>
                    <p>
                        •	The "help" portion of the toolbar on most browsers will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. Additionally, you can disable or delete similar data used by browser add-ons, such as Flash cookies, by changing the add-on's settings or visiting the Web site of its manufacturer. However, because cookies allow you to take full advantage of some of Douban's essential features, we recommend that you leave them turned on.

                    </p>
                    <p>
                        •	We use web beacons (also known as “action tags” or “single-pixel gifs”) and other technologies to measure the effectiveness of certain site features and to conduct research and analysis. We also allow third parties to place web beacons and other technologies on our site to conduct research and analysis, but we do not provide personal information to such third parties.

                    </p>
                    <h5>Does Douban Share the Information It Receives?</h5>
                    <p>
                        Information about our users is an important part of our business, and we are not in the business of selling it to others.
                    </p>
                    <p>
                        <b>•	Affiliated Businesses We Do Not Control: </b>We work closely with our affiliated businesses. In some cases, we will include offerings from these businesses on Douban. In other cases, we may include joint offerings from Douban and these businesses on Douban. You can tell when another business is involved in the offering, and we share user information related to those offerings with that business.</p>
                    <p>    <b>•	Promotional Offers:</b> Sometimes we send offers to selected groups of Douban users on behalf of other businesses. When we do this, we do not give that business your name and e-mail address.</p>
                    <p>    <b>•	Protection of Douban and Others:</b> We release account and other personal information when we believe release is appropriate to comply with law; enforce or apply our Terms and Conditions of Use and other agreements; or protect the rights, property, or safety of Douban, our users, or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction. Obviously, however, this does not include selling, renting, sharing, or otherwise disclosing personally identifiable information from customers for commercial purposes in violation of the commitments set forth in this Privacy Notice.</p>
                        <p>    <b>•	With Your Consent:</b> Other than as set out above, you will always receive notice when information about you might go to third parties, and you will have an opportunity to choose not to share the information.</p>


                </div>
            </div>
        )
    }
}