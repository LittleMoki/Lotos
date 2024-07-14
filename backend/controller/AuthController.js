import prisma from '../db/db.config.js'

export const RegisterUser = async (req, res) => {
	const { first_name, second_name, email, login, password } = req.body

	const validateUser = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	if (validateUser) return res.status(400).json({ error: 'This email exist' })

	const createUser = await prisma.user.create({
		data: {
			first_name,
			second_name,
			full_name: `${first_name} ${second_name}`,
			email,
			login,
			password,
		},
	})

	return res.status(200).json({ data: createUser })
}
