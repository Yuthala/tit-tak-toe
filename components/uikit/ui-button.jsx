import clsx from 'clsx';

/**
 * JSDoc описание типов props
 * @param {{
 * children,
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline'
 * }} props
 */

export function UiButton({children, className, size, variant}) {

	const buttonClassName = clsx(
		//общие стили для всех вариантов кнопок
		'transition-colors',

		//текст кнопки
		className,

		//стили в зависимости от size
		{
			md: "rounded px-6 py-2 text-sm leading-tight",
			lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
		}[size],

		//стили в зависимости от variant
		{
			primary: "bg-teal-600 hover:bg-teal-500 text-white",
			outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
		}[variant],
	);

	return <button className={buttonClassName}>{children}</button>;
}