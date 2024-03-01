import { useState } from "react";
import ModalBox from "./ModalBox";

const TraditionalModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <h1 className="text-xl my-3">Traditional Modal:</h1>
            <div
                className="shadow-md border border-gray-400 p-4 h-36 w-96 relative overflow-hidden text-center rounded-md"
            >
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-200 px-4 py-1 rounded-lg shadow-md"
                >
                    Show Traditional Modal
                </button>

                {
                    showModal && <ModalBox
                        onClose={() => setShowModal(false)}
                        title={"Traditional Modal"}
                    />
                }
            </div>
        </div>
    );
};

export default TraditionalModal;