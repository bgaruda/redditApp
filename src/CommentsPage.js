import React from 'react';
import './CommentsPage.css';
import Comment from './Comment';

function CommentsPage ( {comments} ) {
		return (<ul className=''>
			{comments.map((comment)=>
				<li key={comment.id} className='CommentsPage-Comment'>
				 	<Comment comment={comment}></Comment>
				</li>
			)}
			</ul>)
}

CommentsPage.propTypes = {
	comments: React.PropTypes.array.isRequired
};

export default CommentsPage;