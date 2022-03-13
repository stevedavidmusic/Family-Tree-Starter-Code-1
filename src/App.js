import React, { useState } from 'react'
import ReactFamilyTree from 'react-family-tree'
import Person from './Person'
import InfoBox from './InfoBox'
import styles from './App.css' // eslint-disable-line no-unused-vars

import data from './example_data'
const rootId = 'Noel'

const WIDTH = 200
const HEIGHT = 250
// const HEIGHT = 180

const App = () => {
	console.log({ data })
	const [info, setInfo] = useState(null)
	return (
		<div className='root'>
			<ReactFamilyTree
				nodes={data}
				rootId={rootId}
				width={WIDTH}
				height={HEIGHT}
				canvasClassName='tree'
				renderNode={node => (
					<Person
						key={node.id}
						node={node}
						isRoot={node.id === rootId}
						style={{
							width: WIDTH,
							height: HEIGHT,
							transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`
						}}
						handleClick={() => {
							/* show the node.bio in the info box */
						}}
						type={node.type}
					/>
				)}
			/>
			<InfoBox info={info} />
		</div>
	)
}

export default App
