export const projects = [
  {
    slug: 'dueable',
    title: 'Dueable',
    subtitle: 'AI-powered learning assistant for college students',
    summary:
      'Traced the real friction points around deadlines, actionable steps, and progress visibility, then translated them into a calmer, clearer study flow.',
    tags: ['AI', 'React', 'TypeScript', 'Mobile'],
    category: 'Learning Systems',
    previewTone: 'tone-project-c',
    badge: 'LxD',
    logo: '/assets/projects/dueable/logo.png',
    featured: true,
    cta: '/projects/dueable',
    ctaLabel: 'View Case Study',
    liveUrl: 'https://chromewebstore.google.com/detail/dueable/bfcedikokkigeoionlkjnjjbfgkfaklp?authuser=0&hl=en',
    motionAsset: '/assets/projects/dueable/gif.gif',
    images: [
      '/assets/projects/dueable/1.png',
      '/assets/projects/dueable/2.png',
      '/assets/projects/dueable/3.png',
      '/assets/projects/dueable/4.png',
      '/assets/projects/dueable/5.png',
      '/assets/projects/dueable/6.png'
    ],
    year: '2026',
    role: 'Product design, frontend architecture, AI workflow design',
    overview:
      'A planning-first student support product that turns vague academic stress into small, actionable steps students can follow.',
    problem:
      'Students often know they are behind, but not what to do first. Existing planner and reminder apps increase noise instead of reducing it, especially when deadlines, priorities, and emotional load stack together.',
    solution:
      'Dueable reframes academic planning as guided decision-making instead of passive task tracking. I designed the experience to help students quickly see what matters now, break assignments into manageable steps, and move forward with one clear next action instead of staring at an overwhelming list. The interface combines progress visibility, supportive prompts, and structured task breakdowns so planning feels calmer, more understandable, and easier to act on.',
    impact: [
      'Clarified the path from assignment overload to a concrete next action.',
      'Created a stronger foundation for future reminder, prioritization, and coaching features.',
      'Established a visual system that feels supportive rather than punitive.'
    ],
    nextSteps: [
      'Test task breakdown flows with real students.',
      'Add adaptive prioritization based on urgency and workload.',
      'Connect calendar and LMS signals to automate planning suggestions.'
    ]
  },
  {
    slug: 'ai-assisted-canvas-grading',
    title: 'AI-Assisted Canvas Grading',
    subtitle: 'Workflow automation for faster instructor feedback',
    summary:
      'Automated repetitive grading steps so instructors can review submissions faster without losing teaching context.',
    tags: ['Automation', 'Prompt Ops', 'Teacher Tools'],
    category: 'AI / Automation',
    previewTone: 'tone-project-a',
    badge: 'AI',
    cta: '/projects/ai-assisted-canvas-grading',
    ctaLabel: 'Request Walkthrough',
    year: '2026',
    role: 'Automation design, prompt systems, instructor workflow research',
    overview:
      'A grading assistant concept focused on reducing repetitive review work while preserving educator judgment.',
    problem:
      'Instructors spend time on repeatable review patterns, yet still need space for nuance and student-specific feedback.',
    solution:
      'The workflow pre-structures rubric review, drafts feedback options, and keeps the instructor in control of final comments.',
    impact: [
      'Reduced repetitive grading steps in the target workflow.',
      'Kept human review central instead of replacing it.',
      'Made the value proposition concrete for education teams.'
    ],
    nextSteps: [
      'Pilot with rubric-heavy assignments.',
      'Track time saved versus baseline grading flow.',
      'Add instructor controls for tone and rubric strictness.'
    ]
  },
  {
    slug: 'stanzaone',
    title: 'StanzaOne',
    subtitle: 'Visual identity and product direction for a modern creative studio',
    summary:
      'Defined a visual system, content direction, and product framing for a polished launch presence.',
    tags: ['Brand', 'Creative Tech', 'TypeKit'],
    category: 'Brand / Creative Tech',
    previewTone: 'tone-project-b',
    badge: 'Brand',
    cta: '/projects/stanzaone',
    ctaLabel: 'See Details',
    year: '2025',
    role: 'Brand system, product storytelling, visual direction',
    overview:
      'A launch-ready brand and interface direction for a creative studio that needed a clearer digital presence.',
    problem:
      'The studio needed a more cohesive way to communicate quality, clarity, and positioning across its web presence.',
    solution:
      'I built a visual language and content direction that aligned the identity, messaging, and product framing into one system.',
    impact: [
      'Improved clarity of the studio offering.',
      'Created a reusable launch framework for future marketing assets.',
      'Raised the perceived polish of the brand across touchpoints.'
    ],
    nextSteps: [
      'Extend the system into social and campaign templates.',
      'Document voice and motion guidelines.',
      'Create modular web sections for faster iteration.'
    ]
  },
  {
    slug: 'learning-ui-system',
    title: 'Learning UI System',
    subtitle: 'Reusable accessibility-first UI kit for guided learning experiences',
    summary:
      'Built consistent components for lessons, prompts, assessments, and progress feedback.',
    tags: ['Design Systems', 'Figma', 'Accessibility'],
    category: 'Frontend / UI',
    previewTone: 'tone-project-d',
    badge: 'UI',
    cta: '/projects/learning-ui-system',
    ctaLabel: 'View System',
    year: '2026',
    role: 'Design system strategy, accessibility, component architecture',
    overview:
      'A reusable interface foundation for education products that need consistency without feeling generic.',
    problem:
      'Learning tools often grow fast and end up with inconsistent components, weak accessibility patterns, and uneven feedback states.',
    solution:
      'The system standardizes core learning interactions such as prompts, progress, review states, and instructional scaffolding.',
    impact: [
      'Reduced design inconsistency across learning flows.',
      'Made accessibility patterns easier to repeat correctly.',
      'Created a stronger bridge between design and implementation.'
    ],
    nextSteps: [
      'Add component documentation and usage guidance.',
      'Build coded primitives for form and feedback states.',
      'Expand support for mobile-first teaching tools.'
    ]
  },
  {
    slug: 'student-progress-portal',
    title: 'Student Progress Portal',
    subtitle: 'Progress snapshots that help learners understand what to do next',
    summary:
      'Translated noisy learning data into a friendlier dashboard with clearer actions and progress cues.',
    tags: ['Dashboard', 'UX', 'EdTech'],
    category: 'Learning Systems',
    previewTone: 'tone-project-e',
    badge: 'LMS',
    cta: '/projects/student-progress-portal',
    ctaLabel: 'Preview Flow',
    year: '2025',
    role: 'UX strategy, dashboard design, learning analytics translation',
    overview:
      'A progress dashboard concept focused on clarity, momentum, and actionable next steps.',
    problem:
      'Many dashboards show status but not meaning. Students can see numbers and still not understand what action to take.',
    solution:
      'The portal reframes progress as guidance, combining digestible snapshots with direct recommended actions.',
    impact: [
      'Reduced interpretation effort for students.',
      'Made progress feedback feel more useful and less abstract.',
      'Created a better UX pattern for intervention-oriented dashboards.'
    ],
    nextSteps: [
      'Prototype risk alerts and nudges.',
      'Add instructor and advisor views.',
      'Test comprehension of progress summaries with learners.'
    ]
  },
  {
    slug: 'portfolio-case-study-library',
    title: 'Portfolio Case Study Library',
    subtitle: 'Structured storytelling format for technical and UX project writeups',
    summary:
      'Created a reusable case study format that keeps project narratives concise, visual, and recruiter-friendly.',
    tags: ['UX Writing', 'Content Design', 'Portfolio'],
    category: 'Frontend / UI',
    previewTone: 'tone-project-f',
    badge: 'UX',
    cta: '/projects/portfolio-case-study-library',
    ctaLabel: 'See Format',
    year: '2026',
    role: 'Content structure, storytelling system, portfolio UX',
    overview:
      'A modular case study framework for presenting technical work with more clarity and stronger hiring relevance.',
    problem:
      'Project writeups often become too long, too vague, or too visual-only, which makes it hard for recruiters to assess impact quickly.',
    solution:
      'I designed a structured narrative format with repeatable sections for context, decisions, outcomes, and next steps.',
    impact: [
      'Made portfolio content easier to scan and compare.',
      'Created a reusable format across different project types.',
      'Improved the balance between storytelling and technical specificity.'
    ],
    nextSteps: [
      'Connect each case study to a reusable CMS-like data source.',
      'Add metrics and visuals where available.',
      'Expand to recruiter-facing PDF and presentation formats.'
    ]
  },
  {
    slug: 'academic-support-bot',
    title: 'Academic Support Bot',
    subtitle: 'A guided assistant for coursework triage and student follow-up',
    summary:
      'Mapped common student questions into a guided assistant flow that reduced confusion and repetitive support work.',
    tags: ['Chat UX', 'Automation', 'Support'],
    category: 'AI / Automation',
    previewTone: 'tone-project-g',
    badge: 'Bot',
    cta: '/projects/academic-support-bot',
    ctaLabel: 'Open Concept',
    year: '2025',
    role: 'Conversation design, support workflow mapping, AI assistance strategy',
    overview:
      'A support assistant concept built to reduce repeat academic questions and guide students toward the right next resource.',
    problem:
      'Support teams repeatedly answer the same coursework questions, while students still struggle to find relevant answers quickly.',
    solution:
      'The assistant structures common requests into guided flows, escalates when needed, and keeps responses focused on action.',
    impact: [
      'Reduced ambiguity in common support scenarios.',
      'Created a repeatable framework for triage-style AI assistance.',
      'Improved the balance between automation and human escalation.'
    ],
    nextSteps: [
      'Test tone and trust signals with students.',
      'Add escalation rules for advisor handoff.',
      'Connect help content to a structured knowledge base.'
    ]
  },
  {
    slug: 'lesson-planning-studio',
    title: 'Lesson Planning Studio',
    subtitle: 'A planning workspace for building modular learning content',
    summary:
      'Organized lesson goals, activities, and assessments into a single workflow for faster curriculum drafting.',
    tags: ['Planning', 'Content Ops', 'LxD'],
    category: 'Learning Systems',
    previewTone: 'tone-project-h',
    badge: 'LxD',
    cta: '/projects/lesson-planning-studio',
    ctaLabel: 'View Outline',
    year: '2025',
    role: 'Workflow design, curriculum tooling, content architecture',
    overview:
      'A modular planning space for educators and learning designers building structured course content.',
    problem:
      'Lesson planning is often fragmented across notes, documents, and LMS tools that do not support modular thinking well.',
    solution:
      'The studio combines objectives, activities, pacing, and assessments into a single authoring workflow.',
    impact: [
      'Reduced fragmentation across planning steps.',
      'Improved visibility into lesson structure and pacing.',
      'Created a better base for scalable content operations.'
    ],
    nextSteps: [
      'Add collaborative commenting and review.',
      'Support reusable lesson blocks and templates.',
      'Integrate export flows into LMS publishing.'
    ]
  }
];

export const projectCategories = ['All', ...new Set(projects.map((project) => project.category))];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}