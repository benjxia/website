import React, { JSX, useEffect, useState } from 'react';
import './TypingText.css';

interface TypingTextProps {
  text: string;
  style?: React.CSSProperties;
  speed?: number;
  callback?: (complete: boolean) => void; // Callback that's called upon text completion
}

function TitleTypingText({ text, style, speed = 50 , callback }: TypingTextProps): JSX.Element {
  const [visibleText, setVisibleText] = useState('');
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let i = 0;
    interval = setInterval(() => {
      i++;
      setVisibleText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        callback?.(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, callback]);

  return (
    <p className={`typewriter${visibleText.length === text.length ? ' done' : ''}`} style={style}>
      {visibleText || '\u200B'}
    </p>
  );
}

interface CycleTypingTextProps {
  text: Array<string>;
  style?: React.CSSProperties;
  speed?: number;
}

function CycleTypingText({ text, style, speed = 50 }: CycleTypingTextProps): JSX.Element {
  const [visibleText, setVisibleText] = useState('');
  const [stringIdx, setStringIdx] = useState(0);
  const [deleteText, setDeleteText] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (deleteText) {
      let i = text[stringIdx].length;

      interval = setInterval(() => {
        i--;
        setVisibleText(text[stringIdx].slice(0, i));
        if (i <= 0) {
          clearInterval(interval);
          setTimeout(() => {
            setStringIdx((prev) => (prev + 1) % text.length);
            setDeleteText(false); // trigger typing next
          }, 1000);
        }
      }, speed);
    } else {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setVisibleText(text[stringIdx].slice(0, i));
        if (i >= text[stringIdx].length) {
          clearInterval(interval);
          setTimeout(() => {
            setDeleteText(true); // trigger deletion
          }, 1000);
        }
      }, speed);
    }
    return () => clearInterval(interval);
  }, [deleteText, text, stringIdx, speed]);


  return (
    <p className="typewriter" style={style}>
      {visibleText || '\u200B'}
    </p>
  );
}

export { TitleTypingText as TypingText, CycleTypingText };
