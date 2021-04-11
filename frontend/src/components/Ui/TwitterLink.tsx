import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/Ui/TwitterLink.sass';

type Props = {
  to: string;
  className?: string;
  text: string;
}

export default function TwitterLink({ to, className, text }: Props): JSX.Element {
  return <Link to={to} className={`${'twitter-link'} ${className || ''}`}>
    <span className="text">{text}</span>
  </Link>;
}
