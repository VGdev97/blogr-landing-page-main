import illustrationEditorDesktop from "../assets/illustration-editor-desktop.svg";

const Hero = () => {
  return (
    <main className="py-[80px] mb-[100px]">
      <h2 className="text-[34px] text-[#264057]  text-center font-semibold tracking-[0.6px] px-[20px] lg:px-0 ">
        Designed for the future
      </h2>
      <div className="px-[60px] xl:pl-[150px] xl:mt-[-50px]">
        <div className="flex flex-col-reverse xl:flex-row items-center xl:gap-[100px]">
          <div className="flex-1 mt-[50px] xl:mt-[120px] text-center md:text-left">
            <div>
              <h3 className="font-semibold text-[#264057] text-[26px] mb-5">
                Introducing an extensible editor
              </h3>
              <p className="text-[16px] leading-[28px]">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allws easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className="mt-[60px]">
              <h3 className="font-bold text-[#264057] text-[26px] mb-5">
                Robust content management
              </h3>
              <p className="text-[16px] leading-[28px]">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you're in full control.
              </p>
            </div>
          </div>
          <div className="flex-1 mt-[40px]">
            <img
              src={illustrationEditorDesktop}
              alt="illtustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
