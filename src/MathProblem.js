import React from 'react'
import './MathProblem.scss'

const MathProblem = (max, opArray, num) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  var op = opArray[Math.floor(Math.random() * opArray.length)];

  const numA = getRandomInt(max)
  const numB = getRandomInt(max)

  return (
    <div className='problemGroup'>
      <div className='problemNum'>{`${num}. `}</div>
      <div className='problem'>
        {numA >= numB ? (
          `${numA} ${op} ${numB} = _____`
        ) : (
          `${numB} ${op} ${numA} = _____`
        )}
      </div>
    </div>
  )
}

export default MathProblem