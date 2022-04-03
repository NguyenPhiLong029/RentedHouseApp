import React from 'react';
import Card from 'src/components/Card';
import Filter from 'src/components/Filter';

const Home: React.FC = () => {
  return (
    <>
      <img
        src="https://ik.imagekit.io/tvlk/image/imageResource/2021/12/01/1638341428791-6a1768cf58f22fb6a4329ff2e5477a39.jpeg?tr=q-75"
        className="img-fluid"
      ></img>
      <div className="container">
        <div className="row">
          <div className="col-3 mt-4">
            <Filter />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
