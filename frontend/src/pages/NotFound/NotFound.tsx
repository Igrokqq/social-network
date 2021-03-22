import React, {
  Component, ReactNode, Fragment,
} from 'react';
import {
  Button,
} from 'antd';
import {
  RouteComponentProps,
} from 'react-router-dom';

import './NotFound.sass';

export default class NotFound extends Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
    };
  }

  render(): ReactNode {
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
                onClick={() => this.props.history.push('/')}
              >
                <span className="text">Go to home</span>
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
