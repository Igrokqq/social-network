import React, { PropsWithChildren } from 'react';

import '../../sass/components/ContentBlock.component.sass';

export default function ContentBlock(props: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="block">
      {props.children}
    </div>
  );
}
