import React, { JSX } from 'react';

import './Album.css';

export enum EntryType {
  PHOTO,
  VIDEO
}

interface AlbumEntryProps {
  src: string;
  type: EntryType;
}

function AlbumEntry({src, type}: AlbumEntryProps): JSX.Element {
  return (
    <div className='entry-container'>
      {
        type === EntryType.PHOTO ?
        <img
          src={src}
          className="entry"
          alt="pretend there's a picture here"
        /> : <video className="entry" autoPlay muted loop src={src}/>
      }
    </div>
  );
}

export type {AlbumEntryProps};

export default AlbumEntry;
