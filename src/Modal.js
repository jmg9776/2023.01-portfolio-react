import React, {useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {a11yDark} from "react-syntax-highlighter/src/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import 'github-markdown-css/github-markdown-dark.css'

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
    let youtube = "visible";
    window.scrollTo({    top: 0,
        behavior: 'smooth'})

    if (props.youtube=="" || props.youtube==null) {
        youtube = "hidden"
    }

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
                <iframe style={{visibility:youtube}} className="youtube" width="100%" height="45%" src={props.youtube}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
