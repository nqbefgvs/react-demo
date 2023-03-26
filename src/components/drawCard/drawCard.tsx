import React from "react";
import style from "./drawCard.less";

export default class DrawCard extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={style["background"]}>
        <div>draw card</div>
      </div>
    );
  }
}
