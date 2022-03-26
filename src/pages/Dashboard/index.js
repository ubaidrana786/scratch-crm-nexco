import * as React from 'react';
import { AdminTable } from './AdminTable';

import CardGrid from './CardGrid';

export default function Dashboard() {
  return (
    <div style={{ margin: " 20px 100px 0px 300px",}}>
      <CardGrid/>
      <AdminTable/>
     
    </div>
  );
}
