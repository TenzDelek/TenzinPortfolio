import React from 'react'

const School = ({sname,stype,year}) => {
  return (
    <div className=" flex  lg:justify-end ml-5 lg:ml-0  lg:w-[38%] w-[30%] cursor-pointer hover:opacity-30 transition-opacity duration-300 ease-in-out">
<div className="flex flex-col text-center font-bold text-xl">
{sname}
  <span className=" lg:text-sm  text-xs font-normal">{stype} </span>
  <p className=" lg:text-xs text-[8px] font-normal"> {year}</p>
</div>

</div>
  )
}

export default School