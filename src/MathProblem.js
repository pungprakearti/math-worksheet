import React from 'react'
import './MathProblem.scss'

const MathProblem = (max, opArray, num) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  var op = opArray[Math.floor(Math.random() * opArray.length)];

  const numA = getRandomInt(max)
  const numB = getRandomInt(max)

  const question = (
    <div className='problemGroup'>
      <div className='problemNum'>{`${num}. `}</div>
      <div className='problem'>
        {/* Always have the smaller number on the left to
            avoid negative answers */}
        {numA >= numB ? (
          `${numA} ${op} ${numB} = _____`
        ) : (
          `${numB} ${op} ${numA} = _____`
        )}
      </div>
    </div>
  )

  const answer = (
    <div className='problemGroup'>
      <div className='problemNum'>{`${num}. `}</div>
      <div className='problem'>
        {/* Always have the smaller number on the left to
            avoid negative answers */}
        {
          op === '+' ? (
          numA + numB
        ) : (
          Math.abs(numA - numB)
        )}
      </div>
    </div>
  )

  // return (
  //   <div className='problemGroup'>
  //     <div className='problemNum'>{`${num}. `}</div>
  //     <div className='problem'>
  //       {/* Always have the smaller number on the left to
  //           avoid negative answers */}
  //       {numA >= numB ? (
  //         `${numA} ${op} ${numB} = _____`
  //       ) : (
  //         `${numB} ${op} ${numA} = _____`
  //       )}
  //     </div>
  //   </div>
  // )
  return ([question, answer])
}

export default MathProblem