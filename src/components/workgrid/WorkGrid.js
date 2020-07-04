import React, { useState, useEffect } from "react"

import WorkCard from "./WorkCard";
import GridData from "../../data/gridData";
import Modal from "../modal/Modal";

import "./WorkGrid.scss"


const WorkGrid = () => {
    const [showWorkModal, setShowWorkModal] = useState(false);
    const [filterTarget, setFilterTarget] = useState("all");
    const [gridDataID, setGridDataID] = useState(1);
    const [modalData, setModalData] = useState({
        title: '',
        stack: ["React", "Node"],
    });
    const [modalTitle, setModalTitle] = useState("");
    const [modalStack, setModalStack] = useState(["React", "Node"]);
    const [modalImage, setModalImage] = useState("slide_abg1.jpg")
    const [modalText, setModalText] = useState("");
    const [modalGithub, setModalGithub] = useState("");
    const [modalLive, setModalLive] = useState("");



    const openWorkModalHandler = () => setShowWorkModal(true);

    const closeWorkModalHandler = () => setShowWorkModal(false);


    const changeFilter = (event) => {
        setFilterTarget(event.target.dataset.value);
        setFilterActive();
    }

    const setFilterActive = () => {
        document.querySelector(`[data-value=${filterTarget}]`).classList.toggle("filter-active");
    }

    useEffect(setFilterActive, [filterTarget]);

    const filterData = GridData.filter( (data) => {
        return data.filterStack.includes(filterTarget)
    });

    const chooseData = (filterTarget === "all") ? GridData : filterData;

    const changeModalData = () => {
        setModalTitle(GridData[gridDataID].title);
        setModalImage(GridData[gridDataID].imgOne);
        setModalStack(GridData[gridDataID].stack);
        setModalText(GridData[gridDataID].infoText);
        setModalGithub(GridData[gridDataID].github);
        setModalLive(GridData[gridDataID].live);
    }

    const workCardAction = () => {
        changeModalData();
        openWorkModalHandler();
    }

    useEffect(() => {
        workCardAction();
    },
    [gridDataID])

    const worksArray = chooseData.map(data => (
        <WorkCard
            title={data.title}
            stack={data.stack.join(" / ")}
            gridImg={data.gridImg}
            onClick={() => {
                setGridDataID(data.id-1);
            }}
                
        
        />
    ));

    return (
        <React.Fragment>
            <Modal show={showWorkModal} onCancel={closeWorkModalHandler} contentClass="place-item__modal-content" footerClass="place-item__modal-actions" title={modalTitle} images={modalImage} stack={modalStack} theModalText={modalText} github={modalGithub} livelink={modalLive}>
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
                        <li data-value="SQL" onClick={changeFilter}>SQL</li>
                        <li data-value="NoSQL" onClick={changeFilter}>NoSQL</li>
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