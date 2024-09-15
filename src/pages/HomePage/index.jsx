import { Home } from "../../components"
import EthicalAiNav from "../../components/EthicalAiNav"
import Features from "../../components/Features"
import TrustedBy from "../../components/TrustedBy"
import WhoWeServe from "../../components/WhoWeServe"

const HomePage = () => {
    return (
        <>
            <Home />
            <TrustedBy />
            <Features />
            <EthicalAiNav />
            <WhoWeServe />
        </>
    )
}

export default HomePage