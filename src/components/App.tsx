import React, { Fragment } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

interface IProps {
  children: React.ReactNode;
}

const App = ({ children }: IProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default App;
