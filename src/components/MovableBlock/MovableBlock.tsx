import React, { useState } from 'react';
import MindMap from '../MindMap/MindMap';
import { data } from '../data';
import './MovableBlock.css';

const MovableBlock: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const startDragging = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setOffsetX(event.clientX - position.left);
    setOffsetY(event.clientY - position.top);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const dragBlock = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;
      setPosition({ left: x, top: y });
    }
  };

  return (
    <div
      className="movableBlock"
      style={{ left: position.left, top: position.top }}
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseMove={dragBlock}
    >
      <MindMap data={data} />
    </div>
  );
};

export default MovableBlock;
