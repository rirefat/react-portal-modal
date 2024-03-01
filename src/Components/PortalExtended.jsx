import { useState } from 'react';
import ModalBox from './ModalBox';
import ExtendedPortal from './Wrapper/ExtendedPortal';

const PortalExtended = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <h1 className="text-xl my-3">Extended Portal Modal:</h1>
            <div
                className="shadow-md border border-gray-400 p-4 h-36 w-96 relative overflow-hidden text-center rounded-md"
            >
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-pink-200 px-4 py-1 rounded-lg shadow-md"
                >
                    Show Extended Portal Modal
                </button>

                {
                    showModal && <ExtendedPortal>
                        <ModalBox
                            onClose={() => setShowModal(false)}
                            title={"Extended Portal Modal"}
                        />
                    </ExtendedPortal>
                }
            </div>
        </div>
    );
};

export default PortalExtended;