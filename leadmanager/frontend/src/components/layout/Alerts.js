import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }


    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {

            // using join here because comes in as array, this turns it into a string for output...
            if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
            //alert.error('There is an error');
        }
        if (message != prevProps.message) {
            if(message.deleteLead) alert.success(message.deleteLead);
            if(message.addLead) alert.success(message.addLead);
        }
    }

    render() {
        return <Fragment />;
                
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});


export default connect(mapStateToProps)(withAlert()(Alerts));

//export default withAlert()(Alerts);
