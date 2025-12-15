import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>EXPLORE OUR REGIONS</h1>
        <p>From serene mountain retreats to breathtaking coastal escapes, explore
          premium properties located in the most sought-after destinations.</p>
        <div className="region_container">
        <div className="card">
         <img src="/region1.jpg" alt="mountains" />
         <h2>Mountains</h2>
         <p><span>90</span> Properties</p> 
        </div>
        <div className="card">
        <img src="/region2.jpg" alt="coastline" />
         <h2>Coastline</h2>
         <p><span>52</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions