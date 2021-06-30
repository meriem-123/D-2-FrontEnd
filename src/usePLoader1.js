import React,{useState} from 'react'
import Loader1 from './Loader1'



const usePLoader1 = () => {
  const [loading, setLoading] = useState(false)
  return [
    loading ? <Loader1 /> : null,
    () => setLoading(true),
    () => setLoading(false)

  ]
}

export default usePLoader1
