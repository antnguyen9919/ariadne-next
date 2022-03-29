import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Asset16 from '../public/Asset16.png'
import styles from '../styles/Nav.module.css'


const Nav = () => {
  return (
    <div className={styles.navMain}>
      <nav className ="navbar text-light fixed-top navbar-expand-md navbar-dark bg-black align-items-center">
        <div className ="container align-items-center">
        <Link href='/'><a><Image src={Asset16} alt = "main logo" width={140} height={60}/></a></Link>
        <button className ="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown"  aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">

      <span className ="navbar-toggler-icon"></span>
    </button>

    <div className ="collapse navbar-collapse " id="navbarNavDarkDropdown">

      <ul className ="navbar-nav mx-auto">

        <li className ="nav-item dropdown">
        
          <h5 className ="nav-link dropdown active"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Solutions
          </h5>
          <ul className ="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link  href="solutions/ariadne-analytics"><a className ="dropdown-item">Ariadne Analytics</a></Link></li>
            <li><Link href="solutions/ariadne-mapping"><a  className ="dropdown-item">Ariadne Mapping</a></Link></li>
            <li><Link href="solutions/ariadne-navigation"><a  className ="dropdown-item">Ariadne Navigation</a></Link></li>
            <li><Link href="solutions/ariadne-engagement"><a  className ="dropdown-item" >Ariadne Engagement</a></Link></li>
          </ul>
        </li>
        <li className ="nav-item dropdown">
        <h5 className ="nav-link dropdown active "  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Industries
          </h5>
          
          <ul  className ="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
         
                        <li><Link href="industries/retail-stores"><a  className ="dropdown-item " >Retail Stores</a></Link></li>
                        <li><Link  href="industries/shopping-centres"><a  className ="dropdown-item">Shopping Centres</a></Link></li>
                        <li> <Link  href="industries/airports"><a  className ="dropdown-item">Airports</a></Link></li>
                        <li> <Link  href="industries/transportation"><a  className ="dropdown-item">Transportation</a></Link></li>
                        <li><Link  href="industries/cities"><a  className ="dropdown-item">Cities</a></Link></li>
                        <li><Link  href="industries/hospitality"><a  className ="dropdown-item">Hospitality</a></Link></li>
          </ul>
        </li>
        <li className ="nav-item">
        <Link  href="/"><a className ="nav-link active" aria-current="page"><h5 >Why Ariadne</h5></a></Link>
        </li>

        <li className ="nav-item dropdown" >
        <h5  className ="nav-link dropdown active"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </h5>
          <ul  className ="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li>   <Link href="company/about-us"><a  className ="dropdown-item">About Us</a></Link>                                                 </li>
                  
            <li> <Link href="company/careers"><a  className ="dropdown-item">Careers</a></Link>                                                     </li>
            <li> <Link href="/blog"><a  className ="dropdown-item">Blog</a></Link>                                               </li>
            <li> <Link href="company/contact"><a className ="dropdown-item">Contact</a></Link>                                                       </li>
                       
                  
                        
          </ul>
        </li>
          
      </ul>
      <ul className ="navbar-nav mx-auto">
     
        <li className ="nav-item">

        
       </li>
       <li className ="nav-item">
         
         <Link className ="nav-link active" aria-current="page"  href ='/why-ariadne' >
                              <img id='de-flag' src ='https://cdn-icons-png.flaticon.com/512/330/330523.png' alt='de'height='30px'/>
                            </Link>
       </li>
      </ul>
    </div>

        </div>
      </nav>
</div>
  )
}

export default Nav