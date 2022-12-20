import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useState, useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from './context/FeedbackContext'

const FeedbackItem = ({item}) => {
    const {deleteFeedback} = useContext(FeedbackContext)

  return ( 
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
            <FaTimes color='purple'/>
        </button>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

FeedbackItem.propType = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem