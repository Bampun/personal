import React from 'react';
import Wdata from './Wdata';

export default function Card({ data }: any) {
  return (
    <>
      <section className="work-wrapper py-20">
        <div className="container">
          <div>
            <h2 className="text-4xl font-medium mb-10">Some Things I’ve Built</h2>
          </div>
          <div className="work grid grid-cols-12 gap-6 gap-y-6">
            {data.map((works: any) => (
              <Wdata key={works.id} works={works} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
