import blogThreeData from "@/data/BlogThreeData";
import Image from "next/image";
import Link from "next/link";
import { FormattedDateTime } from "@/utill/FormattedDateTime";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// const { carouselData } = blogThreeData;

const BlogThreeGrid = ({ carouselData }) => {

  return (
    <section className="blog-three">
      <Container>
        <Row className="gutter-y-30">
          {carouselData?.length > 0 ? carouselData?.map(
            ({
              id,
              img1,
              img2,
              img3,
              totalComments,
              title,
              short_des,
              author,
              authorImage,
              designation,
              createdAt,
            }) => (
              <Col key={id} md={6} lg={4}>
                <div
                  className="blog-card-three wow fadeInUp"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="00ms"
                >
                  <div
                    className="blog-card-three__image"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={img1 ?? ""}
                      width={300}
                      height={300}
                      alt={title}
                      style={{ height: "auto" }}
                    />
                    <Image
                      src={img2 ?? ""}
                      width={300}
                      height={300}
                      alt={title}
                      style={{ height: "auto" }}
                    />
                    <div className="blog-card-three__date">
                      <div style={{ fontSize: "12px" }}>
                        {" "}
                        {FormattedDateTime(createdAt)}{" "}
                      </div>

                      {/* <div className="blog-card-three__date__year">{year}</div> */}
                    </div>
                    <Link
                      href={`/blog/${id}`}
                      className="blog-card-three__image__link"
                    >
                      <i className="icon-right-arrow"></i>
                      <span className="sr-only">{title}</span>
                    </Link>
                  </div>
                  <div className="blog-card-three__content">
                    <h3 className="blog-card-three__title">
                      <a href={`/blog/${id}`}>{title}</a>
                    </h3>
                    <p className="blog-card-three__text">{short_des}</p>
                    <div className="blog-card-three__meta">
                      <div className="blog-card-three__meta__author">
                        <Image
                          src={img3}
                          height={300}
                          width={300}
                          alt="tolak"
                        />
                        {designation}:<Link href={"#"}>{author}</Link>
                      </div>
                      <div className="blog-card-three__meta__comments">
                        <i className="icofont-speech-comments"></i>Comments (
                        {totalComments})
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            )
          ):<div style={{fontSize:"30px", color:"black"}}> No Records found</div>}
        </Row>
      </Container>
    </section>
  );
};

export default BlogThreeGrid;
