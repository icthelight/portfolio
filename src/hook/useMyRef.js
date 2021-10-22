import {useEffect, useState} from "react";
import { throttle } from 'throttle-debounce';

export const useMyRef = () => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = throttle(1000,() => {
      const sct = window.scrollY || window.pageYOffset;
      if (sct > 700) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }

  }, [])
  return scrolled
}
