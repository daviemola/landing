import React from "react";

export default function GridCards() {
  return (
    <div className="max-w-6xl mx-auto mb-24 h-[80vh] flex items-center">
      <div className="relative overflow-hidden">
        <h1 className="text-indigo-600 text-center text-6xl mb-12 uppercase font-bold">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <p className="mb-4 sm:text-4xl text-xl text-indigo-600">
            Website development
          </p>
          <p className="mb-4 sm:text-4xl text-xl text-indigo-600">
            SEO website services
          </p>
          <p className="mb-4 sm:text-4xl text-xl text-indigo-600">
            Online blog development
          </p>
          <p className="mb-4 sm:text-4xl text-xl text-indigo-600">
            Social media management
          </p>
          <p className="mb-4 sm:text-4xl text-xl text-indigo-600">
            Social media marketing
          </p>
          <p className="mb-4 sm:text-4xl text-xl text-indigo-600">
            Content management and creation
          </p>
          <p className="mb-4 sm:text-4xl text-xl text-indigo-600">
            Google and social media marketing
          </p>
        </div>
      </div>
    </div>
  );
}
