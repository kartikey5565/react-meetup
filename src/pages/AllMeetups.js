import { useState, useEffect } from 'react'
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setloadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)

    fetch(
      'https://react-meetups-e99b6-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json() // .json() returns a promise
    }).then(data => {
      // transform in an array
      const meetups = []
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        }
        meetups.push(meetup)
      }

      setIsLoading(false)
      setloadedMeetups(meetups)
      console.log({ meetups })
    })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return <section>
    <h1>All meetup page</h1>
    <MeetupList meetups={loadedMeetups} />
  </section>
}

export default AllMeetupsPage