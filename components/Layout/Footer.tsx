import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-brown-200 w-full">
      <footer className="w-full flex items-center px-16">
        <div className="w-1/5">
          <Image src={'/icons/logo1.png'} width={120} height={90} alt="logo" />
          <div>
            <div>
              <Link href={'#'}>
                <Image src={'/icons/facebook-176-svgrepo-com.svg'} width={40} height={40} alt="facebook icon" />
              </Link>
              <Link href={'#'}>
                <Image src={'/icons/instagram-svgrepo-com.svg'} width={40} height={40} alt="instagram icon" />
              </Link>
              <Link href={'#'}>
                <Image src={'/icons/mail-svgrepo-com.svg'} width={40} height={40} alt="mail icon" />
              </Link>
            </div>
            <div>
              <strong>Our office</strong>
              <span>Office 2, Haut Katanga, ler road, plot24</span>
              <span>+260 779 234 456</span>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Products</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>Legal disclaimer</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
              <li>Terms of use</li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>Articles</li>
              <li>SiteMap</li>
              <li>Contact Support</li>
              <li>Contact Support</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
