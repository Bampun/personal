import About from './About';
import PrimaryBtn from '../componnents/button/PrimaryBtn';
import Experience from '../componnents/experience/Experience';
import Work from '../componnents/work/Work';
import Contact from './Contact';
import Store from '../componnents/store/Store';

export default function Home() {
  const wow = () => {
    alert('Thank you for click me');
  };
  return (
    <>
      <section className="banner-wrapper bg-black h-full py-28 relative">
        <div className="container relative z-50">
          <div className="w-3/5 lg:w-ful md:w-full">
            <span className="text-white text-xl mb-4 md:text-md">Hi, My name is</span>
            <h2 className="text-7xl font-bold text-white mb-5 md:text-4xl" onClick={wow}>
              Hello Nepal.
            </h2>
            <h3 className="text-4xl font-bold text-white mb-6 md:text-xl">I build things for the web.</h3>
            <p className="font-normal text-white md:text-xl mb-8">Highly motivated and very passionate Full Stack Developer with three years of experience in Typescript, React js, Next js, Firebase, Tailwind CSS, Material UI, Node js, Express js, MongoDB</p>
            <PrimaryBtn value="Check my Projects" />
          </div>
        </div>
      </section>
      <About />
      <Experience />
      <Work />
      <Contact />
      <Store />
    </>
  );
}
