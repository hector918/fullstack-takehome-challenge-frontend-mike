import { useEffect, useState } from 'react';
import srv from '../fetch_.js';

export default function AllRafflesComponent() {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [allRaffles, setAllRaffles] = useState([]);
  ///////////////////////////////////
  useEffect(() => {
    setIsloading(true);
    srv.getAllRaffles(resp => {
      console.log(resp);
      if (resp.error) {
        setIsError(resp.error);
      } else {

      }
      setIsloading(true);
    })
  }, []);
  ///////////////////////////////////
  function render() {
    if (isError !== "") {
      return <div></div>
    } else {
      if (isLoading) {
        return <div></div>
      } else {
        return <div></div>
      }
    }
  }
  ///////////////////////////////////
  return <div>
    all raffles
  </div>
}