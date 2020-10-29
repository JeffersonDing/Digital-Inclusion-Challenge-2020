import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Circle from 'react-circle';

import {
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
  Grid
} from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title">My Projects and Activities</div>
          <div className="card-header--actions">
            <Tooltip arrow title="Refresh">
              <IconButton size="small" color="primary" className="mr-3">
                <FontAwesomeIcon icon={['fas', 'cog']} spin />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <CardContent className="p-3">
          <div className="table-responsive">
            <table className="table table-borderless table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-left">Activity/Project Name</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Progress</th>
                  <th className="text-center">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Creative Writing
                      </a>
                      <span className="text-black-50 d-block">
                        "On a haunted halloween night..." -One Line Stories
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-warning px-4">In Progress</div>
                  </td>
                  <td className="text-center">
                    <Circle
                      animate={true} // Boolean: Animated/Static progress
                      animationDuration="2s" // String: Length of animation
                      responsive={false} // Boolean: Make SVG adapt to parent size
                      size="75" // String: Defines the size of the circle.
                      lineWidth="25" // String: Defines the thickness of the circle's stroke.
                      progress="25" // String: Update to change the progress and percentage.
                      progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
                      bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                      textColor="#6b778c" // String: Color of percentage text color.
                      textStyle={{
                        font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                      }}
                      percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                      roundedStroke={true} // Boolean: Rounded/Flat line ends
                      showPercentage={true} // Boolean: Show/hide percentage.
                      showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                    />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Creative Writing
                      </a>
                      <span className="text-black-50 d-block">
                        Collaborative Pictionary 5v5
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-success px-4">Done</div>
                  </td>
                  <td className="text-center">
                    <Circle
                      animate={true} // Boolean: Animated/Static progress
                      animationDuration="2s" // String: Length of animation
                      responsive={false} // Boolean: Make SVG adapt to parent size
                      size="75" // String: Defines the size of the circle.
                      lineWidth="25" // String: Defines the thickness of the circle's stroke.
                      progress="100" // String: Update to change the progress and percentage.
                      progressColor="#1BC943" // String: Color of "progress" portion of circle.
                      bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                      textColor="#6b778c" // String: Color of percentage text color.
                      textStyle={{
                        font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                      }}
                      percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                      roundedStroke={true} // Boolean: Rounded/Flat line ends
                      showPercentage={true} // Boolean: Show/hide percentage.
                      showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                    />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Musical Talent
                      </a>
                      <span className="text-black-50 d-block">
                        "Moody Nights" -Friday Night Jazz Garage Band
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-danger px-4">Left</div>
                  </td>
                  <td className="text-center">
                    <Circle
                      animate={true} // Boolean: Animated/Static progress
                      animationDuration="2s" // String: Length of animation
                      responsive={false} // Boolean: Make SVG adapt to parent size
                      size="75" // String: Defines the size of the circle.
                      lineWidth="25" // String: Defines the thickness of the circle's stroke.
                      progress="0" // String: Update to change the progress and percentage.
                      progressColor="#FFFFFF" // String: Color of "progress" portion of circle.
                      bgColor="#F89A9B" // String: Color of "empty" portion of circle.
                      textColor="#6b778c" // String: Color of percentage text color.
                      textStyle={{
                        font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                      }}
                      percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                      roundedStroke={true} // Boolean: Rounded/Flat line ends
                      showPercentage={true} // Boolean: Show/hide percentage.
                      showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                    />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                        Code Master
                      </a>
                      <span className="text-black-50 d-block">
                        "Interactive Vintage Games"- 15 min Web Dev Challange
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success">Done</div>
                  </td>
                  <td className="text-center">
                    <Circle
                      animate={true} // Boolean: Animated/Static progress
                      animationDuration="2s" // String: Length of animation
                      responsive={false} // Boolean: Make SVG adapt to parent size
                      size="75" // String: Defines the size of the circle.
                      lineWidth="25" // String: Defines the thickness of the circle's stroke.
                      progress="100" // String: Update to change the progress and percentage.
                      progressColor="#1BC943" // String: Color of "progress" portion of circle.
                      bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                      textColor="#6b778c" // String: Color of percentage text color.
                      textStyle={{
                        font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                      }}
                      percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                      roundedStroke={true} // Boolean: Rounded/Flat line ends
                      showPercentage={true} // Boolean: Show/hide percentage.
                      showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                    />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
        <div className="card-footer d-flex justify-content-between">
          <Button color="primary" size="small">
            Delete
          </Button>
          <div>
            <Button
              size="small"
              variant="contained"
              className="mr-3"
              color="primary">
              View all
            </Button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
