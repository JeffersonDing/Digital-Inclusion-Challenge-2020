import React, { Fragment } from 'react';

import { Grid, LinearProgress, Card } from '@material-ui/core';

export default function LivePreviewExample(props) {
  return (
    <Fragment>
      <Card className="p-3 mb-4">
        <div className="align-box-row">
          <div className="text-first font-size-xl font-weight-bold pr-2">
            {props.data.percent}
          </div>
          <div className="flex-grow-1">
            <LinearProgress
              className="progress-sm"
              color="primary"
              value={55}
            />
          </div>
        </div>
        <div className="text-black-50 pt-2">{props.data.name}</div>
      </Card>
    </Fragment>
  );
}
