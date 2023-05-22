import React from 'react'

const SponsorCard = ({ sponsor }) => {

  console.log(sponsor);
  return (
      <div className="border border-gray-300 rounded-t-lg shadow border-1 w-[250px] h-[250px]">
        <h2> {sponsor.title} </h2>
        <p> {sponsor.adet} </p>
      </div>
  );
};

export default SponsorCard