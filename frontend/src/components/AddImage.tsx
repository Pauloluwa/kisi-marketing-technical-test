"use client";
import { useRef, useState } from "react";
import { css } from "../../styled-system/css";
import { uploadImg } from "../../service/uploadImg";

const AddImage = () => {
  const inputRef = useRef<any>(null);
  const [_, setFile] = useState(null);

  const handleBtnClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleInputChange = async (e: any) => {
    setFile(e.target.files[0]);
    if (e.target.files[0] !== undefined) {
      try {
        const res = await uploadImg(e.target.files[0]);
        res.status === 201 && window.location.reload();
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className={btnContainerStyle}>
      <button className={btnStyle} onClick={handleBtnClick}>
        Add Image
      </button>
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default AddImage;

const btnContainerStyle = css({
  padding: "50px",
  position: "relative",
});

const btnStyle = css({
  zIndex: 5,
  width: "150px",
  height: "50px",
  rounded: "4px",
  bg: "#4A52FF",
  position: "fixed",
  top: "20px",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  _after: {
    content: "''",
    width: "100%",
    height: "0",
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
    },
  },
});
