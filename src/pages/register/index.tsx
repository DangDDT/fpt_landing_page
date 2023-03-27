import React from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import("../../components/home/hero"));
const DynamicHomePopularCourse = dynamic(
  () => import("../../components/home/popular-courses")
);


const Register:NextPageWithLayout = () =>{
  return (
  <>
     <DynamicHomeHero />
      {/* <DynamicHomePopularCourse /> */}
  </>
  )
}
Register.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Register;
