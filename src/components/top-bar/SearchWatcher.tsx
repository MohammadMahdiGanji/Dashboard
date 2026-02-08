// import react
import { useEffect } from "react"

// import type
import type { SearchType } from "./type"
import type { JSX } from "react"

// import formik
import { useFormikContext } from "formik"

export default function SearchWatcher():JSX.Element {

  const {values} = useFormikContext<SearchType>()

  useEffect(()=>{
    console.log(values)
  },[values.search])

  return <div>{values.search}</div>
  
}
