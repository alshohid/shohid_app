import Image from "next/image";
import React from "react";
import bannerLayer from "@/assets/images/backgrounds/page-banner-layer.png";
import Link from "next/link";
  async function getData() {
    const blogimges = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/user/allImage`
    );
    const blogImg = await blogimges.json();
    return { allImage: blogImg.data };
  }

const PageHeader = async ({ title, subTitle, blog }) => {
  const data = await getData();
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: `url(${data?.allImage[0]?.blogImg})`,
        }}
      ></div>
      <div className="page-header__shape"></div>
      <div className="page-header__shape-two"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="page-header__content">
              <h2 className="page-header__title">{title}</h2>
              <ul className="tolak-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span>{subTitle}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div
              className="page-header__layer wow fadeInUp"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src={blog ? data?.allImage[0]?.blogImg:data?.allImage[0]?.aboutImg}
                width={600}
                height={600}
                alt="blog"
              />
              <div className="page-header__layer__shape"></div>
              <div
                className="page-header__layer__bg wow fadeInRight"
                data-aos="fade-left"
                data-aos-delay="200"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
