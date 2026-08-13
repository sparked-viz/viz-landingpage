import { Head } from 'vite-react-ssg';
import { Hero } from '../components/Hero';
import { VideoShowcase } from '../components/VideoShowcase';
import { HonestComparison } from '../components/HonestComparison';
import { ContinuousFlow } from '../components/ContinuousFlow';
import { AnySubject } from '../components/AnySubject';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';

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
            <Testimonials />
            <Pricing />
        </>
    );
}
