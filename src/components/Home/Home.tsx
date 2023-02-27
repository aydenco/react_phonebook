import React, {Suspense} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import {Navbar} from '../../components/Navbar'
import {Link} from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
  header: {
    color: 'green',
  }
});

export const Home = (props:Props) => {
  return (
    <div>
        A line of generic text
        <h3>{props.title}</h3>
    </div>
  )
}
