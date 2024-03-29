import Image from "next/image";
import logoSrc from './logo.svg';
import {Profile} from '../profile';
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export function Header() {
	return (
		<header className="flex h-24 items-center px-8 bg-white shadow-lg">
			<Image src={logoSrc} alt="logo"/>
			<div className="w-px h-8 bg-slate-200 mx-6"/>
			<UiButton className="w-44" variant="primary" size="lg">Играть</UiButton>
			{/* <button className="w-44 bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg px-5 py-2 text-2xl leading-tight">Играть</button> */}
			<button className="ml-auto flex items-center gap-2 text-start text-teal-600"></button>
			<Profile name="User 515" rating="1208"/>
			<ArrowDownIcon />
		</header>
	)
}