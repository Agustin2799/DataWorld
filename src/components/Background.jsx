import React from 'react'

const Background = () => {
  return (
    <section className="w-screen h-screen fixed top-0 right-0 -z-10">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="video.mp4" type="video/mp4"></source>
      </video>
    </section>
  );
}

export default Background