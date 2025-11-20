import './style.css'

const coursesData = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    icon: '💻',
    description: 'Master the basics of JavaScript programming',
    lessons: 12,
    duration: '6 hours',
    content: `
      <h3>Course Overview</h3>
      <p>This comprehensive course covers all the fundamental concepts of JavaScript, from variables and data types to functions and objects.</p>

      <h3>What You'll Learn</h3>
      <ul>
        <li>Variables, Data Types, and Operators</li>
        <li>Control Flow: Conditionals and Loops</li>
        <li>Functions and Scope</li>
        <li>Arrays and Objects</li>
        <li>DOM Manipulation</li>
        <li>Event Handling</li>
        <li>ES6+ Features</li>
        <li>Asynchronous JavaScript</li>
      </ul>

      <h3>Prerequisites</h3>
      <p>Basic understanding of HTML and CSS is recommended but not required.</p>
    `
  },
  {
    id: 2,
    title: 'Web Design Principles',
    icon: '🎨',
    description: 'Learn to create beautiful and functional websites',
    lessons: 10,
    duration: '5 hours',
    content: `
      <h3>Course Overview</h3>
      <p>Discover the principles of effective web design and create visually appealing, user-friendly websites.</p>

      <h3>What You'll Learn</h3>
      <ul>
        <li>Color Theory and Typography</li>
        <li>Layout and Composition</li>
        <li>Responsive Design Principles</li>
        <li>User Experience (UX) Basics</li>
        <li>Accessibility Best Practices</li>
        <li>Design Tools and Workflows</li>
        <li>Modern Design Trends</li>
      </ul>

      <h3>Prerequisites</h3>
      <p>No prior experience required. Enthusiasm for design is all you need!</p>
    `
  },
  {
    id: 3,
    title: 'React Development',
    icon: '⚛️',
    description: 'Build modern web applications with React',
    lessons: 15,
    duration: '8 hours',
    content: `
      <h3>Course Overview</h3>
      <p>Learn how to build dynamic, interactive web applications using React, one of the most popular JavaScript libraries.</p>

      <h3>What You'll Learn</h3>
      <ul>
        <li>React Components and JSX</li>
        <li>Props and State Management</li>
        <li>React Hooks (useState, useEffect, etc.)</li>
        <li>Event Handling in React</li>
        <li>Component Lifecycle</li>
        <li>React Router for Navigation</li>
        <li>API Integration</li>
        <li>Best Practices and Patterns</li>
      </ul>

      <h3>Prerequisites</h3>
      <p>Strong understanding of JavaScript is required.</p>
    `
  },
  {
    id: 4,
    title: 'Python for Beginners',
    icon: '🐍',
    description: 'Start your programming journey with Python',
    lessons: 14,
    duration: '7 hours',
    content: `
      <h3>Course Overview</h3>
      <p>Python is one of the most versatile and beginner-friendly programming languages. This course will teach you everything you need to start coding in Python.</p>

      <h3>What You'll Learn</h3>
      <ul>
        <li>Python Syntax and Basic Operations</li>
        <li>Data Structures: Lists, Tuples, Dictionaries</li>
        <li>Functions and Modules</li>
        <li>Object-Oriented Programming</li>
        <li>File Handling</li>
        <li>Error Handling and Debugging</li>
        <li>Working with Libraries</li>
        <li>Building Simple Projects</li>
      </ul>

      <h3>Prerequisites</h3>
      <p>No programming experience required!</p>
    `
  },
  {
    id: 5,
    title: 'Data Science Basics',
    icon: '📊',
    description: 'Introduction to data analysis and visualization',
    lessons: 11,
    duration: '6 hours',
    content: `
      <h3>Course Overview</h3>
      <p>Learn the fundamentals of data science, including data analysis, visualization, and basic machine learning concepts.</p>

      <h3>What You'll Learn</h3>
      <ul>
        <li>Introduction to Data Science</li>
        <li>Working with Pandas and NumPy</li>
        <li>Data Cleaning and Preparation</li>
        <li>Exploratory Data Analysis</li>
        <li>Data Visualization with Matplotlib</li>
        <li>Statistical Analysis Basics</li>
        <li>Introduction to Machine Learning</li>
        <li>Real-world Data Projects</li>
      </ul>

      <h3>Prerequisites</h3>
      <p>Basic Python knowledge is recommended.</p>
    `
  },
  {
    id: 6,
    title: 'Database Management',
    icon: '🗄️',
    description: 'Master SQL and database design',
    lessons: 13,
    duration: '7 hours',
    content: `
      <h3>Course Overview</h3>
      <p>Learn how to design, create, and manage databases using SQL and modern database systems.</p>

      <h3>What You'll Learn</h3>
      <ul>
        <li>Database Fundamentals and Design</li>
        <li>SQL Basics: SELECT, INSERT, UPDATE, DELETE</li>
        <li>Complex Queries and Joins</li>
        <li>Database Normalization</li>
        <li>Indexes and Performance Optimization</li>
        <li>Transactions and ACID Properties</li>
        <li>NoSQL Databases Introduction</li>
        <li>Best Practices and Security</li>
      </ul>

      <h3>Prerequisites</h3>
      <p>Basic understanding of data structures is helpful.</p>
    `
  }
];

const quizQuestions = [
  {
    question: 'What does HTML stand for?',
    answers: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language'
    ],
    correct: 0
  },
  {
    question: 'Which of the following is NOT a JavaScript data type?',
    answers: ['String', 'Boolean', 'Float', 'Undefined'],
    correct: 2
  },
  {
    question: 'What is the correct CSS syntax to change the background color?',
    answers: [
      'background-color: blue;',
      'bg-color: blue;',
      'color-background: blue;',
      'background: color-blue;'
    ],
    correct: 0
  },
  {
    question: 'Which company developed JavaScript?',
    answers: ['Microsoft', 'Netscape', 'Google', 'Apple'],
    correct: 1
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets'
    ],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let completedCourses = new Set();
