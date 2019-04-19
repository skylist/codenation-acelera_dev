import React, { Fragment } from 'react'
const highlightText = (str, highlighter) =>
	str
		.split(new RegExp(`(${highlighter.toLowerCase()})`, 'ig'))
		.map((word, index) => (
			<Fragment key={index + str}>
				{word.toLowerCase() === highlighter.toLowerCase() ? (
					<mark key={`${str}`}>{word}</mark>
				) : (
					word
				)}
			</Fragment>
		))

const slugify = str =>
	str
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.trim()

export { slugify, highlightText }
