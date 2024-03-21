"use client";

import Navbar from "../components/NavBar";
import FooterComponent from "../components/footer";
import styles from "../styles/general.module.css";

export default function aboutus() {
  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <h1 className={styles.h1}>About Us</h1>
          <h2>Discover Your True Colors with Colorista</h2>
          <p>
            Unlock a world of vibrant hues and unleash your creativity with
            Colorista - your ultimate destination for all things color-related.
          </p>
          <p>
            At Colorista, we believe that color is more than just a visual
            experience; it's an expression of emotion, personality, and style.
            Whether you're a seasoned artist seeking inspiration or a DIY
            enthusiast looking to add a pop of color to your world, we have
            everything you need to make your vision come to life.
          </p>
          <h2>Why Colorista?</h2>
          <p>
            • Unparalleled Selection: Dive into a kaleidoscope of colors with our
            extensive range of paints, pigments, dyes, and more. From bold
            primaries to subtle pastels, we have every shade under the sun to suit
            your every project. •Expert Guidance: Unsure where to begin? Our team
            of color specialists is here to guide you every step of the way. Get
            personalized recommendations, expert tips, and insider advice to help
            you find the perfect palette for your next masterpiece.
          </p>
          <p>
            • Quality You Can Trust: We source only the finest materials from trusted suppliers
            to ensure superior quality and performance. With Colorista, you can
            rest assured that your colors will stay true and vibrant for years to
            come.
          </p>
          <p>
            • Endless Inspiration: Dive into our curated collection of
            articles, tutorials, and creative projects for endless inspiration.
            Whether you're into painting, crafting, or home décor, you'll find
            plenty of ideas to fuel your imagination.
          </p>
          <h2>Join the Colorista Community</h2>
          <p>
            Become part of our vibrant community of color enthusiasts! Share your
            creations, connect with fellow artists, and be inspired by the endless
            possibilities of color. With Colorista, the journey is just as
            colorful as the destination.
          </p>
          <h2>Ready to Paint Your World?</h2>
          <p>
            Let your imagination run wild and discover the true beauty of your
            world with Colorista.
          </p>
        </div>
        <div className={styles.pageImg}>
          <img src="Mockup_.png" alt="" />
        </div>
      </div >

      <FooterComponent />
    </>
  );
}
