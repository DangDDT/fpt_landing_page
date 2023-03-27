import React from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import("../../components/home/hero"));


const Program:NextPageWithLayout = () =>{
  return (
  <>
     <DynamicHomeHero />
      {/* <DynamicHomePopularCourse /> */}
  </>
  )
}
Program.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Program;
