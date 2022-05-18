const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className ="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                  <p className="text-white text-base text-center mx-2 cursor-pointer">Yugo</p>
                  <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
                  <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
                  <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center"> Contact us! </p>
                <p className="text-white text-sm text-center"> yugomarketplace@gmail.com </p>
            </div>
        </div>
    );
}

export default Footer;