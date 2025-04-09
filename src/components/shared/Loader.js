import React from 'react'

import { Audio, Rings } from 'react-loader-spinner'

function Loader() {
  return (
<div style={{width: "100%", height: "1000px", display: "flex", justifyContent: "center", paddingTop: "20px"}}>
<Rings
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
/> 
</div>
  )
}

export default Loader