import React, { useState } from 'react'
import ReactFamilyTree from 'react-family-tree'
import styles from './App.css' // eslint-disable-line no-unused-vars
import 'bootstrap/dist/css/bootstrap.min.css'

import data from './example_data'
import Person from './components/Person'
const rootId = 'Noel'

const WIDTH = 350
const HEIGHT = 350
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
		</div>
	)
}

export default App
