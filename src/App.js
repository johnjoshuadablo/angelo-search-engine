import { useState } from 'react';
import {allUsers} from '../src/constants';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'pink',
      width: '100%'
    },
    textField: {
      margin: 20,
      borderRadius: 20,
      borderWidth: 6,
    },
    listRoot: {
      width: '100%',
      // maxWidth: '36ch',
    },
    inline: {
      display: 'inline',
    },
  }),
);

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState([])

  const onSearch = (text) => {
    const newUsers = allUsers.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    setUsers(newUsers)
  }

  return (
      <div className={classes.root}>
        <h3>SEARCH A NAME</h3>
        <TextField
          onChange={(e) => onSearch(e.target.value)}
          className={classes.textField}
          placeholder="name"
          id="standard-basic"
          label="Search name"
        />
        <List className={classes.listRoot}>
          {users.map((u) => {
            return(
              <div>
                {/* <p>{u.name}</p>
                <p>{u.age}</p>
                <p>{u.description}</p> */}
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={u.name} src={u.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {u.name}
                        </Typography>
                        - {u.description}
                      </>
                    }
                  />
                </ListItem>
              </div>
            )
          })}
        </List>
      </div>
  );
}

export default App;
