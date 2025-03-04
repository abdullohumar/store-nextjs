// import Image from "next/image";

import ProjectCard from "@/components/ProjectCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt : new Date(),
    views: 50,
    author: {_id :1, name: 'ngUmar' },
    _id : 1,
    description: 'This is the description',
    image: 'https://www.shutterstock.com/image-vector/cute-modern-robot-waving-hand-600nw-2457116609.jpg',
    category: 'Robots',
    title: 'We are Roboto'
  }];
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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : 'All Products'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: ProjectCardType) => (
            <ProjectCard key={post?._id} post={post}/>
          ))
        ) : (
          <p className="no-results">Project is not available, please contact admin</p>
        )}
        </ul>
      </section>
    </>
  );
}
