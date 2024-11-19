'use client'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { blogDetailsData } from '@/data/BlogDetailsData';
import BlogSidebar from '../BlogSideBar/BlogSideBar';
import { usePathname ,useParams} from 'next/navigation';
import { FormattedDateTime } from "@/utill/FormattedDateTime";
const {
    image,
    meta: { category: { href: categoryHref, name: categoryText }, date: { href: dateHref, author: dateText, date: blogDate } },
    paragraphs,
    features,
    finalParagraph,
    blockquote: { text: blockquoteText, author: blockquoteAuthor, },
    comments,
    sidebarData

} = blogDetailsData
const { categories, tags, recentPosts } = sidebarData;
 
const BlogDetails = () => {

    const pathname = usePathname();
    const id = pathname.split("/").pop();
    const [blog, setBlog] = useState({});
    const [commentList, setCommentList] = useState([]);
    const [formData, setFormData] = useState({ descriptions: "" });
    const [error, setError] = useState(null);
    const [mounted, setMounted] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/dashboard/comments/manage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postID: parseInt(id),
                descriptions: formData.descriptions,
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to submit comment');
        }
        const result = await response.json();
        setFormData({ descriptions: '' });
        setCommentList(prevComments => [...prevComments, result.data]);
    } catch (error) {
        console.error('Error submitting comment:', error);
    }
};
    const fetchBlogDetails = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_HOST}/api/user/news/details?id=${id}`
            );
            if (!res.ok) throw new Error("Failed to fetch blog details");
            const data = await res.json();
            setBlog(data.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchComments = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_HOST}/api/dashboard/comments/newsComment?postID=${id}`
            );
            if (!res.ok) throw new Error("Failed to fetch comments");

            const data = await res.json();
            setCommentList((prevComments) => [...prevComments, ...data.data.comments]);
        } catch (err) {
            setError(err.message);
        }
    };


    useEffect(() => {
        if (!id) return;
        fetchBlogDetails();
        fetchComments();
    }, [id]);
    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }

    const {
        title,
        short_des,
        img1,
        img2,
        img3,
        img4,
        keywords,
        long_des,
        type,
        catID,
        createdAt,
        updatedAt,
        // category: { name: categoryName },
    } = blog;

    return (
        <section className="blog-details">
            <Container>
                <Row className={`${pathname === "/blog-details" ? "justify-content-center" : "gutter-y-60"}`}>
                    {
                        <Col lg={4}>
                            <BlogSidebar sidebarData={sidebarData} />
                        </Col>
                    }

                    <Col lg={8}>
                        <div className="blog-details__content">
                            <div className="blog-details__image">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={img1}
                                    alt='tolak'

                                />
                            </div>
                            <div className="blog-details__meta">
                                <div className="blog-details__meta__cats">
                                    <Link href={categoryHref}>
                                        {type}
                                    </Link>
                                </div>
                                <div className="blog-details__meta__date">
                                    <Link href={dateHref}>
                                        {dateText}
                                    </Link> / {FormattedDateTime(createdAt)}
                                </div>
                            </div>
                            <h3 className="blog-details__title">
                                {title}
                            </h3>
                            <p  className="blog-details__text">
                                    {long_des}
                                </p>
                            {/* {paragraphs.map((para, index) => (
                                <p key={index} className="blog-details__text">
                                    {para}
                                </p>
                            ))} */}
                            <Row className="gutter-y-30">
                                {features.map((feature, index) => (
                                    <Col md={6} key={index}>
                                        <div className="blog-details__item">
                                            <div className="blog-details__item__icon">
                                                <span className={feature.icon}></span>
                                            </div>
                                            <h4 className="blog-details__item__title">
                                                {feature.title}
                                            </h4>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <p className="blog-details__text">
                                {finalParagraph}
                            </p>
                            <blockquote className="blog-details__blockquote">
                                <p className="blog-details__blockquote__text">
                                    {blockquoteText}
                                </p>
                                <div className="blog-details__blockquote__meta">
                                    <Image
                                        src={blockquoteAuthor.image}
                                        alt="tolak"

                                    />
                                    <h5 className="blog-details__blockquote__meta__name">
                                        {blockquoteAuthor.name} - <span>{blockquoteAuthor.designation}</span>
                                    </h5>
                                    <div className="blog-details__blockquote__meta__social">
                                        {blockquoteAuthor.social.map((link, index) => (
                                            <Link key={index} href={link.href}>
                                                <i className={link.icon} aria-hidden="true"></i>
                                                <span className="sr-only">{link.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                        <div className="comments-one">
                            <h3 className="comments-one__title">
                                Comments ({commentList?.length})
                            </h3>
                            <ul className="list-unstyled comments-one__list">
                                {commentList?.map((comment, index) => (
                                    <li className="comments-one__card" key={index}>
                                        <div className="comments-one__card__image">
                                            <Image
                                                src={'/profile.png'}
                                                alt='profileImage'
                                                width={200}
                                                height={200}
                                                style={{height:"50px",width:"50px"}}
                                            />
                                        </div>
                                        <div className="comments-one__card__content">
                                            <h3 className="comments-one__card__title">
                                                {comment?.users?.firstName +" "+ comment?.users?.lastName}
                                            </h3>
                                            <p className="comments-one__card__text">
                                                {comment?.descriptions}
                                            </p>
                                            <div className="comments-one__card__meta">
                                                {FormattedDateTime(comment?.createdAt)} <Link href="#" className="comments-one__card__reply">Reply</Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="comments-form">
                            <h3 className="comments-form__title">Leave a comment</h3>
                            <form onSubmit={handleSubmit} className="comments-form__form contact-form-validated form-one">
                                <div className="form-one__group">
                                    <div className="form-one__control form-one__control--full">
                                        <textarea onChange={handleChange} value={formData?.descriptions} name="descriptions" placeholder="Write  a message"></textarea>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <button type="submit" className="tolak-btn"><b>Submit Comment</b><span></span></button>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </Col>
                    {
                        // pathname === "/blog-details-right" && <Col lg={4}>
                        //     <BlogSidebar sidebarData={sidebarData} />
                        // </Col>
                    }
                </Row>
            </Container>
        </section >
    );
};

export default BlogDetails;
