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
                <img src={require("../../assets/images/slide_abg1.jpg")} alt="TI25" className="modal-img" />
            </div>
            <div className="modal-text">
                <div className="modalTop">
                    <div>
                        <div className="modalExplainer">Website</div>
                        <div className="modalTitle">I Know Mando</div>
                    </div>
                    <div className="link-icons">
                        <SocialIcon iconClass={"github-new-01.svg"} socialNetwork="github" />

                        <div className="modalWeblink"></div>
                    </div>
                </div>
                <p className="modalInfo">The mandolin has a rich history in some songs you’ve probably heard of, depending on how old you are. Those of a certain era will point to Maggie May, others will say Losing My Religion and more newcomers might say Winter Winds. On the other hand, if like me, you’re learning the mandolin, you’ll find it difficult to find a site that puts chords, scales and arpeggios together to learn… until now. Enter: I Know Mando.</p>
                <p className="modalInfo">The project began by sorting out the Fretboard of a Mandolin using CSS Grid. I did this because grid makes it easy to change around the layout (for alternate tunings or positions) as well as quickly allowing you to reference a specific fret. It’s also responsive which is a great help when wanting the website to be accessible on phones.</p>
                <p className="modalInfo">At this point I had a choice, use more CSS to make it look pretty or code the javascript to make it work. Well, I initially only had plans to use it myself, so I went down the javascript route, figuring if I could get all the info in, that would almost be the project complete. The site’s Javascript is fairly straight forward, with IF statements running if a change is detected on the buttons. From there, the script first hides all the circles (undoing the previous switch), and then runs the chord notes to add them back in. This allows very quick changes to be made, all within the same CSS grid.</p>

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
