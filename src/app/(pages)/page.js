
import FeatureOne from "@/components/FeatureOne/FeatureOne";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MainSliderOne from "@/components/MainSliderOne/MainSliderOne";
import PojectOne from "@/components/ProjectOne/ProjectOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import TopBar from "@/components/TopBar/TopBar";



export const metadata = {
  title: "News blog",
  description: "News blog website using next js and prisma",
};


const page = () => {
  return (
    <Layout pageTitle="home">
      <TopBar />
      <Header />
      <MainSliderOne />
      <FeatureOne />
      <div className="py-5" />
      <div className="py-2" />
      <ServiceOne />
      <PojectOne />
      <div className="py-5" />
      <Footer />
    </Layout>
  );
}
export default page;
