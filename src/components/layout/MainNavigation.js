import { useContext } from 'react'
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import FavoriteContext from '../../store/favorites-context'

function MainNavigation() {
  const favoriteCtx = useContext(FavoriteContext)

  return <header className={classes.header}>
    <h2 className={classes.logo}>React Meetups</h2>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>New Meetup</Link>
        </li>
        <li>
          <Link to='/favorites'>
            Favorites
            <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainNavigation