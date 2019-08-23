import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return (
        <div>
  <div className="ui attached tabular menu">
    <Link to="/" className="item">Home</Link>
    <Link to="/characters" className="item">Characters</Link>
    <Link to="/locations" className="item">Locations</Link>
    <Link to="/episodes" className="item">Episodes</Link>
  </div>
</div>
    )

};

