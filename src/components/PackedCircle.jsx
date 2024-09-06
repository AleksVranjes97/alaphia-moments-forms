//import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import React from 'react'
import useFormContext from "../hooks/useFormContext";
import * as d3 from "d3";

const PackedCircle = ( { formattedData }) => {

  const { data } = useFormContext();

  //------------------------------//
  // Handles graph rendering (d3) //
  //------------------------------//
  const renderGraph = () => {

    var packLayout = d3.pack()
      .size([500, 500])
      .padding(10);

    var rootNode = d3.hierarchy(formattedData);

    rootNode.sum(function(d) {
      return d.value;
    });

    packLayout(rootNode);

    var nodes = d3.select("svg g")
      .selectAll('g')
      .data(rootNode.descendants())
      .join('g')
      .attr('transform', function(d) {return 'translate(' + [d.x, d.y] + ')'})

    nodes
      .append('circle')
      .attr('r', function(d) { return d.r; })
      .style('stroke', function(d) {
        if (d.data.name === "root") {
          return "";
        } else if (["External factors", "How much?", "For what?", "With whom", "Where"].includes(d.data.name)) {
          return "red";
        } else if (["Internal factors", "State of being", "Mental dialogue", "Time orientation", "Needs", "Behavioural response"].includes(d.data.name)) {
          return "orange";
        } else if (d.data.name === data.moment) {
          return "purple";
        } else {
          return "grey";
        }
      })
      .style('fill', "white")
      .style('stroke-width', function(d) {
        if (["root", "External factors", "Internal factors", data.moment].includes(d.data.name)) {
          return 3;
        } else {
          return 2;
        }
      })

      /*
    nodes.append("path")
      .attr("id", "wavy") //Unique id of the path
      .attr("d", "M 10,90 Q 100,15 200,70 Q 340,140 400,30") //SVG path
      .style("fill", "none")
      .style("stroke", "#AAAAAA");*/

    nodes
      .append('text')
      /*.append("textPath") //append a textPath to the text element
      .attr("xlink:href", "#wavy") //place the ID of the path here
      .style("text-anchor","middle") //place the text halfway on the arc
      .attr("startOffset", "50%")*/
      //.attr('dy', 4)
      .text(function(d) {
        return d.children === undefined ? d.data.name : "";
      })
      .style('font-size', function(d) {
        if (d.data.name === data.moment) {
          return "14px";
        }
        return "10px";
      });

  }

  return (
    <div ref={renderGraph}>
      <svg width="520" height="520">
        <g></g>
      </svg>
    </div>
  )
}

export default PackedCircle;