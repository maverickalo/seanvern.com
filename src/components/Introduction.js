import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

const Intro = props => {
  return (
    <div>
      <CSSTransitionGroup
        transitionName='about'
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter
        transitionLeave
        transitionEnterTimeout={100}
        transitionLeaveTimeout={100}
      >
        <div key='1'>
          <h1 className='intro-header'>
            Hi, Im Sean and I Develop React Apps...
          </h1>
          <h3>
            Hello There and welcome to my site. I have been developing React and Javascript applications for about a year now. With 10 years experience in IT and Network Administration experience my next step was to learn to code.
          </h3>
          <h3>
            I began coding in April of 2016, and started building sites by June. The first step was learning HTML and CSS and once I got ahold of JavaScript I was off to the races with learning React.
          </h3>
          <h3>
            Currently fluent in: React, JavaScript, CSS, MongoDB, Mongoose, React Router, GraphQL, and Redux.
          </h3>
        </div>
        <div className='button-float'>
          <button onClick={props.updateShowAboutMe} className='offset'>
            About Me
          </button>
        </div>
      </CSSTransitionGroup>
    </div>
  )
}

export default Intro
