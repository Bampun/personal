import Link from 'next/link';

export default function Edata({ works }: any) {
  return (
    <div className="work-body relative grid grid-cols-12 items-center gap-3 group flex-col-reverse mb-10">
      <div className="relative col-span-7">
        <Link href={works.link}>
          <div className="h-[350px] relative rounded-xl overflow-hidden">
            <span>
              <img src={works.image} alt="Profile" />
            </span>
          </div>
        </Link>
      </div>
      <div className="sm:col-span-12 col-span-5 text-right absolute sm:inherent left-[50%] sm:left-auto">
        <div>
          <p className="text-primary text-lg mb-5">{works.postType}</p>
          <h2 className="text-3xl font-medium mb-5">{works.title}</h2>
          <div className="y-6 p-6 bg-primary text-slate-300 shadow-xl rounded-xl mb-5">
            <p className="font-normal text-white md:text-xl">{works.info}</p>
          </div>
          <div className=" text-black">
            <span>{works.categories}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
