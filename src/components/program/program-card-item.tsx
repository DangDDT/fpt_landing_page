import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Program } from '@/interfaces/program'

const myLoader = ({ src }: { src: string }) => {
  return src;
}

interface Props {
  item: Program
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          transition: (theme) => theme.transitions.create(['box-shadow']),
          boxShadow: 5,
          '&:hover': {
            boxShadow: 10,
            cursor: 'pointer',
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            height: 200,
            mb: 2,
          }}
        >
          <Image loader={myLoader} src={item.imageUrl as string} width={570} height={427} alt={'Program ' + item.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.programName}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.date}
          </Typography>

        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
