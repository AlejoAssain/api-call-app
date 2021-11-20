import { Formik, Form, Field} from "formik"

const validateForm = (values) => {
  const errors = {}

  if (values.searchValue === "" || !values.searchValue) {
    errors.searchValue = "This field is required"
  }

  return errors
}

const Navbar = (props) => {
  return (
    <header className="">
      <Formik
        initialValues={{
          searchValue: ""
        }}
        validate={validateForm}
        onSubmit={(values) => props.handleSubmit(values.searchValue)}
      >
        <Form>        
          {/* <ErrorMessage name="searchValue" /> */}
          <Field name="searchValue" />
          <button type="submit" className="search-button">Search</button>
        </Form>
      </Formik>
    </header>
  )
}

export default Navbar