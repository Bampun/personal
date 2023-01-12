import React from 'react';
import Edata from './Edata';

export default function Card({ data }: any) {
  return (
    <>
      <section className="experience-wrapper py-20 bg-background" id="experence">
        <div className="container">
          <div>
            <h2 className="text-4xl font-medium mb-12">Where I have Worked Experience?</h2>
          </div>
          {data.map((experiences: any) => (
            <Edata key={experiences.id} experiences={experiences} />
          ))}
        </div>
      </section>
    </>
  );
}
