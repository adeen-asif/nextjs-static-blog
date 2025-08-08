import React from "react";
import "./blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "From Passion to Platform: My Blogging Journey",
      content:
        "Starting 'ByAdeen' wasn’t just about fashion it was about finding voice through visuals. Here’s my journey of building a blog that’s deeply personal yet universally inspiring.",
      image:
        "https://images.unsplash.com/photo-1640441710600-c2464f89f9a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2dnaW5nfGVufDB8MHwwfHx8MA%3D%3D",
    },

    {
      id: 2,
      title: "Building a Brand That Feels Like You",
      content:
        "Your online presence should feel as authentic as your real life. Here's how to create a brand identity that reflects your personality, vision, and voice effortlessly.",
      image:
        "https://plus.unsplash.com/premium_vector-1716902768122-a75d0226fd49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmclMjBhJTIwYnJhbmR8ZW58MHwwfDB8fHww",
    },
    {
      id: 3,
      title: "The Art of Color: Styling with Emotion",
      content:
        "Each color you wear speaks volumes. Discover how to express mood, boost confidence, and tell your story through color psychology in everyday looks.",
      image:
        "https://plus.unsplash.com/premium_vector-1712867689862-9fd6c3d1741f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMGFydCUyMG9mJTIwY29sb3IlMjBzdHlsaW5nfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Textures That Speak: Styling with Layers and Contrast",
      content:
        "Styling isn’t just about color it’s about feeling. Learn how to use textures like silk, linen, and denim to add depth and individuality to your everyday style.",
      image:
        "https://images.unsplash.com/photo-1542009708210-df3fb1850c51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R5bGluZ3xlbnwwfDB8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Effortless Elegance: The Rise of Quiet Luxury",
      content:
        "Forget the logos it's all about craftsmanship, clean silhouettes, and timeless design. Explore how quiet luxury is redefining fashion in 2025 with understated confidence.",
      image:
        "https://plus.unsplash.com/premium_vector-1734614641362-ca0f2875348e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="blog-container">
      <h1 className="blog-title">Welcome to ByAdeen Blog</h1>
      {blogPosts.map((post, index) => (
        <div
          key={post.id}
          className={`blog-post ${index % 2 === 0 ? "row-reverse" : ""}`}
        >
          <div className="blog-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
