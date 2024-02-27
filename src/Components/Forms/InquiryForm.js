import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faUser,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import nepalflag from '../../Global/Images/nepal.png'
import * as Yup from 'yup';
import './Form.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const InquiryForm = () => {
  const baseUrl = 'http://192.168.1.7:8000';


  return (
   <>
   {/* <button onClick={handleSeason}>helo</button> */}
       <ToastContainer/>
        <Formik
        initialValues={{
            name:'',
            email:'',
            phone:'',
            message:''
        }}
              
        validationSchema={Yup.object().shape({
            name:Yup.string().required('Name is required'),
            email:Yup.string().email('invalid email').required('email is required'),
            phone:Yup.number().required('Phone number is required'),
            message:Yup.string().required('message is required')
        })}

        onSubmit={values=>
        {
         
    console.log(values)
    try{

      axios.post(`${baseUrl}/api/v1/contact-inquiries`,values)
     .then((res)=>{
      console.log(res)
      toast.success('Your Inquiry has been submitted')
     })
     .catch((err)=>console.log(err))


    }
    catch(error)
    {
      console.log('error while submittng',error)
    }
        }}

        >
          {formik=>(
            <form onSubmit={formik.handleSubmit}>  

              <div className='contactform'>
              <button className='contactbtn--'>
      Send Quick Message
      
    </button>
              
                <div className='inquiryform--container'>
                    <div className='inputinfo'>
                        <input onChange={formik.handleChange} placeholder='Name' type='text' name='name'/>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                        <ErrorMessage  name='name' component='div' className='errmsg'/>

                        <div className='inputinfo'>
                        <input onChange={formik.handleChange} placeholder='Email' type='email' name='email'/>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        </div>
                        <ErrorMessage name='email' component='div' className='errmsg'/>

                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">
                            <img src={nepalflag} alt='nepalflag'/>
                            (+977)
                         </span>
                         </div>
                        <input onChange={formik.handleChange} name='phone' type="text" class="form-control" placeholder="Phone no" aria-label="Username" aria-describedby="basic-addon1"/>
                        <span className='iconsp'><FontAwesomeIcon icon={faPhone} /></span>
                         </div>
                         <ErrorMessage name='phone' component='div' className='errmsg'/>



                         <div className='inputinfo'>
                        <textarea onChange={formik.handleChange} placeholder='Message' type='text' name='message'></textarea>
                       
                        </div>
                        <ErrorMessage name='message' component='div' className='errmsg'/>
                    
            
                        
                </div>
                <div className='inquiryformm--btn'>
                     <button type='submit'>Submit</button>
                        </div>
                        </div>
               
            </form>
          )}


        </Formik>
   </>
  )
}
