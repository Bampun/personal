import React from 'react';
import Link from 'next/link';

export default function componentName(props: { value: string; link: any }) {
  return (
    <>
      <div className="secondary-btn">
        <Link href={props.link} className="w-fit block bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-full" target="_blank" rel="noopener noreferrer">
          {props.value}
        </Link>
      </div>
    </>
  );
}
