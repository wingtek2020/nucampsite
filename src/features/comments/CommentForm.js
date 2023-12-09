import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validateCommentForm from "../../utils/validateCommentForm";
import { addComment } from './commentsSlice';
import { useState } from "react";
import { useDispatch } from "react-redux";

const CommentForm = ({ campsiteId }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: values.rating,
      author: values.author,
      text: values.commentText,
      date: new Date(Date.now()).toISOString(),
    };
    console.log(comment);
    dispatch(addComment(comment));
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <Button outline onClick={() => setModalOpen(!isModalOpen)}>
        <i className="fa fa-pencil fa-lg" /> Add Comment
      </Button>
      <Modal isOpen={isModalOpen}>
        <ModalHeader toggle={() => setModalOpen(!isModalOpen)}>
          Add Comment
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              rating: undefined,
              author: "",
              text: "",
            }}
            onSubmit={handleSubmit}
            validate={validateCommentForm}
          >
            <Form>
              <FormGroup row>
                <Label htmlFor="rating" md="2">
                  Rating
                </Label>
                <Field name="rating" as="select" className="form-control">
                  <option>Select...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Field>
                <ErrorMessage name="rating">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="author">Your Name</Label>
                <Field
                  name="author"
                  placeholder="Your Name"
                  className="form-control"
                />
                <ErrorMessage name="author">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>{" "}
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="commentText" md="2">
                  Comment
                </Label>
                <Field
                  name="commentText"
                  as="textarea"
                  rows="12"
                  className="form-control"
                />
              </FormGroup>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CommentForm;
