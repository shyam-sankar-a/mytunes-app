import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { MailOutlineRounded, VisibilityRounded, VisibilityOffRounded, DoneRounded, RadioButtonUncheckedRounded } from '@mui/icons-material';
import { motion } from "framer-motion";
import { passwordValidations } from '../constants/loginConstants';
import useMediaQuery from '../utilities/mediaScreen';

const Login = () => {
    const isLargeScreen = useMediaQuery("(min-width: 1060px)");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => { event.preventDefault() };

    const handleToggleSigninOut = () => {
        const loginContainerDiv = document.getElementById('login-container');
        const signUpContainerDiv = document.getElementById('signup-container');

        setTimeout(() => {
            loginContainerDiv.classList.contains('hidden') ?
                loginContainerDiv.classList.remove('hidden') :
                loginContainerDiv.classList.add('hidden');

            signUpContainerDiv.classList.contains('hidden') ?
                signUpContainerDiv.classList.remove('hidden') :
                signUpContainerDiv.classList.add('hidden');
        }, 200);
    };

    const handleClickSignin = () => { };
    const handleClickSignup = () => {
        const signUpContainerDiv = document.getElementById('signup-container');
        const verifyOtpContainer = document.getElementById('otp-container');

        setTimeout(() => {
            signUpContainerDiv.classList.contains('hidden') ?
                signUpContainerDiv.classList.remove('hidden') :
                signUpContainerDiv.classList.add('hidden');

            verifyOtpContainer.classList.contains('hidden') ?
                verifyOtpContainer.classList.remove('hidden') :
                verifyOtpContainer.classList.add('hidden');
        }, 200);
    };
    const handleClickVerify = () => { };
    const handleClickResend = () => { };

    return (
        <div className='login-siginup-wrapper md:flex md:items-center md:justify-center h-screen w-screen overflow-hidden font-playfair'>

            {isLargeScreen ? (
                <>
                    {/* Sign In  */}
                    <motion.div
                        id='login-container'
                        className='flex flex-row h-screen w-full'
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50, y: 0 },
                            visible: { opacity: 1, x: 0, y:0 },
                        }}
                    >
                        <div className='bg-black w-1/2 flex flex-col items-center justify-center opacity-80'>
                            <h4 className='text-white font-semibold text-[30px] leading-loose'>
                                Welcome Back
                            </h4>
                            <h5 className='text-white font-regular text-[18px] leading-6 px-10'>
                                Feel the music and discover million plus music streams at the biggest online Music Store.
                                Play any song, no interruptions hear the music you love without ads on mobile or web.
                            </h5>
                        </div>
                        <div className='bg-white w-1/2 flex flex-col items-start justify-center px-20'>
                            <div className='text-blue font-bold text-[48px]'>Sign In</div>
                            <div className='py-4 w-full'>
                                <form>
                                    <div className='flex flex-col gap-4'>
                                        <div className='email-container'>
                                            <div className='font-normal text-blue text-[16px]'>Email</div>
                                            <TextField
                                                id="login-email"
                                                name="email"
                                                hiddenLabel
                                                color='neutral'
                                                variant="outlined"
                                                fullWidth
                                                size='small'
                                                autoComplete='off'
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <MailOutlineRounded />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div className='password-container'>
                                            <div className='font-normal text-blue text-[16px]'>Password</div>
                                            <TextField
                                                id="login-password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                hiddenLabel
                                                color='neutral'
                                                variant="outlined"
                                                fullWidth
                                                size='small'
                                                autoComplete='off'
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                edge="end"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div className='signin-btn-container'>
                                            <Button variant="contained" color='neutral' className='textSizeMedium' fullWidth sx={{ fontWeight: "bold" }} onClick={handleClickSignin}>
                                                Sign In
                                            </Button>
                                        </div>
                                        <div className='account-container flex items-center justify-center'>
                                            <span className='text-question'>Don't have an account?</span>
                                            <span>
                                                <Button color='highlight' sx={{ fontWeight: "bold" }} onClick={handleToggleSigninOut}>
                                                    Sign Up
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sign up  */}
                    <motion.div
                        id='signup-container'
                        className='flex flex-row h-screen w-full hidden'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className='bg-white w-1/2 flex flex-col items-start justify-center px-20'>
                            <div className='text-blue font-bold text-[48px]'>Create Account</div>
                            <div className='py-4 w-full'>
                                <form>
                                    <div className='flex flex-col gap-6'>
                                        <div className='email-container'>
                                            <div className='font-normal text-blue text-[16px]'>Email</div>
                                            <TextField
                                                id="signup-email"
                                                name="email"
                                                hiddenLabel
                                                color='neutral'
                                                variant="outlined"
                                                fullWidth
                                                size='small'
                                                autoComplete='off'
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <MailOutlineRounded />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div className='flex flex-row gap-4 w-full'>
                                            <div className='password-container w-1/2'>
                                                <div className='font-normal text-blue text-[16px]'>Password</div>
                                                <TextField
                                                    id="signup-password"
                                                    name="signup-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="outlined"
                                                    fullWidth
                                                    size='small'
                                                    autoComplete='off'
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    edge="end"
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {showPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <div className='confirm-password-container w-1/2'>
                                                <div className='font-normal text-blue text-[16px]'>Confirm Password</div>
                                                <TextField
                                                    id="signup-password-confirm"
                                                    name="confirm-password"
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="outlined"
                                                    fullWidth
                                                    size='small'
                                                    autoComplete='off'
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    edge="end"
                                                                    onClick={handleClickShowConfirmPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {showConfirmPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className='signin-btn-container'>
                                            <Button variant="contained" color='neutral' className='textSizeMedium' fullWidth sx={{ fontWeight: "bold" }} onClick={handleClickSignup}>
                                                Sign Up
                                            </Button>
                                        </div>
                                        <div className='password-validate-info text-highlight w-full flex flex-col'>
                                            {passwordValidations.map((items, idx) => (
                                                <div className='flex flex-row gap-1 uppercase-validation' key={`validation-test-${idx}`}>
                                                    <div className='flex items-center hidden'>
                                                        <DoneRounded sx={{ fontSize: 14 }} />
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <RadioButtonUncheckedRounded sx={{ fontSize: 10 }} color="primary" />
                                                    </div>
                                                    <div className='font-normal text-[14px]'>{items}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='account-container flex items-center justify-center'>
                                            <span className='text-question'>Already a member?</span>
                                            <span>
                                                <Button color='highlight' sx={{ fontWeight: "bold" }} onClick={handleToggleSigninOut}>
                                                    Sign In
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='bg-black w-1/2 flex flex-col items-center justify-center opacity-80'>
                            <h4 className='text-white font-semibold text-[30px] leading-loose'>
                                Welcome Aboard
                            </h4>
                            <h5 className='text-white font-regular text-[18px] leading-6 px-10'>
                                Get millions of music streams produced by original artists select the package and enjoy premium access.
                                Unlimited ad free music on any devices. Sign up and start listening.
                            </h5>
                        </div>
                    </motion.div>

                    {/*Verify OTP  */}
                    <motion.div
                        id='otp-container'
                        className='flex flex-row h-screen w-full hidden'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50, y: 0 },
                            visible: { opacity: 1, x: 0, y:0 },
                        }}
                    >
                        <div className='bg-white w-1/2 flex flex-col items-start justify-center px-20'>
                            <div className='text-blue font-bold text-[48px]'>Verify OTP</div>
                            <div className='py-4 w-full'>
                                <form>
                                    <div className='flex flex-col gap-4 w-full'>
                                        <div className='otp-container flex flex-row gap-4'>
                                            <TextField
                                                id="otp-first-number"
                                                name="otp-first"
                                                color='neutral'
                                                variant="standard"
                                                size='small'
                                                autoComplete='off'
                                                autoFocus
                                                sx={{ width: "50px" }}
                                                InputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 1 }}
                                            />
                                            <TextField
                                                id="otp-second-number"
                                                name="otp-second"
                                                hiddenLabel
                                                color='neutral'
                                                variant="standard"
                                                size='small'
                                                autoComplete='off'
                                                sx={{ width: "50px" }}
                                            />
                                            <TextField
                                                id="otp-third-number"
                                                name="otp-third"
                                                hiddenLabel
                                                color='neutral'
                                                variant="standard"
                                                size='small'
                                                autoComplete='off'
                                                sx={{ width: "50px" }}
                                            />
                                            <TextField
                                                id="otp-fourth-number"
                                                name="otp-four"
                                                hiddenLabel
                                                color='neutral'
                                                variant="standard"
                                                size='small'
                                                autoComplete='off'
                                                sx={{ width: "50px" }}
                                            />
                                        </div>
                                        <div className='resend-otp-container'>
                                            <span className='text-question'>Don't receive otp?</span>
                                            <span>
                                                <Button variant='text' color='highlight' sx={{ fontWeight: "bold" }} onClick={handleClickResend}>
                                                    Resend
                                                </Button>
                                            </span>
                                        </div>
                                        <div className='signin-btn-container'>
                                            <Button variant="contained" color='neutral' className='textSizeMedium' sx={{ fontWeight: "bold" }} onClick={handleClickVerify}>
                                                Verify
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='bg-black w-1/2 flex flex-col items-center justify-center opacity-80'>
                            <h4 className='text-white font-semibold text-[30px] leading-loose'>
                                OTP Verification
                            </h4>
                            <h5 className='text-white font-regular text-[18px] leading-6 px-10'>
                                Please enter the OTP sent on your registered email address.
                            </h5>
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    {/* Sign in mobile */}
                    <motion.div
                        id='login-container'
                        className='flex flex-col h-screen w-full'
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className='flex items-center justify-center h-screen w-full opacity-95 px-8'>
                            <div className='bg-white lg-shadow rounded w-full p-6'>
                                <div className='text-blue font-bold text-[38px]'>Sign In</div>
                                <div className='py-4 w-full'>
                                    <form>
                                        <div className='flex flex-col gap-4'>
                                            <div className='email-container'>
                                                <div className='font-normal text-blue text-[16px]'>Email</div>
                                                <TextField
                                                    id="login-email"
                                                    name="email"
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="outlined"
                                                    fullWidth
                                                    size='small'
                                                    autoComplete='off'
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <MailOutlineRounded />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <div className='password-container'>
                                                <div className='font-normal text-blue text-[16px]'>Password</div>
                                                <TextField
                                                    id="login-password"
                                                    name="password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="outlined"
                                                    fullWidth
                                                    size='small'
                                                    autoComplete='off'
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    edge="end"
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {showPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <div className='signin-btn-container'>
                                                <Button variant="contained" color='neutral' className='textSizeMedium' fullWidth sx={{ fontWeight: "bold" }} onClick={handleClickSignin}>
                                                    Sign In
                                                </Button>
                                            </div>
                                            <div className='account-container flex items-center justify-center'>
                                                <span className='text-question'>Don't have an account?</span>
                                                <span>
                                                    <Button color='highlight' sx={{ fontWeight: "bold" }} onClick={handleToggleSigninOut}>
                                                        Sign Up
                                                    </Button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sign up mobile */}
                    <motion.div
                        id='signup-container'
                        className='flex flex-col h-screen w-full hidden'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className='flex items-center justify-center h-screen w-full opacity-95 px-8'>
                            <div className='bg-white lg-shadow rounded w-full p-6'>
                                <div className='text-blue font-bold text-[38px]'>Create Account</div>
                                <div className='py-4 w-full'>
                                    <form>
                                        <div className='flex flex-col gap-3'>
                                            <div className='email-container'>
                                                <div className='font-normal text-blue text-[16px]'>Email</div>
                                                <TextField
                                                    id="signup-email"
                                                    name="email"
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="outlined"
                                                    fullWidth
                                                    size='small'
                                                    autoComplete='off'
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <MailOutlineRounded />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <div className='password-container'>
                                                <div className='font-normal text-blue text-[16px]'>Password</div>
                                                <TextField
                                                    id="signup-password"
                                                    name="signup-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="outlined"
                                                    fullWidth
                                                    size='small'
                                                    autoComplete='off'
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    edge="end"
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {showPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <div className='confirm-password-container'>
                                                <div className='font-normal text-blue text-[16px]'>Confirm Password</div>
                                                <TextField
                                                    id="signup-password-confirm"
                                                    name="confirm-password"
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="outlined"
                                                    fullWidth
                                                    size='small'
                                                    autoComplete='off'
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    edge="end"
                                                                    onClick={handleClickShowConfirmPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {showConfirmPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <div className='signin-btn-container'>
                                                <Button variant="contained" color='neutral' className='textSizeMedium' fullWidth sx={{ fontWeight: "bold" }} onClick={handleClickSignup}>
                                                    Sign Up
                                                </Button>
                                            </div>
                                            <div className='password-validate-info text-highlight w-full flex flex-col'>
                                                {passwordValidations.map((items, idx) => (
                                                    <div className='flex flex-row gap-1 uppercase-validation' key={`validation-test-${idx}`}>
                                                        <div className='flex items-center hidden'>
                                                            <DoneRounded sx={{ fontSize: 14 }} />
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <RadioButtonUncheckedRounded sx={{ fontSize: 10 }} color="primary" />
                                                        </div>
                                                        <div className='font-normal text-[14px]'>{items}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='account-container flex items-center justify-center'>
                                                <span className='text-question'>Already a member?</span>
                                                <span>
                                                    <Button color='highlight' sx={{ fontWeight: "bold" }} onClick={handleToggleSigninOut}>
                                                        Sign In
                                                    </Button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Verify OTP mobile */}
                    <motion.div
                        id='otp-container'
                        className='flex flex-col h-screen w-full hidden'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50, },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className='flex items-center justify-center h-screen w-full opacity-95 px-8'>
                            <div className='bg-white lg-shadow rounded w-full p-6'>
                                <div className='text-blue font-bold text-[38px]'>Verify OTP</div>
                                <div className='py-4 w-full'>
                                    <form>
                                        <div className='flex flex-col gap-4 w-full'>
                                            <div className='otp-container flex flex-row gap-4'>
                                                <TextField
                                                    id="otp-first-number"
                                                    name="otp-first"
                                                    color='neutral'
                                                    variant="standard"
                                                    size='small'
                                                    autoComplete='off'
                                                    autoFocus
                                                    sx={{ width: "50px" }}
                                                    InputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 1 }}
                                                />
                                                <TextField
                                                    id="otp-second-number"
                                                    name="otp-second"
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="standard"
                                                    size='small'
                                                    autoComplete='off'
                                                    sx={{ width: "50px" }}
                                                />
                                                <TextField
                                                    id="otp-third-number"
                                                    name="otp-third"
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="standard"
                                                    size='small'
                                                    autoComplete='off'
                                                    sx={{ width: "50px" }}
                                                />
                                                <TextField
                                                    id="otp-fourth-number"
                                                    name="otp-four"
                                                    hiddenLabel
                                                    color='neutral'
                                                    variant="standard"
                                                    size='small'
                                                    autoComplete='off'
                                                    sx={{ width: "50px" }}
                                                />
                                            </div>
                                            <div className='resend-otp-container'>
                                                <span className='text-question'>Don't receive otp?</span>
                                                <span>
                                                    <Button variant='text' color='highlight' sx={{ fontWeight: "bold" }} onClick={handleClickResend}>
                                                        Resend
                                                    </Button>
                                                </span>
                                            </div>
                                            <div className='signin-btn-container'>
                                                <Button variant="contained" color='neutral' className='textSizeMedium' fullWidth sx={{ fontWeight: "bold" }} onClick={handleClickVerify}>
                                                    Verify
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}

        </div>
    )
}

export default Login