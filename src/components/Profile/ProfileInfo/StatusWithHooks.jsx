import React, { useState, useEffect } from 'react';

const StatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    const activateEdeditMode = () => {
        setEditMode(true)
    }

    const deactivateEdeditMode = () => {
        setEditMode(false);
        props.updateProfileUserStatus(status);
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
        { !editMode &&
            <div>
                <span onDoubleClick={activateEdeditMode}>{props.status || "-------" }</span>
            </div>
        }
        { editMode && 
            <div>
                <input type="text" onBlur={deactivateEdeditMode} autoFocus={true} value={status} onChange={onChangeStatus}/>
            </div>
        }
        </div>
    )
}

export default StatusWithHooks;