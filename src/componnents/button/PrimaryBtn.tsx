import React from 'react';
import Link from 'next/link';

export default function componentName(props: { value: string }) {
  return (
    <>
      <div className="primary-btn">
        <Link href="#" className="w-fit block border hover:border-transparent hover:bg-secondary text-white font-bold py-2 px-6 rounded-full">
          {props.value}
        </Link>
      </div>
    </>
  );
}
