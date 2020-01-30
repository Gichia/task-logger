import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteTech } from '../../redux/tech/tech.actions';

import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {

    const onDelete = id => {
        deleteTech(id);

        M.toast({ html: 'Tech deleted!' });
    };

    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                <a 
                    href="#!" 
                    className="secondary-content"
                    onClick={() => onDelete(id)}
                >
                    <i className="material-icons grey-text">delete</i>
                </a>
                <a href="#edit-tech-modal" className="secondary-content">
                    <i className="material-icons yellow-text">create</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
