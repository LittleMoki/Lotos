import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { t, i18n } = useTranslation()
	const navigate = useNavigate()
	const changeLanguage = language => {
		i18n.changeLanguage(language)
		navigate(`/${language}`, { replace: true })
	}
	return (
		<Navbar
			maxWidth='2xl'
			className='bg-accent'
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<NavbarBrand>
					<p className='font-bold text-inherit'>Lotos</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarItem>
					<Link href='/'>Главная</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/'>О нас</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/'>Производство</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/'>Контакты</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem>
					<div className='sm:flex hidden gap-3'>
						<img
							className='cursor-pointer'
							width={40}
							height={40}
							src='/russia.png'
							alt='russianFlag'
							onClick={() => changeLanguage('ru')}
						/>
						<img
							className='cursor-pointer'
							width={40}
							height={40}
							src='/usa.png'
							alt='unitedKingdomFlag'
							onClick={() => changeLanguage('en')}
						/>
					</div>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu className='bg-black/50'>
				<NavbarMenuItem>
					<Link href='/'>Главная</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/'>О нас</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/'>Производство</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href='/'>Контакты</Link>
				</NavbarMenuItem>
				<NavbarMenuItem className='flex gap-3'>
					<img
						className='cursor-pointer'
						width={40}
						height={40}
						src='/russia.png'
						alt='russianFlag'
					/>
					<img
						className='cursor-pointer'
						width={40}
						height={40}
						src='/usa.png'
						alt='unitedKingdomFlag'
					/>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	)
}
