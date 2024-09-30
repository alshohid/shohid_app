import FooterThree from "@/components/FooterThree/FooterThree";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectTwo from "@/components/ProjectsTwo/ProjectsTwo";
import React from "react";

export const metadata = {
  title: "Project Page || Tolak || NextJS Template For It Solution & Business",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const projectPage = () => {
  return (
    <Layout >
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader title='Project Page' subTitle='Project' />
      <ProjectTwo />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

export default projectPage;
