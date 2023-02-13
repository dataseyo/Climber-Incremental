// CLIMB LIST COMPONENT
import React from 'react'

import './styles.css'
import Climb from './Climb'
import ClimbStats from './ClimbStats'
import ClimbTable from './ClimbTable'

type Props = {}

const Climbs = (props: Props) => {
  return (
    <div className="climbs__container">
        {/* Stats Overview */}
        <ClimbStats/>

        {/* Climb List Table */}
        <ClimbTable />
    </div>
  )
}

export default Climbs