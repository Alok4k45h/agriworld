import React, { useState } from "react";
import "./ExpandCollapse.css";
import { Collapse } from "react-bootstrap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function ExpandCollapse() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen((prevState) => !prevState);

  return (
    <div className="expand-collapse-section py-4">
      <div className="container">
        <div className="text-section">
          <div
            onClick={toggleCollapse}
            aria-controls="collapse-text"
            aria-expanded={isOpen}
            className="collapse-header d-flex align-items-center justify-content-between p-3"
          >
            <h1 className="question-text">
              {isOpen ? (
                <FaAngleUp className="icon-angle" />
              ) : (
                <FaAngleDown className="icon-angle" />
              )}
              Anim pariatur cliche reprehenderit, enim eiusmod high life
            </h1>
          </div>
          <Collapse in={isOpen}>
            <div id="collapse-text" className="answer-text p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              sociosqu phasellus dictum tincidunt. Ante vulputate natoque duis
              egestas hac libero donec id vitae suspendisse facilisi porttitor
              laoreet.
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default ExpandCollapse;
