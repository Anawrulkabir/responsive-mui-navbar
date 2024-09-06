import * as React from 'react'
import Drawer from '@mui/joy/Drawer'
import DialogContent from '@mui/joy/DialogContent'
import ModalClose from '@mui/joy/ModalClose'
import Sheet from '@mui/joy/Sheet'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { HiOutlineUser } from 'react-icons/hi2'
import VerifiedIcon from '@mui/icons-material/Verified'

export default function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const [type, setType] = React.useState('Guesthouse')
  const [amenities, setAmenities] = React.useState([0, 6])

  return (
    <div>
      <div className="flex items-center justify-between bg-[#060418] w-full py-3 ">
        <button onClick={() => setOpen(true)}>
          <HiOutlineMenuAlt2 className="text-3xl" />
        </button>

        <div>
          <h2 className="text-3xl font-normal">BeyondOTC</h2>
        </div>
        <div>
          <HiOutlineUser className="text-3xl" />
        </div>
      </div>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
          className="bg-white"
        >
          <ModalClose />
          <div className="">
            <div className="text-4xl font-medium flex flex-col justify-center gap-8 mt-24  mx-8 ">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
                Home
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
                Services
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
                Team
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
                Deals
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
                Blog
              </div>
            </div>
            <div className="w-2/3 rounded-md bg-gradient-to-r from-[#5D03FF] via-[#5D03FF] to-[#5D03FF] px-1 py-3 mt-8 mx-8 text-xl font-semibold">
              <div className="flex h-full  items-center justify-center from-[#3B0995] via-[#3B0995] to-[#6B20F2]">
                <h1 className="text-md text-white ms-1">Validate</h1>
                <VerifiedIcon
                  sx={{ fontSize: 'midium', fontWeight: 'semibold' }}
                  className=" p-1 text-white"
                />
              </div>
            </div>
          </div>

          <DialogContent sx={{ gap: 2 }}>
            {/* <FormControl>
              <RadioGroup
                value={type || ''}
                onChange={(event) => {
                  setType(event.target.value)
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns:
                      'repeat(auto-fill, minmax(140px, 1fr))',
                    gap: 1.5,
                  }}
                >
                  {[
                    {
                      name: 'Home',
                      icon: <HomeRoundedIcon />,
                    },
                    {
                      name: 'Services',
                      icon: <ApartmentRoundedIcon />,
                    },
                    {
                      name: 'Team',
                      icon: <MeetingRoomRoundedIcon />,
                    },
                    {
                      name: 'Deals',
                      icon: <HotelRoundedIcon />,
                    },
                    {
                      name: 'Blog',
                      icon: <HotelRoundedIcon />,
                    },
                  ].map((item) => (
                    <Card
                      key={item.name}
                      sx={{
                        boxShadow: 'none',
                        '&:hover': { bgcolor: 'background.level1' },
                      }}
                    >
                      <CardContent>
                        {item.icon}
                        <Typography level="title-md">{item.name}</Typography>
                      </CardContent>
                      <Radio
                        disableIcon
                        overlay
                        checked={type === item.name}
                        variant="outlined"
                        color="neutral"
                        value={item.name}
                        sx={{ mt: -2 }}
                        slotProps={{
                          action: {
                            sx: {
                              ...(type === item.name && {
                                borderWidth: 2,
                                borderColor:
                                  'var(--joy-palette-primary-outlinedBorder)',
                              }),
                              '&:hover': {
                                bgcolor: 'transparent',
                              },
                            },
                          },
                        }}
                      />
                    </Card>
                  ))}
                </Box>
              </RadioGroup>
            </FormControl> */}

            {/* <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
              Amenities
            </Typography> */}
            {/* <div role="group" aria-labelledby="rank">
              <List
                orientation="horizontal"
                size="sm"
                sx={{ '--List-gap': '12px', '--ListItem-radius': '20px' }}
              >
                {['Wi-fi', 'Washer', 'A/C', 'Kitchen'].map((item, index) => {
                  const selected = amenities.includes(index)
                  return (
                    <ListItem key={item}>
                      <AspectRatio
                        variant={selected ? 'solid' : 'outlined'}
                        color={selected ? 'primary' : 'neutral'}
                        ratio={1}
                        sx={{
                          width: 20,
                          borderRadius: 20,
                          ml: -0.5,
                          mr: 0.75,
                        }}
                      >
                        <div>{selected && <Done fontSize="md" />}</div>
                      </AspectRatio>
                      <Checkbox
                        size="sm"
                        color="neutral"
                        disableIcon
                        overlay
                        label={item}
                        variant="outlined"
                        checked={selected}
                        onChange={(event) =>
                          setAmenities((prev) => {
                            const set = new Set([...prev, index])
                            if (!event.target.checked) {
                              set.delete(index)
                            }
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            return [...set]
                          })
                        }
                        slotProps={{
                          action: {
                            sx: {
                              '&:hover': {
                                bgcolor: 'transparent',
                              },
                            },
                          },
                        }}
                      />
                    </ListItem>
                  )
                })}
              </List>
            </div> */}

            {/* <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 2 }}>
              Booking options
            </Typography> */}
            {/* <FormControl orientation="horizontal">
              <Box sx={{ flex: 1, pr: 1 }}>
                <FormLabel sx={{ typography: 'title-sm' }}>
                  Instant booking
                </FormLabel>
                <FormHelperText sx={{ typography: 'body-sm' }}>
                  Listings that you can book without waiting for host approval.
                </FormHelperText>
              </Box>
              <Switch />
            </FormControl> */}

            {/* <FormControl orientation="horizontal">
              <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                <FormLabel sx={{ typography: 'title-sm' }}>
                  Self check-in
                </FormLabel>
                <FormHelperText sx={{ typography: 'body-sm' }}>
                  Easy access to the property when you arrive.
                </FormHelperText>
              </Box>
              <Switch />
            </FormControl> */}
          </DialogContent>
        </Sheet>
      </Drawer>
    </div>
  )
}
