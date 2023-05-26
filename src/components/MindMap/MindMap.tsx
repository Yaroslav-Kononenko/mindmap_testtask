import React, { useState } from 'react';

interface Node {
  id: string;
  text: string;
  children: Node[];
}

interface MindMapProps {
  data: Node;
}

const MindMap: React.FC<MindMapProps> = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

  const toggleNode = (id: string) => {
    if (expandedNodes.includes(id)) {
      setExpandedNodes(expandedNodes.filter(nodeId => nodeId !== id));
    } else {
      setExpandedNodes([...expandedNodes, id]);
    }
  };

  const renderNode = (node: Node) => {
    const isExpanded = expandedNodes.includes(node.id);

    return (
      <div key={node.id}>
        <div onClick={() => toggleNode(node.id)}>
          {node.text}
        </div>
        {isExpanded && node.children.map(renderNode)}
      </div>
    );
  };

  return (
    <div>
      {renderNode(data)}
    </div>
  );
};

export default MindMap;
