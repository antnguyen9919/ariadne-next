import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Asset16 from '../public/Asset16.png'
import styles from '../styles/Nav.module.css'

// import Asset16 from '/Asset16.png'
const Nav = () => {
  return (
    <div className={styles.navMain}>
      <nav className ="navbar text-light fixed-top navbar-expand-md navbar-dark bg-black align-items-center">
        <div className ="container align-items-center">
        <Link href='/'><a><Image src={Asset16} alt = "main logo" width={140} height={60}/></a></Link>
        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">

      <span className ="navbar-toggler-icon"></span>
    </button>

    <div className ="collapse navbar-collapse " id="navbarNavDarkDropdown">

      <ul className ="navbar-nav mx-auto">

        <li className ="nav-item dropdown">
        
          <h5 className ="nav-link dropdown active"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Solutions
          </h5>
          <ul className ="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link  href="/ariadne-analytics"><a className ="dropdown-item" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown">Ariadne Analytics</a></Link></li>
            <li><Link href="/ariadne-mapping"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Ariadne Mapping</a></Link></li>
            <li><Link href="/ariadne-navigation"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Ariadne Navigation</a></Link></li>
            <li><Link href="/ariadne-engagement"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item" >Ariadne Engagement</a></Link></li>
          </ul>
        </li>
        <li className ="nav-item dropdown">
        <h5 className ="nav-link dropdown active "  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Industries
          </h5>
          
          <ul  className ="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
         
                        <li><Link href="/retail-stores"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item " >Retail Stores</a></Link></li>
                        <li><Link  href="/shopping-centres"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Shopping Centres</a></Link></li>
                        <li> <Link  href="/airports"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Airports</a></Link></li>
                        <li> <Link  href="/transportation"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Transportation</a></Link></li>
                        <li><Link  href="/cities"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Cities</a></Link></li>
                        <li><Link  href="/hospitality"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Hospitality</a></Link></li>
          </ul>
        </li>
        <li className ="nav-item">
        <Link  href="/"><a className ="nav-link active" aria-current="page"><h5 >Why Ariadne</h5></a></Link>
        </li>

        <li className ="nav-item dropdown" >
        <h5  className ="nav-link dropdown active"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </h5>
          <ul id = 'kaka' className ="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li>   <Link href="/about-us"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">About Us</a></Link>                                                 </li>
                  
            <li> <Link href="/careers"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Careers</a></Link>                                                     </li>
            <li> <Link href="/blog"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Blog</a></Link>                                               </li>
            <li> <Link href="/contact"><a type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" className ="dropdown-item">Contact</a></Link>                                                       </li>
                       
                  
                        
          </ul>
        </li>
          
      </ul>
      <ul className ="navbar-nav mx-auhref">
      <li className ="nav-item">
         
         <Link className ="nav-link active" aria-current="page"  href ='/why-ariadne' >
                               <h5 className = 'mt-1' id="navbarDarkDropdownMenuLink">Lets talk</h5>
                            </Link>
       </li>
        <li className ="nav-item">
         
         {/* <Link className ="nav-link active" aria-current="page"  href ='/why-ariadne' >
                               <PersonOutlineIcon id="navbarDarkDropdownMenuLink" style = {{width: '100%'    }  } />
                               
                            </Link> */}
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