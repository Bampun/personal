import Link from 'next/link';

export default function Edata({ experiences }: any) {
  return (
    <div className="experience-card box-shadow flex md:block items-center rounded-md bg-white overflow-hidden mb-6">
      <div className="w-1/3 md:w-full flex items-center justify-center bg-primary relative p-8 h-60">
        <div className="experience-card-inner">
          <h4 className="text-md font-medium text-center text-white"> {experiences.date}</h4>
          <h3 className="text-2xl font-medium text-center text-white mt-3">
            <Link href={experiences.link}> {experiences.company}</Link>
          </h3>
        </div>
      </div>
      <div className="w-2/3 p-8 h-60 md:h-auto md:w-full">
        <h3 className="text-2xl font-medium mb-5"> {experiences.title}</h3>
        <p className="font-normal text-black md:text-xl mb-6">{experiences.info}</p>
      </div>
    </div>
  );
}
