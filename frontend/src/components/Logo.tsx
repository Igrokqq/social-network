import React, { Fragment } from 'react';
import { Twitter } from 'react-bootstrap-icons';

import '../sass/components/Logo.sass';

type Props = {
  className?: string;
}

export default function Logo({ className }: Props): JSX.Element {
  return (
    <Fragment>
      <Twitter className={`icon ${className}`} />
    </Fragment>
  );
}
