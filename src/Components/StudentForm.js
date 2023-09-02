import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    rollno: Yup.number()
      .positive("Invalid roll number")
      .integer("Invalid roll number")
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <label>Enter Your Name:</label><br/>
            <Field name="name" type="text" placeholder="Your Name Here..." className="form-control" />
            <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/><br/>
          </FormGroup>
          <FormGroup>
          <label>Enter Your Email ID:</label><br/>
            <Field name="email" type="text" placeholder="Your Email ID Here..." className="form-control" />
            <ErrorMessage name="email" className="d-block invalid-feedback" component="span"/><br/>
          </FormGroup>
          <FormGroup>
          <label>Enter Your Roll No.:</label><br/>
            <Field name="rollno" type="number" placeholder="Your Roll No Here..." className="form-control" />
            <ErrorMessage name="rollno" className="d-block invalid-feedback" component="span"/><br/>
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">{props.children}</Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default StudentForm;