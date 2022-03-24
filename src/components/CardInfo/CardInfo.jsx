import React from 'react'

const CardInfo = props => {
	const { firstName, middleName, lastName, dateOfBirth, dateOfDeath, birthLocation } = props
	return (
		<div>
			<p>
				<span className='info-category'>Born: </span>
				<span className='info-text'>December 12, 1969 at Skokie Valley Hospital (Skokie, IL)</span>
			</p>
			{dateOfDeath && (
				<p>
					<span className='info-category'>Passed:</span>
					<span className='info-text'> December 19, 2020</span>
				</p>
			)}
			<p>
				<span className='info-category'>Countries Visited: </span>
				<span className='info-text'>Italy, Spain, The Netherlands, Germany</span>
			</p>
		</div>
	)
}

export default CardInfo
