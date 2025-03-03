// import Image from "next/image";

import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="blue_container">
        <h1 className="heading">
          Find the best what you need <br /> And safe your time more
        </h1>
        <p className="sub-heading !max-heading-3xl">
        "Explore the best software collection tailored to your needs, enjoy easy access, and save more time for what truly matters!"
        </p>
        <SearchForm url={query}/>
      </section>
    </>
  );
}
