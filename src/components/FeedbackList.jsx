import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimePresence } from 'framer-motion'
import FeedbackContext from './context/FeedbackContext'


const FeedbackList = () => {

    const {feedback} = useContext(FeedbackContext)

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
                />
            ))}
        </div>
      )
}


export default FeedbackList