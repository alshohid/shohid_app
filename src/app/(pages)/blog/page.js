
import FooterThree from "@/components/FooterThree/FooterThree";
import Header from "@/components/Header/Header";
import MailTwo from "@/components/MailTwo/MailTwo";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import BlogThreeGrid from "@/components/BlogThreeGrid/BlogThreeGrid"
import React from "react";
import TopBar from "@/components/TopBar/TopBar";
export const metadata = {
  title:
    "Blog Grid Left || Tolak || NextJS Template For It Solution & Business",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};
async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/user/allBlog`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const result = await response.json();

  return { allNewsBlog: result.data };
}

const page = async() => {
  const data = await getData()
  return (
    <Layout>
      <TopBar />
      <Header />
      <PageHeader title="Our Blog" subTitle="Blog List" blog={true} />
      <BlogThreeGrid carouselData={data.allNewsBlog} />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

export default page;
