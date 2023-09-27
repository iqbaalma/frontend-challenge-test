import Prism from 'prismjs';
import React, { useEffect, useRef } from 'react';
import '../App.css'
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript';

interface CodeHighlighterProps {
    code: string;
    language: string;
  }
  
  const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ code, language }) => {
    const codeRef = useRef<HTMLPreElement>(null);
  
    useEffect(() => {
      Prism.highlightAll();
    }, []);

  return (
    <>
        <pre ref={codeRef}>
            <code id='code-language' className={`language-${language}`}>
            {code}
            </code>
        </pre>
    </>
  );
};

export default CodeHighlighter;