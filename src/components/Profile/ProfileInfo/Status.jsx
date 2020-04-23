import React from 'react';

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    offEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateProfileUserStatus(this.state.status);
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            { !this.state.editMode && 
                <div>
                    <span onDoubleClick={this.onEditMode} >{ this.props.status || "-------" }</span>
                </div>
            }
            { this.state.editMode && 
                <div>
                    <input  onBlur={this.offEditMode} 
                            type="text" 
                            value={ this.state.status } 
                            autoFocus={true}
                            onChange={this.onChangeStatus}/>
                </div>
            }
            
        </div>
    }
}

export default Status;