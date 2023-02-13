import { PropsWithChildren } from 'react'

import './styles.scss'

export const List = ({ children }: PropsWithChildren) => {
	return <ul className='common-list'>{children}</ul>
}

export const ListItem = ({ children }: PropsWithChildren) => {
	return <li>{children}</li>
}
