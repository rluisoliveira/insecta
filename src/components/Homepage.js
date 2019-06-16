import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookSquare, faInstagram, faPaperPlane, faTimes);

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="content">
          <h1 className="titulo">Insecta</h1>
          <span>Ricardo Luís Oliveira</span>
          <span>Pós Graduação em Dança Contemporânea</span>
          <span>ESMAE</span>
        </div>
        <div className="borboletas">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
            enableBackground="new 0 0 500 500"
          >
            <g id="borboleta_svg">
              <g className="left">
                <polygon points="402,280 212,104 42,79 91,220 		" />
                <polygon points="119,280 91,220 402,280 		" />
                <polygon
                  fill="#D47328"
                  points="402,280 119,280 119,373 212,430 		"
                />
                <polygon
                  fill="#D47328"
                  points="42,79 210,113 402,280 97,212 		"
                />
                <polygon fill="#F7A129" points="42,79 402,280 210,113 		" />
                <polygon points="119,280 212,430 119,373 		" />
                <polygon fill="#F7A129" points="119,280 402,280 165.5,355 		" />
              </g>
              <g className="body">
                <polyline points="401.262,283.584 401.262,283.584 417.649,257.333 417.41,272.259 		" />
                <polygon points="404.172,280 365.164,351.614 347.429,340.225 		" />
                <polygon points="417.497,267.832 416.174,264.5 448.18,230.934 		" />
                <polygon points="413.164,264.982 409.455,265.27 415.392,219.272 		" />
                <polygon
                  fill="#58595B"
                  points="404,281.895 356.834,346.068 365.164,351.614 		"
                />
                <polyline
                  fill="#58595B"
                  points="402,283.584 402,283.584 417.649,257.333 406.443,264.366 		"
                />
              </g>
              <g className="right">
                <polygon points="401.025,279.434 191.572,127.1 19.81,122.349 85.116,256.576 		" />
                <polygon points="120.006,312.85 85.116,256.576 401.025,279.434 		" />
                <polygon
                  fill="#D47328"
                  points="401.025,279.434 120.006,312.85 130.987,405.199 230.068,450.819 		"
                />
                <polygon
                  fill="#D47328"
                  points="19.81,122.349 190.649,136.273 401.025,279.434 90.13,247.924 		"
                />
                <polygon
                  fill="#F7A129"
                  points="19.81,122.349 401.025,279.434 190.649,136.273 		"
                />
                <polygon points="120.006,312.85 230.068,450.819 130.987,405.199 		" />
                <polygon
                  fill="#F7A129"
                  points="120.006,312.85 401.025,279.434 175.037,381.835 		"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://www.facebook.com/rluisoliveira" target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rluisoliveira/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="mailto:luisoliveira.rr@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faPaperPlane} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Homepage;
