import React, { JSX } from 'react';

import Layout from '../../components/layout/Layout';
import { DefaultBody } from '../../components/text/Text';

import resumePDF from './assets/Redacted_Benjamin_Xia_Resume.pdf';
// const resumePDF = '';

import usePageTitle from '../../hooks/pageTitle';

const RESUME_PAGE_TITLE = 'résumé';

function Resume(): JSX.Element {

  usePageTitle(RESUME_PAGE_TITLE);

  return (
    <Layout title="(possibly outdated) résumé">
      <DefaultBody>
        A redacted copy of my résumé, last updated August 8, 2025. I don&apos;t like the bolding, but I&apos;ve found it to be helpful in getting callbacks after a LOT of ablations.
      </DefaultBody>
      <iframe title='resume' src={`${resumePDF}#navpanes=0&toolbar=1&statusbar=0`} width="100%" height="800px" />
    </Layout>
  );
}

export default Resume;
