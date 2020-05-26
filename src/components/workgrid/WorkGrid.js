import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import WorkCard from "./WorkCard";
import GridData from "../../data/gridData";
import Modal from "../modal/Modal";

import "./WorkGrid.scss"


const WorkGrid = () => {
    const [showWorkModal, setShowWorkModal] = useState(false);
    const [filterTarget, setFilterTarget] = useState("all");
    const [modalData, setModalData] = useState("");



    const openWorkModalHandler = () => setShowWorkModal(true);

    const closeWorkModalHandler = () => setShowWorkModal(false);


    const changeFilter = (event) => {
        setFilterTarget(event.target.dataset.value);
        setFilterActive();
    }

    const setFilterActive = () => {
        document.querySelector(`[data-value=${filterTarget}]`).classList.toggle("filter-active");
    }

    useEffect(setFilterActive);

    const changeModalData = (title) => {
        setModalData(title);
        console.log(modalData);
    }

    const workCardAction = (title) => {
        openWorkModalHandler();
    }

    const worksArray = GridData.map(data => (
        <WorkCard
            title={data.title}
            stack={data.stack.join(" / ")}
            gridImg={data.gridImg}
            onClick={workCardAction}
        />
    ));

    return (
        <React.Fragment>
            <Modal show={showWorkModal} onCancel={closeWorkModalHandler} contentClass="place-item__modal-content" footerClass="place-item__modal-actions">
                <div className="map-container">
                </div>
            </Modal>
            <div className="work-container">
                <div className="filter">
                    <div className="filter-intro">Filter By:</div>
                    <ul>
                        <li data-value="all" onClick={changeFilter}>All</li>
                        <li data-value="react" onClick={changeFilter}>React</li>
                        <li data-value="node" onClick={changeFilter}>Node</li>
                        <li data-value="express" onClick={changeFilter}>Express</li>
                        <li data-value="mysql" onClick={changeFilter}>MySQL</li>
                        <li data-value="postgresql" onClick={changeFilter}>PostgreSQL</li>
                        <li data-value="mongodb" onClick={changeFilter}>MongoDB</li>
                        <li data-value="php" onClick={changeFilter}>PHP</li>
                        <li data-value="php" onClick={changeFilter}>Sass</li>
                        <li data-value="branding" onClick={changeFilter}>Branding</li>
                        <li data-value="print" onClick={changeFilter}>Print</li>
                    </ul>
                </div>
                <div className="workgrid">
                    {worksArray}
                </div>
            </div>
        </React.Fragment>
    )
}

WorkGrid.propTypes = {
    siteTitle: PropTypes.string,
}

WorkGrid.defaultProps = {
    siteTitle: ``,
}

export default WorkGrid