import React, {useCallback, useEffect, useState} from 'react';
import {makeStyles, Box, Typography} from "@material-ui/core";
import Item from "../Item/Item";
import axios from "axios";
import MyLoader from "../../components/UI/loader/MyLoader";

const useStyles = makeStyles(theme => ({
  ItemsList: {
    display: "flex",
    width: "80vw",
    height: "80vh"
  },
  ItemsListSidebar: {
    background: "#4FBDBA",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    textAlign: "center",
    borderRadius: "2px 0 2px 2px",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)"
  },
  ItemsListTitle: {
    // whiteSpace: "nowrap",
    fontSize: "3rem",
    color: "#fff",
    fontWeight: "bold",
    margin: "60"
  },
  ImgWrapper: {
    width: "120px",
    // borderRadius: "50%",
    overflow: "hidden"
  },
  ImgSidebar: {
    width: "120px",
    borderRadius: "50%",
    transform: "translateY(12px)"
  },
  ItemsListSticker: {
    height: "90%",
    width: "70%",
    borderRadius: "0 2px 2px 0",
    padding: "10px 20px",
    background: "#fff",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
    overflow: "auto",
  }
}))

function ItemsList(props) {
  const classes = useStyles()
  const [jokes, setJokes] = useState(null)

  async function getEmoji() {
    const newEmoji = []

    for (let i = 0; i < 7; i++) {
      const response = await axios.get(`https://icanhazdadjoke.com/`, {
        headers: {
          Accept: "application/json"
        }
      })
      newEmoji.push({id: response.data.id, text: response.data.joke, votes: 0})
    }

    setJokes(newEmoji)
  }

  useEffect(() => {
    getEmoji()
  }, [])

  const voteHandler = useCallback((id, offset) => {
    const filteredJokes = jokes.filter(item => item.id !== id)
    const currentJoke = jokes.find(item => item.id === id)
    currentJoke.votes += offset

    filteredJokes.push(currentJoke)
    filteredJokes.sort((a, b) => b.votes - a.votes)

    setJokes(filteredJokes)
  }, [jokes, setJokes])

  if (jokes) {
    return (
      <Box className={classes.ItemsList}>
        <Box className={classes.ItemsListSidebar}>
          <Typography className={classes.ItemsListTitle}>
            Hi there!
          </Typography>
          <div className={classes.ImgWrapper}>
            <img
              className={classes.ImgSidebar}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="user image"/>
          </div>
        </Box>
        <Box className={classes.ItemsListSticker}>
          {jokes.map((item) => (
            <Item
              votes={item.votes}
              key={item.id}
              text={item.text}
              upVote={() => {
                voteHandler(item.id, 1)
              }}
              downVote={() => {
                voteHandler(item.id, -1)
              }}
            />)
          )}

        </Box>
      </Box>
    );
  } else {
    return <MyLoader/>
  }
}

export default ItemsList;
