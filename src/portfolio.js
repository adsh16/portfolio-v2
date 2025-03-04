const header = {
  homepage: 'https://github.com/adsh16',
  title: 'AS.',
}

const about = {
  name: 'Aditya Sharma',
  role: 'Software Developer | Machine Learning Enthusiast',
  description:
    "I am a third-year B.Tech student at IIIT Delhi with a keen interest in software development, machine learning, and competitive programming. I have experience working on game recommendation systems, recipe recommendation chatbots, and CI/CD pipelines. I enjoy solving complex problems and building scalable solutions.",
  resume: 'https://drive.google.com/file/d/1fXDVzXtM-mDE0tA4-q_vW6F2tl/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/aditya-sharma-04360125a/',
    github: 'https://github.com/adsh16',
    leetcode: 'https://leetcode.com/beatmeloser',
  },
}

const projects = [
  {
    name: 'PlaySense - Game Recommendation System',
    description:
      'A large-scale game recommendation system processing 52,000+ games with 60+ features. Implemented SVD dimensionality reduction, feature engineering, and K-Means++ clustering for optimized recommendations.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    sourceCode: 'https://github.com/adsh16/game-recommendation-system',
  },
  {
    name: 'DesInk - Online Design Store',
    description:
      'An online marketplace built using Flask and MySQL, featuring secure authentication, shopping cart functionality, order placement, and an admin dashboard with SQL triggers ensuring data consistency.',
    stack: ['Python', 'Flask', 'HTML/CSS', 'MySQL'],
    sourceCode: 'https://github.com/VanshAg283/DBMS_Project',
  },
  {
    name: 'cfStats - Chrome Extension for Competitive Programming',
    description:
      'A Chrome extension leveraging Codeforces API to fetch real-time user statistics and Chart.js for interactive data visualization. Published on the Chrome Web Store with 50+ active users.',
    stack: ['JavaScript', 'Chart.js', 'API'],
    sourceCode: 'https://github.com/adsh16/cfStats',
    livePreview: 'https://chromewebstore.google.com/detail/cfstats/bchliaklmfjameoifffgkacempfljakb',
  },
  {
    name: 'StickNinja - Java Platformer Game',
    description:
      'A 2D platformer game built using Java and JavaFX with object-oriented principles. Features include collision detection, sprite animations, real-time scoring, and state management.',
    stack: ['Java', 'JavaFX', 'OOP'],
    sourceCode: 'https://github.com/adsh16/StickNinja',
  },
  {
    name: 'Custom Memory Management System (MeMs)',
    description:
      'Developed a C header file utilizing system calls for memory management with a 2D free list data structure. Implemented memory allocation, deallocation, and virtual-to-physical address translation.',
    stack: ['C', 'Memory Management'],
    sourceCode: 'https://github.com/adsh16/MeMs',
  },
]

const skills = [
  'Python',
  'C/C++',
  'Java',
  'JavaScript',
  'SQL',
  'HTML/CSS',
  'Flask',
  'JavaFX',
  'Streamlit',
  'Selenium',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'Scikit-learn',
  'Git',
  'GitHub',
  'Figma',
  'VS Code',
  'IntelliJ',
  'CI/CD',
  'Object Oriented Programming',
  'Data Structures & Algorithms',
]

const contact = {
  email: 'aditya22038@iiitd.ac.in',
}

export { header, about, projects, skills, contact }
