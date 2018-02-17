import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import CodePen from '../images/codepen-logo.svg'
import Git from '../images/git.svg'

const Projects = () => {
  return (
    <div className='projects-container'>
      <ScrollableAnchor id={'projects'}>
        <div className='project-header'>
          <h1 className='headers'>Projects</h1>
        </div>
      </ScrollableAnchor>
      <div className='projects-row'>
        <div className='project-item'>
          <a href='https://codepen.io/maverickalo/pen/MOLgjW'>
            <img alt='codepen 1' src={CodePen} className='project-image' />
            <div className='overlay'>
              <div className='project-text'>CodePen: ToDo List</div>
            </div>
          </a>
        </div>
        <div className='project-item'>
          <a href='https://codepen.io/maverickalo/pen/XaJxzX'>
            <img alt='codepen 2' src={CodePen} className='project-image' />
            <div className='overlay'>
              <div className='project-text'>CodePen: Simple Drop Down Menu</div>
            </div>
          </a>
        </div>
        <div className='project-item'>
          <a href='https://codepen.io/maverickalo/pen/qXBevN'>
            <img alt='codepen 3' src={CodePen} className='project-image' />
            <div className='overlay'>
              <div className='project-text'>CodePen: Hamburger Menu</div>
            </div>
          </a>
        </div>
      </div>
      <div className='projects-row'>
        <div className='project-item'>
          <a href='https://codepen.io/maverickalo/pen/MOLgjW'>
            <img alt='git 1' src={Git} className='project-image' />
            <div className='overlay'>
              <div className='project-text'>CodePen: ToDo List</div>
            </div>
          </a>
        </div>
        <div className='project-item'>
          <a href='https://codepen.io/maverickalo/pen/XaJxzX'>
            <img alt='git 2' src={Git} className='project-image' />
            <div className='overlay'>
              <div className='project-text'>CodePen: Simple Drop Down Menu</div>
            </div>
          </a>
        </div>
        <div className='project-item'>
          <a href='https://codepen.io/maverickalo/pen/qXBevN'>
            <img alt='git 3' src={Git} className='project-image' />
            <div className='overlay'>
              <div className='project-text'>CodePen: Hamburger Menu</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
