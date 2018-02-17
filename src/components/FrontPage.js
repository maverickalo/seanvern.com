import React from 'react'
import AboutMePic from '../images/aboutme.png'
import About from './AboutMe'
import Intro from './Introduction'
import Alert from 'react-s-alert'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import { CSSTransitionGroup } from 'react-transition-group'

class FrontPage extends React.Component {
  constructor (props) {
    super(props)
    this.updateShow = this.updateShow.bind(this)
  }
  updateShow () {
    this.props.updateShowAboutMe()
  }
  handleAlert () {
    Alert.success('Email Address Copied to Clipboard', {
      position: 'top-right',
      effect: 'slide',
      beep: false,
      timeout: 2000
    })
  }
  render () {
    return (
      <div>
        <div className='front-page-container'>
          <div className='front-page-about'>
            <CSSTransitionGroup
              transitionName='about'
              transitionAppear
              transitionAppearTimeout={1000}
              transitionEnter={false}
              transitionLeave={false}
              transitionEnterTimeout={100}
              transitionLeaveTimeout={100}
            >
              <img alt='about pic' src={AboutMePic} className='about-pic' />
            </CSSTransitionGroup>
          </div>
          <div className='about-container'>

            {this.props.showAboutMe
              ? <About updateShowAboutMe={this.updateShow} />
              : <Intro updateShowAboutMe={this.updateShow} />}
          </div>
        </div>

        <div className='connect-info'>
          <div className='connect-info-item-container'>
            <CopyToClipboard
              text='sean.vernon88@gmail.com'
              onCopy={this.handleAlert}
            >
              <a>
                <h3 className='connect-info-item'>Email</h3>
                <i className='far fa-envelope-open fa-3x' />
              </a>
            </CopyToClipboard>
          </div>
          <div className='connect-info-item-container'>
            <a href='https://www.facebook.com/seanvern.yoga'>
              <h3 className='connect-info-item'>Facebook</h3>
              <i className='fab fa-facebook-square fa-3x' />
            </a>
          </div>
          <div className='connect-info-item-container'>
            <a href='https://twitter.com/YogaVern'>
              <h3 className='connect-info-item'>Twitter</h3>
              <i className='fab fa-twitter fa-3x' />
            </a>
          </div>
          <div className='connect-info-item-container'>
            <a href='https://github.com/maverickalo'>
              <h3 className='connect-info-item'>GitHub</h3>
              <i className='fab fa-github-square fa-3x' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default FrontPage
