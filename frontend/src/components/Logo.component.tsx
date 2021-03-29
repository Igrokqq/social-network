import React, { Fragment } from 'react';
import { AliwangwangOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import '../sass/components/Logo.component.sass';

type Props = {
  isLink?: boolean
}
const initialProps: Props = {
  isLink: false
};

export default function Logo({ isLink }: Props = initialProps): JSX.Element {
  return (
    <Fragment>
      {isLink
        ? <Link to="/"><AliwangwangOutlined className="icon" /></Link>
        : <AliwangwangOutlined className="icon" />
      }
    </Fragment>
  );
}
