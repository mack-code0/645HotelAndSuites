import styled from "styled-components";
import bg from "../../assets/images/bg5.jpg"
import room from "../../assets/images/bg.jpg"
import { FaCaretDown } from "react-icons/fa"
import { Divider } from "antd";

const LandingPage = () => {
    return (<>
        <div className="overflow-hidden">
            <Container className='h-screen w-screen'>
                <div className="w-full h-full bg-[#301551]/[0.4]">

                    <div className="p-5 flex items-center justify-center">
                        <div className="backdrop-blur-sm w-1/2 p-2 rounded-2xl">
                            <div className="w-full backdrop-blur-sm bg-[#301551]/[0.5] rounded-2xl flex justify-between p-3">
                                <a className="uppercase text-black1d px-4 py-3 font-inter font-bold text-xs bg-[#fff] rounded-xl">Offers</a>
                                <a className="uppercase text-[#fff] px-4 py-3 font-inter font-bold text-xs">Bookings</a>
                                <a className="uppercase text-[#fff] px-4 py-3 font-inter font-bold text-xs">Accomodation</a>
                                <a className="uppercase text-[#fff] px-4 py-3 font-inter font-bold text-xs">Events</a>
                                <a className="uppercase text-[#fff] px-4 py-3 font-inter font-bold text-xs">About</a>
                            </div>
                        </div>

                        <button className="mr-2 bg-[#f6d912] text-[#301551] px-5 py-3 font-figtree font-semibold rounded">Book Now</button>
                        <button className="border border-[#fff29c] text-[#fff29c] px-5 py-3 font-figtree font-semibold rounded">Contact Us</button>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-[120px] ">
                        <div className="backdrop-blur-sm w-[100px] bg-[#fff29c]/[0.5] p-1 rounded-2xl mb-6"></div>
                        <h1 className="font-prata font-black text-6xl text-center text-[#fff] leading-[80px]">
                            <span className="text-8xl">6:45</span><br /> HOTEL AND SUITES
                        </h1>
                        <span className="text-center mx-auto text-[#fff29c] font-figtree tracking-[3px] font-semibold italic">Experience Tranquility, Stay in Luxury: Your Perfect Getaway Awaits!</span>

                        <div className="backdrop-blur-sm w-[400px] bg-[#fff29c]/[0.5] p-1 rounded-2xl mt-4"></div>
                    </div>
                </div>

                <div className="w-[80%] backdrop-blur-sm bg-[#301551] rounded flex items-center justify-between p-5 absolute -bottom-[55px] left-1/2 transform -translate-x-1/2">
                    <InputCard title="Room Type" subTitle="SELECT" />
                    <Divider className="bg-white" type="vertical" />
                    <InputCard title="Checkin" subTitle="12 NOV 21" />
                    <Divider className="bg-white" type="vertical" />
                    <InputCard title="Checkout" subTitle="12 NOV 21" />
                    <Divider className="bg-white" type="vertical" />
                    <InputCard title="Rooms" subTitle="1 ROOM" />
                    <Divider className="bg-white" type="vertical" />
                    <InputCard title="Guest" subTitle="1 ADULT, 1 CHILD" />

                    <button className="bg-[#f6d912] text-[#301551] px-5 py-3 font-figtree font-semibold rounded">Search</button>
                </div>
            </Container>
        <div className="bg-[#fff29c]/[0.1] h-screen w-screen px-[50px] py-[200px]">
            <h5 className="font-prata font-bold text-3xl tracking-[5px] w-[500px] leading-[40px] mb-4">INIMITABLE LEGEND OF HOSPITALITY</h5>
            <div className="flex">
                <div className="w-1/2">
                    <img src={room} alt="" />
                </div>
                <div className="w-1/2"></div>
            </div>
        </div>
        </div>

    </>);
}

const Container = styled.div`
    background: url(${bg});
    background-size: cover;
    background-position: top center;
`

const InputCard: React.FC<{ title: string, subTitle: string }> = ({ subTitle, title }) => {
    return <div className="space-y-2">
        <p className="text-white text-xs">{title}</p>
        <button className="flex items-center text-white font-bold tracking-[0.5px]">{subTitle} <FaCaretDown className="ml-2" /></button>
    </div>
}

export default LandingPage;