import React,{useState} from 'react'
import Loader from './Loader'


const usePLoader = () => {
  const [loading, setLoading] = useState(false)
  return [
    loading ? <Loader /> : null,
    () => setLoading(true),
    () => setLoading(false)

  ]
}

export default usePLoader
