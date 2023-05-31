import React from 'react';
import './MindMap.scss';

interface Node {
  id: string;
  text?: string;
  children: Node[];
}

const MindMap: React.FC = () => {
  return (
    <div className='mindThree'>
      <NodeThree data={data} />
    </div>
  );
};

export const data: Node = {
  id: '1',
  text: 'Categories',
  children: [
    {
      id: '2',
      text: 'Node 1',
      children: [
        {
          id: '3',
          text: 'Node 1.1',
          children: []
        },
        {
          id: '4',
          text: 'Node 1.2',
          children: []
        },
        {
          id: '6',
          text: 'Node 2',
          children: [
            {
              id: '7',
              text: 'Node 2',
              children: []
            },
            {
              id: '8',
              text: 'Node 2',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: '5',
      text: 'Node 2',
      children: []
    }
  ]
};

type NodeProps = {
  data: any;
};

const NodeThree: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="node">
      <div className="node__text">{data.text}</div>
      {data.children && (
        <div className="children">
          {data.children.map((child: any) => (
            <NodeThree key={child.id} data={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MindMap;
