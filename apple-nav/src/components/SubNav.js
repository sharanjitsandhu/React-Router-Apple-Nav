import React from "react";

function SubNav(props) {
  // console.log(props);
  const select = props.nav.find(i => `${i.name}` === props.match.params.name);
  if (!select) {
    return <h3>Loading data!</h3>;
  }
  // console.log("select:", select);
  return (
    <div className="subnav">
      {select.subLinks.map(i => (
        <div key={i.name} className="product-wrapper">
          <img src={i.img} alt={i.name} className="product-images" />
          <p className="product-names">{i.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SubNav;
