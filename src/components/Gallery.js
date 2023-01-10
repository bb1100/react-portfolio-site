import React from 'react';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from './Arrow.js';
import { yourData } from "../yourdata";


// How to add items to this gallery?
const getId = index => `Project ${yourData.projects.indexOf()}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, index) => ({ id: `element-${index}` }));

function Gallery() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.findex((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu className="gallery" LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((project, index) => (
        <Card
          itemId={project.index} // NOTE: itemId is required for track items
          title={project.videoTitle}
          key={project.index}
          onClick={handleClick(index)}
          selected={isItemSelected(index)}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabindex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}

export default Gallery;