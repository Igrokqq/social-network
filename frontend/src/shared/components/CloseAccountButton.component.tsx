import React from 'react';
import ButtonTrigger from './ButtonTrigger.component';

export default function CloseAccountButton({ store, dispatch, ...props }: any): JSX.Element {
  const _closeAccount = function (event: any): void {
    console.log('event', event);
    console.log('store, dispatch', store, dispatch);
    debugger;
  };

  return (
    <ButtonTrigger
      {...props}
      text="Close account"
      triggerOnClick={_closeAccount}
      danger={true}
    />
  );
}
