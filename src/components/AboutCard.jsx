const AboutCard = () => {
  return (
    <section className=" ">
      <div className="flex items-center ">
        <div className="w-3/5 ">
          <h1 className="text-4xl ">Hello,</h1>
          <h1 className="text-6xl font-bold text-green-600 font-titleFont">
            I'm Faisal
          </h1>
          <p className="text-lg mr-5">
            I am a dedicated and creative front-end React developer with a
            strong passion for crafting seamless and intuitive user experiences.
            With 2 of hands-on experience in web development, I specialize in
            leveraging the power of React to build responsive and dynamic
            applications.
          </p>
        </div>
        <div className="w-2/5">
          <img
            className="h-[600px] rounded-lg "
            src="/coding.jpg"
            alt="coding image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
