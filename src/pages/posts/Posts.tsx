import React, { JSX } from 'react';

import Layout from '../../components/layout/Layout';
import usePageTitle from '../../hooks/pageTitle';

import content from './test.md?raw'
import { MarkdownText } from '../../components/text/Text';

const POSTS_PAGE_TITLE = 'posts';

function Posts(): JSX.Element {
  usePageTitle(POSTS_PAGE_TITLE);
  return (
    <Layout title="technical posts">
      <MarkdownText transition>
        {content}
      </MarkdownText>
    </Layout>
  );
}

export default Posts;
