export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-4 text-center">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Ashad • 
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 mx-2"
        >
          GitHub
        </a> | 
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 mx-2"
        >
          LinkedIn
        </a> | 
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 mx-2"
        >
          Twitter
        </a>
      </p>
    </footer>
  );
}
