import FooterThree from "@/components/FooterThree/FooterThree";
import Header from "@/components/Header/Header";
import MailTwo from "@/components/MailTwo/MailTwo";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import AllProject from "@/components/AllProject/AllProject";
import React from "react";
import TopBar from "@/components/TopBar/TopBar";
export const metadata = {
  title:
    "Project|| Project|| NextJS Template For It Solution & Business",
  description:
    "Project is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};
async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/user/allProject`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const result = await response.json();

  return { allProject: result.data };
}

const page = async () => {
  const data = await getData();
  return (
    <Layout>
      <TopBar />
      <Header />
      <PageHeader title="Our Project" subTitle="Project" />
      <AllProject carouselData={data.allProject} />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

export default page;
