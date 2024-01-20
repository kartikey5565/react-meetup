import { useContext } from 'react'

import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import FavoritesContext from '../../store/favorites-context'

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext)
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      // already a favorite, remove it
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        descrioption: props.descrioption,
        address: props.address,
        image: props.image,
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from favourites' : 'Add to favourites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem