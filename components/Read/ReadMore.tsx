import React, { ReactNode, useState } from "react";
import "./fadeReadMore.css";

interface ReadMoreProps {
  children: ReactNode;
}

const ReadMore: React.FC<ReadMoreProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="read-more-container">
      <div className={`text ${isExpanded ? "expanded" : "collapsed"}`}>
        {children}
      </div>
      {!isExpanded && <div className="fade-overlay"></div>}
      <button className="read-more-button" onClick={toggleReadMore}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
