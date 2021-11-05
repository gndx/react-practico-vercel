import React from 'react';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
	return (
		<div className={styles.NewPassword}>
			<div className={styles['NewPassword-container']}>
				<Image src={logo} alt="logo" className={styles.logo} />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new passwrd for yue account</p>
				<form action="/" className={styles.form}>
					<label for="password" className={styles.label}>Password</label>
					<input type="password" id="password" placeholder="*********" className={styles.input, styles['input-password']} />
					<label for="new-password" className={styles.label}>Password</label>
					<input type="password" id="new-password" placeholder="*********" className={styles.input, styles['input-password']} />
					<input type="submit" value="Confirm" className={styles['primary-button'], styles['login-button']} />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;
