import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'


const FeedbackForm = () => {

    const [text, setText] = useState('')
    const [rating, setrating] = useState(10)
    const [btnDisdabled, setBtnDisdabled] = useState(true)
    const [message, setMessage] = useState('')

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

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>

                <RatingSelect/>

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