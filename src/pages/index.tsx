import React from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";

const DynamicHomeHero = dynamic(() => import("../components/home/hero"));
const DynamicJoinNow = dynamic(() => import("../components/home/join-now"));
const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicJoinNow />
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
