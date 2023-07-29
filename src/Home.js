import React from 'react';                                                
import Header from './Container/Header';
import Table from './Container/Table';
import Card from './Container/Card';
import Filter from './Container/Filter';

const Home = () => {
  return (
    <div>
      <Header/>
      <Table/>
      <Filter/>
      <Card/>
    </div>
  )
}
export default Home;