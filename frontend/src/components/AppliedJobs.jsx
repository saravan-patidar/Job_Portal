import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobs = () => {
  return (
    <div>
        <Table className=" " >
            <TableCaption>A list of your applied jobs</TableCaption>
            <TableHeader>
                <TableRow >
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[1,2,3,4].map((_,i)=>(
                    <TableRow key={i} >
                        <TableCell>17-04-2025</TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Mumbai</TableCell>
                        <TableCell className='text-right'><Badge className='bg-gray-800'>Pending</Badge></TableCell>
                    </TableRow>
                ))}
                
            </TableBody>
        </Table>

    </div>
  )
}

export default AppliedJobs