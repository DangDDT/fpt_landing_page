import React, { FC, useRef } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Program } from "@/interfaces/program";
import Link from "next/link";
import { Container, Fade, Grid, Slide } from "@mui/material";

const myLoader = ({ src }: { src: string }) => {
  return src;
};

interface Props {
  item: Program;
}

const ProgramDetail: FC<Props> = ({ item }) => {
  const containerRef = useRef(null);
  return (
    <Box
      id={`program-detail-${item.id}`}
      sx={{
        pt: {
          xs: 6,
          md: 20,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: "background.default",
      }}
      height={"100vh"}
    >
      <Container maxWidth="xl">
        <Grid container columnGap={10}>
          <Fade
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Grid item lg={5} xs={12} justifyContent={"center"}>
              <Image
                style={{ borderRadius: "5%" }}
                height={650}
                width={600}
                loader={myLoader}
                src={item.imageUrl}
                objectFit={"cover"}
                quality={100}
                alt={`${item.programName}`}
              />
            </Grid>
          </Fade>
          <Grid item lg={6} xs={12}>
            <Box ref={containerRef}>
              <Slide
                direction="up"
                in={true}
                container={containerRef.current}
                style={{ transformOrigin: "0 0 0" }}
                {...(true ? { timeout: 600 } : {})}
              >
                <Typography
                  sx={{
                    fontSize: { lg: "60px", sm: "40px" },
                    color: "primary.main",
                    fontWeight: "bold",
                  }}
                >
                  {item.programName.toUpperCase()}
                </Typography>
              </Slide>
              <Slide
                direction="up"
                in={true}
                container={containerRef.current}
                style={{ transformOrigin: "0 0 0" }}
                {...(true ? { timeout: 700 } : {})}
              >
                <Typography
                  sx={{
                    color: "text.primary",
                    fontWeight: "500",
                    fontSize: { lg: "60px", sm: "60px" },
                  }}
                >
                  {item.date}
                </Typography>
              </Slide>
              <Box height={24}></Box>
              <Slide
                direction="up"
                in={true}
                container={containerRef.current}
                style={{ transformOrigin: "0 0 0" }}
                {...(true ? { timeout: 800 } : {})}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  esse alias, reprehenderit, iure fugiat dignissimos facilis
                  voluptates voluptatibus officiis quis voluptatum suscipit
                  obcaecati rem explicabo necessitatibus recusandae ut error
                  totam.
                </Typography>
              </Slide>
              <Box height={24}></Box>
              <Slide
                direction="up"
                in={true}
                container={containerRef.current}
                style={{ transformOrigin: "0 0 0" }}
                {...(true ? { timeout: 900 } : {})}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae quaerat temporibus repellendus dolor officia
                  reprehenderit rem similique excepturi ex eligendi reiciendis,
                  ab repellat fuga natus nemo velit rerum aut placeat. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Cum in hic
                  vero, quod doloribus voluptate rerum labore, necessitatibus
                  autem sequi aliquid ducimus commodi, maiores vitae excepturi
                  nisi reprehenderit. Perferendis, esse!
                </Typography>
              </Slide>
              <Box height={24}></Box>
              <Slide
                direction="up"
                in={true}
                container={containerRef.current}
                style={{ transformOrigin: "0 0 0" }}
                {...(true ? { timeout: 1000 } : {})}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae quaerat temporibus repellendus dolor officia
                  reprehenderit rem similique excepturi ex eligendi reiciendis,
                  ab repellat fuga natus nemo velit rerum aut placeat. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Cum in hic
                  vero, quod doloribus voluptate rerum labore, necessitatibus
                  autem sequi aliquid ducimus commodi, maiores vitae excepturi
                  nisi reprehenderit. Perferendis, esse!
                </Typography>
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default ProgramDetail;
