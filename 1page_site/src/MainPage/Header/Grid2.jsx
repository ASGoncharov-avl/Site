import './Grid2.css'
import { Modal } from './components/Modal.jsx';
import { useState } from 'react';

function Grid2 () {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <div className="menu">
                <div className="menu-button3"></div>
                <div className="menu-button" onClick={()=> setModalIsOpen(true)}>
                    <div className="menu-button1"></div>
                    <div className="menu-button2"></div>
                    <div className="menu-button1"></div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <div>
                    <h2>ModalInfo</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis consequuntur voluptas eius perspiciatis quidem modi iusto ex alias asperiores! Vitae officia qui magnam. Quasi, alias fuga nostrum nisi obcaecati odio.</p>
                </div>
            </Modal>
        </div>
    )
}

export default Grid2;