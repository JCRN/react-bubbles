import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import Bubbles from './Bubbles'
import ColorList from './ColorList'

const BubblePage = props => {
  const [colorList, setColorList] = useState([])

  const getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(response => {
        console.log('BubblePage .get response.data:', response.data)
        setColorList(response.data)
      })
      .catch(error => console.log('BubblePage .get error', error))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ColorList
        colors={colorList}
        history={props.history}
        updateColors={setColorList}
      />
      <Bubbles colors={colorList} />
    </>
  )
}

export default BubblePage
