import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import YogaPic from '../images/yogapic.png'

const MoreAbout = () => {
  return (
    <div className='more-container'>
      <ScrollableAnchor id={'more_about'}>
        <div className='project-header'>
          <h1 className='headers'>More About Me...</h1>
        </div>
      </ScrollableAnchor>
      <div className='more-container'>
        <img alt='yoga 1' src={YogaPic} />
        <div className='more-about-text'>
          <p>
            Born in California, I started working with computers at the age of 13. I built my first box at 14 and honestly fried the crap out of it. After that learning expience I continued to work with Computers freelance until I was about 18 and landed a Desktop support Job at a construction company called Vector Air Systems. After working there for several years I then got a Job with a local tech company called Intentus Group which dealt primarily with medical offices and medical equipment. During this time I fielded numerous calls and eventually was completely on my own managing several offices. I deployed Domain Controllers, setup VPNs, ran Virtual Machines, created VLANs and a bunch of other fun stuff.
          </p><p>
            After several years with Intentus Group it was time to move on and I landed another IT gig at a doctors office called LoBue Laser and Eye Medical. I was in charge of maintaining their 3 offices and building out a new office. During that time I was faced with so many different issues but I enjoyed the challange and learned a bunch from the experience. I expierenced what HIPPA Compliance was, how Medical Devices interact with servers, how to implement EMR software across VPNs securely, and on top of it all maintain all the 60 machines in the office.
          </p><p>
            When I was 26 I decided to leave the office job for a year and travel the world. I had been studying yoga and meditation for several years and India was calling my name. I left everything behind and enrolled in an Ashtanga training in Rishikesh India. During the 6 months I was there I learned alot about myself and met some of the most inspiring people. In July of 2015 I returned and wanted to continue my yoga journey. I got a job with lululemon and I currently work there. Working at lulu gave me the opportunity to grow in my fitness community and with my yoga however IT was calling my name and I missed the challanges it brought. I wanted to do something different. I started looking into web development and immediately got hooked. I loved the pure creative aspect it bought and the ability to make something out of just lines of code. So thats where I am. Feel free to email me if you are in Portland and want to grab a coffee and chat some code!

          </p>
        </div>
      </div>
    </div>
  )
}

export default MoreAbout
