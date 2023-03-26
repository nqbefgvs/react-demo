import React, { useState } from "react";
import { ReactComponent as OpenLogo } from "./open.svg";
import { ReactComponent as CloseLogo } from "./close.svg";
import style from "./rightSideBar.less";
import { Link } from "react-router-dom";

interface State {
  isHided: boolean;
  indexes: any[];
  currIndex: number;
}

export default class RightSideBar extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isHided: false,
      indexes: [
        {
          name: "draw-cards",
        },
        {
          name: "setup",
        },
        {
          name: "battle",
        },
        {
          name: "save",
        },
      ],
      currIndex: 0,
    };
  }

  onChooseSenario(index: number) {
    this.setState({ currIndex: index });
  }

  render(): React.ReactNode {
    return (
      <div
        className={`${style["wrapper"]} ${
          this.state.isHided ? style["hide"] : ""
        }`}
      >
        <div className={style["senario-list"]}>
          {this.state.indexes.map((item, i) => (
            <Link
              to={item.name}
              style={{ textDecoration: "none", color: "#3c464f" }}
            >
              <div
                className={`${style["senario"]} ${
                  this.state.currIndex === i ? style["selected"] : ""
                }`}
                key={i}
                onClick={() => this.onChooseSenario(i)}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div
          className={style["hide-btn"]}
          onClick={() => this.setState({ isHided: !this.state.isHided })}
        >
          {this.state.isHided ? <OpenLogo /> : <CloseLogo />}
        </div>
      </div>
    );
  }
}
