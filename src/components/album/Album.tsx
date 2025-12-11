import React, { JSX } from 'react';
import AlbumEntry, { AlbumEntryProps } from './Entry';

import './Album.css';

interface AlbumProps {
  items: AlbumEntryProps[];
}

function Album({items} : AlbumProps): JSX.Element {
  return (
    <div className='album-grid transition'>
      {
        items.map((x, idx) =>
        (<AlbumEntry src={x.src} type={x.type} key={idx}/>))
      }
    </div>
  );
}

export default Album;
