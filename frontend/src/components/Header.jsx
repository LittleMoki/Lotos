'use client'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import russianFlag from '../../public/russia.png'
import unitedFlag from '../../public/united-kingdom.png'
import { usePathname, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname() // Получение текущего пути
	const searchParams = useSearchParams() // Получение текущих параметров запроса
	const query = Object.fromEntries(searchParams) // Преобразование параметров запроса в объект
	const{t}=useTranslation()
	
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
					<Link href='/'>Главная {t('hello')}</Link>
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
						<Link href={{ pathname, query }} locale='ru'>
							<Image
								className='cursor-pointer'
								width={24}
								height={24}
								src={russianFlag}
								alt='russianFlag'
							/>
						</Link>
						<Link href={{ pathname, query }} locale='en'>
							<Image
								className='cursor-pointer'
								width={24}
								height={24}
								src={unitedFlag}
								alt='unitedKingdomFlag'
							/>
						</Link>
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
					<Link href={{ pathname, query }} locale='ru'>
						<Image
							className='cursor-pointer'
							width={24}
							height={24}
							src={russianFlag}
							alt='russianFlag'
						/>
					</Link>
					<Link href={{ pathname, query }} locale='en'>
						<Image
							className='cursor-pointer'
							width={24}
							height={24}
							src={unitedFlag}
							alt='unitedKingdomFlag'
						/>
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	)
}
