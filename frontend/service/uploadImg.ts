export const uploadImg = async (url: string, file: any) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${url}/images`, {
    method: "POST",
    body: formData,
  });
  return res;
};
