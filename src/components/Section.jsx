import mobilePhones from "../assets/illustration-phones.svg";

const Section = () => {
  return (
    <article className="relative min-h-[800px] md:min-h-[450px] mt-[30px]">
      {/* Background Section */}
      <div className="h-full rounded-bl-[120px] px-[50px] xl:px-[150px] absolute  flex flex-col md:flex-row items-center justify-center section-mobile md:section">
        <div className="flex-1 relative z-10 ">
          <img src={mobilePhones} alt="mobile phones" className=" w-full " />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-center text-[38px] xl:text-[40px] leading-[58px] mb-[20px]">
            State of the Art Infrastructure
          </h3>
          <p className="text-[#e0e3f6] text-center text-[17px] leading-[30px]">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Section;
