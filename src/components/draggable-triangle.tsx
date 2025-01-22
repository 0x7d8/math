import React, { useState, useRef } from "react"

export default function DraggableTriangle() {
  const [points, setPoints] = useState([
    { x: 50, y: 150 },
    { x: 150, y: 150 },
    { x: 100, y: 50 }
  ])

  const [draggedPoint, setDraggedPoint] = useState<{ index: number, offsetX: number, offsetY: number } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    const svgRect = svgRef.current!.getBoundingClientRect()
    const scale = svgRef.current!.viewBox.baseVal.width / svgRect.width

    setDraggedPoint({
      index,
      offsetX: e.clientX - (points[index].x / scale + svgRect.left),
      offsetY: e.clientY - (points[index].y / scale + svgRect.top)
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedPoint) return
    
    const svgRect = svgRef.current!.getBoundingClientRect()
    const scale = svgRef.current!.viewBox.baseVal.width / svgRect.width
    
    const x = (e.clientX - svgRect.left + draggedPoint.offsetX) * scale
    const y = (e.clientY - svgRect.top + draggedPoint.offsetY) * scale
    
    setPoints(points.map((p, i) => 
      i === draggedPoint.index ? { x, y } : p
    ))
  }

  const handleMouseUp = () => {
    setDraggedPoint(null)
  }

  const getMidpoint = (p1: { x: number, y: number }, p2: { x: number, y: number }) => ({
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2 + 15
  })

  return (
		<svg
			ref={svgRef}
			viewBox={'0 0 200 200'}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
		>
			<path
				d={`M ${points[0].x},${points[0].y} 
						L ${points[1].x},${points[1].y} 
						L ${points[2].x},${points[2].y} Z`}
				fill={'none'}
				stroke={'rgb(39, 39, 42)'}
				strokeWidth={1}
			/>
			
			{([
				[0, 1, 'c'],
				[1, 2, 'a'],
				[2, 0, 'b']
			] as const).map(([i, j, label]) => {
				const mid = getMidpoint(points[i], points[j])
				return (
					<text
						key={label}
						x={mid.x}
						y={mid.y}
						textAnchor={'middle'}
						className={'text-sm font-bold'}
						fill={'white'}
					>
						{label}
					</text>
				)
			})}
			
			{points.map((point, index) => (
				<React.Fragment key={index}>
					<circle
						cx={point.x}
						cy={point.y}
						r={3}
						fill={'rgb(39, 39, 42)'}
						cursor={'move'}
						onMouseDown={handleMouseDown(index)}
					/>

					<text
						x={point.x + (index === 0 ? -10 : index === 1 ? 10 : 0)}
						y={point.y + (index === 2 ? -10 : 10)}
						textAnchor={'middle'}
						className={'text-sm font-bold'}
						fill={'white'}
					>
						{String.fromCharCode(65 + index)}
					</text>
				</React.Fragment>
			))}
		</svg>
  )
}