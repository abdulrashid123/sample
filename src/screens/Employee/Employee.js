import React from 'react'
import { Formik } from 'formik';
import './Employee.css'
function Employee() {
    return (
        <div className="employee__main">
            <div className="employee__container">
            <h1>Register Employee</h1>
            <Formik
            initialValues={{ email: '', password: '' ,name:'',username:'',joining_date:'',phone:''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <div  className="employee__form">
                <div className="employee__field">
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder="Username"
                />
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Name"
                />
                {errors.username && touched.username && errors.username}
                </div>
                <div className="employee__field">
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                />
                {errors.email && touched.email && errors.email}
                </div>
                <div className="employee__field">
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                />
                {errors.password && touched.password && errors.password}
                </div>
                <div className="employee__field">
                <input 
                type="date" 
                placeholder="joining_date" 
                name="date"/>
                {errors.joining_date && touched.joining_date && errors.joining_date}
                </div>
                <div className="employee__field">
                <input 
                type="number" 
                placeholder="Mobile no" 
                name="phone"/>
                {errors.phone && touched.phone && errors.phone}
                </div>
                <div className="employee__field">
                    <input onClick={handleSubmit}  type="submit"  disabled={isSubmitting} value="Register "/>
                </div>
            </div>
            )}
            </Formik>
            </div>
        </div>
    )
}

export default Employee
