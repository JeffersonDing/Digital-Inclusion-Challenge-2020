import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  const chart53Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#f4772e'
    },
    colors: ['#f4772e'],
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart53Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];
  return (
    <Fragment>
      <Card className="card-box mb-4 p-3 text-center">
        <div className="my-3">
          <h6 className="font-weight-bold font-size-lg mb-1 text-black">
            My Friends
          </h6>
          <p className="text-black-50 mb-0">
            Friends that you waved at...and waved back~!
          </p>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar1} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Marion Devine</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'circle']}
                className="text-success mr-1"
              />
              <span className="px-1">|</span>
              UCC
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar2} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Monique Hanna</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon icon={['fas', 'circle']} />
              <span className="px-1">|</span>
              YRDSB
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar3} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Celine Goulding</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'circle']}
                className="text-success mr-1"
              />
              <span className="px-1">|</span>
              TDSB
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar4} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Anabel Mayo</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon icon={['fas', 'circle']} />
              <span className="px-1">|</span>
              TDSB
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar5} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Rueben Hays</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon icon={['fas', 'circle']} />
              <span className="px-1">|</span>
              YCDSB
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar6} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Kush Malone</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={['fas', 'circle']}
                className="text-success mr-1"
              />
              <span className="px-1">|</span>
              UCC
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar7} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Haydn Porter</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon icon={['fas', 'circle']} />
              <span className="px-1">|</span>
              YCDSB
            </div>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
