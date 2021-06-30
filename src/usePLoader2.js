import React,{useState} from 'react'
import Loader2 from './Loader2'



const usePLoader2 = () => {
  const [loading, setLoading] = useState(false)
  return [
    loading ? <Loader2 /> : null,
    () => setLoading(true),
    () => setLoading(false)

  ]
}

export default usePLoader2
