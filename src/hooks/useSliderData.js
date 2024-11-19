import { useEffect, useState } from "react";

const useSliderData = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchNewsListSlider = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/user/news/type?type=slider`
        );
        const data = await response.json();
        const formattedSliderData = data.data.map((newsDataByCategory) => ({
          id: newsDataByCategory.id,
          bg: newsDataByCategory.img1,
          subTitle: newsDataByCategory.short_des,
          title: newsDataByCategory.title,
          text: newsDataByCategory.long_des,
          social: [
            {
              id: 1,
              icon: "faFacebookF",
              link: "https://facebook.com",
              name: "Facebook",
            },
            {
              id: 2,
              icon: "faPinterestP",
              link: "https://pinterest.com",
              name: "Pinterest",
            },
            {
              id: 3,
              icon: "faTwitter",
              link: "https://twitter.com",
              name: "Twitter",
            },
            {
              id: 4,
              icon: "faInstagram",
              link: "https://instagram.com",
              name: "Instagram",
            },
          ],
          floatingText: "News Blog",
        }));

        setSliderData(formattedSliderData);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchNewsListSlider();
  }, []);

  return sliderData;
};

export default useSliderData;
