import { createPortal } from 'react-dom';

const Portal = ({children}) => {
    const mountElement = document.body;
    return createPortal(children, mountElement);
};

export default Portal;