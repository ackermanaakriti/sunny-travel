import React from 'react';
import flag from '../../Global/Images/nepal.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const FeedbackForm = () => {
  return (
    <div>
      
      <Formik
        initialValues={{
          fullname: '',
          nationality: '',
          message:'',
          email: '',
          trip:'',
          phonenumber:''
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string().required('Full Name is required'),
          nationality: Yup.string().required('Nationality is required'),
          message: Yup.string().required('Message is required'),
          trip: Yup.string().required('Trip is required'),
          phonenumber: Yup.number().required('Phone Number is required'),



          email: Yup.string().email('Invalid email').required('Email is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='feedbackform--container'>
                <div className='form--div row'>
            <div className="col-md-6">
              <label htmlFor="fullname">Full Name  <span>*</span></label>
              <Field type="text" name="fullname" placeholder="Eg. John Doe"/>
              <ErrorMessage name="fullname" component="div" className="error" />
            </div>
            <div className="col-md-6">
              <label htmlFor="nationality">Nationality  <span>*</span></label>
              <Field type="text" name="nationality" />
              <ErrorMessage name="nationality" component="div" className="error" />
            </div>
   

           <div className='col-md-6'>
           <label >Phone No <span>*</span></label>
           <div class="input-group mb-3">
             
                        <div className="input-group-prepend">
                         <span className="input-group-text" id="basic-addon1">
                            <img src={flag} alt='nepalflag'/>
                            (+977)
                         </span>
                         </div>
                        <input type="text" className="form-control" placeholder="Phone no" aria-label="Username" aria-describedby="basic-addon1"/>
                        {/* <span className='iconsp'><FontAwesomeIcon icon={faPhone} /></span> */}
                         </div>
           </div>
           
            
            
            <div className="col-md-6">
              <label htmlFor="email">Email  <span>*</span></label>
              <Field type="email" name="email"  placeholder="Eg. johndoe@gmail.com" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="col-md-12">
              <label htmlFor="email">Trip/Trek  <span>*</span></label>
          <select name='trip'>
            <option>SELECT OPTION</option>
            <option>Annapurna</option>
            <option>Moutain</option>
          </select>
              <ErrorMessage name="trip" component="div" className="error" />
            </div>

            <div className="col-md-12">
              <label htmlFor="message">Message  <span>*</span></label>
              <textarea type="text" name="message"></textarea>
              <ErrorMessage name="message" component="div" className="error" placeholder=""/>
            </div>
            <div class="col-md-4">
            <button className='feedback--btn' type="submit" disabled={isSubmitting}>
              Send
              <span><FontAwesomeIcon icon={faPaperPlane} /></span>
            </button>
            </div>
            </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackForm;
