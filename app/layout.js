import "./global.css"
// fonts
import { 
  montserratBold,
  montserratRegular,
  robotoBold,
  robotoRegular,
  robotoThin
} from "./font";

// components
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  siteName: "Ingenia",
  title: "Contact",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
        ${montserratBold.variable}
        ${montserratRegular.variable}
        ${robotoBold.variable}
        ${robotoRegular.variable}
        ${robotoThin.variable}
      `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
