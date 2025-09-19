import React,{ useRef, useEffect } from 'react'
import gsap from 'gsap'
import { RiPlayFill } from 'react-icons/ri'

const Page3 = () => {
  const videoRef = useRef(null)
  const centerRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const center = centerRef.current

    const playHandler = () => {
      video.play()
      gsap.to(video, {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        borderRadius: 0,
      })
    }

    const pauseHandler = () => {
      video.pause()
      gsap.to(video, {
        scaleX: 0.7,
        scaleY: 0,
        opacity: 0,
        borderRadius: '30px',
      })
    }

    center.addEventListener('click', playHandler)
    video.addEventListener('click', pauseHandler)

    // Cleanup
    return () => {
      center.removeEventListener('click', playHandler)
      video.removeEventListener('click', pauseHandler)
    }
  }, [])

  return (
    <div id="page3">
      <video
        ref={videoRef}
        src="./public/assets/la-reel--min.mp4"
        className="w-full h-full object-cover"
        style={{ scaleX: 0.7, scaleY: 0, opacity: 0, borderRadius: '30px' }}
      ></video>

      <div className="page3-center" ref={centerRef}>
        <div className="icon">
          <div className='icon-play'><RiPlayFill size={48}/></div>
        </div>
        <h5>Watch Showreel</h5>
      </div>
    </div>
  )
}

export default Page3
