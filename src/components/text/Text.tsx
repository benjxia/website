import React, { JSX, ReactNode, useEffect, useState } from 'react';
import './Text.css';
import useThemeColors from '../../hooks/theme';

interface TextProps {
  children: ReactNode;
  style?: React.CSSProperties;
  noSelect?: boolean;
  fontSize?: string;
  transition?: boolean;
}

function DefaultText({
  children,
  style = {},
  noSelect = true,
  transition = false,
}: TextProps): JSX.Element {
  useThemeColors();
  return (
    <p
      className={transition ? "text transition" : "text"}
      style={{
        ...(noSelect && { pointerEvents: 'none', userSelect: 'none' }),
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function DefaultTitle({ children }: TextProps): JSX.Element {
  return <DefaultText style={{ fontSize: '24px' }}>{children}</DefaultText>;
}

function DefaultBody({
  children,
  style,
  noSelect = false,
  fontSize = '16px',
  transition = false,
}: TextProps): JSX.Element {
  return (
    <DefaultText
      style={{
        ...style,
        fontSize: fontSize,
      }}
      noSelect={noSelect}
      transition={transition}
    >
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

function TypingText({
  text,
  style,
  speed = 50,
  callback,
  hideCarat = false,
}: TypingTextProps): JSX.Element {
  const [visibleText, setVisibleText] = useState<string>('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
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
    <div className={`typewriter`} style={style}>
      {visibleText || '\u200B'}
      {/* We don't use element::after in css here to let us override the font size https://stackoverflow.com/questions/28269669/css-pseudo-elements-in-react */}
      {(!hideCarat || (hideCarat && visibleText.length < text.length)) && (
        <div
          className="typewriter-blinker"
          style={{ height: style?.fontSize, position: 'absolute' }}
        ></div>
      )}
    </div>
  );
}

interface CycleTypingTextProps {
  text: Array<string>;
  style?: React.CSSProperties;
  speed?: number;
  pause?: boolean;
}

function CycleTypingText({
  text,
  style,
  speed = 50,
  pause = false,
}: CycleTypingTextProps): JSX.Element {
  const [visibleText, setVisibleText] = useState<string>('');
  const [stringIdx, setStringIdx] = useState<number>(0);
  const [deleteText, setDeleteText] = useState<boolean>(false);

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
    <div className="typewriter" style={style}>
      {visibleText || '\u200B'}
      {/* We don't use element::after in css here to let us override the font size https://stackoverflow.com/questions/28269669/css-pseudo-elements-in-react */}
      <div
        className="typewriter-blinker"
        style={{
          height: style ? style.fontSize : '24px',
          position: 'absolute',
        }}
      ></div>
    </div>
  );
}

export { DefaultTitle, DefaultBody, TypingText, CycleTypingText, DefaultText };
