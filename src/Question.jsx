import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
    const [visibility, setVisibility] = useState(false);

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn" onClick = {() => setVisibility((visibility) => !visibility)}>{visibility === false ? '+' : '-'}</button>
			</header>
			{/* make this render conditionally */}
			<p>{visibility===false ? null : info}</p>
		</article>
	)
}

export default Question
