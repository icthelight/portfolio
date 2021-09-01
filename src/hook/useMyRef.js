import {useEffect, useState} from "react";

export const useMyRef = () => {

  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const handler = () => {
      const sct = window.scrollY || window.pageXOffset;
      if (sct > 700) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }

  }, [])
  return scrolled
}
