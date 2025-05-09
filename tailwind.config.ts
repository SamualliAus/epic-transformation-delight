
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				epic: {
					blue: '#0EA5E9',
					orange: '#F97316',
					yellow: '#FEC84B',
					green: '#4ADE80',
					"light-blue": '#BAE6FD',
					"light-orange": '#FFEDD5',
					"light-yellow": '#FEF9C3',
					"light-green": '#DCFCE7',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-10px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(10px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'morph': {
					'0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
					'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' }
				},
				'scroll-down': {
					'0%': { transform: 'translateY(0)', opacity: '0.8' },
					'50%': { opacity: '0.4' },
					'100%': { transform: 'translateY(10px)', opacity: '0' }
				},
				'draw-line': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-in-hover': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.5s ease-out forwards',
				'pulse-soft': 'pulse-soft 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 15s linear infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
				'draw-line': 'draw-line 1.5s ease-in-out forwards',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'scale-in-hover': 'scale-in-hover 0.2s ease-out forwards'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function({ addUtilities }) {
			const newUtilities = {
				'.clip-path-blob': {
					clipPath: 'polygon(60% 0, 75% 40%, 100% 60%, 75% 100%, 40% 100%, 20% 60%, 0 30%, 20% 0)'
				},
				'.clip-path-angle': {
					clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
				},
				'.text-shadow-sm': {
					textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
				},
				'.text-shadow-md': {
					textShadow: '0 2px 4px rgba(0, 0, 0, 0.12)'
				},
				'.text-shadow-lg': {
					textShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
				},
				'.glow-blue': {
					filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.5))'
				},
				'.glow-orange': {
					filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.5))'
				},
				'.glow-yellow': {
					filter: 'drop-shadow(0 0 8px rgba(254, 200, 75, 0.5))'
				},
				'.glow-green': {
					filter: 'drop-shadow(0 0 8px rgba(74, 222, 128, 0.5))'
				},
			}
			addUtilities(newUtilities)
		})
	],
} satisfies Config;
