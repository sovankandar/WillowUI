import { ArrowRight } from "lucide-react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function ColorsPage() {
  const colorPalettes = [
    {
      name: "Primary",
      colors: [
        { shade: "50", value: "#f7fee7", text: "text-gray-900" },
        { shade: "100", value: "#ecfccb", text: "text-gray-900" },
        { shade: "200", value: "#d9f99d", text: "text-gray-900" },
        { shade: "300", value: "#bef264", text: "text-gray-900" },
        { shade: "400", value: "#a3e635", text: "text-white" },
        { shade: "500", value: "#84cc16", text: "text-white" },
        { shade: "600", value: "#65a30d", text: "text-white" },
        { shade: "700", value: "#4d7c0f", text: "text-white" },
        { shade: "800", value: "#3f6212", text: "text-white" },
        { shade: "900", value: "#365314", text: "text-white" },
      ],
    },
    {
      name: "Secondary",
      colors: [
        { shade: "50", value: "#f9fafb", text: "text-gray-900" },
        { shade: "100", value: "#f3f4f6", text: "text-gray-900" },
        { shade: "200", value: "#e5e7eb", text: "text-gray-900" },
        { shade: "300", value: "#d1d5db", text: "text-gray-900" },
        { shade: "400", value: "#9ca3af", text: "text-white" },
        { shade: "500", value: "#6b7280", text: "text-white" },
        { shade: "600", value: "#4b5563", text: "text-white" },
        { shade: "700", value: "#374151", text: "text-white" },
        { shade: "800", value: "#1f2937", text: "text-white" },
        { shade: "900", value: "#111827", text: "text-white" },
      ],
    },
    {
      name: "Rose",
      colors: [
        { shade: "50", value: "#fff1f2", text: "text-gray-900" },
        { shade: "100", value: "#ffe4e6", text: "text-gray-900" },
        { shade: "200", value: "#fecdd3", text: "text-gray-900" },
        { shade: "300", value: "#fda4af", text: "text-gray-900" },
        { shade: "400", value: "#fb7185", text: "text-white" },
        { shade: "500", value: "#f43f5e", text: "text-white" },
        { shade: "600", value: "#e11d48", text: "text-white" },
        { shade: "700", value: "#be123c", text: "text-white" },
        { shade: "800", value: "#9f1239", text: "text-white" },
        { shade: "900", value: "#881337", text: "text-white" },
      ],
    },
    {
      name: "Chocolate",
      colors: [
        { shade: "50", value: "#edc4b3", text: "text-gray-900" },
        { shade: "100", value: "#e6b8a2", text: "text-gray-900" },
        { shade: "200", value: "#deab90", text: "text-gray-900" },
        { shade: "300", value: "#d69f7e", text: "text-gray-900" },
        { shade: "400", value: "#cd9777", text: "text-white" },
        { shade: "500", value: "#c38e70", text: "text-white" },
        { shade: "600", value: "#b07d62", text: "text-white" },
        { shade: "700", value: "#9d6b53", text: "text-white" },
        { shade: "800", value: "#8a5a44", text: "text-white" },
        { shade: "900", value: "#774936", text: "text-white" },
      ],
    },
     {
      name: "Blue",
      colors: [
        { shade: "50", value: "#e3f2fd", text: "text-gray-900" },
        { shade: "100", value: "#bbdefb", text: "text-gray-900" },
        { shade: "200", value: "#90caf9", text: "text-gray-900" },
        { shade: "300", value: "#64b5f6", text: "text-gray-900" },
        { shade: "400", value: "#42a5f5", text: "text-white" },
        { shade: "500", value: "#2196f3", text: "text-white" },
        { shade: "600", value: "#1e88e5", text: "text-white" },
        { shade: "700", value: "#1976d2", text: "text-white" },
        { shade: "800", value: "#1565c0", text: "text-white" },
        { shade: "900", value: "#0d47a1", text: "text-white" },
      ],
    },
    {
      name: "Emerald",
      colors: [
        { shade: "50", value: "#f3faf7", text: "text-gray-900" },
        { shade: "100", value: "#def7ec", text: "text-gray-900" },
        { shade: "200", value: "#bcf0da", text: "text-gray-900" },
        { shade: "300", value: "#84e1bc", text: "text-gray-900" },
        { shade: "400", value: "#31c48d", text: "text-white" },
        { shade: "500", value: "#0e9f6e", text: "text-white" },
        { shade: "600", value: "#057a55", text: "text-white" },
        { shade: "700", value: "#046c4e", text: "text-white" },
        { shade: "800", value: "#03543f", text: "text-white" },
        { shade: "900", value: "#014737", text: "text-white" },
      ],
    },
    {
      name: "Pastle",
      colors: [
        { shade: "50", value: "#fbe4ff", text: "text-gray-900" },
        { shade: "100", value: "#f2daff", text: "text-gray-900" },
        { shade: "200", value: "#e9cfff", text: "text-gray-900" },
        { shade: "300", value: "#e3c7ff", text: "text-gray-900" },
        { shade: "400", value: "#dcbfff", text: "text-white" },
        { shade: "500", value: "#d7b8ff", text: "text-white" },
        { shade: "600", value: "#d1b1ff", text: "text-white" },
        { shade: "700", value: "#c5a3ff", text: "text-white" },
        { shade: "800", value: "#bc98ff", text: "text-white" },
        { shade: "900", value: "#b28dff", text: "text-white" },
      ],
    },
    {
      name: "Silver",
      colors: [
        { shade: "50", value: "#f5efe8", text: "text-gray-900" },
        { shade: "100", value: "#dfd9d3", text: "text-gray-900" },
        { shade: "200", value: "#cbc5c0", text: "text-gray-900" },
        { shade: "300", value: "#b9b3af", text: "text-gray-900" },
        { shade: "400", value: "#a8a39f", text: "text-white" },
        { shade: "500", value: "#999491", text: "text-white" },
        { shade: "600", value: "#8b8784", text: "text-white" },
        { shade: "700", value: "#7e7b78", text: "text-white" },
        { shade: "800", value: "#73706d", text: "text-white" },
        { shade: "900", value: "#696663", text: "text-white" },
      ],
    },
    {
      name: "Meadow",
      colors: [
        { shade: "50", value: "#e3edb4", text: "text-gray-900" },
        { shade: "100", value: "#d8e6a1", text: "text-gray-900" },
        { shade: "200", value: "#cede90", text: "text-gray-900" },
        { shade: "300", value: "#c2d67e", text: "text-gray-900" },
        { shade: "400", value: "#b8cc76", text: "text-white" },
        { shade: "500", value: "#b0c26e", text: "text-white" },
        { shade: "600", value: "#9fb063", text: "text-white" },
        { shade: "700", value: "#909e54", text: "text-white" },
        { shade: "800", value: "#7c8a43", text: "text-white" },
        { shade: "900", value: "#6c7836", text: "text-white" },
      ],
    },
     {
      name: "Ocean",
      colors: [
        { shade: "50", value: "#00406c", text: "text-white" },
        { shade: "100", value: "#003a61", text: "text-white" },
        { shade: "200", value: "#003356", text: "text-white" },
        { shade: "300", value: "#002e4e", text: "text-white" },
        { shade: "400", value: "#002945", text: "text-white" },
        { shade: "500", value: "#00253e", text: "text-white" },
        { shade: "600", value: "#002137", text: "text-white" },
        { shade: "700", value: "#001a2c", text: "text-white" },
        { shade: "800", value: "#001523", text: "text-white" },
        { shade: "900", value: "#00111c", text: "text-white" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto h-[calc(100vh-4rem)]">
          <div>
            <div className="flex justify-center mb-4">
              <span className="px-1.5 py-0.5 bg-gray-200 flex items-center text-zinc-950 rounded-xl font-medium text-sm">Color Availability: Willow UI come with 10 shades of each color <ArrowRight className="inline-block ml-1 h-4 w-4" /></span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">Color System of Willow UI</h1>

            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Willow UI provides a comprehensive collection of color variations ready to be integrated into your design system. With a robust foundation of carefully curated colors, each palette includes 10 versatile shades ranging from light to dark, perfect for copy-and-paste implementation.
            </p>

            <div className="space-y-14">
              {colorPalettes.map((palette) => (
                <div key={palette.name}>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{palette.name}</h2>

                  <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
                    {palette.colors.map((color) => (
                      <div key={color.shade} className="group">
                        <div
                          className={`h-28 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-xl ${color.text}`}
                          style={{ 
                            backgroundColor: color.value,
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                          title={`${palette.name}-${color.shade}: ${color.value}`}
                        >
                          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            {color.shade}
                          </span>
                        </div>
                        <div className="mt-2 text-center">
                          <div className="text-xs font-medium text-gray-900 dark:text-white">{color.shade}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{color.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Usage Guidelines</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Primary Colors</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li>• Use for main actions and interactive elements</li>
                    <li>• 500 is the base color for most use cases</li>
                    <li>• 600-700 for hover states</li>
                    <li>• 50-100 for backgrounds and subtle accents</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Gray Colors</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li>• Use for text, borders, and backgrounds</li>
                    <li>• 900 for primary text</li>
                    <li>• 600-700 for secondary text</li>
                    <li>• 200-300 for borders and dividers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
