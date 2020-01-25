import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLogs } from '../../redux/log/log.actions';

import LogItem from '../log-item/log-item.component';
import Preloader from '../preloader/preloader.component';

const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if(loading || logs === null) {
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {
                !loading && logs.length === 0 
                ?
                    (
                        <p className="center">No logs to show...</p>
                    ) 
                :
                    (
                        logs.map(log => 
                            <LogItem log={log} key={log.id} />
                        )
                    )
            }
        </ul>
    )
}

export const mapStateToProps = ({ log }) => ({
    log, 
});

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
    getLogs,
})(Logs);
