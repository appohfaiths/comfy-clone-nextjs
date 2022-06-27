import React from 'react';

function LayoutHero({ pageName }) {
  return (
    <div className="h-[20vh] grid place-items-center justify-start bg-slate-100">
      <h1 className="mx-20 text-[rgb(97 125 152)]">Home / {pageName}</h1>
    </div>
  );
}

export default LayoutHero;
