export default function About() {
  return (
    <section id="About" className="flex flex-col items-center w-full h-fit  bg-pink-100">
      <div className="mt-36">
        <h1 className="ml-24 text-pink-600 text-5xl  font-russo mt-2">
          PINK DRAGONS
        </h1>
        <p className="flex justify-between w-6/12 ml-24 mt-5 text-2xl">
          is a competitive E-Sports team built on teamwork, strategy, and
          passion for the game. We aim to climb the ranks and leave a mark in
          the esports community. Whether it's smashing through the
          competition or pulling off epic comebacks, we're here to play hard and
          have fun. Our Goal To rise through the ranks and compete at the
          highest level. You can adjust details based on the personality and
          aspirations of your team!
        </p>
        <img src="logo.svg" alt="" className="mt-14 z-30" />
      </div>
    </section>
  );
}
