import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Table, Typography } from '@mui/material';

const PostDetailInfos = ({ post }) => {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mt: 5,
          mb: 2,
          color: 'black',
        }}
      >
        {post.title}
      </Typography>
      <img src={post.imageUrl} alt="" />
      <Typography
        variant="h6"
        component="h2"
        sx={{
          mt: 5,
          mb: 2,
          color: 'black',
        }}
      >
        {post.description}
      </Typography>
      <Table>
        <TableBody
          sx={{
            mt: 5,
            mb: 2,
            color: 'black',
            border: '1px solid black',
            display: 'block',
            width: 'fit-content',
            mx: 'auto',
          }}

        >
          <TableRow
            key={post.price}
            sx={{ 
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell component="th" scope="row">
              Price
            </TableCell>
            <TableCell align="right">{post.price} €</TableCell>
          </TableRow>
          <TableRow
            key={post.size}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Size
            </TableCell>
            <TableCell align="right">{post.size} cm</TableCell>
          </TableRow>
          <TableRow
            key={post.style}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Style
            </TableCell>
            <TableCell align="right">{post.style}</TableCell>
          </TableRow>
          <TableRow
            key={post.weight}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Weight
            </TableCell>
            <TableCell align="right">{post.weight} kg</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </>
  );
};

export default PostDetailInfos;