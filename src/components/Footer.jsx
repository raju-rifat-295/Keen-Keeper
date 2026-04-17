const Footer = () => {
    return (
        <footer className="bg-darkGreen text-white mt-20 pt-16 pb-8 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>
                <p className="text-gray-300 mb-8">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mb-12 font-semibold">
                    <p className="mb-4">Social Links</p>
                    <div className="flex justify-center gap-4">
                        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center text-darkGreen">Y</div>
                        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center text-darkGreen">f</div>
                        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center text-darkGreen">X</div>
                    </div>
                </div>

                <div className="flex justify-between text-sm text-gray-400 border-t border-gray-600 pt-8">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white">Terms of Service</span>
                        <span className="cursor-pointer hover:text-white">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer