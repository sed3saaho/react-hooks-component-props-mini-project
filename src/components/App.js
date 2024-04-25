import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App({ name, image, about, posts }) {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    <Header name={blogData.name} />
    <About image={blogData.image} about={blogData.about} />
    <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

function About({ image, about }) {
  return (
    <aside>
      <img
        src={image || "https://via.placeholder.com/215"}
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
}

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

function Article({ title, date, preview }) {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate || "January 1, 1970"}</small>
      <p>{preview}</p>
    </article>
  );
}


