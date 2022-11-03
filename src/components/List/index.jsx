import { ThemeContext } from '@emotion/react';
import { Badge, Card, CloseButton, createStyles, Pagination } from '@mantine/core';
import { useContext, useState } from 'react';
import { When } from 'react-if';
// import { SettingsContext } from '../../Context/Settings';
import { SettingsContext } from '../Context/settings';

const useStyles = createStyles((theme) => ({
  badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs
  }
}))


const List = ({ list, toggleComplete, deleteItem }) => {

  const { classes } = useStyles();

  const { pageItems, showCompleted } = useContext(SettingsContext)
  const [page, setPage] = useState(1);

  // pagination
  const listToRender = showCompleted ? list : list.filter(item => !item.complete);
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd);

  return (
    <>
      {displayList.map(item => (
        <Card key={item.id} withBorder>
          <Card.Section withBorder>
            <Badge onClick={() => toggleComplete(item.id)} className={classes.badge} color={item.complete ? "green" : "red"} variant="filled">
              {item.complete ? 'complete' : 'pending'}
            </Badge>
            {item.assignee}
            <CloseButton title="Delete" onClick={() => deleteItem(item.id)} />
          </Card.Section>
          <p align="left">{item.text}</p>
          {/* <p><small>Assigned to: {item.assignee}</small></p> */}
          <p align="right"><small>Difficulty: {item.difficulty}</small></p>
          {/* <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div> */}

        </Card>
      ))}

      <When condition={listToRender.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount}/>
      </When>
    </>
  )
}

export default List;