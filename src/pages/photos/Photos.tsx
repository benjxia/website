import React, { JSX } from 'react';
import Layout from '../../components/layout/Layout';
import { DefaultBody } from '../../components/text/Text';
import Album from '../../components/album/Album';
import { EntryType } from '../../components/album/Entry';

const items = [
  {
    src: 'https://collection.benjxia.dev/photos/milky_way.png',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/beach-sunset.jpeg',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/train.mov',
    type: EntryType.VIDEO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/pidgeon1.jpeg',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/iceland-landscape.png',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/eiffel.jpeg',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/sfnight.jpeg',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/pidgeon2.jpeg',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/baybridge.jpeg',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/iceland-waterfall.png',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/ArcdeTriomphe.jpeg',
    type: EntryType.PHOTO,
  },
  {
    src: 'https://collection.benjxia.dev/photos/seattle-skyline.jpeg',
    type: EntryType.PHOTO,
  },
]

function Photos(): JSX.Element {
  return (
    <Layout title="photos">
      <div className="transition">
        <div className="body-wrapper blur-tile">
          <DefaultBody>
            I usually take pretty bad photos. But I sometimes get a little lucky and they
            actually turn out somewhat usable.
          </DefaultBody>
        </div>
      </div>
      <Album items={items}/>
    </Layout>
  );
}

export default Photos;
