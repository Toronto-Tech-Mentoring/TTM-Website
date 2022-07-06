/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import PropTypes from 'prop-types';
import ClientSideRendering from '../utils/ClientRendering';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';

export default function MainLayout({ children }) {
  return (
    <ClientSideRendering>
      <NavBar />
      {children}
      <Footer />
    </ClientSideRendering>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
