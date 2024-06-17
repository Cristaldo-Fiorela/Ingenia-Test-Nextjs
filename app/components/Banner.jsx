import Image from "next/image";

import mexico from '@/assets/images/place_mexico_city.jpg';
import washington from '@/assets/images/place_washington.jpg';

const Banner = () => {
  return (
    <div className="banner">
        <section className="mexicoBanner">
          <h2>Mexico City</h2>
          <div>
            <div>
              <p className="boldText">ANATOLE FRANCE 311</p>
              <p>Polanco, Miguel Hidalgo</p>
              <p>11560 Mexico D.F.</p>
            </div>
            <p className="orangeText">50 22 09 00</p>
          </div>
        </section>
        <section className="usaBanner">
          <h2>Washington D.C</h2>
          <div>
            <div>
              <p className="boldText">1200 18TH STREET, NW</p>
              <p>Suite 700</p>
              <p>Washington DC 20036</p>
            </div>
            <p className="orangeText">50 22 09 00</p>
          </div>
        </section>
    </div>
  )
}

export default Banner