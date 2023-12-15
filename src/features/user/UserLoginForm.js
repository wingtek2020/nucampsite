import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, setCurrentUser } from "./userSlice";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

import validateUserLoginForm from "../../utils/validateUserLoginForm";
import defaultAvatar from "../../app/assets/img/unicorn.png";

const UserLoginForm = () => {
  const [isModalOpen, setLoginModalOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    const currentUser = {
      id: Date.now(),
      avatar: defaultAvatar,
      username: values.username,
      password: values.password,
    };
    dispatch(setCurrentUser(currentUser));
    setLoginModalOpen(!isModalOpen);
  };
  return (
    <>
      <span>
        {currentUser.currentUser ? (
          <div style={{ width: "4rem", height: "4rem" }}>
            <img
              src={defaultAvatar}
              alt={"user"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <Button
            outline
            onClick={() => setLoginModalOpen(true)}
            style={{ color: "white", border: "1px solid white" }}
          >
            <i className="fa fa-sign-in fa-lg" /> Login
          </Button>
        )}
      </span>
      <Modal isOpen={isModalOpen}>
        <ModalHeader toggle={() => setLoginModalOpen(!isModalOpen)}>
          Login
        </ModalHeader>

        <ModalBody>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleLogin}
            validate={validateUserLoginForm}
          >
            <Form>
              <FormGroup row>
                <Label htmlFor="username" md="2">
                  Username
                </Label>
                <Field
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                />
                <ErrorMessage name="username">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="password" md="2">
                  Password
                </Label>
                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                <ErrorMessage name="password">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <Button type="submit" color="primary">
                Login
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserLoginForm;
