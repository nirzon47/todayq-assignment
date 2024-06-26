import Link from 'next/link'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import AuthProviderButtons from '@/components/auth/AuthProviderButtons'
import SigninForm from '@/components/auth/SigninForm'

export const metadata = {
	title: 'Sign In | Content Offerings',
	description: 'Sign in to Content Offerings',
}

const SignIn = () => {
	return (
		<Card className='mx-auto max-w-sm'>
			<CardHeader>
				<CardTitle className='text-2xl'>Sign In</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='grid gap-4'>
					<SigninForm />
					<AuthProviderButtons />
				</div>
				<div className='mt-4 text-center text-sm'>
					Don&apos;t have an account?{' '}
					<Link href='/auth/signup' className='underline'>
						Sign up
					</Link>
				</div>
				<Link
					href='/'
					className='mt-4 block text-center text-sm duration-150 hover:text-primary hover:underline'
				>
					Back to Home
				</Link>
			</CardContent>
		</Card>
	)
}

export default SignIn
