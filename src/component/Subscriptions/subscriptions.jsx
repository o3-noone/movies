import React from 'react'
import Sub from '../Home/sub/sub'
import "./subscriptions.css"
import Trial from '../Home/tralFree/trial'
import ScrolTop from '../scrolTop/scrolTop'
const Subscriptions = () => {
  return (
    <>
      <div className="subscriptions">
        <Sub />
        <Trial/>
      </div>

    </>
  )
}

export default Subscriptions