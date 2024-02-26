import React from "react";
import Layout from "../Layout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Container, Figure, Image, Row } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./detailsPages/detailsPage.css";
import {
  faClock,
  faEnvelope,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  return (
    <>
      <Layout>
        <main className="booking-page">
          <section className="booking-banner">
            <Container>
              <h1 className="text-center">Booking</h1>
            </Container>
            <Figure className="banner-img">
              <Image src="/images/banner/mount.jfif" />
            </Figure>
          </section>
          <section className="booking-form-wrapper">
            <Container>
              <div class="heading-wrapper">
                <h3 class="heading-ext">
                  "Start Your Adventure Today! Book Now and Create Memories That
                  Last a Lifetime."
                </h3>
              </div>
             
              <Row className="justify-content-center">
                <Col xl={6} lg={8} md={12}>
                  <div class="booking-form">
                    <Formik
                      initialValues={{
                        trip: "",
                        date: "",
                        trip_days: "",
                        trip_adult: "",
                        trip_children: "",
                        trip_information: "",
                        full_name: "",
                        email: "",
                        country: "",
                        phone: "",
                      }}
                      validationSchema={Yup.object().shape({
                        trip: Yup.string().required("Required"),
                        date: Yup.string().required("Required"),
                        trip_days: Yup.number().required("Required"),
                        trip_adult: Yup.string().required("Required"),
                        trip_children: Yup.string().required("Required"),
                        trip_information: Yup.string().required("Required"),
                        full_name: Yup.string().required("Required"),
                        email: Yup.string().required("Required"),
                        country: Yup.string().required("Required"),
                        phone: Yup.string().required("Required"),
                      })}
                      onSubmit={values => {
                        // Handle form submission
                        console.log(values);
                        toast.success('form submitted');
                      }}
                    >
                      {formik => (
                        <form onSubmit={formik.handleSubmit}>
                           <ToastContainer 
                          />
                        
                          <Row className="gy-3">
                            <Col md={6}>
                              <div class="form-group">
                                <label class="form-label" htmlFor="trip">
                                  Trip
                                  <span class="color-red">*</span>
                                </label>
                                <div class="input-group">
                                  <Field
                                    class="form-control "
                                    as="select"
                                    name="trip"
                                  >
                                    <option value="" disabled selected>
                                      Select Option
                                    </option>
                                    <option value="Pokhara">Pokhara</option>
                                    <option value="Mustang">Mustang</option>
                                    <option value="kathmandu">kathmandu</option>
                                  </Field>
                                </div>
                                <ErrorMessage
                                  name="trip"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div class="form-group">
                                <label class="form-label" htmlFor="date">
                                  Date of Travel
                                  <span class="color-red">*</span>
                                </label>
                                <div class="input-group">
                                  <Field
                                    type="date"
                                    class="form-control"
                                    name="date"
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                  />
                                </div>
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </Col>
                            <Col md={4}>
                              <div class="form-group">
                                <label class="form-label" htmlFor="trip_days">
                                  Trip duration(days)
                                  <span class="color-red">*</span>
                                </label>
                                <div class="input-group">
                                  <Field
                                    type="number"
                                    class="form-control"
                                    placeholder="1"
                                    name="trip_days"
                                    onChange={formik.handleChange}
                                    value={formik.values.trip_days}
                                  />
                                  <span class="input-group-text">
                                    <FontAwesomeIcon icon={faClock} />
                                  </span>
                                </div>
                                <ErrorMessage
                                  name="trip_days"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </Col>
                            <Col md={4}>
                              <div class="form-group">
                                <label class="form-label" htmlFor="trip_adult">
                                  No. of adults
                                  <span class="color-red">*</span>
                                </label>
                                <div class="input-group">
                                  <Field
                                    type="number"
                                    class="form-control"
                                    placeholder="1"
                                    name="trip_adult"
                                    onChange={formik.handleChange}
                                    value={formik.values.trip_adult}
                                  />
                                  <span class="input-group-text">
                                    <FontAwesomeIcon icon={faUser} />
                                  </span>
                                </div>
                                <ErrorMessage
                                  name="trip_adult"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className="form-group">
                                <label
                                  class="form-label"
                                  htmlFor="trip_children"
                                >
                                  No. of childrens
                                  <span class="color-red">*</span>
                                </label>
                                <div className="input-group">
                                  <Field
                                    type="number"
                                    class="form-control"
                                    placeholder="1"
                                    name="trip_children"
                                    onChange={formik.handleChange}
                                    value={formik.values.trip_children}
                                  />
                                  <span class="input-group-text">
                                    <FontAwesomeIcon icon={faUser} />
                                  </span>
                                </div>
                                <ErrorMessage
                                  name="trip_children"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </Col>
                            <Col md={12}>
                              <div class="form-group">
                                <label
                                  class="form-label"
                                  htmlFor="trip_information"
                                >
                                  More Information
                                  <span class="color-red">*</span>
                                </label>
                                <div class="input-group">
                                  <Field
                                    as="textarea"
                                    rows="5"
                                    placeholder="More Information"
                                    class="form-control"
                                    name="trip_information"
                                  ></Field>
                                </div>
                                <ErrorMessage
                                  name="trip_information"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div class="form-group">
                                <label class="form-label">
                                  Full Name
                                  <span class="color-red">*</span>
                                </label>
                                <div class="input-group">
                                  <Field
                                    type="text"
                                    class="form-control"
                                    placeholder="Eg. John Cha"
                                    name="full_name"
                                    onChange={formik.handleChange}
                                    value={formik.values.full_name}
                                  />
                                  <span class="input-group-text">
                                    <FontAwesomeIcon icon={faUser} />
                                  </span>
                                </div>
                                <ErrorMessage
                                  name="full_name"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div class="form-group">
                                <label class="form-label">
                                  Email Address <span class="color-red">*</span>
                                </label>
                                <div class="input-group">
                                  <Field
                                    type="email"
                                    class="form-control"
                                    placeholder="Eg. John Cha"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                  />
                                  <span class="input-group-text">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                  </span>
                                </div>
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div class="form-group">
                                <label class="form-label" htmlFor="country">
                                  Country
                                  <span class="color-red">*</span>
                                </label>
                                <div class="input-group">
                                  <Field
                                    class="form-control "
                                    as="select"
                                    name="country"
                                  >
                                    <option value="" disabled selected>
                                      Select Option
                                    </option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="India">India</option>
                                    <option value="China">China</option>
                                  </Field>
                                </div>
                                <ErrorMessage
                                  name="country"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </Col>
                            <Col md={6}>
                              <label class="form-label">
                                Phone number
                                <span class="color-red">*</span>
                              </label>
                              <div class="input-group">
                                <span class="input-group-text flag-icon">
                                  <Image
                                    src="assets/images/svg/flag.svg"
                                    alt=""
                                  />
                                  (+977)
                                </span>
                                <Field
                                  type="number"
                                  class="form-control"
                                  placeholder="Phone No."
                                  name="phone"
                                  onChange={formik.handleChange}
                                  value={formik.values.phone}
                                />
                                <span class="input-group-text">
                                  <FontAwesomeIcon icon={faPhone} />
                                </span>
                              </div>
                              <ErrorMessage
                                name="phone"
                                component="div"
                                className="error"
                              />
                            </Col>
                            <Col md={12}>
                              <div class="btn-wrapper">
                                <button
                                  type="submit"

                                  class="btn-blue"
                                >
                                  Send<i class="fa-solid fa-paper-plane"></i>
                                </button>
                              </div>
                            </Col>
                          </Row>
                         
                        </form>
                        
                      )}
                    </Formik>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Booking;
