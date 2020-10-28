import React, { Fragment } from 'react';

import { Typography } from '@material-ui/core';

import Expansionpanel from '@material-ui/core/Expansionpanel';
import ExpansionpanelDetails from '@material-ui/core/ExpansionpanelDetails';
import ExpansionpanelSummary from '@material-ui/core/ExpansionpanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function LivePreviewExample() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Fragment>
      <Expansionpanel
        expanded={expanded === '(panel)1'}
        onChange={handleChange('(panel)1')}>
        <ExpansionpanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="(panel)1bh-content"
          id="(panel)1bh-header">
          <Typography>General settings</Typography>
        </ExpansionpanelSummary>
        <ExpansionpanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </ExpansionpanelDetails>
      </Expansionpanel>
      <Expansionpanel
        expanded={expanded === '(panel)2'}
        onChange={handleChange('(panel)2')}>
        <ExpansionpanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="(panel)2bh-content"
          id="(panel)2bh-header">
          <Typography>Users</Typography>
        </ExpansionpanelSummary>
        <ExpansionpanelDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </ExpansionpanelDetails>
      </Expansionpanel>
      <Expansionpanel
        expanded={expanded === '(panel)3'}
        onChange={handleChange('(panel)3')}>
        <ExpansionpanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="(panel)3bh-content"
          id="(panel)3bh-header">
          <Typography>Advanced settings</Typography>
        </ExpansionpanelSummary>
        <ExpansionpanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionpanelDetails>
      </Expansionpanel>
      <Expansionpanel
        expanded={expanded === '(panel)4'}
        onChange={handleChange('(panel)4')}>
        <ExpansionpanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="(panel)4bh-content"
          id="(panel)4bh-header">
          <Typography>Personal data</Typography>
        </ExpansionpanelSummary>
        <ExpansionpanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionpanelDetails>
      </Expansionpanel>
    </Fragment>
  );
}
