import FooterThree from "@/components/FooterThree/FooterThree";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import TopBar from "@/components/TopBar/TopBar";
export const metadata = {
  title:
    "Blog Grid Left || Tolak || NextJS Template For It Solution & Business",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
  return (
    <Layout>
      <TopBar/>
      <Header />
      <PageHeader blog={true} title="Our News" subTitle="News List Left Sidebar" />
      <BlogDetails/>
      <FooterThree />
    </Layout>
  );
};

export default page;