let lessonsViewed = 0;
let quizzesTaken = 0;
let quizScores = [];
let currentCourseId = null;

function init() {
  renderCourses();
  updateProgress();
  setupNavigation();
  loadProgressFromStorage();
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute('href').substring(1);
      navigateToSection(targetSection);
    });
  });
}

function navigateToSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${sectionId}`) {
      link.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCourses() {
  const container = document.getElementById('courses-container');
  container.innerHTML = coursesData.map(course => `
    <div class="course-card" onclick="openCourse(${course.id})">
      <div class="course-header">
        <div class="course-icon">${course.icon}</div>
        <h3>${course.title}</h3>
      </div>
      <div class="course-body">
        <p>${course.description}</p>
        <div class="course-meta">
          <span>📚 ${course.lessons} lessons</span>
          <span>⏱️ ${course.duration}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openCourse(courseId) {
  const course = coursesData.find(c => c.id === courseId);
  if (!course) return;

  currentCourseId = courseId;
  const modal = document.getElementById('course-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = course.title;
  modalBody.innerHTML = course.content;
  modal.classList.remove('hidden');

  lessonsViewed++;
  saveProgressToStorage();
  updateProgress();
}

function closeModal() {
  const modal = document.getElementById('course-modal');
  modal.classList.add('hidden');
}

function markAsComplete() {
  if (currentCourseId) {
    completedCourses.add(currentCourseId);
    saveProgressToStorage();
    updateProgress();
    closeModal();
    alert('Congratulations! Course marked as complete.');
  }
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('quiz-start').classList.add('hidden');
  document.getElementById('quiz-content').classList.remove('hidden');
  document.getElementById('quiz-results').classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  const question = quizQuestions[currentQuestion];
  document.getElementById('question-count').textContent =
    `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  document.getElementById('score').textContent = `Score: ${score}`;
  document.getElementById('question-text').textContent = question.question;

  const answersContainer = document.getElementById('answers');
  answersContainer.innerHTML = question.answers.map((answer, index) => `
    <button class="answer-btn" onclick="selectAnswer(${index})">${answer}</button>
  `).join('');

  document.getElementById('next-btn').classList.add('hidden');
}

function selectAnswer(selectedIndex) {
  const question = quizQuestions[currentQuestion];
  const buttons = document.querySelectorAll('.answer-btn');

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.classList.add('correct');
    } else if (index === selectedIndex) {
      btn.classList.add('incorrect');
    }
  });

  if (selectedIndex === question.correct) {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
  }

  document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-content').classList.add('hidden');
  document.getElementById('quiz-results').classList.remove('hidden');

  const percentage = (score / quizQuestions.length) * 100;
  document.getElementById('final-score').textContent =
    `You scored ${score} out of ${quizQuestions.length} (${percentage.toFixed(0)}%)`;

  let message = '';
  if (percentage >= 80) {
    message = 'Excellent work! You have a strong understanding of the material.';
  } else if (percentage >= 60) {
    message = 'Good job! Keep practicing to improve your knowledge.';
  } else {
    message = 'Keep learning! Review the courses and try again.';
  }
  document.getElementById('result-message').textContent = message;

  quizzesTaken++;
  quizScores.push(percentage);
  saveProgressToStorage();
  updateProgress();
}

function restartQuiz() {
  document.getElementById('quiz-results').classList.add('hidden');
  document.getElementById('quiz-start').classList.remove('hidden');
}

function updateProgress() {
  document.getElementById('completed-courses').textContent = completedCourses.size;
  document.getElementById('lessons-viewed').textContent = lessonsViewed;
  document.getElementById('quizzes-taken').textContent = quizzesTaken;

  const avgScore = quizScores.length > 0
    ? (quizScores.reduce((a, b) => a + b, 0) / quizScores.length).toFixed(0)
    : 0;
  document.getElementById('average-score').textContent = `${avgScore}%`;

  renderSubjectProgress();
}

function renderSubjectProgress() {
  const subjects = [
    { name: 'JavaScript', progress: Math.min((lessonsViewed / 10) * 100, 100) },
    { name: 'Web Design', progress: Math.min((completedCourses.size / 6) * 100, 100) },
    { name: 'React', progress: Math.min((quizzesTaken / 5) * 100, 100) },
    { name: 'Python', progress: Math.min((score / 5) * 100, 100) }
  ];

  const container = document.getElementById('subject-progress-bars');
  container.innerHTML = subjects.map(subject => `
    <div class="progress-bar-container">
      <div class="progress-label">
        <span>${subject.name}</span>
        <span>${Math.round(subject.progress)}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${subject.progress}%"></div>
      </div>
    </div>
  `).join('');
}

function saveProgressToStorage() {
  const progressData = {
    completedCourses: Array.from(completedCourses),
    lessonsViewed,
    quizzesTaken,
    quizScores
  };
  localStorage.setItem('edulearn-progress', JSON.stringify(progressData));
}

function loadProgressFromStorage() {
  const stored = localStorage.getItem('edulearn-progress');
  if (stored) {
    const data = JSON.parse(stored);
    completedCourses = new Set(data.completedCourses || []);
    lessonsViewed = data.lessonsViewed || 0;
    quizzesTaken = data.quizzesTaken || 0;
    quizScores = data.quizScores || [];
    updateProgress();
  }
}

window.navigateToSection = navigateToSection;
window.openCourse = openCourse;
window.closeModal = closeModal;
window.markAsComplete = markAsComplete;
window.startQuiz = startQuiz;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;

document.addEventListener('DOMContentLoaded', init);
