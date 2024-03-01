import { useState } from "react";
import Portal from "./Portal";
import ModalBox from "./ModalBox";


const PortalWrapperModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <h1 className="text-xl my-3">Portal Wrapper Modal:</h1>
            <div
                className="shadow-md border border-gray-400 p-4 h-36 w-96 relative overflow-hidden text-center rounded-md"
            >
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-green-200 px-4 py-1 rounded-lg shadow-md"
                >
                    Show Portal Wrapper Modal
                </button>

                {
                    showModal && <Portal>
                        <ModalBox
                            onClose={() => setShowModal(false)}
                            title={"Portal Wrapper Modal"}
                        />
                    </Portal>
                }
            </div>
        </div>
    );
};

export default PortalWrapperModal;