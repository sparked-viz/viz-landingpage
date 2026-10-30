import { Head } from 'vite-react-ssg';
import { Hero } from '../components/Hero';
import { VideoShowcase } from '../components/VideoShowcase';
import { HonestComparison } from '../components/HonestComparison';
import { ContinuousFlow } from '../components/ContinuousFlow';
import { AnySubject } from '../components/AnySubject';
import { Pricing } from '../components/Pricing';
// <Testimonials /> ("Educators creating with SparkEdu") is hidden for now. Re-add it above
// <Pricing /> with: import { Testimonials } from '../components/Testimonials';

export function HomePage() {
    return (
        <>
            <Head>
                <title>SparkEdu — Where Education Meets Innovation</title>
            </Head>
            <Hero />
            <VideoShowcase />
            <HonestComparison />
            <ContinuousFlow />
            <AnySubject />
            <Pricing />
        </>
    );
}
