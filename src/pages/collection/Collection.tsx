import React, { JSX } from 'react';

import { DefaultBody, TypingText } from '../../components/text/Text';

import usePageTitle from '../../hooks/pageTitle';

import './Collection.css';
import '../../theme/transition.css';

const COLLECTION_PAGE_TITLE = 'the collection';

function Collection(): JSX.Element {
  usePageTitle(COLLECTION_PAGE_TITLE);

  return (
    <>
      <div className="transition">
        <TypingText
          text='the collection'
          style={{
            fontSize: '24px',
            marginTop: '24px',
            marginBottom: '24px',
          }}
        />
      </div>
      <div className="body-wrapper transition">
        <DefaultBody>
          My collection of course notes from various topics across computer
          science. The notes have been gathered from several universities
          including Stanford, UCB, MIT, but primarily from UCSD. A significant
          portion of my UCSD notes have also been annotated :).
        </DefaultBody>
      </div>
      <iframe
        title="drive"
        src="https://drive.google.com/embeddedfolderview?id=1XzK8aFfk130n8ScnlLzHG0-HbbiVlgeO#list"
        style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'white',
          borderRadius: '25px',
        }}
        className="transition"
      />
    </>
  );
}

export default Collection;
