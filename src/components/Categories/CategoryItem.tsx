import React, { PropsWithChildren } from 'react'

type CategoryItemProps = {
	props: {
		color: string
		background: string
		className?: string
	}
}

const CategoryItem = ({
	children,
	props: { color, background, className = '' }
}: PropsWithChildren<CategoryItemProps>) => {
	return (
		<li
			className={`category-item ${className}`}
			style={{ color, backgroundColor: background }}
		>
			{children}
		</li>
	)
}

export default CategoryItem
