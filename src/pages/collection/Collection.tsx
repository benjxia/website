import React, { JSX, useEffect } from 'react';

import { DefaultTitle, DefaultBody, DefaultText, TypingText } from '../../components/text/Text';

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
        My collection of course notes from various topics across computer science (plus a few bonus slides from other departments).
        The notes have been gathered from several universities including Stanford, UCB, MIT, but primarily from UCSD, because that's where I went to school.
      </DefaultBody>

    </Layout>
  );
}

export default Collection;
