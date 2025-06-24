import React, { JSX, useEffect } from 'react';

import { DefaultBody } from '../../components/text/Text';

import Layout from '../../components/layout/Layout';

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
    <Layout title="résumé">
      {/* <iframe title='resume' src="https://raw.githubusercontent.com/benjxia/resume/refs/heads/main/Benjamin_Xia_Resume.pdf" width="100%" height="600px"></iframe> */}
    </Layout>
  );
}

export default Resume;
