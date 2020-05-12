import React, { Component } from 'react'
import MathProblem from './MathProblem'
import './Worksheet.scss'

export default class Worksheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      loaded: false,
      problemsMarkup: []
    }
  }

  componentDidMount() {
    this.makeProblems()
  }

  makeProblems = () => {
    const {max, ops, problems, colLen} = this.props
    let markup = [[],[]]
    let col = [[],[]]

    //create problems and put them into columns of colLen
    for(let i = 1; i < problems + 1; i++) {
      let tempArr = MathProblem(max, ops, i)
      col[0].push(tempArr[0])
      col[1].push(tempArr[1])

      if(i > 0) {
        if(i % colLen === 0) {
          for(let j = 0; j < tempArr.length; j++) {
            markup[j].push(
              <div className='col'>
                {col[j]}
              </div>
            )
            col[j] = []
          }
        }
      }
    }
    this.setState({
      problemsMarkup: markup,
      loaded: true
    })
  }

  render () {
    const {loaded, problemsMarkup} = this.state

    const d = new Date()
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const today = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`

    return (
      <div className='worksheet'>
        <div className="topData">
          <div>
            {today}
          </div>
          <div>
            Number correct: _____
          </div>
        </div>
        <div className='columns q'>
          { loaded && problemsMarkup[0] }
        </div>
        <div className='pageBreak' />
        <div className="topData">
          <div>
            {today}
          </div>
          <div>
            Answers
          </div>
        </div>
        <div className='columns a'>
          { loaded && problemsMarkup[1] }
        </div>
      </div>
    )
  }
}