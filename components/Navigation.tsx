"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation: React.FC = () => {
	const pathname = usePathname();

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/blog", label: "Blog" },
		{ path: "/teks", label: "Teks & Tips" },
		{ path: "/about", label: "About" },
	];

	const isActive = (path: string) => {
		if (path === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(path);
	};

	return (
		<nav className="w-full py-6 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="flex items-center justify-between">
					{/* Logo/Brand */}
					<Link
						href="/"
						className="flex items-center space-x-2 group"
					>
						<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-electric-blue)] to-[var(--color-neon-pink)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
							<span className="text-white font-bold text-lg">🍄</span>
						</div>
						<span className="text-xl font-bold text-[var(--color-forest-brown-dark)] hidden sm:block">
							Mycelial FunGuy
						</span>
					</Link>

					{/* Navigation Links */}
					<div className="flex items-center space-x-2 sm:space-x-4">
						{navItems.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								className={`nav-item ${
									isActive(item.path)
										? "bg-gradient-to-r from-[var(--color-electric-blue)] to-[var(--color-deep-purple)] text-white"
										: ""
								}`}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
