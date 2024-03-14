import { GameTitle } from '../components/game';
import {Header} from '../components/header';

export default function HomePage() {
  return (
	<div className="bg-slate-50 min-h-screen">
		<Header />
		<main className="pt-6 mx-auto max-w-[616h]">
			<GameTitle />
		</main>
	</div>
  );
}
