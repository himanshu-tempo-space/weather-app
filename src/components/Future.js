import React from 'react'
import FutureDay from './FutureDay'

const Future = (props) => {
  console.log(props.data)
  return (
    <>
    {props.data.map((day, index) => {
      return <FutureDay key={index} data={day} />
    })}
    </>
  )
}

export default Future