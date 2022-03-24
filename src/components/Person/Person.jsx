import React, { useState } from 'react'
//import classNames from 'classnames';
import styles from './Person.css' // eslint-disable-line no-unused-vars
import { Button, Modal } from 'react-bootstrap'
import CardInfo from '../CardInfo'
const headshot = require('../../img/exampleHeadshot.jpeg')

const Person = ({ handleClick, isRoot, node, style }) => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const rootStyles = isRoot ? ['inner', node.gender, 'isRoot'] : ['inner', node.gender]
	let div_styles = rootStyles.join(' ')
	return (
		<div className='root' style={style}>
			<div
				className={div_styles}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
					borderRadius: ' 25px',
					padding: '20px'
				}}
			>
				<img
					className='on-hover-pointer'
					src={headshot}
					style={{
						width: '75%',
						height: '75%',
						borderRadius: '50%'
					}}
					onClick={handleShow}
				/>
				<h1 className='on-hover-pointer' onClick={handleShow}>
					{node.id}
				</h1>
				{/* <Button variant='primary' onClick={handleShow}>
					Launch demo modal
				</Button> */}
				<Modal size='lg' show={show} onHide={handleClose}>
					<Modal.Header closeButton className='flex-column'>
						<img
							src={headshot}
							style={{
								width: '33%',
								height: '33%',
								borderRadius: '50%'
							}}
							onClick={handleShow}
						/>
						<h1>{node.id}</h1>
					</Modal.Header>
					<Modal.Body>
						<CardInfo />
					</Modal.Body>
				</Modal>
			</div>
			{node.hasSubTree && (
				<div
					className='sub {node.gender}' //{classNames('sub', node.gender)}
				/>
			)}
		</div>
	)
}

export default Person
