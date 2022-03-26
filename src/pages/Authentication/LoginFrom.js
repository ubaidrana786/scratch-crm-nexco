import React, { useContext } from "react";
import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import SelectRole from "../Users/SelectRole";
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
// ----------------------------------------------------------------------

export default function LoginForm() {
  // const { currentUser, setCurrentUser, authToken, setAuthToken } =
  //   useContext(RootContext);
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    // SelectRole: Yup.string().required("required"),
    //  SelectBranch: Yup.string().required("required"),
  });

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
      // SelectRole: "",  
      // SelectBranch: "",  
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      history.push("/dashboard");
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
            {/* <SelectRole 
              className="input"
              onChange={(value) =>
                formik.setFieldValue("SelectRole", value.value)
              }
              value={formik.values.SelectRole}
              options={options}
            /> */}
            {/* {formik.errors.SelectRole ? (
            <div className="error">{formik.errors.SelectRole}</div>
          ) : null} */}
          {/* </FormControl> */}

          
            {/* <SelectBranch 
              className="input"
              onChange={(value) =>
                formik.setFieldValue("SelectBranch", value.value)
              }
              value={formik.values.SelectBranch}
              options={optionsBranch}
            /> */}
            {/* {formik.errors.SelectRole ? (
            <div className="error">{formik.errors.SelectRole}</div>
          ) : null} */}
        

        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          {/* <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          /> */}

          {/* <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link> */}
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
  );
}
