import React, { useEffect, useState } from 'react';
import './TypingText.css';

interface TypingTextProps {
  text: string;
  style?: React.CSSProperties;
  speed?: number;
}

function TypingText({ text, style, speed = 50 }: TypingTextProps) {
  const [visibleText, setVisibleText] = useState('');
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="typewriter" style={style}>
      {visibleText}
    </p>
  );
}

export default TypingText;
