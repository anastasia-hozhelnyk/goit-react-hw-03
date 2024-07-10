import style from "./ContactForm..module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const userName = values.name.trim();
    const userNumber = values.number.trim();

    onAdd({ name: userName, number: userNumber });
    actions.resetForm();
  };

  const id = nanoid();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <div className={style.wrap}>
          <label htmlFor={`name-${id}`}>Name</label>
          <Field
            type="text"
            name="name"
            id={`name-${id}`}
            className={style.field}
            autoComplete="on"
            placeholder="Jack Robinson"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={style.errorText}
          />
        </div>

        <div className={style.wrap}>
          <label htmlFor={`number-${id}`}>Number</label>
          <Field
            type="text"
            name="number"
            id={`number-${id}`}
            className={style.field}
            placeholder="000-00-00"
            autoComplete="on"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={style.errorText}
          />
        </div>

        <Button variant="contained" color="success" type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
