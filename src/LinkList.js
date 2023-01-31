import React from 'react';
import Link from './Link';

export default function LinkList({links}) {
  return (
    links.map(link => {
     return <Link key={link.id} oldLink={link.oldLink} newLink={link.newLink}/>;
    })
  );
}
