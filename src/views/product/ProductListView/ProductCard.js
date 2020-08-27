import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const ProductCard = ({ className, customers, ...rest }) => {


  return (
    <Card
    // className={clsx(classes.root)}
    {...rest}
  >
    <PerfectScrollbar>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Id
              </TableCell>
              <TableCell>
                Book Name
              </TableCell>
              <TableCell>
                Price
              </TableCell>
              <TableCell>
                Author
              </TableCell>
              <TableCell>
                 Category Name
              </TableCell>
              <TableCell>
                Quantity
              </TableCell>
              <TableCell>
                Detail
              </TableCell>
              <TableCell>
                Create At
              </TableCell>
              <TableCell>
                Modify At
              </TableCell>
              <TableCell>
                Status Active
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
          
              <TableRow>
                
              </TableRow>
            
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
  );
  }

export default ProductCard;
