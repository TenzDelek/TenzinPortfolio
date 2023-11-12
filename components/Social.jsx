import React from 'react'

const Social = ({children,bgcolor='black'}) => {
  let bghoverc;

  switch(bgcolor)
  {
    case "insta":
      bghoverc="hover:bg-insta";
      break;
      case "linkedin":
      bghoverc="hover:bg-linkedin";
      break;
      
    
  }
  return (
    <button className={`group h-12 w-12 ${bghoverc} bg-white rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}>
      <div className=' fill-black group-hover:fill-white transition-colors duration-200 ease-in-out'>
        {children}
      </div>
    </button>
  )
}

export default Social