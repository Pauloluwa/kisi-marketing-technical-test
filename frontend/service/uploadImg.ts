export const uploadImg = async (file: any) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("http://localhost:3018/images", {
    method: "POST",
    body: formData,
  });
  return res;
};
