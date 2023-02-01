import React from 'react';
import Link from './Link';

export default function LinkList({links}) {
  let reversed=[...links].reverse();
  return (
    reversed.map(link => {
    return <Link key={link.id} oldLink={link.oldLink} newLink={link.newLink}/>;
    })
  );
}
