import React from "react";
import { ReactComponent as OpenLogo } from './open.svg';
import { ReactComponent as CloseLogo } from './close.svg';
import './rightSideBar.css';

export default class RightSideBar extends React.Component {

    indexes = [
        {
            name: 'draw cards',
        },
        {
            name: 'setup',
        },
        {
            name: 'battle',
        },
        {
            name: 'save'
        }
    ]

    currIndex = 0

    isHided = true

    render(): React.ReactNode {
        return (
            <div className="wrapper">
                <ul className="senario-list">
                    {this.indexes.map((item, i) => <li key={i}>{item.name}</li>)}
                </ul>
                <div className="hide-btn">
                    {this.isHided ? <OpenLogo /> : <CloseLogo />}
                </div>
            </div>
        )
    }
}