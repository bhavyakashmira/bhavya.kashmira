"use client"
import React from 'react'

function OpenResume() {

    const handleOpenResume = () => {
        // Replace with the actual URL of your resume file
        window.open("/last_resume.pdf", "_blank");
    };
    return (
      
       
    <div>
          <button onClick={handleOpenResume} className="bg-blue-800 p-2 rounded-xl m-3 border-white " > Get Resume</button>
    </div>
  )
}

export default OpenResume
