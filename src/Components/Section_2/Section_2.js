import React from 'react'
import './Section_2.css'
import Scroller from './Scroller'


const Section2 = () => {
  return (
    <div className='section_2'>
    <div className='scrollerr'>
    <div className='first_card'>
      <div className='first_title flex'>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[3px]"><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#A594FD"></path></svg>
        <span>Workflow </span>
      </div>
      <div className='first_heading text-left'>
        Create at the speed of thought.
      </div>
      <div className='first_content'>
        Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you
      </div>
    </div>
    <div className='sec_card'>
    <div className='card'>
            <div className='card-pic bg-amber-100'></div>
            <div className='card-info'>
                <div className='card-title'>A keyboard first experience</div>
                <div className='card-description'>Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!</div>
            </div>
        </div>
        <Scroller/>
    </div>
    </div>
    </div>
  )
}

export default Section2