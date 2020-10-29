import React, { Fragment } from 'react';

import { PageTitle } from '../layout-components';

import DashboardDefaultSection1 from '../layout-components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../layout-components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../layout-components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../layout-components/DashboardDefault/DashboardDefaultSection4';
export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Dashboard"
        titleDescription="CollabR Dashboard"
      />
      <DashboardDefaultSection3 />
      <DashboardDefaultSection2 />
      
    </Fragment>
  );
}
