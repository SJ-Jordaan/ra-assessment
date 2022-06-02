import React from "react";
import ShapeComponent from "../shape_component/ShapeComponent";
import LabelComponent from "../label_component/LabelComponent";
import Draggable from "react-draggable";

interface Props {
  onClick: () => any;
  onHold: () => any;
  currentNode : any;
  nodes : any;
  addNodeItem : any;
}

const NodeComponent: React.FC<Props> = ({ onClick, onHold, currentNode, nodes, addNodeItem }) => {

  return (    
    <Draggable
      bounds="parent"
      defaultPosition={{ x: 0, y: 0 }}
      //onStart={onHold}
    >
      <div key= {currentNode.id}>
        <LabelComponent width="3vw" height="auto" children={currentNode.label} />
        <ShapeComponent 
          render_shape={currentNode.shape}
          shape_color = {currentNode.color}
        />
      </div>
    </Draggable>
  );
};

export default NodeComponent;
