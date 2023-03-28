import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import EditIcon from "../../../public/images/edit.svg";

const profile = () => {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Container
        sx={{
          backgroundColor: "#aeaeae",
          height: "100%",
          width: "70%",
          paddingTop: "10%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            width: "400px",
            height: "350px",
            borderRadius: "30px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              width: "170px",
              height: "170px",
              overflow: "hidden",
            }}
          >
            <Image
              src={"/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg"}
              objectFit="cover"
              width={200}
              height={200}
            ></Image>
          </Box>
          <h3 style={{ margin: "10px 0 0 0" }}>NGUYEN CONG KHANH</h3>
          <p style={{ margin: "0" }}>khanhncse130305@fpt.edu.vn</p>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <p>Edit</p>
            {/* <EditIcon /> */}
          </Box>
        </Box>
        <Box
          sx={{
            width: "35%",
            height: "500px",
            borderRadius: "30px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* left content */}
        </Box>
      </Container>
    </Box>
  );
};

export default profile;
