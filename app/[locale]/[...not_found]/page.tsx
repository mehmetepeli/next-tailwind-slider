'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Wrench, Hammer, WrenchIcon as ScrewdriverWrench, Home, RotateCcw, DraftingCompass,
    Drill, PocketKnife, Anvil, PaintBucket, PaintRoller, PencilRuler, Plug, Warehouse, BrickWall } from 'lucide-react'

export default function NotFound() {
    const [isHovering, setIsHovering] = useState(false)

    // Floating animation for tools
    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    const tools = [Wrench, Hammer, BrickWall, ScrewdriverWrench, DraftingCompass, PaintRoller, Drill, PocketKnife,
        Anvil, PaintBucket, PencilRuler, Plug, Warehouse]

    return (
        <div className="min-h-screen bg-[#f0f9f0] relative overflow-hidden">
            {/* Isometric grid background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgLTMwIE0gLTQwIDMwIEwgNDAgLTMwIE0gMCAzMCBMIDQwIC0xMCIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            {/* Rain Container */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="rain-container">
                    {Array.from({ length: 60 }).map((_, i) => {
                        const Tool = tools[i % tools.length]
                        const delay = Math.random() * 2
                        const duration = 0.8 + Math.random() * 2
                        const leftPosition = Math.random() * 100

                        return (
                            <div
                                key={i}
                                className="rain-drop absolute text-green-600/20"
                                style={{
                                    left: `${leftPosition}%`,
                                    animation: `fall ${duration}s linear ${delay}s infinite`,
                                    top: '-20px'
                                }}
                            >
                                <Tool size={24} />
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Floating tools */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 text-green-600"
                    animate={floatingAnimation}
                >
                    <Drill size={40} />
                </motion.div>
                <motion.div
                    className="absolute top-1/3 right-1/4 text-green-700"
                    animate={floatingAnimation}
                    transition={{ delay: 0.5 }}
                >
                    <Hammer size={40} />
                </motion.div>
                <motion.div
                    className="absolute bottom-1/3 left-1/3 text-green-800"
                    animate={floatingAnimation}
                    transition={{ delay: 1 }}
                >
                    <ScrewdriverWrench size={40} />
                </motion.div>
                <motion.div
                    className="absolute bottom-20 left-1/2 text-green-800"
                    animate={floatingAnimation}
                    transition={{ delay: 1.2 }}
                >
                    <PaintRoller size={40} />
                </motion.div>
            </div>

            {/* Main content */}
            <div className="relative flex items-center justify-center min-h-screen px-4">
                <div className="text-center">
                    <motion.h1
                        className="text-8xl md:text-9xl font-extrabold tracking-widest"
                        style={{
                            WebkitTextStroke: '2px #166534',
                            color: 'transparent',
                            textShadow: '4px 4px 0px #22c55e'
                        }}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        404
                    </motion.h1>

                    <motion.div
                        className="bg-green-600 text-white px-4 py-2 text-sm rounded-md rotate-12 absolute left-1/2 -translate-x-1/2 mt-4"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Tools Not Found!
                    </motion.div>

                    <motion.div
                        className="mt-16 space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="text-xl md:text-2xl text-green-800 font-medium">
                            Looks like this workspace needs some maintenance!
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                            >
                                <Home className="mr-2" size={20} />
                                Back to Workshop
                            </Link>

                            <motion.button
                                className="inline-flex items-center justify-center px-6 py-3 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors duration-300"
                                onHoverStart={() => setIsHovering(true)}
                                onHoverEnd={() => setIsHovering(false)}
                                onClick={() => window.location.reload()}
                            >
                                <motion.div
                                    animate={{ rotate: isHovering ? 360 : 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <RotateCcw className="mr-2" size={20} />
                                </motion.div>
                                Try Again
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .rain-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .rain-drop {
          position: absolute;
          pointer-events: none;
          will-change: transform;
        }
      `}</style>
        </div>
    )
}