import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import Title from "./title";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import InputBar from "./input-bar";
import * as Yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import "react-day-picker/dist/style.css";
import { data } from "./register.data";
import { Program } from "@/interfaces/program";

const RegisterSchema = Yup.object().shape({
  Program: Yup.object()
    .shape({
      value: Yup.string().required("Required"),
      label: Yup.string().required("Required"),
    })
    .required("This is requied!"),
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
  PhoneNumber: Yup.string().matches(/ ^[0-9]{8,10}$/, "Invalid phone number"),
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
  const [PassportImage, setPassportImage] = React.useState<File[]>([]);
  const [TransferInfomation, setTransferInfomation] = React.useState<File[]>(
    []
  );
  const [Program, setProgram] = React.useState<Program | null>(null);
  const formik = useFormik({
    initialValues: {
      FullName: "",
      RollNumber: "",
      PhoneNumber: "",
      PassportNumber: "",
      FacebookLink: "",
    },
    enableReinitialize: true,
    validationSchema: RegisterSchema,
    onSubmit: (values, { resetForm }) => {
      const register = {
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
  const handlePassportImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)[0];
      const newFiles = [...PassportImage, files];
      setPassportImage(newFiles);
    }
    console.log(PassportImage);
  };
  const handleTransferInformation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)[0];
      const newFiles = [...TransferInfomation, files];
      setTransferInfomation(newFiles);
    }
    console.log(TransferInfomation);
  };
  const handleProgram = (program: Program | null) => {
    setProgram(program);
    console.log(Program);
  };
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          width: { lg: "80%", sm: "90%", xs: "95%" },
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
            height: { lg: "200px", sm: "150px", xs: "80px" },
            width: "100%",
            borderTopRightRadius: "30px",
            background: 'url("/images/register-form-bg.png")',
            backgroundSize: "cover",
            backgroundColor: "primary.main",
            borderTopLeftRadius: "30px",
            color: "primary.contrastText",
            display: "flex",
            flexDirection: "column",
            justifyContent: { lg: "flex-end", sm: "flex-end", xs: "center" },
            padding: { lg: "0 7% 20px", sm: "0 5% 20px", xs: "0 5%" },
          }}
        >
          <Box
            sx={{
              fontWeight: "Bold",
              fontSize: { lg: "60px", sm: "50px", xs: "25px" },
            }}
          >
            REGISTER FORM
          </Box>
          <Box
            sx={{
              fontWeight: "400",
              fontSize: { lg: "25px", sm: "20px", xs: "15px" },
            }}
          >
            * Required
          </Box>
        </Box>
        <Box
          sx={{
            padding: { lg: " 0 6% 7% 8%", sm: " 0 6% 7% 8%", xs: "0 5% 7% 5%" },
            width: "auto",
          }}
        >
          <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <Title number={"1"} title={"Program*"} />
            <Select
              name="Program"
              value={Program}
              displayEmpty
              renderValue={(selected) => {
                if (selected === null) {
                  return <em>Select Program</em>;
                }

                return selected.programName;
              }}
              IconComponent={KeyboardArrowDownRoundedIcon}
              sx={{
                width: { lg: "43%", sm: "43%", xs: "100%" },
                borderRadius: "25px",
                height: "50px",
                backgroundColor: "#D9D9D9",
                fontWeight: "bold",
                margin: {
                  lg: "10px 0 0 20px",
                  sm: "10px 0 0 20px",
                  xs: "10px 0 0 0",
                },
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
              <MenuItem disabled value="" onClick={() => handleProgram(null)}>
                <em>Select Program</em>
              </MenuItem>
              {data.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item.id}
                  disableRipple
                  onClick={() => handleProgram(item)}
                  sx={{ fontWeight: "bold" }}
                >
                  {item.programName}
                </MenuItem>
              ))}
            </Select>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: { lg: "row", sm: "row", xs: "column" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { lg: "50%", sm: "100%", xs: "100%" },
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
                <InputBar
                  placeholderText={"DD/MM/YYYY"}
                  require={false}
                  width={"95%"}
                  name={"Major"}
                  value={undefined}
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
              {...formik.getFieldProps("ExpirationDate")}
              placeholderText={"DD/MM/YYYY"}
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
                <input type="file" hidden onChange={handlePassportImage} />
              </Box>
            </Box>
            {PassportImage.length > 0 && (
              <>
                <Box height={24}></Box>
                <Box
                  px={2}
                  display={"flex"}
                  flexWrap="wrap"
                  width={"100%"}
                  gap={1}
                >
                  {PassportImage.map((item, index) => (
                    <>
                      <Box
                        key={index}
                        borderRadius={2}
                        padding={"5px 10px"}
                        style={{ backgroundColor: "#D9D9D9" }}
                      >
                        <Typography>{item.name}</Typography>
                      </Box>
                    </>
                  ))}
                  <Box width={3}></Box>
                  <Button
                    component="label"
                    variant="contained"
                    fullWidth={false}
                    size={"small"}
                    style={{
                      maxWidth: "30px",
                      maxHeight: "30px",
                      minWidth: "30px",
                      minHeight: "30px",
                      backgroundColor: "#D9D9D9",
                      color: "background.paper",
                      fontSize: "16px",
                    }}
                  >
                    +
                    <input type="file" hidden onChange={handlePassportImage} />
                  </Button>
                </Box>
              </>
            )}
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
                <input
                  type="file"
                  hidden
                  onChange={handleTransferInformation}
                />
              </Box>
            </Box>
            {TransferInfomation.length > 0 && (
              <>
                <Box height={24}></Box>
                <Box
                  px={2}
                  gap={1}
                  display={"flex"}
                  flexWrap="wrap"
                  width={"100%"}
                >
                  {TransferInfomation.map((item, index) => (
                    <>
                      <Box
                        key={index}
                        borderRadius={2}
                        padding={"5px 10px"}
                        style={{
                          backgroundColor: "#D9D9D9",
                          color: "background.paper",
                          fontSize: "16px",
                        }}
                      >
                        <Typography>{item.name}</Typography>
                      </Box>
                    </>
                  ))}
                  <Box width={3}></Box>
                  <Button
                    variant="contained"
                    fullWidth={false}
                    component="label"
                    size={"small"}
                    style={{
                      maxWidth: "30px",
                      maxHeight: "30px",
                      minWidth: "30px",
                      minHeight: "30px",
                      backgroundColor: "#D9D9D9",
                      color: "background.paper",
                      fontSize: "16px",
                    }}
                  >
                    +
                    <input
                      type="file"
                      hidden
                      onChange={handleTransferInformation}
                    />
                  </Button>
                </Box>
              </>
            )}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <Button
                disableRipple
                variant="contained"
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  padding: "10px 50px",
                  borderRadius: "10px",
                  backgroundColor: "primary.main",
                  color: "secondary.contrastText",
                  transition: "all .5s",
                  boxShadow: "0 2px 3px #00000085",

                  "&:hover": {
                    backgroundColor: "primary.main",
                    transform: "translateY(3px)",
                  },
                }}
                type="submit"
              >
                SUBMIT
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
