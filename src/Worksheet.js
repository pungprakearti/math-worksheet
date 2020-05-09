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
    let markup = []
    let col = []

    //create problems and put them into columns of colLen
    for(let i = 1; i < problems + 1; i++) {
      col.push(MathProblem(max, ops, i))

      if(i > 0) {
        if(i % colLen === 0) {
          markup.push(
            <div className='col'>
              {col}
            </div>
          )
          col = []
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
          <div className="date">
            {today}
          </div>
          <div className="correct">
            Number correct: _____
          </div>
        </div>
        <div className='columns'>
          { loaded && problemsMarkup }
        </div>
      </div>
    )
  }
}