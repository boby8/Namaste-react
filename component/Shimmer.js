import React from 'react'

const Shimmer = () => {
  return (
    <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
   {Array(20).fill(null).map((_, index) => (
      <div key={index} className='shimmarClass'></div>
    ))}
    </div>
 
    
  )
}

export default Shimmer
