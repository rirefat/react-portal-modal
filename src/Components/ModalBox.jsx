const ModalBox = ({ onClose, title }) => {
    return (
        <div
            role="modal"
            aria-modal='true'
            className="opacity-90 absolute top-6 left-1/2 -translate-x-1/2 border w-fit px-8 py-3 flex flex-col justify-center items-center gap-8 shadow-lg rounded-md bg-slate-50"
        >
            <h2 className="text-xl text-center">{title}</h2>
            <p className="w-48 text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias impedit laudantium error corporis eius tenetur</p>

            <button
                className="bg-red-200 px-4 py-1 rounded-lg text-red-900 font-semibold"
                onClick={onClose}
            >
                Close Modal ❌
            </button>
        </div>
    );
};

export default ModalBox;