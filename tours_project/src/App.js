import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';


const App = ()=> {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => {
      return tour.id !== id
    });
    setTours(newTours);
  }
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const tours = await res.json();
      console.log(tours)
      setIsLoading(false);
      setTours(tours);

    } catch (error) {
      setIsLoading(true);
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  if (isLoading) {
    return (
      <main>
        <Loading/>
      </main>
    ) 
}

return (
  <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
)
}
export default App;