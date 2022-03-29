import React from 'react'

const Hero = () => {
  return (
    <div style = {{backgroundColor:'#30303d'}}>
        <div className = 'container-fluid align-items-end text-light ' >
		
		<div className="row align-items-center">
				<div className="col mb-5 p-0 " style={{marginLeft:'55px'}} >
					<span className="fi fi-gr"></span> <span className="fi fi-gr fis"></span>
				<h1 className='mb-3  text-left'>People Flow To Actionable Insights</h1>
				<p className='my-2 lh-md ' >Turn your existing customer traffic into an additional source of revenue</p>
                        
						<button type="button" className=" mt-3 btn-danger"
						><p className='my-1 mx-3 text-light fw-bold lh-md'>Lets Talk</p></button>
					
				</div>

				<div className="col-md-7 mt-5">
				<video src = '/Videos/Hero2vid.mp4' className="d-block mx-lg-auto" disablePictureInPicture   autoPlay   playsInline muted loop type = "videos/mp4" style = {{width: '103%', pointerEvents: "none"}}/>
				</div>
			</div>
		
			
	</div>
    </div>
  )
}

export default Hero