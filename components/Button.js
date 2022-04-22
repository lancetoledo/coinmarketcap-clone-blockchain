import React from 'react'

const styles = {
    button: `bg-[#6188FF] px-5 py-2 rounded-lg`,
}

export const Button = ({label, onPress}) => {
  return (
    <button className={styles.button} onClick={onPress}>{label}</button>
  )
}
