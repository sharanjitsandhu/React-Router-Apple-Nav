import React from "react";

function SubNav(props) {
  const select = props.nav.find(i => `${i.name}` === props.match.params.name);
  if (!select) {
    return <h3>Loading data!</h3>;
  }
  console.log(select);
  return (
    <div>
      {select.subLinks.map(i => (
        <div key={i.name}>
          <p>{i.name}</p>
          <img src={i.img} alt={i.name} />
        </div>
      ))}
    </div>
  );
}

export default SubNav;
