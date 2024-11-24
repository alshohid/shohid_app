import FooterThree from "@/components/FooterThree/FooterThree";
import Header from "@/components/Header/Header";
import MailTwo from "@/components/MailTwo/MailTwo";
import ContactTwo from "@/components/ContactTwo/ContactTwo"
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import BlogThreeGrid from "@/components/BlogThreeGrid/BlogThreeGrid";
import React from "react";
import TopBar from "@/components/TopBar/TopBar";
export const metadata = {
  title:
    "Contact|| Contact || NextJS Template For It Solution & Business",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};


const page = async () => {

    return (
        <Layout>
        <TopBar />
        <Header />
        <PageHeader title="Our Contact" subTitle="Contact" />
        {/* <ContactTwo contact="page" />; */}
        <MailTwo />
        <FooterThree />
        </Layout>
    );
};

export default page;

