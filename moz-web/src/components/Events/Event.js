import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

function Event({event, onClick})
{
    return(
        <Paper className='job' onClick={onClick}>
            <div>
                <Typography variant='h5'>{event.title}</Typography>
                <Typography variant='h6'>{event.hashtags}</Typography>
            </div>
            {/*<div>
                <Typography>{job.created_at.split(" ").slice(0, 3).join(' ')}</Typography>
            </div>*/}
        </Paper>
    );
}
export default Event;