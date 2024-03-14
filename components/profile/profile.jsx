import avatarSrc from './avatar.png';
import Image from "next/image";

export function Profile() {
	return (
			<div className="flex items-center gap-2 text-start text-teal-600">
				<Image src={avatarSrc} width={48} height={48} alt="avatar" unoptimized/>
				<div>
					<div className="text-lg leading-tight">User 34928</div>
					<div className="text-teal-400 text-xs leading-tight">Рейтинг: 300</div>
				</div>
			</div>
	);
}