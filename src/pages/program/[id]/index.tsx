import React from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { data } from "@/components/program/program.data";
const DynamicProgramDetail = dynamic(
  () => import("../../../components/program/detail/program-detail")
);

const ProgramDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const item = data.find((e) => e.id == id);
  return <>{item && <DynamicProgramDetail item={item} />}</>;
};
ProgramDetail.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ProgramDetail;
