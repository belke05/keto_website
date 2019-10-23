import React, { useEffect } from 'react'
import user_management from '../../api/user-management'

import keto_background from '../../assets/images/keto_background.jpg'

export default function Home() {
  useEffect(() => {
    const user = user_management.getSessionStorageUser()
  }, [])
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${keto_background})`,
      }}
    ></div>
  )
}
