import Head from 'next/head'
import Image from 'next/image'
import screens from '../public/Photos/screens.png'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main >
      <div className='text-center'>
        <h1>Unlock the value of your data and multiply your returns!</h1>
      </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-7">
                <Image src={screens} alt="screens" />
            </div>
            <div className="col-xl-4">
              <p>Ariadne is considered to be the Google Analytics of the physical world. Ariadne helps you to analyze your visitors' behavior, it consults you on strategies, and provides you with recommendations for the future.</p>
              <p>
              Footfall (Total and by area)<br/>
Dwell Time(Total and by area)<br/>
Heatmap (2D and 3D)<br/>
Transitions between areas)<br/>
ERP, BI, POS Integration<br/>
              </p>
            </div>
          </div>
        </div>

        <div className= 'text-center px-5  mt-5'> <h1>The Ariadne Platform</h1> </div>


        <div id='ariadne-platform' className="container-fluid">
    <div className="row align-items-center mt-5 py-2 justify-content-around  p-5 p-xs-2 ">
      <div className="col-lg-6  ">
        <h1 className= 'display-xxl-5'>Ariadne Analytics</h1>
        <p className= 'mt-4' style ={{fontSize:'normal'}} >Obtain people counting, heatmaps, loyalty rate and more!<br/>
With Ariadne analytics, you can review your performance in real time.
        <br/>

</p>
        </div>
      <div className="col-lg-4">
       
        <video src="/Photos/h1.mp4" autoPlay loop muted type = "videos/mp4" className='rounded shadow' style = {{width: '103%'}}/>
        </div>
      </div>
      
      <div className="row align-items-center mt-5 justify-content-around  p-5 " style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-lg-6">
        <h1 >Ariadne Navigation</h1>

        <p className= 'mt-4  '>Navigate your visitors and guests for an enhanced experience!<br/>
Present promotions in your map to engage and enhance your visitors satisfaction.</p>
        </div>
      <div className="col-lg-4">
      <video src="/Photos/h2.mp4" autoPlay loop muted type = "videos/mp4" className='rounded shadow' style = {{width: '103%', pointerEvents: "none"}}/>
        </div>
      </div>

      <div className="row align-items-center mt-5 justify-content-around  p-5 ">
      <div className="col-lg-6">
        <h1>Ariadne Engagement</h1>
        <p className= 'mt-4  '>Ariadne enables your visitors to opt-in to your loyalty program!<br/>
The opt-in feature enables you to push notifications to your visitors the right moment.</p>
        </div>
      <div className="col-lg-4">
      <video src='/Photos/h3.mp4' autoPlay loop muted type = "videos/mp4" className='rounded shadow' style = {{width: '103%', pointerEvents: "none"}}/>
        </div>

      </div>
      <div className="row align-items-center mt-5 mb-5 justify-content-around  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-lg-6">
        <h1>Ariadne Mapping</h1>
        <p className= 'mt-4  '>Transform your physical business into a digital landscape.<br/>
By enabling you to map and localize your products, Ariadne increases your efficiency.</p>
        </div>
      <div className="col-lg-4">
      <video src='/Photos/h4.mp4' autoPlay loop muted type = "videos/mp4" className='rounded shadow' style = {{width: '103%'}}/>
        </div>
      </div>
  </div>
      {/* Testimonials */}

      <div class = 'text-center'>
          <h1>Get Started</h1>
          <p>Ariadne solution can be deployed on the premises just by plugging the devices in and requires no additional infrastructure.</p>
         </div>



      </main>

      
    </div>
  )
}
