import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {a11yDark} from "react-syntax-highlighter/src/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import 'github-markdown-css'
function Notes(props) {
    const [text, setText] = React.useState();
    fetch(props)
        .then((response) => response.text())
        .then((textContent) => {
            setText(textContent);
        });
    return text || "Loading...";
}

function Modal(props) {
    const scr = document.scrollingElement.scrollTop;
    function closeModal() {
        window.scrollTo({    top: scr,
            behavior: 'smooth'})
        props.closeModal();
    }
    window.scrollTo({    top: 0,
        behavior: 'smooth'})
    return (
        <div className="Modal" onClick={closeModal}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                <button id="modalCloseBtn" onClick={closeModal}>
                    ✖
                </button>
                <div className='markdown-body'>
                <ReactMarkdown
                    children={Notes(props.md)}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, "")}
                                    style={a11yDark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
