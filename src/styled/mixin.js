export const boxShadow = (level) => {
  switch(level) {
    default : return `1px 1px 10px rgba(0, 0, 0, 0.25)`
    case 2: {
      return `2px 2px 10px rgba(0, 0, 0, 0.2)`
    }
    case 3: {
      return `3px 3px 20px rgba(0, 0, 0, 0.2)`
    }
  }
}
