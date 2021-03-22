import React, {
  Component, ReactNode,
} from 'react';
import {
  RouteComponentProps,
} from 'react-router-dom';

export default class SignIn extends Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
    };
  }

  render(): ReactNode {
    return (
      <div>Sign in!</div>
    );
  }
}
