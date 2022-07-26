import "./sidebartab.css";
import React, { useRef } from "react";

export const SidebarTab = () => {
  const activeLinkRef1 = useRef();
  const activeLinkRef2 = useRef();
  const activeLinkRef3 = useRef();
  const activeLinkRef4 = useRef();
  const activeLinkRef5 = useRef();

  const handleClick = (number) => {
    const link1 = activeLinkRef1.current;
    const link2 = activeLinkRef2.current;
    const link3 = activeLinkRef3.current;
    const link4 = activeLinkRef4.current;
    const link5 = activeLinkRef5.current;

    link1.className = "";
    link2.className = "";
    link3.className = "";
    link4.className = "";
    link5.className = "";

    if (number === 4) {
      link4.className === "border-right"
        ? (link4.className = "")
        : (link4.className = "border-right");
    } else if (number === 1) {
      link1.className === "border-right"
        ? (link1.className = "")
        : (link1.className = "border-right");
    } else if (number === 2) {
      link2.className === "border-right"
        ? (link2.className = "")
        : (link2.className = "border-right");
    } else if (number === 3) {
      link3.className === "border-right"
        ? (link3.className = "")
        : (link3.className = "border-right");
    } else if (number === 5) {
      link5.className === "border-right"
        ? (link5.className = "")
        : (link5.className = "border-right");
    }
  };

  return (
    <>
      <div className="mijm-contianer-test">
        <div className="wrapper-side-nav">
          <div className="nav-links">
            <ul>
              <li>
                <a
                  ref={activeLinkRef1}
                  href="#content1"
                  onClick={() => {
                    handleClick(1);
                  }}
                >
                  Link1
                </a>
              </li>
              <li>
                <a
                  ref={activeLinkRef2}
                  href="#content2"
                  onClick={() => {
                    handleClick(2);
                  }}
                >
                  Link2
                </a>
              </li>
              <li>
                <a
                  ref={activeLinkRef3}
                  href="#content3"
                  onClick={() => {
                    handleClick(3);
                  }}
                >
                  Link3
                </a>
              </li>
              <li>
                <a
                  ref={activeLinkRef4}
                  href="#content4"
                  onClick={() => {
                    handleClick(4);
                  }}
                >
                  Link4
                </a>
              </li>
              <li>
                <a
                  ref={activeLinkRef5}
                  href="#content5"
                  onClick={() => {
                    handleClick(5);
                  }}
                >
                  Link5
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <div className="content-wrapper">
              <div id="content1">
                <div className="title">
                  <h3>Content1</h3>
                  <span>Here you find information about content1</span>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, beatae numquam! Dolore suscipit, magnam in iure sunt
                  maxime maiores perferendis inventore, praesentium excepturi
                  incidunt dolorum voluptas dicta sequi adipisci facilis
                  laudantium sed necessitatibus corrupti perspiciatis eos
                  doloremque assumenda. Exercitationem, sit neque similique
                  dolore esse itaque corrupti illo, nihil a incidunt quis ex,
                  minima molestias ea enim. Repudiandae sit quaerat doloribus.
                </div>
              </div>
              <div id="content2">
                <div className="title">
                  <h3>Content2</h3>
                  <span>Here you find information about content1</span>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, beatae numquam! Dolore suscipit, magnam in iure sunt
                  maxime maiores perferendis inventore, praesentium excepturi
                  incidunt dolorum voluptas dicta sequi adipisci facilis
                  laudantium sed necessitatibus corrupti perspiciatis eos
                  doloremque assumenda. Exercitationem, sit neque similique
                  dolore esse itaque corrupti illo, nihil a incidunt quis ex,
                  minima molestias ea enim. Repudiandae sit quaerat doloribus.
                </div>
              </div>

              <div id="content3">
                <div className="title">
                  <h3>Content3</h3>
                  <span>Here you find information about content1</span>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, beatae numquam! Dolore suscipit, magnam in iure sunt
                  maxime maiores perferendis inventore, praesentium excepturi
                  incidunt dolorum voluptas dicta sequi adipisci facilis
                  laudantium sed necessitatibus corrupti perspiciatis eos
                  doloremque assumenda. Exercitationem, sit neque similique
                  dolore esse itaque corrupti illo, nihil a incidunt quis ex,
                  minima molestias ea enim. Repudiandae sit quaerat doloribus.
                </div>
              </div>
              <div id="content4">
                <div className="title">
                  <h3>Content4</h3>
                  <span>Here you find information about content4</span>
                </div>
                <div className="content">
                  4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, beatae numquam! Dolore suscipit, magnam in iure sunt
                  maxime maiores perferendis inventore, praesentium excepturi
                  incidunt dolorum voluptas dicta sequi adipisci facilis
                  laudantium sed necessitatibus corrupti perspiciatis eos
                  doloremque assumenda. Exercitationem, sit neque similique
                  dolore esse itaque corrupti illo, nihil a incidunt quis ex,
                  minima molestias ea enim. Repudiandae sit quaerat doloribus.
                </div>
              </div>
              <div id="content5">
                <div className="title">
                  <h3>Content5</h3>
                  <span>Here you find information about content1</span>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, beatae numquam! Dolore suscipit, magnam in iure sunt
                  maxime maiores perferendis inventore, praesentium excepturi
                  incidunt dolorum voluptas dicta sequi adipisci facilis
                  laudantium sed necessitatibus corrupti perspiciatis eos
                  doloremque assumenda. Exercitationem, sit neque similique
                  dolore esse itaque corrupti illo, nihil a incidunt quis ex,
                  minima molestias ea enim. Repudiandae sit quaerat doloribus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
