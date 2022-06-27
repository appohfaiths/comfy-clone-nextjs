import React from 'react';
import Head from 'next/head';
import LayoutNavbar from './layoutNavbar';
import LayoutHero from './layoutHero';

export default function PrimaryLayout({ children }) {
  return (
    <>
      <LayoutNavbar />
      <LayoutHero pageName={'Products'} />
      <main>{children}</main>
    </>
  );
}
