const AboutCard = () => {
  return (
    <section className=" ">
      <div className="md:flex md:items-center ">
        <div className="w-full md:w-3/5 ">
          <h1 className="text-4xl ">Hello,</h1>
          <h1 className="text-8xl font-bold  font-titleFont mt-6">
            I'm <span className="text-green-600">Faisal</span>
          </h1>
          <h1 className="text-4xl text-teal-600 mb-6 mt-2">Web Developer</h1>
          <p className="md:text-xl text-md mr-5">
            I am a dedicated and creative front-end React developer with a
            strong passion for crafting seamless and intuitive user experiences.
            With 2 of hands-on experience in web development, I specialize in
            leveraging the power of React to build responsive and dynamic
            applications. Welcome to my corner of the internet. I&#39;m glad
            your&#39;re here.
          </p>
        </div>
        <div className="hidden md:block md:w-2/5">
          <img
            className="h-[600px] rounded-lg "
            src="/coding2.png"
            alt="coding image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
