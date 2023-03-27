import React from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";

const DynamicHomeHero = dynamic(() => import("../../components/home/hero"));


const Profile:NextPageWithLayout = () =>{
  return (
  <>
     <DynamicHomeHero />
  </>
  )
}
Profile.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Profile;
