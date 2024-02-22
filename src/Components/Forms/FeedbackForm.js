import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.css";

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
          phonenumber: "",
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string().required("Full Name is required"),
          nationality: Yup.string().required("Nationality is required"),
          message: Yup.string().required("Message is required"),
          trip: Yup.string().required("Trip is required"),
          phonenumber: Yup.number().required("Phone Number is required"),

          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
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
            <div className="feedbackform--container">
              <div className="form--div row">
                <div class="col-md-6">
                  <label htmlFor="fullname">Full Name</label>
                  <Field
                    type="text"
                    name="fullname"
                    placeholder="Eg. John Doe"
                  />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className="error"
                  />
                </div>
                <div class="col-md-6">
                  <label htmlFor="nationality">Nationality</label>
                  <Field type="text" name="nationality" />
                  <ErrorMessage
                    name="nationality"
                    component="div"
                    className="error"
                  />
                </div>

                <div class="col-md-6">
                  <label htmlFor="phonenumber">Phone Number</label>
                  <Field type="text" name="phonenumber" />
                  <ErrorMessage
                    name="phonenumber"
                    component="div"
                    className="error"
                  />
                </div>

                <div class="col-md-6">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Eg. johndoe@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div class="col-md-12">
                  <label htmlFor="email">Trip/Trek</label>
                  <select name="trip">
                    <option>SELECT OPTION</option>
                    <option>Annapurna</option>
                    <option>Moutain</option>
                  </select>
                  <ErrorMessage name="trip" component="div" className="error" />
                </div>

                <div class="col-md-12">
                  <label htmlFor="message">Message</label>
                  <textarea type="text" name="message"></textarea>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                    placeholder=""
                  />
                </div>
                <div class="col-md-4">
                  <button type="submit" disabled={isSubmitting}>
                    Submit
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
