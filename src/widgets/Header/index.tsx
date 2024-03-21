import { Logo } from '../../shared/images'
import c from './index.module.scss'

export default function Header() {
	return (
		<header className={c.header}>
			<div className={`container ${c.container}`}>
				<div className={c.start}>
					<img src={Logo} alt="" />
				</div>
				<div className={c.center}></div>
				<div className={c.end}></div>
			</div>
		</header>
	)
}
