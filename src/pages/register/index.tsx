import React from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicRegister = dynamic(
  () => import("../../components/register/register")
);

const Register: NextPageWithLayout = () => {
  return (
    <>
      <DynamicRegister />
    </>
  );
};
Register.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Register;
