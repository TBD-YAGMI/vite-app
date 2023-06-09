import LandingCard from '../components/Home/LandingCard';
import { Footer } from '../components';

export default function Home() {
	return (
		<>
			<main className="flex flex-col items-center min-w-full min-h-[50vh]">
				<div className="flex flex-col items-center my-10">
					<h1 className="text-white font-chromate text-6xl mb-8">
						Crowdfunding with a sprinkle of DeFi
					</h1>
					<p className="text-white mb-8 text-lg max-w-[60%] text-center">
						Harness the power of your community with YAGMI, and unlock the
						potential of your most talented members through DeFi
					</p>
				</div>
				<div className="flex min-w-full justify-center space-x-5">
					<LandingCard
						title="Support a champion"
						text="Choose a DAO, get to know their champions and what they offer"
						btnText="Marketplace"
						circleColor="#3030D0"
						href="/marketplace"
					/>
					<LandingCard
						title="Propose a champion"
						text="Ready to amplify your impact? Kickstart the process here"
						btnText="DAO Dashboard"
						circleColor="#00DEB5"
						href="/dashboard/0x85317a021541263540bFe56A665239Db71e17026"
					/>
				</div>
			</main>
			<Footer />
		</>
	);
}
