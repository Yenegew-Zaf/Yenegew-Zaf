import HeroBtn from "./Hero-Btn";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <div className="mx-auto max-w-3xl px-10">
        <h1
          className="mb-7 text-center text-5xl font-semibold tracking-wider text-green-50 lg:text-6xl"
          style={{ lineHeight: "150%" }}
        >
          <span className="text_primary">Plant</span> Seedling&apos;s Together
          Breath <span className="text_primary">Green</span> Forever
        </h1>

        <p
          className="text-left text-lg leading-relaxed text-green-50/70  md:text-xl"
          style={{ lineHeight: "150%" }}
        >
          You can play a vital role in the {`"`}Green Legacy {`"`} initiative no
          matter where you are. Join us in planting trees and witness the growth
          of your plant through our digital platform.
        </p>

        <HeroBtn />
      </div>
    </section>
  );
};

export default Hero;
