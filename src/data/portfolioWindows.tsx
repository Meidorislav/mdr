import type { ReactNode } from 'react';
import Welcome from '../components/Welcome/Welcome';
import Neofetch from '../components/Neofetch/Neofetch';
import Bio from '../components/About/Bio';
import Experience from '../components/About/Experience';
import Projects from '../components/Projects/Projects';
import Education from '../components/About/Education';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

export type WindowBlock =
  | {
      kind: 'content';
      element: ReactNode;
    }
  | {
      kind: 'terminal';
      command?: string;
      element?: ReactNode;
      animateCommand?: boolean;
      path: string;
      promptOnly?: boolean;
    };

export interface WindowConfig {
  blocks: WindowBlock[];
  titleSuffix: string;
}

export const portfolioWindows: WindowConfig[] = [
  {
    titleSuffix: '~',
    blocks: [
      { kind: 'content', element: <Welcome /> },
      {
        kind: 'terminal',
        command: 'neofetch',
        element: <Neofetch />,
        path: '~',
      },
      {
        kind: 'terminal',
        path: '~',
        promptOnly: true,
      },
    ],
  },
  {
    titleSuffix: '~/bio',
    blocks: [
      {
        kind: 'terminal',
        command: 'cat bio.txt',
        element: <Bio />,
        path: '~/bio',
      },
      {
        kind: 'terminal',
        path: '~/bio',
        promptOnly: true,
      },
    ],
  },
  {
    titleSuffix: '~/experience',
    blocks: [
      {
        kind: 'terminal',
        command: 'bat experience.md',
        element: <Experience />,
        path: '~/experience',
      },
      {
        kind: 'terminal',
        path: '~/experience',
        promptOnly: true,
      },
    ],
  },
  {
    titleSuffix: '~/projects',
    blocks: [
      {
        kind: 'terminal',
        command: 'bat projects/portfolio.md',
        element: <Projects />,
        path: '~/projects',
      },
      {
        kind: 'terminal',
        path: '~/projects',
        promptOnly: true,
      },
    ],
  },
  {
    titleSuffix: '~/education',
    blocks: [
      {
        kind: 'terminal',
        command: 'cat education.txt',
        element: <Education />,
        path: '~/education',
      },
      {
        kind: 'terminal',
        path: '~/education',
        promptOnly: true,
      },
    ],
  },
  {
    titleSuffix: '~/skills',
    blocks: [
      {
        kind: 'terminal',
        command: 'ls -F skills/',
        element: <Skills />,
        path: '~/skills',
      },
      {
        kind: 'terminal',
        path: '~/skills',
        promptOnly: true,
      },
    ],
  },
  {
    titleSuffix: '~/contact',
    blocks: [
      {
        kind: 'terminal',
        command: './contact.sh',
        element: <Contact />,
        path: '~/contact',
      },
      {
        kind: 'terminal',
        path: '~/contact',
        promptOnly: true,
      },
    ],
  },
];
