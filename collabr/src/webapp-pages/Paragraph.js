import React from 'react';
import TextField from '@material-ui/core/TextField';
import TallyCard from '../webapp-components/TallyCard';
import DashboardDefaultSection3 from '../layout-components/DashboardDefault/DashboardDefaultSection3';
import Grid from '@material-ui/core/Grid';
import { PageTitle } from '../layout-components';
import { ClockLoader } from 'react-spinners';
export default function Paragraph() {
  return (
    <div style={{ margin: 10, marginTop: 100 }}>
      <div style={{ display: 'flex' }}>
        <PageTitle
          titleHeading="Lorem Ipsum Writing Contest"
          titleDescription="Demonstration of Writing Page"
        />
        <div style={{display:'block',margin:100}}>
          <ClockLoader color={'var(--primary)'} loading={true} />
        </div>
      </div>
      <DashboardDefaultSection3
        data={{
          title: null,
          tagline: null
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs>
          <TallyCard data={{ percent: '75%', name: 'Celine - Paragraph 1' }} />
        </Grid>
        <Grid item xs>
          <TallyCard data={{ percent: '45%', name: 'Anabel - Paragraph 2' }} />
        </Grid>
        <Grid item xs>
          <TallyCard data={{ percent: '12%', name: 'Hayden - Paragraph 3' }} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          <TextField
            style={{ width: '100%' }}
            inputProps={{ style: { fontSize: 32, lineHeight: 1.3 } }} // font size of input text
            className="mt-2"
            id="filled-textarea"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
        </Grid>
        <Grid item xs>
          <TextField
            style={{ width: '100%' }}
            inputProps={{ style: { fontSize: 32, lineHeight: 1.3 } }} // font size of input text
            className="mt-2"
            id="filled-textarea"
            defaultValue="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
        </Grid>
        <Grid item xs>
          <TextField
            style={{ width: '100%' }}
            inputProps={{ style: { fontSize: 32, lineHeight: 1.3 } }} // font size of input text
            className="mt-2"
            id="filled-textarea"
            defaultValue="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
        </Grid>
      </Grid>
    </div>
  );
}
