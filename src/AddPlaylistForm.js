import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddPlaylistForm = () => {

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Music title is required'),
        author: Yup.string().required('Music author is required'),
        src: Yup.string().required('Music source is required'),
        img: Yup.string().required('Required')
    });

    const initialValues = {
        title: '',
        author: '',
        src: '',
        img: ''
    }

    const handleSubmit = (values, { setSubmitting }) => {
        // Handle form submission logic
        console.log(values);
        setSubmitting(false);
    };
    
    return (
        <div className="addform-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="title">Title:</label>
                        <Field type="text" id="title" name="title" />
                        <ErrorMessage name="title" component="div" />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="author">Author:</label>
                        <Field type="text" id="author" name="author" />
                        <ErrorMessage name="author" component="div" />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="src">Source:</label>
                        <Field type="text" id="src" name="src" />
                        <ErrorMessage name="src" component="div" />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="img">Album image:</label>
                        <Field type="text" id="img" name="img" />
                        <ErrorMessage name="img" component="div" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )}
export default AddPlaylistForm;