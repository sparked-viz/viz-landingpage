import { Head } from 'vite-react-ssg';
import { AboutHero } from '../components/AboutHero';
import { WhyWeExist } from '../components/WhyWeExist';
import { WhereWereGoing } from '../components/WhereWereGoing';
import { TeamSection } from '../components/TeamSection';

export function AboutPage() {
    return (
        <>
            <Head>
                <title>About Us — SparkEdu</title>
            </Head>
            <AboutHero />
            <WhyWeExist />
            <WhereWereGoing />
            <TeamSection />
        </>
    );
}
