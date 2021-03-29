import React, { Fragment } from 'react';
import {
  Button,
} from 'antd';
import {
  RouteComponentProps,
} from 'react-router-dom';

import '../sass/pages/NotFound.page.sass';

export default function NotFound(props: RouteComponentProps): JSX.Element {
  return (
    <Fragment>
      <div className="not-found">
        <div className="content">
          <div className="title">
            <span className="text">404</span>
          </div>

          <div className="subtitle">
            <span className="text">Oops!</span>
          </div>

          <div className="description">
            <span className="text">THAT PAGE DOESN’T EXIST OR IS UNAVAILABLE.</span>
          </div>

          <div>
            <Button
              className="button"
              type="primary"
              size="large"
              onClick={() => props.history.push('/')}
            >
              <span className="text">Go to home</span>
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
