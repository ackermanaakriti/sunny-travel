import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faUser,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import nepalflag from '../../Global/Images/nepal.png'
import * as Yup from 'yup';

import './Sidebarform.css'
import Cardbuttons from '../Buttons/Cardbuttons';
import ExploreMoreBtn from '../Buttons/ExploreMoreBtn';
import SidebarPackages from './SidebarPackages';
const SidebarForm = () => {
  return (
   <>
   <div className='sidebar--form--container'>
    <button className='booknowbtn'>
        Book Now
        <span><FontAwesomeIcon icon={faPaperPlane} /></span>
    </button>

    <div className='makeinquirybtn'>
        <button>MAKE AN INQUIRY</button>
        </div>
        <Formik
        initialValues={{
            name:'',
            email:'',
            phoneno:'',
            message:''
        }}
              
        validationSchema={Yup.object().shape({
            name:Yup.string().required('Name is required'),
            email:Yup.string().email('invalid email').required('email is required'),
            phoneno:Yup.number().required('Phone number is required'),
            message:Yup.string().required('message is required')
        })}

        onSubmit={(values,{setSubmitting})=>
        {
            console.log(values)
        }}

        >
          {({isSubmitting})=>(
            <Form>
                <div className='Sidebarinquiryform--container'>
                    <div className='inputinfo'>
                        <input placeholder='Name' type='text' name='name'/>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                        <ErrorMessage name='name' component='div' className='errmsg'/>

                        <div className='inputinfo'>
                        <input placeholder='Email' type='email' name='email'/>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        </div>
                        <ErrorMessage name='name' component='div' className='errmsg'/>

                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">
                            <img src={nepalflag} alt='nepalflag'/>
                            (+977)
                         </span>
                         </div>
                        <input type="text" class="form-control" placeholder="Phone no" aria-label="Username" aria-describedby="basic-addon1"/>
                        <span className='iconsp'><FontAwesomeIcon icon={faPhone} /></span>
                         </div>


                         <div className='inputinfo'>
                        <textarea placeholder='Message' type='text' name='message'></textarea>
                       
                        </div>
                        <ErrorMessage name='name' component='div' className='errmsg'/>
                    
            
                        
                </div>
                <div className='inquiryformm--btn'>
                     <button>Submit</button>
                        </div>
               
            </Form>
          )}


        </Formik>
        <SidebarPackages/>
  
   </div>
   </>
  )
}

export default SidebarForm