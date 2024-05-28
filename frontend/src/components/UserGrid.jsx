import { Grid } from '@chakra-ui/react'
import React from 'react'
import UserCard from './UserCard'
import { USERS } from '../dummy/dummy'

const UserGrid = () => {
  return (
    <Grid 
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} 
        gap={5}
    >
    { USERS.map((user)=>{
        return (
            <UserCard key={user.id} user={user} />
        )
    })}
    </Grid>
  )
}

export default UserGrid