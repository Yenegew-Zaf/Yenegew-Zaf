import Image from "next/image";
import Hero from "./_components/Hero";
type Props = {};

const Home = (props: Props) => {
  return (
    <main className="">
      <Hero />
      <Image
        fill
        src={`/images/hero-bg.jpg`}
        alt="Plant image"
        className="z-[-1] h-screen w-full"
      />
    </main>
  );
};

export default Home;
