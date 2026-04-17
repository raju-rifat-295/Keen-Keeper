const Toast = ({ message, isVisible }) => {
    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 right-6 bg-darkGreen text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-opacity z-50">
            {message}
        </div>
    )
}

export default Toast