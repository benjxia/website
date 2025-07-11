import React, { JSX, useEffect } from 'react';

import { DefaultBody } from '../../components/text/Text';

import './Collection.css'
import Layout from '../../components/layout/Layout';

const COLLECTION_PAGE_TITLE = 'the collection';

function Collection(): JSX.Element {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = COLLECTION_PAGE_TITLE;
    return () => {
      document.title = oldTitle;
    }
  }, [])
  return (
    <Layout title="the collection">
      <DefaultBody>
        My collection of course notes from various topics across computer science.
        The notes have been gathered from several universities including Stanford, UCB, MIT, but primarily from UCSD.

        A significant portion of my UCSD notes have also been annotated :).
      </DefaultBody>
      <iframe title="drive" src="https://drive.google.com/embeddedfolderview?id=1XzK8aFfk130n8ScnlLzHG0-HbbiVlgeO#list" style={{width: '100%', height: '400px', backgroundColor: 'white'}}></iframe>
    </Layout>
  );
}

export default Collection;
