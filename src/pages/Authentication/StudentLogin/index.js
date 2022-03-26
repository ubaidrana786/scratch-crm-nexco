import React from "react";
import { Row, Col, Input, Button, Alert, Container, Label } from "reactstrap";
import LoginForm from "../LoginFrom";
import "../Login.css";
import logolight from "../../../assests/images/logo.png";
import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
// import RootContext from "../../RootContext";
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// component
import { Icon } from "@iconify/react";

const StudentLogin = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    SelectRole: Yup.string().required("required"),
    SelectBranch: Yup.string().required("required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: ({ email, password, SelectRole }) => {
      history.push("/dashboard");
      if (email !== "" && password !== "") {
        //   setCurrentUser({
        //     email,
        //     password,
        //   });
        //   setAuthToken("123455");
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4}>
              <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                <div className="w-100">
                  <Row className="justify-content-center">
                    <Col lg={9}>
                      <div>
                        <div className="text-center">
                          <div>
                            <a to="/" class="">
                              <img
                                src=""
                                alt=""
                                height="50"
                                class="auth-logo logo-dark mx-auto"
                              />
                              <img
                                src={logolight}
                                alt=""
                                height="40"
                                class="auth-logo logo-light mx-auto"
                              />
                            </a>
                          </div>

                          <h4 className="font-size-18 mt-4">Hi Student!</h4>
                          <p className="text-muted">
                            Sign in to continue to NEXCO.
                          </p>
                        </div>

                        <FormikProvider value={formik}>
                          <Form
                            autoComplete="off"
                            noValidate
                            onSubmit={handleSubmit}
                          >
                            <Stack spacing={3}>
                              <TextField
                                fullWidth
                                autoComplete="username"
                                type="email"
                                label="Email address"
                                {...getFieldProps("email")}
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                              />

                              <TextField
                                fullWidth
                                autoComplete="current-password"
                                type={showPassword ? "text" : "password"}
                                label="Password"
                                {...getFieldProps("password")}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={handleShowPassword}
                                        edge="end"
                                      >
                                        <Icon
                                          icon={
                                            showPassword
                                              ? "eva:eye-fill"
                                              : "eva:eye-off-fill"
                                          }
                                        />
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                                error={Boolean(
                                  touched.password && errors.password
                                )}
                                helperText={touched.password && errors.password}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                              />
                            </Stack>

                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                              sx={{ my: 2 }}
                            >
              
                            </Stack>

                            <LoadingButton
                              fullWidth
                              size="large"
                              type="submit"
                              variant="contained"
                              loading={isSubmitting}
                            >
                              Login
                            </LoadingButton>
                          </Form>
                        </FormikProvider>

                        <div className="mt-5 text-center">
                          <p>
                            If You are a Admin ?{" "}
                            <RouterLink
                              to="/"
                              className="fw-medium text-primary"
                            >
                              {" "}
                              Login{" "}
                            </RouterLink>{" "}
                          </p>
                          <p>© 2022 NEXCO.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="authentication">
                <div className="bg-overlay"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default StudentLogin;
