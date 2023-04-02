import React, { useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";
import { Hidden, styled } from "@mui/material";
import FadeInSection from "@/components/animations/fade-in-section";

const DynamicHomeHero = dynamic(() => import("../components/home/hero"));
const DynamicJoinNow = dynamic(() => import("../components/home/join-now"));
const DynamicReferences = dynamic(
  () => import("../components/home/references")
);
const DynamicReferencesInter = dynamic(
  () => import("../components/home/references-alter")
);

const Home: NextPageWithLayout = () => {
  return (
    <>
      <FadeInSection>
        <DynamicHomeHero />
      </FadeInSection>
      <FadeInSection>
        <DynamicJoinNow />
      </FadeInSection>
      {/* <FadeInSection>
        <DynamicReferences />
      </FadeInSection> */}
      <FadeInSection>
        <DynamicReferencesInter />
      </FadeInSection>
      {/* <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter /> */}
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
