import React, { JSX, useEffect } from 'react';

import Layout from '../../components/layout/Layout';
import { DefaultBody } from '../../components/text/Text';

// @ts-ignore
// import resumePDF from './resume.pdf';
const resumePDF = '';

const RESUME_PAGE_TITLE = 'résumé';

function Resume(): JSX.Element {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = RESUME_PAGE_TITLE;
    return () => {
      document.title = oldTitle;
    }
  }, [])
  return (
    <Layout title="(possibly outdated) résumé">
      <DefaultBody>
        See <a href={'https://github.com/benjxia/resume/blob/main/Benjamin_Xia_Resume.pdf'}>here</a> for most up-to-date résumé.
      </DefaultBody>
      <iframe title={'resume'} src={`${resumePDF}#navpanes=0&toolbar=1&statusbar=0`} width="100%" height="800px" />
    </Layout>
  );
}

export default Resume;
