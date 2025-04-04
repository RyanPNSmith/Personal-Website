import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-background-primary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary">Your Name</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#about" className="text-text-secondary hover:text-primary transition-colors">About</Link>
              <Link href="#projects" className="text-text-secondary hover:text-primary transition-colors">Projects</Link>
              <Link href="#contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-background-secondary flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Welcome to My Website</h1>
          <p className="text-xl text-text-secondary">I'm a passionate developer building amazing things</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-background-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">About Me</h2>
          <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto">
            I'm a software developer with a passion for creating beautiful and functional applications.
            I specialize in web development and love working with modern technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-background-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-background-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <p className="text-lg text-text-secondary text-center mb-8">
              Feel free to reach out to me through any of these channels:
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:your.email@example.com" className="text-primary hover:text-primary-dark transition-colors">
                Email
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-dark text-text-light py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 