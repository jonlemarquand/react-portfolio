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

    const filterData = GridData.filter( (data) => {
        return data.stack.includes(filterTarget)
    });

    const testingData = () => console.log(filterData);

    const chooseData = (filterTarget === "all") ? GridData : filterData;

    const changeModalData = (title) => {
        setModalData(title);
        console.log(modalData);
    }

    const workCardAction = (title) => {
        openWorkModalHandler();
    }

    const worksArray = chooseData.map(data => (
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
                        <li data-value="React" onClick={changeFilter}>React</li>
                        <li data-value="Node" onClick={changeFilter}>Node</li>
                        <li data-value="Express" onClick={changeFilter}>Express</li>
                        <li data-value="MySQL" onClick={changeFilter}>MySQL</li>
                        <li data-value="PostgreSQL" onClick={changeFilter}>PostgreSQL</li>
                        <li data-value="MongoDB" onClick={changeFilter}>MongoDB</li>
                        <li data-value="PHP" onClick={changeFilter}>PHP</li>
                        <li data-value="Sass" onClick={changeFilter}>Sass</li>
                        <li data-value="Branding" onClick={changeFilter}>Branding</li>
                        <li data-value="Print" onClick={changeFilter}>Print</li>
                    </ul>
                </div>
                <div className="workgrid">
                    {worksArray}
                </div>
            </div>
        </React.Fragment>
    )
}

export default WorkGrid