import Image from "next/image";
import { css } from "../../styled-system/css";

const Card = ({
  imgUrl,
  title,
  description,
}: {
  imgUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={card}>
      <p className={cardTitle}>{title}</p>
      <p className={`${cardDescription} description`}>{description}</p>
      <Image
        src={`${process.env.BACKEND_API_URL}/images/${imgUrl}`}
        alt=""
        width={300}
        height={300}
        className={cardImg}
      />
    </div>
  );
};

export default Card;

const card = css({
  width: "100%",
  height: "100%",
  rounded: "4px",
  position: "relative",
  color: "#FFFFFF",
  _after: {
    content: "''",
    width: "100%",
    height: "100%",
    bgColor: "hsla(0, 100%, 0%, 0.2)",
    position: "absolute",
    top: 0,
    left: 0,
  },
  _hover: {
    _after: {
      content: "''",
      width: "100%",
      height: "100%",
      bg: "#4A52FF",

      transition: "all 0.3s ease",
    },
    "&> .description": {
      display: "block",
    },
  },
});

const cardTitle = css({
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "5px",
  textAlign: "center",
  position: "absolute",
  top: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  zIndex: 3,
});

const cardImg = css({
  width: "100%",
  height: "100%",
  rounded: "inherit",
  objectFit: "cover",
});

const cardDescription = css({
  fontSize: "12px",
  textAlign: "center",
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  zIndex: 3,
  display: "none",
});
