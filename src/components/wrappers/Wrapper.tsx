import React, { JSX } from 'react';

import './Wrapper.css';

function PageWrapper(props: React.PropsWithChildren): JSX.Element {
  return <div className="page-wrapper">{props.children}</div>;
}

export default PageWrapper;
