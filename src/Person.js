import React from 'react'
//import classNames from 'classnames';
import styles from './Person.css' // eslint-disable-line no-unused-vars

export default function Person({ handleClick, isRoot, node, style }) {
	const rootStyles = isRoot ? ['inner', node.gender, 'isRoot'] : ['inner', node.gender]
	let div_styles = rootStyles.join(' ')
	return (
		<div className='root' style={style}>
			<div
				className={div_styles}
				onClick={handleClick}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
					borderRadius: ' 25px',
					padding: '20px'
					// width: '200px',
					// height: '150px'
				}}
			>
				<img
					src='https://nyheadshots.com/wp-content/uploads/2018/07/headshots-1800x1207.jpg'
					style={{
						width: '50px',
						height: '50px',
						borderRadius: '50%'
					}}
				/>
				{node.id}
			</div>
			{node.hasSubTree && (
				<div
					className='sub {node.gender}' //{classNames('sub', node.gender)}
				/>
			)}
		</div>
	)
}
