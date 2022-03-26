import React, { useState } from "react";
import * as Yup from "yup";

import "../Dashboard/AdminTable.css";
import {
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  Container,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { Model } from "./Model";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import SelectBranch from "./SelectBranch";
import SelectRole from "./SelectRole";
import { useFormik, Form, FormikProvider } from "formik";

export const NexcoUser = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    SelectRole: Yup.string().required("required"),
    SelectBranch: Yup.string().required("required"),
  });

  const [showModel, setShowModel] = useState(false);

  const toggleModel = () => {
    setShowModel(!showModel);
  };

  const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

  const style = {
    width: 600,
    bgcolor: "background.paper",
    p: 2,
    px: 4,
    pb: 3,
  };
  const options = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Officer", label: "Officer" },
  ];

  const optionsBranch = [
    { value: "Sydney", label: "Sydney" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Melbourne", label: "Melbourne" },
    { value: "Tasmania", label: "Tasmania" },
    { value: "Lahore", label: "Lahore" },
    { value: "India", label: "India" },
    { value: "Multan", label: "Multan" },
    { value: "Srilanka", label: "Srilanka" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Faiselabad", label: "Faiselabad" },
  ];

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      SelectRole: "",
      SelectBranch: "",
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      alert("a");
      //   history.push("/dashboard");
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ margin: " 20px 100px 0px 300px" }}>
      <div class="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleOpen}>
          Add User
        </button>
      </div>

      <table class="table table-hover mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Branch</th>
            <th scope="col">Role</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ubaid</td>
            <td>Lahore</td>
            <td>Officer</td>
            <td>ubaidrana755@gmail.com</td>
          </tr>
        </tbody>
      </table>

      <div>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <StyledModal
              aria-labelledby="unstyled-modal-title"
              aria-describedby="unstyled-modal-description"
              open={open}
              onClose={handleClose}
              BackdropComponent={Backdrop}
            >
              <Box
                sx={style}
                style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
              >
                <div className="row pt-3">
                  <div className="col-md-12">
                    <div class="row g-3">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Full Name"
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                          aria-label="First name"
                          {...getFieldProps("email")}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-md-12">
                        <div class="row g-3">
                          <div class="col">
                            <SelectRole
                              className="input"
                              onChange={(value) =>
                                formik.setFieldValue("SelectRole", value.value)
                              }
                              value={formik.values.SelectRole}
                              options={options}
                            />
                          </div>
                          <div class="col">
                            <SelectBranch
                              className="input"
                              onChange={(value) =>
                                formik.setFieldValue(
                                  "SelectBranch",
                                  value.value
                                )
                              }
                              value={formik.values.SelectBranch}
                              options={optionsBranch}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-md-12">
                    <div class="row g-3">
                      <div class="col">
                        <input
                          type="date"
                          class="form-control"
                          placeholder="Date"
                         
                        />
                      </div>
                      <div class="col">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="password"
                          aria-label="First name"
                        
                        />
                      </div>
                    </div>
                    </div>
                    </div>

                    {/* {formik.errors.SelectRole ? (
            <div className="error">{formik.errors.SelectRole}</div>
          ) : null} */}
                    <button type="submit" className="btn btn-primary mt-5">
                      Create User
                    </button>
                  </div>
                </div>
              </Box>
            </StyledModal>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};
