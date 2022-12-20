import React, { useContext, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'

const FeedbackForm = () => {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisdabled, setBtnDisdabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback} = useContext(FeedbackContext)

    const handleTextChange = (e) => {

        if(text === '') {
            setBtnDisdabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be atleast 10 characters')
            setBtnDisdabled(true)
        } else {
            setBtnDisdabled(false)
            setMessage(null)
        }


        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback)

            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>

                <RatingSelect select={(rating) => setRating(rating)} />

                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write a Review" />
                    <Button type='submit' isDisabled={btnDisdabled}>Send</Button>
                </div>

                {message && <div className='message'>{message}</div>}

            </form>
        </Card>
    )
}

export default FeedbackForm