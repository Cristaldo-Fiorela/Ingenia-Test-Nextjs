import SvgMexico from "@/assets/icons/adress-mexico";
import SvgUsa from "@/assets/icons/address-usa";
import SvgFacebook from "@/assets/icons/social-facebook";
import SvgLinkedin from "@/assets/icons/social-linkedin";
import SvgTwitter from "@/assets/icons/social-twitter";
import SvgYoutube from "@/assets/icons/social-youtube";

const Footer = () => {
  return (
    <footer>
      <div className="copyContainer">
        <small>©2014 Ingenia Group</small>
        <nav>
          <ul>
            <li><a href="#">About Us |</a></li>
            <li><a href="#">Our Work |</a></li>
            <li><a href="#">Blog |</a></li>
            <li><a href="#">Jobs |</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="locationAndSocials">
        <div className="locations">
          <section>
            <div className="titleLocation">
              <SvgUsa />
              <h4>USA</h4>
            </div>
            <p>1200 18th Street, NW</p>
            <p>Suite 700</p>
            <p>Washington DC 20036 USA</p>
            <p>50220900</p>
          </section>
          <div className="verticaline"></div>
          <section>
            <div className="titleLocation">
              <SvgMexico />
              <h4>MEXICO</h4>
            </div>
            <p>Anatole France 311</p>
            <p>Polanco, Miguel Hidalgo</p>
            <p>11560 Mexico D.F</p>
            <p>50220900</p>
          </section>
        </div>

        <div className="socialsAndTerms">
          <div className="termsAndPrivacy">
            <small>Terms of use |</small>
            <small>Privacy Policy</small>
          </div>
          <div className="socials">
            <span><SvgTwitter/></span>
            <span><SvgFacebook /></span>
            <span><SvgYoutube /></span>
            <span><SvgLinkedin/></span>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer