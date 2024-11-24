"use client";

import React, { useEffect, useState, Suspense } from "react";
import FooterThree from "@/components/FooterThree/FooterThree";
import Header from "@/components/Header/Header";
import MailTwo from "@/components/MailTwo/MailTwo";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import BlogThreeGrid from "@/components/BlogThreeGrid/BlogThreeGrid";
import TopBar from "@/components/TopBar/TopBar";
import { useSearchParams } from "next/navigation";

const BlogPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useSearchParams();
  const keywords = params.get("keywords") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/user/news/search?keywords=${keywords}`,
          { method: "GET", cache: "no-store" }
        );
        const result = await response.json();
        setData(result?.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keywords]);

  return (
    <Layout>
      <TopBar />
      <Header />
      <PageHeader title="Our Blog" subTitle="Blog List" />
      <BlogThreeGrid carouselData={data} />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BlogPage />
  </Suspense>
);

export default Page;
