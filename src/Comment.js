import React from 'react';
import './CommentsPage.css';
import moment from 'moment';


function Comment ( {comment} ) {
	return (<div className=''>
			<div className='Comment-right'>
				<div className='Comment-Title'>{comment.title}</div>
				<div className='Comment-Domain'>{comment.domain}</div>
				<div className='Comment-Time'> Submitted {getTime(comment.created)}by {comment.author}</div>
				<div>{comment.num_comments}
				<div className=''>	
					<i className='fa fa-comment comment-button'></i>
				</div>
				</div>
			</div>
		</div>)
}

function getTime (created) {
	return moment(created).fromNow();
}

Comment.propTypes = {
	comment: React.PropTypes.object.isRequired
};

export default Comment;
