import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import BaseBreadCrumbs from "../breadscrumbs/breadcrumbs";
import RightTitle from "./right-title";

const profile = () => {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Container
        sx={{
          height: "100%",
          width: { lg: "70%", sm: "90%", xs: "90%" },
          paddingTop: "5%",
        }}
      >
        <BaseBreadCrumbs
          previousLink={[{ href: "/", name: "Homepage" }]}
          currentLink={"Profile"}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", sm: "row", xs: "column" },
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <Box
            sx={{
              width: { lg: "350px", sm: "100%", xs: "100%" },
              height: "300px",
              borderRadius: "30px",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: "10px",
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                cursor: "pointer",
                fontWeight: "fontWeightRegular",
                marginTop: "10px",
                color: "text.secondary",
              }}
            >
              <p>Edit</p>
              <Image src={"/images/edit.svg"} width={15} height={15}></Image>
            </Box>
          </Box>
          <Box
            sx={{
              width: { lg: "35%", sm: "100%", xs: "100%" },
              height: { lg: "500px", sm: "500px", xs: "auto" },
              borderRadius: "30px",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              display: "flex",
              flexDirection: "column",
              padding: "20px 0 20px 60px",
            }}
          >
            {/* left content */}
            <RightTitle NameText={"Full name"} />
            <Box
              sx={{
                fontWeight: "fontWeightRegular",
              }}
            >
              <p>NGUYEN CONG KHANH</p>
            </Box>

            <RightTitle NameText={"Roll number"} />
            <Box
              sx={{
                fontWeight: "fontWeightRegular",
              }}
            >
              <p>SE130305</p>
            </Box>
            <RightTitle NameText={"Main major"} />
            <Box
              sx={{
                fontWeight: "fontWeightRegular",
              }}
            >
              <p>Digital Art & Design</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default profile;
