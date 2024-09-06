'use client'

// import assets from '@/assets' // don't have the assets
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useMediaQuery, useTheme } from '@mui/material'
// import { getUserInfo, isLoggedIn, removeUser } from '@/services/auth.services'
// import { logout } from '@/services/actions/logout'
import { useRouter } from 'next/navigation'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import VerifiedIcon from '@mui/icons-material/Verified'
import MobileNav from '../MobileNav/MobileNav'

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<{ id: string } | null>(null)
  const [isTop, setIsTop] = useState(true)
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  }

  useEffect(() => window.addEventListener('scroll', controlNavbar), [])

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = await getUserInfo()
      setUserInfo(user)
      router.refresh()
    }

    fetchUserInfo()
  }, [])

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = async () => {
    removeUser()
    await logout()
    setUserInfo(null)
    router.refresh()
  }

  return (
    <div
      className={`w-full fixed top-0 z-50 ${
        isTop
          ? ' bg-opacity-10 '
          : 'bg-gradient-to-tr from-[#0C0022] via-[#0C0022] to-[#0C0022] shadow-md'
      }`}
    >
      {/* <div className="bg-[#0C0022] text-white"> */}
      <div className="wrapper text-white">
        <Grid sx={{}} container py={2} alignItems="center">
          <Grid item xs={6} md={4} lg={3}>
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Image
                // src={assets.images.logo} // I dont have any access of assets right now
                src={'/favicon.ico'}
                width={50}
                height={30}
                alt="logo"
              />
              <h1 className="text-2xl ms-1 text-white">BeyondOTC</h1>
            </Box>
          </Grid>

          {isMobile ? (
            // <Grid item xs={6} md={8} lg={9} sx={{ textAlign: 'right' }}>
            //   <IconButton
            //     edge="start"
            //     color="primary"
            //     aria-label="menu"
            //     onClick={handleMenuOpen}
            //   >
            //     <MenuIcon />
            //   </IconButton>
            //   <Menu
            //     anchorEl={anchorEl}
            //     anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            //     keepMounted
            //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            //     open={Boolean(anchorEl)}
            //     onClose={handleMenuClose}
            //   >
            //     <MenuItem component={Link} href="/" onClick={handleMenuClose}>
            //       Home
            //     </MenuItem>
            //     <MenuItem
            //       component={Link}
            //       href="/services"
            //       onClick={handleMenuClose}
            //     >
            //       Services
            //     </MenuItem>

            //     <MenuItem
            //       component={Link}
            //       href="/team"
            //       onClick={handleMenuClose}
            //     >
            //       Team
            //     </MenuItem>
            //     <MenuItem
            //       component={Link}
            //       href="/deals"
            //       onClick={handleMenuClose}
            //     >
            //       Deals
            //     </MenuItem>
            //     <MenuItem
            //       component={Link}
            //       href="/Blog"
            //       onClick={handleMenuClose}
            //     >
            //       Blog
            //     </MenuItem>
            //     <MenuItem onClick={handleMenuClose}>
            //       <div className="flex justify-center gap-3 text-white">
            //         <div className="h-10 w-[92px] rounded-md bg-gradient-to-r from-[#5D03FF] via-[#5D03FF] to-[#5D03FF] p-0.5">
            //           <div className="flex h-full w-full items-center justify-center from-[#3B0995] via-[#3B0995] to-[#6B20F2]">
            //             <h1 className="text-md text-white ms-1">Validate</h1>
            //             <VerifiedIcon
            //               sx={{ fontSize: 'midium', fontWeight: 'semibold' }}
            //               className=" p-1"
            //             />
            //           </div>
            //         </div>
            //         <Link href="/login">
            //           <div className="h-10 w-[85px] rounded-md bg-gradient-to-r from-[#FF7F50] via-[#5D03FF] to-[#5D03FF] p-0.5">
            //             <div className="flex h-full w-full items-center justify-center bg-[#0C0022]">
            //               <h1 className="text-md text-white ms-1">Login</h1>
            //               <LoginIcon
            //                 sx={{ fontSize: 'midium', fontWeight: 'semibold' }}
            //                 className=" p-1"
            //               />
            //             </div>
            //           </div>
            //         </Link>
            //       </div>
            //     </MenuItem>
            //   </Menu>
            // </Grid>
            <MobileNav />
          ) : (
            <Grid
              item
              container
              xs={6}
              md={8}
              lg={9}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs>
                <Stack
                  direction="row"
                  spacing={4}
                  alignItems="center"
                  justifyContent="center"
                  className="text-3xl"
                >
                  <Typography
                    component={Link}
                    href="/"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '18px',
                    }}
                  >
                    Home
                  </Typography>
                  <Typography
                    component={Link}
                    href="/services"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '18px',
                    }}
                  >
                    Services
                  </Typography>
                  <Typography
                    component={Link}
                    href="/team"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '18px',
                    }}
                  >
                    Team
                  </Typography>
                  <Typography
                    component={Link}
                    href="/deals"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '18px',
                    }}
                  >
                    Deals
                  </Typography>
                  <Typography
                    component={Link}
                    href="/blog"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '18px',
                    }}
                  >
                    Blog
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                {/* <AuthButton /> */}
                <>
                  {/* <button className="">
                 <span className="absolute inset-0 border-2 border-gradient "></span>
                 <span className="relative">Login</span>
               </button> */}
                  <div className="flex justify-center gap-3">
                    <div className="h-10 w-[92px] rounded-md bg-gradient-to-r from-[#5D03FF] via-[#5D03FF] to-[#5D03FF] p-0.5">
                      <div className="flex h-full w-full items-center justify-center from-[#3B0995] via-[#3B0995] to-[#6B20F2]">
                        <h1 className="text-md text-white ms-1">Validate</h1>
                        <VerifiedIcon
                          sx={{ fontSize: 'midium', fontWeight: 'semibold' }}
                          className=" p-1"
                        />
                      </div>
                    </div>
                    <Link href="/login">
                      <div className="h-10 w-[85px] rounded-md bg-gradient-to-r from-[#FF7F50] via-[#5D03FF] to-[#5D03FF] p-0.5">
                        <div className="flex h-full w-full items-center justify-center bg-[#0C0022]">
                          <h1 className="text-md text-white ms-1">Login</h1>
                          <LoginIcon
                            sx={{ fontSize: 'midium', fontWeight: 'semibold' }}
                            className=" p-1"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              </Grid>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  )
}

export default Navbar
