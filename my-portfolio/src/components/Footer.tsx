export default function Footer({ darkMode }: { darkMode: boolean }) {
    return (
      <footer
        className={`py-6 text-center mt-16 border-t transition-colors duration-300 ${
          darkMode
            ? 'bg-gray-900 text-gray-300 border-gray-700'
            : 'bg-white text-black border-gray-200'
        }`}
      >
        © 2025 Mizuki Fujikawa. All rights reserved.
      </footer>
    );
  }
  