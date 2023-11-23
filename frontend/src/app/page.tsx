import AddImage from "@components/components/AddImage";
import Images from "@components/components/Images";

export default async function Home() {
  const data = await (
    await fetch(`${process.env.BACKEND_API_URL}/images`, { cache: "no-store" })
  )?.json();

  return (
    <main>
      <AddImage />
      <Images data={data} />
    </main>
  );
}
