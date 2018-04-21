import React from 'react';

const TileList = (props) => {
  const listItems = props.arr.map(item => {
    return (
      <li className="tile">
        <p>{item.title}</p>
        {item.artst && <p>{item.artist}</p>}
      </li>
    );
  });

  return (
    <div>

      <section>
        <h2></h2>
        <ul>
          {listItems}
        </ul>
      </section>
    </div>
  );
}

export default TileList;
