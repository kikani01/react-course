import React from 'react';

function Content() {
  return (
    <div>
      <video 
      src="/video/hii.mp4"
      autoPlay={true}
      type="video/mp4"
      className="h-[80vh] w-[100%] object-cover"
      loop
      preload="auto"
      muted
      ></video>
       
    </div>
  )
}

export default Content