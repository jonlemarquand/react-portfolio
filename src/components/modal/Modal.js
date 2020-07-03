import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import SocialIcon from "../shared/SocialIcon";

import './Modal.scss';

const ModalOverlay = props => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <div className="modal-img-container">
                <img src={require(`../../assets/images/${props.images}`)} alt="TI25" className="modal-img" />
            </div>
            <div className="modal-text">
                <div className="exitCross" onClick={props.onCancel}>&times;
</div>
                <div className="modalTop">
                    <div>
                        <div className="modalExplainer">{props.stack.join(" / ")}</div>
                        <div className="modalTitle">{props.title}</div>
                    </div>
                    <div className="link-icons">
                        <SocialIcon iconClass={"github-new-01.svg"} socialNetwork="github" />

                        <div className="modalWeblink"></div>
                    </div>
                </div>
                {props.theModalText}
            </div>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
                <ModalOverlay {...props} />
            </CSSTransition>
        </React.Fragment>
    );
};

export default Modal;
