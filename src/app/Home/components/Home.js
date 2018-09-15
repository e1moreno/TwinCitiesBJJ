import React, { Fragment } from 'react';
import { TCBJJHelmet } from 'app/TCBJJHelmet';

import { Banner } from 'app/Banner';

const Home = () => (
  <Fragment>
    <TCBJJHelmet>
      <title>Home</title>
    </TCBJJHelmet>
    <Fragment>
      <Banner />
      <main>
        <div style={{ paddingTop: '100px', color: 'white' }}>
          TWIN CITIES BJJJ
        </div>
      </main>
    </Fragment>
  </Fragment>
);

export default Home;
