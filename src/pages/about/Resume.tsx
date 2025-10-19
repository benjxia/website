import React, { JSX, useRef } from 'react';

import resumePDF from './assets/Redacted_Benjamin_Xia_Resume.pdf';

import usePageTitle from '../../hooks/pageTitle';
import { DefaultBody } from '../../components/text/Text';

// I'm too lazy to import the css file
// https://stackoverflow.com/questions/65302337/css-file-is-applying-on-another-react-component-even-without-importing

const RESUME_PAGE_TITLE = 'résumé';

function Resume(): JSX.Element {
  usePageTitle(RESUME_PAGE_TITLE);

  const ref = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    const iframe = ref.current;
    if (iframe) {
      const width = iframe.offsetWidth;
      // 1.294 standard American paper aspect ratio
      iframe.style.height = `${width * 1.294}px`;
    }
  };

  return (
    <div className="about-body-wrapper transition perspective-shift-right">
      <div className="about-body-text blur-tile">
        <DefaultBody>
          A redacted copy of my résumé, last updated 2025. I really don&apos;t
          like the bolding, but I&apos;ve found it to be helpful in getting
          callbacks after a LOT of ablations.
        </DefaultBody>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <iframe
          ref={ref}
          title="resume"
          src={`${resumePDF}#navpanes=0&toolbar=0&statusbar=0&view=FitW`}
          onLoad={handleLoad}
          style={{
            width: '100%',
            /* Default height so we don't jump around when the user has
            partially scrolled down and swaps between "about" and "resume" */
            height: '850px',
            border: 'none',
            display: 'block',
            borderRadius: '25px',
          }}
        />
      </div>
    </div>
  );
}

export default Resume;
