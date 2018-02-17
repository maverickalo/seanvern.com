import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Alert from 'react-s-alert'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'

class Contact extends React.Component {
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
      <div className='contact-container'>
        <ScrollableAnchor id={'contact'}>
          <div className='contact-header'>
            <h1 className='headers'>Contact Me</h1>
          </div>
        </ScrollableAnchor>
        <div className='contact-row'>
          <div className='contact-item'>
            <a href='https://www.facebook.com/seanvern.yoga'>
              <i className='fab fa-facebook-square fa-7x' />
              <h3 className='connect-info-item'>Facebook</h3>
            </a>
          </div>
          <div className='contact-item'>
            <a href='https://github.com/maverickalo'>
              <i className='fab fa-github-square fa-7x' />
              <h3 className='connect-info-item'>GitHub</h3>
            </a>
          </div>
          <div className='contact-item'>
            <CopyToClipboard
              text='sean.vernon88@gmail.com'
              onCopy={this.handleAlert}
            >
              <a>

                <i className='far fa-envelope-open fa-7x' />
                <h3 className='connect-info-item'>Email</h3>
              </a>
            </CopyToClipboard>
          </div>
          <div className='contact-item'>
            <a href='https://www.instagram.com/yogavern/'>
              <i className='fab fa-instagram fa-7x' />
              <h3 className='connect-info-item'>Instagram</h3>
            </a>
          </div>
          <div className='contact-item'>
            <a href='https://twitter.com/YogaVern'>
              <i className='fab fa-twitter fa-7x' />
              <h3 className='connect-info-item'>Twitter</h3>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
