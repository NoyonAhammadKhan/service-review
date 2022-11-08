import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
	const {emailRegister}=useContext(AuthContext);
	const handleEmailRegister=(event)=>{
		const form = event.target;
		const email= form.email.value;
		const password = form.password.value;

		emailRegister(email,password)
		.then(result=>{
			const user = result.user;
			console.log(user);
		})
	}
    return (
             <div className="ml-auto mr-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
	
	</div>
	<form onSubmit={handleEmailRegister} novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full btn  px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign Up</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign In</a>.
			</p>
		</div>
	</form>
</div>
       
    );
};

export default Register;