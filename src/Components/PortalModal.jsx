import { useState } from 'react';
import ModalBox from './ModalBox';
import { createPortal } from 'react-dom';

const PortalModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <h1 className="text-xl my-3">React Portal Modal:</h1>
            <div
                className="shadow-md border border-gray-400 p-4 h-36 w-96 relative overflow-hidden text-center rounded-md"
            >
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-purple-200 px-4 py-1 rounded-lg shadow-md"
                >
                    Show React Portal Modal
                </button>

                {
                    showModal && createPortal(<ModalBox
                        onClose={() => setShowModal(false)}
                        title={"React Portal Modal"}
                    />, document.body)
                }
            </div>
        </div>
    );
};

export default PortalModal;