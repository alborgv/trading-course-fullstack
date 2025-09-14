import Layout from "@/components/Layout/Layout";
import InfoCourse from "@/components/Sections/InfoCourse";
import JoinDiscord from "@/components/Sections/JoinDiscord";
import OurCourse from "@/components/Sections/OurCourse";
import Steps from "@/components/Sections/Steps";

export default function Course() {
    return (
        <Layout>
            <OurCourse />
            <Steps />
            <InfoCourse />
            <JoinDiscord />
        </Layout>
    )
}