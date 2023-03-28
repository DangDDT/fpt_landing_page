import React from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";

const DynamicProfile = dynamic(
  () => import("../../components/profile/profile")
);

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <DynamicProfile />
    </>
  );
};
Profile.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Profile;
