import { PropsWithChildren } from 'react'

import './styles.scss'

type ListProps = {
	className?: string
}

type ListItemProps = {
	className?: string
}

export const List = ({
	children,
	className = ''
}: PropsWithChildren<ListProps>) => {
	return <ul className={`common-list ${className}`}>{children}</ul>
}

export const ListItem = ({
	children,
	className = ''
}: PropsWithChildren<ListItemProps>) => {
	return <li className={className}>{children}</li>
}
