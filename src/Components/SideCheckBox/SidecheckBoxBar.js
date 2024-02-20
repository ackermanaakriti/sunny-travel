import React from 'react'
import { Container } from 'react-bootstrap'
import './Sidebarcheckbox.css'
import { region } from '../../Data/Checkboxes'

const SidecheckBoxBar = () => {
  return (
  <>
 
  <div className='sidecheckboxbar--container'>
    <form>
      <div className='form--dropdown--Region'>
        <div className='form--headers--region'>
           <p>Region</p>
        </div>
        <div className='form--checkboxes--list'>
          {region.map((item)=>
          (
            <div className='form--checkbox'>
            <input type='checkbox'/>
            <label>{item.name}</label>
          </div>
          ))}
         
        </div>

      </div>


      <div className='form--dropdown--Region'>
        <div className='form--headers--activities'>
           <p>Activities</p>
        </div>
        <div className='form--checkboxes--list'>
          {region.map((item)=>
          (
            <div className='form--checkbox'>
            <input type='checkbox'/>
            <label>{item.name}</label>
          </div>
          ))}
         
        </div>

      </div>


      <div className='form--dropdown--Region'>
        <div className='form--headers--budget'>
           <p>Budget</p>
        </div>
        <div className='form--checkboxes--list'>
          {region.map((item)=>
          (
            <div className='form--checkbox'>
            <input type='checkbox'/>
            <label>{item.name}</label>
          </div>
          ))}
         
        </div>

      </div>
   
    </form>
    
  </div>
 
  </>
  )
}

export default SidecheckBoxBar