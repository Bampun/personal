import React from 'react';
import Link from 'next/link';

export default function componentName(props: { value: string }) {
  return (
    <>
      <div className="secondary-btn">
        <Link href="#" className="w-fit block bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-full">
          {props.value}
        </Link>
      </div>
    </>
  );
}
