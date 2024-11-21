import blogThreeData from "@/data/BlogThreeData";
import Image from "next/image";
import Link from "next/link";
import { FormattedDateTime } from "@/utill/FormattedDateTime";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const  AllProject = ({ carouselData }) => {
  return (
    <section className="blog-three">
      <Container>
        <Row className="gutter-y-30">
          {carouselData?.length > 0 ? (
            carouselData.map(
              ({ id, img, proj_title, proj_des, live_link, createdAt }) => (
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
                        src={img ?? ""}
                        width={300}
                        height={300}
                        alt={proj_title}
                        style={{ height: "auto" }}
                      />
                      <Image
                        src={img ?? ""}
                        width={300}
                        height={300}
                        alt={proj_title}
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
                        href={live_link}
                        className="blog-card-three__image__link"
                      >
                        <i className="icon-right-arrow"></i>
                        <span className="sr-only">{proj_title}</span>
                      </Link>
                    </div>
                    <div className="blog-card-three__content">
                      <h3 className="blog-card-three__title">
                        <a href={live_link}>{proj_title}</a>
                      </h3>
                      <p className="blog-card-three__text">{proj_des}</p>
                      <div className="blog-card-three__meta">
                        <div className="blog-card-three__meta__author">
                          <Image
                            src={img}
                            height={300}
                            width={300}
                            alt="tolak"
                          />
                        </div>
                        <div className="blog-card-three__meta__comments">
                          <i className="icofont-speech-comments"></i>Language (
                          {})
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            )
          ) : (
            <div style={{ fontSize: "30px", color: "black" }}>
              {" "}
              No Records found
            </div>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default  AllProject;
