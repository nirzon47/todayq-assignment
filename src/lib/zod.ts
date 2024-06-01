// Zod types for global usage

import { z } from 'zod'

export const SigninFormType = z.object({
	email: z.string().email(),
	password: z.string(),
})

export const SignupFormType = z
	.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string(),
		confirmPassword: z.string().optional(),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (!confirmPassword) return

		// Check if password and confirm password are the same
		if (confirmPassword && confirmPassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'Passwords do not match',
			})
		}
	})

export const OfferingFormType = z.object({
	category: z.enum(['content-distribution', 'advertisement', '']),
	name: z.string(),
	url: z.string(),
	desc: z.string(),
	email: z.string().email(),
	telegram: z.string(),
	gambling: z.boolean(),
	adult: z.boolean(),
	web3: z.boolean(),
})
