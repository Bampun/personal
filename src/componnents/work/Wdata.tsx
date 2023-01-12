import Link from 'next/link';

export default function Edata({ works }: any) {
  return (
    <div className="work-body md:col-span-12 lg:col-span-6 col-span-4 bg-primary rounded-xl p-6 group">
      <div className="work-inner">
        <Link href={works.link}>
          <div className="h-[220px] relative rounded-xl overflow-hidden w-full">
            <span>
              <img className="rounded-xl" src={works.image} alt="Profile" />
            </span>
          </div>
        </Link>
      </div>
      <div className="work-inner">
        <div className="mt-3">
          <p className="text-white text-md mb-3">{works.postType}</p>
          <h2 className="text-2xl font-medium mb-3 text-white">{works.title}</h2>
          <div className="mb-3">
            <p className="font-normal text-white md:text-sm">{works.info}</p>
          </div>
          <div className=" text-white">
            <span>{works.categories}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
