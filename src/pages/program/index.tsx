import React from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicProgramList = dynamic(() => import("../../components/program/program-list"));


const Program:NextPageWithLayout = () =>{
  return (
  <>
     <DynamicProgramList />
  </>
  )
}
Program.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Program;
