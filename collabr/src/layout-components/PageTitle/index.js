import React, { Fragment, Component } from 'react';

class PageTitle extends Component {
  render() {
    return (
      <Fragment>
        <br/><br/><br/>
        <div className="mb-5 mt-5">
          <h1 className="display-3 mb-3 font-weight-bold text-capitalize">
            {this.props.titleHeading}
          </h1>
          <p className="font-size-xl text-black-50">
            {this.props.titleDescription}
          </p>
        </div>
      </Fragment>
    );
  }
}

export default PageTitle;
