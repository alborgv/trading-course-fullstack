import LearnToTrade from "@/components/Sections/LearnToTrade";
import Services from "@/components/Sections/Services";
import Layout from "@/components/Layout/Layout";
import YourProgressOurMission from "@/components/Sections/YourProgressOurMission";
import Benefits from "@/components/Sections/Benefits";
import ReadyForLearn from "@/components/Sections/ReadyForLearn";

export default function Home() {
    return (
        <Layout>
            <LearnToTrade />
            <Services />
            <YourProgressOurMission />
            <Benefits />
            <ReadyForLearn />
        </Layout>
    )
}