import { JSX, ReactNode } from 'react';

import { DefaultBody } from '../../components/text/Text';

import Layout from '../../components/layout/Layout';
import usePageTitle from '../../hooks/page-title';

import cse110 from './slides/cse_110_pitch.pdf';
import cse151b from './slides/CSE_151B_Final_Presentation.pdf';
import cogs108 from './slides/COGS108_Final_Project.pdf';
import cse150b from './slides/CSE-150B-Week-3-Discussion.pdf';
import cse125 from './slides/cse_125_demo.pdf';
import cse291_llm from './slides/CSE291_VCC_Discussion.pdf';
import cse291_cog from './slides/CSE291-Final-Project-Cognify-Team4.pdf';
import cse290 from './slides/CSE290-Alpa.pdf';
import cse252d_scenescript from './slides/SceneScript.pdf';
import cse252d_fmgs from './slides/FMGS_final_presentation.pdf';
import cse253 from './slides/cse253_a2.pdf';

const PRESENTATIONS_PAGE_TITLE = 'presentations';

type Presentation = {
  title: string;
  description: string;
  src: string;
}

const PRESENTATIONS: Presentation[] = [
  {
    title: "CSE253 Final Presentation",
    description: "CSE 253 Machine Learning for Music: Final Project - MidiGPT and Latent Diffusion for Music Generation",
    src: cse253
  },
  {
    title: "CSE 252D Advanced Computer Vision: Final Project",
    description: "CSE 252D Advanced Computer Vision: Final Project - Optimized Foundation Models for Gaussian Splatting",
    src: cse252d_fmgs
  },
  {
    title: "CSE 252D Advanced Computer Vision: SceneScript Discussion",
    description: "CSE 252D Advanced Computer Vision: SceneScript Discussion",
    src: cse252d_scenescript
  },
  {
    title: "CSE 290 MLSys Seminar: Alpa",
    description: "CSE 290 Machine Learning Seminar: Distributed Computation Graph Parallelism with Alpa",
    src: cse290
  },
  {
    title: "CSE 291 Virtualization/Cloud Computing: Final Project",
    description: "CSE 291 Virtualization/Cloud Computing Final Project: Cognify for Vision Language Models",
    src: cse291_cog
  },
  {
    title: "CSE 291 Virtualization/Cloud Computing: Discussion",
    description: "CSE 291 Virtualization/Cloud Computing Discussion on LLM inference optimizations",
    src: cse291_llm
  },
  {
    title: "CSE 125: Demo",
    description: "CSE 125 Demo Slides - Four Seasons",
    src: cse125
  },
  {
    title: "CSE 150B: Week 3 Discussion",
    description: "CSE 150B: Week 3 Discussion - Minimax/Expectimax. No, I'm not related to Raymond.",
    src: cse150b
  },
  {
    title: "COGS 108 Final Presentation",
    description: "COGS 108: Data Science - Final Presentation - GPU vs Cryptocurrency Price Analysis",
    src: cogs108
  },
  {
    title: "CSE 151B Final Presentation",
    description: "CSE 151B: Deep Learning - Competition Presentation",
    src: cse151b
  },
  {
    title: "CSE 110 Project Proposal",
    description: "CSE 110: Software Engineering - Warrantracker Project Proposal",
    src: cse110
  }
]

interface SlideEntryProps {
  title: string;
  children: ReactNode;
  src: string;
}

function SlideEntry({title, children, src}: SlideEntryProps): JSX.Element {
  return (
    <>
      <DefaultBody>
        {children}
      </DefaultBody>
      <iframe title={title} src={`${src}#navpanes=0&toolbar=1&statusbar=0`} width="100%" height="800px" />
    </>
  );
}

function Presentations(): JSX.Element {
  usePageTitle(PRESENTATIONS_PAGE_TITLE);

  return (
    <Layout title="presentations">
      <DefaultBody>
        An archive of some of the presentations (slides) I've done over the years. This collection is incomplete as it excludes confidential presentations from work, and many whiteboard-only technical talks.
        Some formatting may also be whack as I've exported them all to pdf's.
      </DefaultBody>

      {PRESENTATIONS.map((presentation) => (
        <SlideEntry
          key={presentation.src}
          title={presentation.title}
          src={presentation.src}
        >
          {presentation.description}
        </SlideEntry>
      ))}
    </Layout>
  );
}

export default Presentations;
