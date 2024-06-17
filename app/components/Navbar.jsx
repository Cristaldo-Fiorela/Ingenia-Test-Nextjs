import Image from "next/image";
import logo from "@/assets/logo_ingenia.png";

const Navbar = () => {

  return (
    <header>
      <Image
        alt="logo"
        src={logo}
      />

      <nav>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Work</a></li>
          <li><a href="#" id="selected">Contact</a></li>
          <li><a href="#">Manifiesto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar