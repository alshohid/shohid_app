import FooterThree from "@/components/FooterThree/FooterThree";
import Header from "@/components/Header/Header";
import MailTwo from "@/components/MailTwo/MailTwo";
import ContactTwo from "@/components/ContactTwo/ContactTwo";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import AboutThree from "@/components/AboutThree/AboutThree";
import React from "react";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: "About|| About || NextJS Template For It Solution & Business",
  description:
    "About is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = async () => {
  return (
    <Layout>
      <TopBar />
      <Header />
      <PageHeader title="About" subTitle="About" />
      {/* <AboutThree/> */}
      {/* <MailTwo />
      <FooterThree /> */}
    </Layout>
  );
};

export default page;
