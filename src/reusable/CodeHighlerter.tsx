import Prism from 'prismjs';
import React, { useEffect, useRef } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import { message } from 'antd';
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
  
    const copyCodeToClipboard = () => {
      if (codeRef.current) {
        const textArea = document.createElement('textarea');
        textArea.value = codeRef.current.innerText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        message.success('Code copy to clipboard');
      }
    };

  return (
    <>
    <div className='trigger-btn'>
        <span className="copy-trigger" onClick={copyCodeToClipboard}>
            <AiOutlineCopy /> Copy code
        </span>
    </div>
        <pre ref={codeRef}>
            <code id='code-language' className={`language-${language}`}>
            {code}
            </code>
        </pre>
    </>
  );
};

export default CodeHighlighter;