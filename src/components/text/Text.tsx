import React, { JSX, ReactNode, useEffect, useState } from 'react';
import './Text.css';

interface TextProps {
  children: ReactNode;
  style?: React.CSSProperties;
  noSelect?: boolean;
}

function DefaultText({children, style={}, noSelect=true}: TextProps): JSX.Element {
  return (
    <p className='text' style={{
      ...(noSelect && { pointerEvents: 'none', userSelect: 'none' }),
      ...style,
    }}>
      {children}
    </p>
  );
}

function DefaultTitle({children, style, noSelect}: TextProps): JSX.Element {
  return (
    <DefaultText style={{fontSize: '24px'}}>
      {children}
    </DefaultText>
  );
}

function DefaultBody({children, style, noSelect=false}: TextProps): JSX.Element {
  return (
    <DefaultText style={{...style,
      fontSize: '16px',
    }} noSelect={noSelect}>
      {children}
    </DefaultText>
  );
}

interface TypingTextProps {
  text: string;
  style?: React.CSSProperties;
  speed?: number;
  callback?: (complete: boolean) => void; // Callback that's called upon text completion
  hideCarat?: boolean; // Whether to hide the carat upon text completion
}

function TypingText({ text, style, speed = 50 , callback, hideCarat = true }: TypingTextProps): JSX.Element {
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
    <p className={`typewriter${hideCarat && visibleText.length === text.length ? ' done' : ''}`} style={style}>
      {visibleText || '\u200B'}
    </p>
  );
}

interface CycleTypingTextProps {
  text: Array<string>;
  style?: React.CSSProperties;
  speed?: number;
  pause?: boolean;
}

function CycleTypingText({ text, style, speed = 50, pause = false }: CycleTypingTextProps): JSX.Element {
  const [visibleText, setVisibleText] = useState('');
  const [stringIdx, setStringIdx] = useState(0);
  const [deleteText, setDeleteText] = useState(false);

  useEffect(() => {
    if (pause) return;
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
            setDeleteText(false); // trigger text typing for next string
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
            setDeleteText(true); // trigger text deletion
          }, 1000);
        }
      }, speed);
    }
    return () => clearInterval(interval);
  }, [deleteText, text, stringIdx, speed, pause]);


  return (
    <p className="typewriter" style={style}>
      {visibleText || '\u200B'}
    </p>
  );
}

export { DefaultTitle, DefaultBody, TypingText, CycleTypingText, DefaultText };
