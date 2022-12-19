import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimePresence } from 'framer-motion'


const FeedbackList = ({ feedback, handleDelete }) => {

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback</p>
    }


    // return (
    //     <div className='feedback-list'>
    //         <AnimePresence>
    //             {feedback.map((item) => (
    //                 <motion.div>
    //                     <FeedbackItem key={item.id} item={item}
    //                         handleDelete={handleDelete} />
    //                 </motion.div>
    //             ))}
    //         </AnimePresence>
    //     </div>
    // )


      return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} 
                handleDelete={handleDelete}
                />
            ))}
        </div>
      )
}

FeedbackList.propTypes = {
    feedback: PropTypes.array,
}

export default FeedbackList