import { Button, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Title from "./title";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import InputBar from "./input-bar";
import * as Yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const RegisterSchema = Yup.object().shape({
  Program: Yup.object().shape({
    value: Yup.string().required("Required"),
    label: Yup.string().required("Required"),
  }),
  FullName: Yup.string()
    .min(2, "Name is too short!")
    .max(40, "Name is too long!"),
  RollNumber: Yup.string().matches(
    /^[A-Za-z]{2}[0-9]{6}$/,
    "Incorrect roll number. Example: SE123456"
  ),
  Major: Yup.string()
    .min(2, "Major is too short!")
    .max(80, "Major is too long!"),
  PhoneNumber: Yup.string().matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Invalid phone number"
  ),
  PassportNumber: Yup.string()
    .matches(
      /[A-Z]{1}[0-9]{8}/,
      "Incorrect passport number. Example: A12345678"
    )
    .required("This is requied!"),
  FacebookLink: Yup.string()
    .matches(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      "Incorrect link. Example: https://example.com"
    )
    .required("This is requied!"),
  ExpirationDate: Yup.string().required("This is requied!"),
});
const Register = () => {
  const formik = useFormik({
    initialValues: {
      Program: "",
      FullName: "",
      RollNumber: "",
      PhoneNumber: "",
      PassportNumber: "",
      //   ExpirationDate: "",
      FacebookLink: "",
    },
    enableReinitialize: true,
    validationSchema: RegisterSchema,
    onSubmit: (values, { resetForm }) => {
      const register = {
        Program: values.Program,
        FullName: values.FullName,
        PhoneNumber: values.PhoneNumber,
        PassportNumber: values.PassportNumber,
        // ExpirationDate: values.ExpirationDate,
        FacebookLink: values.FacebookLink,
      };
      console.log(register);
      resetForm();
    },

    //if register function succesful, redirect to login page
    //   register(newUser).then((res) => {
    //     history.push(`/login`);
    //   });
  });
  const [selected, setSelected] = React.useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "100%",
          backgroundColor: " #F8F8F8",
          margin: "5% auto",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "100%",
            borderTopRightRadius: "30px",
            background: 'url("/images/register-form-bg.png")',
            backgroundSize: "cover",
            backgroundColor: "primary.main",
            borderTopLeftRadius: "30px",
            color: "primary.contrastText",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 7% 20px",
          }}
        >
          <p style={{ fontWeight: "Bold", fontSize: "60px" }}>REGISTER FORM</p>
          <p style={{ fontWeight: "400", fontSize: "25px" }}>* Required</p>
        </Box>
        <Box
          sx={{
            padding: " 0 6% 7% 8%",
            width: "auto",
          }}
        >
          <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <Title number={"1"} title={"Program*"} />
            <Select
              name="Program"
              IconComponent={KeyboardArrowDownRoundedIcon}
              sx={{
                width: "43%",
                borderRadius: "25px",
                height: "50px",
                backgroundColor: "#D9D9D9",
                margin: "10px 0 0 20px",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "& .MuiSvgIcon-root": {
                  color: "primary.main",
                  width: "45px",
                  height: "45px",
                  right: "20px",
                  top: "10%",
                },
              }}
            >
              <MenuItem disableRipple>1</MenuItem>
              <MenuItem disableRipple>1</MenuItem>
              <MenuItem disableRipple>1</MenuItem>
              <MenuItem disableRipple>1</MenuItem>
            </Select>
            <Box sx={{ display: "flex", width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <Title number={"2"} title={"Full name"} />
                <InputBar
                  require={false}
                  width={"90%"}
                  {...formik.getFieldProps("FullName")}
                  error={Boolean(
                    formik.touched.FullName && formik.errors.FullName
                  )}
                  helperText={formik.touched.FullName && formik.errors.FullName}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <Title number={"3"} title={"Roll number"} />
                <InputBar
                  require={false}
                  width={"90%"}
                  {...formik.getFieldProps("RollNumber")}
                  error={Boolean(
                    formik.touched.RollNumber && formik.errors.RollNumber
                  )}
                  helperText={
                    formik.touched.RollNumber && formik.errors.RollNumber
                  }
                />
              </Box>
            </Box>
            <Title number={"4"} title={"Major"} />
            <InputBar
              require={false}
              width={"95%"}
              name={"Major"}
              value={undefined}
            />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "50%",
                  flexDirection: "column",
                }}
              >
                <Title number={"5"} title={"Date of birth"} />
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  footer={footer}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <Title number={"6"} title={"Phone number"} />
                <InputBar
                  require={false}
                  width={"90%"}
                  {...formik.getFieldProps("PhoneNumber")}
                  error={Boolean(
                    formik.touched.PhoneNumber && formik.errors.PhoneNumber
                  )}
                  helperText={
                    formik.touched.PhoneNumber && formik.errors.PhoneNumber
                  }
                />
              </Box>
            </Box>
            <Title number={"7"} title={"Passport number*"} />
            <InputBar
              require={true}
              width={"95%"}
              {...formik.getFieldProps("PassportNumber")}
              error={Boolean(
                formik.touched.PassportNumber && formik.errors.PassportNumber
              )}
              helperText={
                formik.touched.PassportNumber && formik.errors.PassportNumber
              }
            />
            <Title number={"8"} title={"Expiration date"} />
            <InputBar
              require={true}
              width={"95%"}
              {...formik.getFieldProps("PassportNumber")}
              error={Boolean(
                formik.touched.PassportNumber && formik.errors.PassportNumber
              )}
              helperText={
                formik.touched.PassportNumber && formik.errors.PassportNumber
              }
            />
            <Title number={"9"} title={"Personal Facebook link*"} />
            <InputBar
              require={true}
              width={"95%"}
              {...formik.getFieldProps("FacebookLink")}
              error={Boolean(
                formik.touched.FacebookLink && formik.errors.FacebookLink
              )}
              helperText={
                formik.touched.FacebookLink && formik.errors.FacebookLink
              }
            />
            <Title number={"10"} title={"Passport image"} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                margin: "10px 0 0 20px",
              }}
            >
              <Image
                src="/images/upload-icon.svg"
                width={25}
                height={25}
              ></Image>
              <Box
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "18px",
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Upload your file here
                <input type="file" hidden />
              </Box>
            </Box>

            <Title number={"11"} title={"Transfer information"} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                margin: "10px 0 0 20px",
              }}
            >
              <Image
                src="/images/upload-icon.svg"
                width={25}
                height={25}
              ></Image>
              <Box
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "18px",
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Upload your file here
                <input type="file" hidden />
              </Box>
            </Box>
            <Button type="submit">SUBMIT</Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
