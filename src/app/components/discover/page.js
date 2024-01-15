import React from 'react';
import Image from 'next/image';
import "@/app/components/discover/discover.css"

const Discover = () => {
  const imageSources = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
    "/img9.png",
    "/img10.png",
    "/img11.png",
  ];

  return (
    <div className="container">
      <div className="content">
        <div className="text">
        <Image src="/choice.png" alt="Choice" width={80} height={80} />
            <h1>Editor's choice</h1>
        </div>
      </div>
      <div className="text-content">
        <h1>The Best of Best</h1>
        <p>
          Our editors are always on the lookout for jaw-dropping content for
          you to discover and stay inspired. Check back weekly to see what’s
          new.
        </p>
      </div>
      <div className="images">
        {imageSources.map((imageSrc, index) => (
          <div key={index} className="image-item">
            <img src={imageSrc} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="content1">
        <div className="text">
        <Image src="/portfolio.png" alt="Portfolio" width={80} height={80} />
          <span>
            <h1>Portfolio</h1>
          </span>
        </div>
      </div>
      <div className="text-content">
        <h1>Designed and Build for Photographers</h1>
        <p>
          Create your own high-quality website in minutes. Portfolios allow
          you to share your work externally so you can build your brand and
          market yourself as a professional photographer.
        </p>
        <p>
          Over the recent months, we’ve been presenting various showcases of
          photography – while many readers hated the showcases, most readers
          found them inspirational and perfect for a lousy workday’s morning.
          However, what we should have done in the inspirational posts is not
          just provide you with some inspiration for your work, but also
          present useful photography techniques and photo tutorials that can
          help you achieve optimal pictures for your designs. And as requested
          by many of you, now it’s time to correct our mistake.
        </p>
        
      </div>
      <a className="button" href="https://500px.com">
          Get started
        </a>
      
    </div>
  );
};

export default Discover;
