import classnames from 'classnames';
import PropTypes from 'prop-types';

import SpinLoader from '../spin-loader/spin-loader.component';

import './overlay-loader.styles.scss';

const OverlayLoader = ({ loading, loadingText }) =>  (
    <div className={classnames("capture-overlay", { active: loading })}>
        <SpinLoader />
        <h5 className="capture-text">{loadingText}</h5>
    </div>
);

OverlayLoader.defaultProps = {
    loading: false,
    loadingText: ""
}

OverlayLoader.propTypes = {
    loading: PropTypes.bool,
    loadingText: PropTypes.string
};

export default OverlayLoader;