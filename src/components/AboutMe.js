import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

const About = props => {
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
        <div key='2'>
          <h1 className='intro-header'>Creating Web Apps is my Jam...</h1>
          <div className='text-body'>
            <h3>
              After studying on my own over the past year I have made my life about creating Web Apps. Reacts Component system just felt natural and continued to grow rapidly becuase of it.
              {' '}
            </h3>
            <h3>
              I currently reside in Portland OR and I am orginially from California. I could not ask to live in a more beautiful state and enjoy hiking regularly.
            </h3>
            <h3 className='quote'>
              "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars." - Jack Kerouac
            </h3>
          </div>

        </div>
        <div className='button-container'>
          <div className='button-float'>
            <a href='#more_about'>
              <button className='offset float-left'>
                More About Me...
              </button>
            </a>
            <button onClick={props.updateShowAboutMe} className='offset'>
              Back
            </button>

          </div>
        </div>
      </CSSTransitionGroup>
    </div>
  )
}

export default About
