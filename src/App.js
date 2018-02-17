import React, { Component } from 'react'
import { configureAnchors } from 'react-scrollable-anchor'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MoreAbout from './components/MoreAboutMe'
import './App.css'

configureAnchors({ offset: -60, scrollDuration: 2000 })

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { showAboutMe: false }
    this.updateShowAboutMe = this.updateShowAboutMe.bind(this)
  }
  updateShowAboutMe () {
    this.setState({
      showAboutMe: !this.state.showAboutMe
    })
  }

  render () {
    return (
      <div>
        <Alert stack={{ limit: 2 }} />
        <Nav
          updateShowAboutMe={this.updateShowAboutMe}
          showAboutMe={this.state.showAboutMe}
        />
        <FrontPage
          showAboutMe={this.state.showAboutMe}
          updateShowAboutMe={this.updateShowAboutMe}
        />
        <MoreAbout />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
