import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/components/index/index.css';

const BlogPost = ({ post }) => (
  <div className="blog-post">
    <h1>{post.title}</h1>
    <p style={{ padding: '5px' }}>Posted on {post.date}</p>
    <img src={post.image} alt={post.title} style={{ maxWidth: '100px', height: 'auto', display: 'block', margin: '0 auto' }} />
    <p style={{ padding: '10px' }}>{post.content}</p>
    <Link href={post.url}>Read More</Link>
  </div>
);

const Index = () => {
  const blogPosts = [
    {
      title: "Grow As a Photographer",
      date: "January 15, 2023",
      content: "Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.",
      image: "/growth.png",
      url: "https://example.com/post1",
    },
    {
      title: "Build your career",
      date: "February 10, 2023",
      content: "Market yourself as a professional photographer. Show that you’re available for hire on your Profile and get discovered in Search results, showcase your articles, presents, videos, and more with Resources, and create a Portfolio website to showcase your work.",
      image: "/build.png",
      url: "https://example.com/post2",
    },
    {
      title: "See how you're performing",
      date: "March 20, 2023",
      content: "With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.",
      image: "/graph.png",
      url: "https://example.com/post2",
    },
  ];

  return (
    <div>
      <header>
        <h1>My Blog</h1>
      </header>
      <nav>
    <ul>
      <div className="header-social">
        <Link href="#" passHref>
            <Image src="/home.png" alt="Home" width={40} height={40} />
        </Link>
        <Link href="/components/discover" passHref>          
            <Image src="/idea.png" alt="Discover" width={40} height={40} />
        </Link>
      </div>
    </ul>
    <ul>
      <button style={{ backgroundColor: 'rgb(179, 171, 171)', borderRadius: '5px', borderColor: 'beige' }} id="add-blog-button">
        Add Blogs
      </button>
    </ul>
  </nav>
      <main>
        <h1>What makes us Different</h1>
        <div className="content" id="blog-content">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </div>
        {/* Other main content */}
      </main>
      <footer>
    <div className="footer-social">
      <Link href="https://www.instagram.com" passHref>
          <Image src="/insta.png" alt="Instagram" width={40} height={40} />
      </Link>
      <Link href="https://www.twitter.com" passHref>
          <Image src="/twitter.png" alt="Twitter" width={40} height={40} />
      </Link>
    </div>
    <div>
      &nbsp;CopyRight 2023 @ My Blog
    </div>
  </footer>
    </div>
  );
};

export default Index;


