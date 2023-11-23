import AddImage from "@components/components/AddImage";
import Images from "@components/components/Images";

export default async function Home() {
  const data = await (
    await fetch("http://localhost:3018/images", { cache: "no-store" })
  )?.json();

  return (
    <main>
      <AddImage />
      <Images data={data} />
    </main>
  );
}
