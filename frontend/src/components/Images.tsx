import { css } from "../../styled-system/css";
import { groupObjectsEvenly } from "../../utils/helpers";
import Card from "./Card";

interface IData {
  image: string;
  article: { title: string; description: string };
}

const Images = ({ data }: { data: IData[] }) => {
  // convert array of objects to array of arrays of objects with just 4 length
  const colunmData = groupObjectsEvenly(data);

  return (
    <div className={wrapperStyle}>
      {colunmData.map((item: any[], idx: number) => (
        <div key={idx} className={cardItem}>
          {item.map((el, id) => (
            <div className={cardImg} key={id}>
              <Card
                key={idx}
                imgUrl={el.image}
                title={el.article.title}
                description={el.article.description}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Images;

const wrapperStyle = css({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
});

const cardItem = css({
  flex: { base: "100%", md: "50%", lg: "25%" },
  maxWidth: { base: "100%", md: "50%", lg: "25%" },
  height: "fit-content",
  padding: "0 4px",
  margin: "10px 0",
});

const cardImg = css({
  marginTop: "8px",
  verticalAlign: "middle",
  width: "100%",
});
