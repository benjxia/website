import React, { JSX, useRef } from 'react';

import resumePDF from './assets/Redacted_Benjamin_Xia_Resume.pdf';

import usePageTitle from '../../../hooks/pageTitle';
import { DefaultBody, TypingText } from '../../../components/text/Text';

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
    <>
      <div className="transition">
        <TypingText
          text="(outdated) résumé"
          style={{
            fontSize: '24px',
            marginTop: '24px',
            marginBottom: '24px',
          }}
        />
      </div>
      <div className="body-wrapper transition">
        <DefaultBody>
          A redacted copy of my résumé, last updated 2025. I really don&apos;t
          like the bolding, but I&apos;ve found it to be helpful in getting
          callbacks after a LOT of ablations.
        </DefaultBody>
      </div>
      <div
        className="transition"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <iframe
            ref={ref}
            title="resume"
            src={`${resumePDF}#navpanes=0&toolbar=0&statusbar=0&view=FitW`}
            onLoad={handleLoad}
            style={{
              width: 'min(100%, 500px)',
              border: 'none',
              display: 'block',
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Resume;
