import React from 'react';

export default function OnlyHomePage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="font-bold text-center mb-6">Welcome to Horner's Corner!</h1>
      <p className=" text-gray-700 text-center">
        Here is where we will put our history, when I have written it!
      </p>
      {/* Copy Needed */}
      <p className=" text-gray-700 text-center">
        Maybe some history about how maple syrup is produced
      </p>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
