import React, { Component } from 'react'
// import './App.css'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'

class BarChart extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {
      const node = this.node
      const dataMax = max(this.props.data.map((el) => el.amount))
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
   select(node)
      .selectAll('rect')
      .data(this.props.data.map((el) => el.amount))
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.props.data.map((el) => el.amount))
      .exit()
      .remove()

   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 50)
      .attr('y', d => this.props.size[1] - yScale(d.amount))
      .attr('height', d => yScale(d.amount))
      .attr('width', 50)
      .append('text').text((d,i) => {return d.type});
   }
render() {
      return (
         <div className='dataSection'>
            <h3>Emission Breakdown</h3>
            <svg ref={node => this.node = node}
            width={500} height={500}>
            </svg>
         </div>
         )
   }
}
export default BarChart