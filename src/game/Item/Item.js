import React, {useCallback} from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  Item: {
    display: "flex",
    alignItems: "center",
    fontWeight: 500,
    borderBottom: "1px solid teal",
    marginBottom: "10px"
  },
  ItemBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1rem",
  },
  ArrowIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "2px",
    background: "#4fbdba",
    color: "#fff",
    margin: "4px",
    cursor: "pointer",
  },
  VoteLevel: {
    fontSize: "20px"
  },
  ItemText: {
    fontSize: "1rem",
    width: "75%"
  },
  StickerImg: {
    fontSize: 30,
    lineHeight: "30px",
    marginLeft: "auto"
  }
}))

function Item({text, votes, upVote, downVote}, ...props) {
  const styles = useStyles()
  const getEmoji = useCallback((votes) => {
    if (votes >= 7) {
      return String.fromCodePoint (128518)
    } else if (votes >= 5) {
      return  String.fromCodePoint (128514)
    } else if (votes >= 3) {
      return String.fromCodePoint (128516)
    } else if (votes >= 1) {
      return String.fromCodePoint (128528)
    } else if (votes === 0) {
      return String.fromCodePoint (128529)
    } else if (votes >= -2) {
      return String.fromCodePoint (128544)
    } else {
      return String.fromCodePoint (128545)
    }
  }, [])

  return (
    <Box className={styles.Item}>
      <Box className={styles.ItemBtn}>
        <ArrowUpward onClick={upVote} className={styles.ArrowIcon}/>
        <Typography className={styles.VoteLevel}>
          {votes}
        </Typography>
        <ArrowDownward onClick={downVote} className={styles.ArrowIcon}/>
      </Box>
      <Box className={styles.ItemText}>
        {text}
      </Box>
      <Box className={styles.StickerImg}>
        {getEmoji(votes)}
      </Box>
    </Box>
  );
}

export default Item;
