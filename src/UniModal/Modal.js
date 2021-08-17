import './modal.scss'

const Modal = ({children})=>{
    return (
        <div className="univ_modal">
            {children}
        </div>
    )
}

export default Modal