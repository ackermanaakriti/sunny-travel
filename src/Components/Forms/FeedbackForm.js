import React from 'react';
import flag from '../../Global/Images/nepal.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          fullname: "",
          nationality: "",
          message: "",
          email: "",
          trip: "",
          phone_no: "",
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string().required("Full Name is required"),
          nationality: Yup.string().required("Nationality is required"),
          message: Yup.string().required("Message is required"),
          trip: Yup.string().required("Trip is required"),
          phone_no: Yup.string().matches(/^[0-9]{9,10}$/, 'Phone number must be 9 to 10 digits').required("Invalid"),

          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        })}
        onSubmit={values=>
        {
          console.log(values,"from feedback");
          toast.success('your feedback is submitted')
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <ToastContainer/>
            <div className='feedbackform--container'>
                <div className='form--div row'>
            <div className="col-md-6">
              <label htmlFor="fullname">Full Name  <span>*</span></label>
              <Field onChange={formik.handleChange} value={formik.values.fullname} type="text" name="fullname" placeholder="Eg. John Doe"/>
              <ErrorMessage name="fullname" component="div" className="error" />
            </div>
            <div className="col-md-6">
              <label htmlFor="nationality">Nationality  <span>*</span></label>
              <Field onChange={formik.handleChange} value={formik.values.nationality}  type="text" name="nationality" />
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
                        <input onChange={formik.handleChange} value={formik.values.phone_no} name='phone_no'  type="tel" className="form-control" placeholder="Phone no"  aria-describedby="basic-addon1"/>
                        {/* <span className='iconsp'><FontAwesomeIcon icon={faPhone} /></span> */}
                         </div>
           </div>
           
            
            
            <div className="col-md-6">
              <label htmlFor="email">Email  <span>*</span></label>
              <Field onChange={formik.handleChange} value={formik.values.email}  type="email" name="email"  placeholder="Eg. johndoe@gmail.com" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="col-md-12">
              <label htmlFor="email">Trip/Trek  <span>*</span></label>
              {/* <div class="input-group">
                                  <select  onChange={formik.handleChange}
                                    value={formik.values.trip} class="form-control " name="trip">
                                    <option value="" disabled selected>
                                      Select Option
                                    </option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="India">India</option>
                                    <option value="China">China</option>
                                  </select>
                                </div> */}
          <select  onChange={formik.handleChange} value={formik.values.trip}  name='trip'>
            <option value=''>SELECT OPTION</option>
            <option value='Annapurna'>Annapurna</option>
            <option value='Mountain'>Moutain</option>
          </select>
              <ErrorMessage name="trip" component="div" className="error" />
            </div>

            <div className="col-md-12">
              <label htmlFor="message">Message  <span>*</span></label>
              <textarea onChange={formik.handleChange} value={formik.values.textarea}  type="text" name="message"></textarea>
              <ErrorMessage name="message" component="div" className="error" placeholder=""/>
            </div>
            <div class="col-md-4">
            <button className='feedback--btn' type="submit" >
              Send
              <span><FontAwesomeIcon icon={faPaperPlane} /></span>
            </button>
            </div>
            </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackForm;
