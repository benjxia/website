import React, { JSX, useEffect } from 'react';


import Layout from '../../components/layout/Layout';

const ABOUT_PAGE_TITLE = 'about me :)';

function Resume(): JSX.Element {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = ABOUT_PAGE_TITLE;
    return () => {
      document.title = oldTitle;
    }
  }, [])
  return (
    <Layout title="about me">
      
    </Layout>
  );
}

export default Resume;
