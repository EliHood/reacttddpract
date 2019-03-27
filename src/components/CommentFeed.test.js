import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import CommentFeed from './CommentFeed';

const createProps = props => ({
    header: 'Comment Feed',
    comments:[
        {
            author: 'Ian Wilson',
            text: 'A boats a boat but a mystery box could be anything.'
          },
          {
            author: 'Max Powers Jr',
            text: 'Krypton sucks.'
          }
    ],
    createComment: jest.fn(),...props
})

describe('CommentFeed', ()=> {

    it('allows the user to add a comment', () => {
        // Arrange create props and locate the elements 
        const newComment = { author:'OwlMan', text:'Why me ?'}
        let props = createProps()

        const {container, getByLabelText } = render(
            <CommentFeed {...props} />
        )

        const authorNode = getByLabelText('Author')
        const textNode = getByLabelText('Comment')
        const formNode = container.querySelector('form')
        
        // Simulate changes to elements
        // check values in newComment
        fireEvent.change(authorNode, {
            target: { value: newComment.author}
        })

        fireEvent.change(textNode,{
            target: {value:newComment.text}
        })
        // check whether the functions were called
        fireEvent.submit(formNode)
        expect(props.createComment).toHaveBeenCalledTimes(1);
        expect(props.createComment).toHaveBeenCalledWith(newComment);
    })





})