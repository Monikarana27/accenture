import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Calendar, Code, Brain, BookOpen, Target, Clock, Star, AlertCircle } from 'lucide-react';

const OAPlan = () => {
  // Load initial state from localStorage
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('accenture-completed-tasks');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [activeWeek, setActiveWeek] = useState(0);
  
  const [weekNotes, setWeekNotes] = useState(() => {
    const saved = localStorage.getItem('accenture-week-notes');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [showProblemTracker, setShowProblemTracker] = useState(false);
  
  const [solvedProblems, setSolvedProblems] = useState(() => {
    const saved = localStorage.getItem('accenture-solved-problems');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [startDate] = useState(() => {
    const saved = localStorage.getItem('accenture-start-date');
    return saved ? saved : new Date().toISOString();
  });
  
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [activeTrackerTab, setActiveTrackerTab] = useState('arrays');

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('accenture-completed-tasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem('accenture-week-notes', JSON.stringify(weekNotes));
  }, [weekNotes]);

  useEffect(() => {
    localStorage.setItem('accenture-solved-problems', JSON.stringify(solvedProblems));
  }, [solvedProblems]);

  useEffect(() => {
    localStorage.setItem('accenture-start-date', startDate);
  }, [startDate]);

  const toggleTask = (weekIndex, dayIndex, taskIndex) => {
    const key = `${weekIndex}-${dayIndex}-${taskIndex}`;
    setCompletedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleProblem = (problemIndex) => {
    const key = `${activeTrackerTab}-${problemIndex}`;
    setSolvedProblems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateWeekNotes = (weekIndex, notes) => {
    setWeekNotes(prev => ({
      ...prev,
      [weekIndex]: notes
    }));
  };

  const arrayProblems = [
    { id: 1, name: "Reverse an array", difficulty: "Easy", category: "Basic Operations" },
    { id: 2, name: "Find maximum and minimum element", difficulty: "Easy", category: "Basic Operations" },
    { id: 3, name: "Find Kth max and min element", difficulty: "Medium", category: "Searching" },
    { id: 4, name: "Move all negative elements to one side", difficulty: "Easy", category: "Two Pointer" },
    { id: 5, name: "Union of two arrays", difficulty: "Easy", category: "Set Operations" },
    { id: 6, name: "Intersection of two arrays", difficulty: "Easy", category: "Set Operations" },
    { id: 7, name: "Cyclically rotate array by one", difficulty: "Easy", category: "Rotation" },
    { id: 8, name: "Kadane's Algorithm (max sum subarray)", difficulty: "Medium", category: "Dynamic Programming" },
    { id: 9, name: "Minimize maximum difference between heights", difficulty: "Medium", category: "Greedy" },
    { id: 10, name: "Minimum jumps to reach end", difficulty: "Medium", category: "Greedy" },
    { id: 11, name: "Find duplicates in array", difficulty: "Easy", category: "Hashing" },
    { id: 12, name: "Merge two sorted arrays without extra space", difficulty: "Hard", category: "Two Pointer" },
    { id: 13, name: "Best Time to Buy and Sell Stock", difficulty: "Easy", category: "Greedy" },
    { id: 14, name: "Count pairs with given sum", difficulty: "Easy", category: "Hashing" },
    { id: 15, name: "Common elements in 3 sorted arrays", difficulty: "Medium", category: "Three Pointer" },
    { id: 16, name: "First repeating element", difficulty: "Easy", category: "Hashing" },
    { id: 17, name: "First non-repeating element", difficulty: "Easy", category: "Hashing" },
    { id: 18, name: "Subarray with given sum", difficulty: "Easy", category: "Sliding Window" },
    { id: 19, name: "Factorial of large number", difficulty: "Medium", category: "Math" },
    { id: 20, name: "Longest consecutive subsequence", difficulty: "Medium", category: "Hashing" },
    { id: 21, name: "Minimum in rotated sorted array", difficulty: "Medium", category: "Binary Search" },
    { id: 22, name: "Elements appearing more than n/k times", difficulty: "Medium", category: "Hashing" },
    { id: 23, name: "Max profit with at most 2 transactions", difficulty: "Hard", category: "Dynamic Programming" },
    { id: 24, name: "Array is subset of another array", difficulty: "Easy", category: "Hashing" },
    { id: 25, name: "Triplet sum to given value", difficulty: "Medium", category: "Two Pointer" },
    { id: 26, name: "Trapping Rain Water", difficulty: "Hard", category: "Two Pointer" }
  ];

  const stringProblems = [
    { id: 1, name: "Reverse a string", difficulty: "Easy", category: "Basic Operations" },
    { id: 2, name: "Reverse words in a sentence", difficulty: "Easy", category: "String Manipulation" },
    { id: 3, name: "Check if string is palindrome", difficulty: "Easy", category: "Pattern Matching" },
    { id: 4, name: "Check if two strings are anagrams", difficulty: "Easy", category: "Hashing" },
    { id: 5, name: "Count frequency of each character", difficulty: "Easy", category: "Hashing" },
    { id: 6, name: "Remove duplicates from string", difficulty: "Easy", category: "String Manipulation" },
    { id: 7, name: "Find first non-repeating character", difficulty: "Easy", category: "Hashing" },
    { id: 8, name: "String compression (aaabbccc → a3b2c3)", difficulty: "Medium", category: "String Manipulation" },
    { id: 9, name: "Longest substring without repeating characters", difficulty: "Medium", category: "Sliding Window" },
    { id: 10, name: "Check if string is valid shuffle of two strings", difficulty: "Medium", category: "Pattern Matching" },
    { id: 11, name: "String rotation check", difficulty: "Easy", category: "Pattern Matching" },
    { id: 12, name: "Remove all vowels from string", difficulty: "Easy", category: "String Manipulation" }
  ];

  const numberProblems = [
    { id: 1, name: "Check if number is prime", difficulty: "Easy", category: "Number Theory" },
    { id: 2, name: "Find all prime numbers in a range", difficulty: "Easy", category: "Number Theory" },
    { id: 3, name: "Check if number is Armstrong number", difficulty: "Easy", category: "Mathematical" },
    { id: 4, name: "Check if number is palindrome", difficulty: "Easy", category: "Mathematical" },
    { id: 5, name: "Find factorial of a number", difficulty: "Easy", category: "Mathematical" },
    { id: 6, name: "Fibonacci series (first n terms)", difficulty: "Easy", category: "Sequences" },
    { id: 7, name: "Find GCD/HCF of two numbers", difficulty: "Easy", category: "Number Theory" },
    { id: 8, name: "Find LCM of two numbers", difficulty: "Easy", category: "Number Theory" },
    { id: 9, name: "Sum of digits until single digit", difficulty: "Easy", category: "Mathematical" },
    { id: 10, name: "Reverse a number", difficulty: "Easy", category: "Mathematical" }
  ];

  const patternProblems = [
    { id: 1, name: "Right triangle star pattern", difficulty: "Easy", category: "Basic Patterns" },
    { id: 2, name: "Pyramid star pattern", difficulty: "Easy", category: "Basic Patterns" },
    { id: 3, name: "Diamond star pattern", difficulty: "Medium", category: "Advanced Patterns" },
    { id: 4, name: "Number triangle (1, 12, 123...)", difficulty: "Easy", category: "Number Patterns" },
    { id: 5, name: "Alphabet patterns (A, AB, ABC...)", difficulty: "Easy", category: "Alphabet Patterns" },
    { id: 6, name: "Inverted pyramid pattern", difficulty: "Easy", category: "Basic Patterns" },
    { id: 7, name: "Pascal's triangle", difficulty: "Medium", category: "Advanced Patterns" },
    { id: 8, name: "Hollow square pattern", difficulty: "Medium", category: "Advanced Patterns" }
  ];

  const algorithmProblems = [
    { id: 1, name: "Bubble Sort implementation", difficulty: "Easy", category: "Sorting" },
    { id: 2, name: "Selection Sort implementation", difficulty: "Easy", category: "Sorting" },
    { id: 3, name: "Insertion Sort implementation", difficulty: "Easy", category: "Sorting" },
    { id: 4, name: "Linear Search", difficulty: "Easy", category: "Searching" },
    { id: 5, name: "Binary Search", difficulty: "Easy", category: "Searching" },
    { id: 6, name: "Factorial using recursion", difficulty: "Easy", category: "Recursion" },
    { id: 7, name: "Fibonacci using recursion", difficulty: "Easy", category: "Recursion" },
    { id: 8, name: "Tower of Hanoi (concept)", difficulty: "Medium", category: "Recursion" },
    { id: 9, name: "Two-pointer technique problems", difficulty: "Medium", category: "Two Pointer" }
  ];

  const dataStructureProblems = [
    { id: 1, name: "Reverse a linked list", difficulty: "Medium", category: "Linked List" },
    { id: 2, name: "Find middle element of linked list", difficulty: "Easy", category: "Linked List" },
    { id: 3, name: "Balanced parentheses using stack", difficulty: "Medium", category: "Stack" },
    { id: 4, name: "Reverse string using stack", difficulty: "Easy", category: "Stack" },
    { id: 5, name: "Reverse a queue", difficulty: "Easy", category: "Queue" },
    { id: 6, name: "Implement queue using stacks", difficulty: "Medium", category: "Queue" },
    { id: 7, name: "Count frequency using HashMap", difficulty: "Easy", category: "HashMap" },
    { id: 8, name: "Find duplicates using HashMap", difficulty: "Easy", category: "HashMap" }
  ];

  const allProblemSets = {
    arrays: arrayProblems,
    strings: stringProblems,
    numbers: numberProblems,
    patterns: patternProblems,
    algorithms: algorithmProblems,
    dataStructures: dataStructureProblems
  };

  const currentProblems = allProblemSets[activeTrackerTab];
  const filteredProblems = difficultyFilter === 'All' 
    ? currentProblems 
    : currentProblems.filter(p => p.difficulty === difficultyFilter);

  const getSolvedCount = (category) => {
    const problems = allProblemSets[category];
    return problems.filter((_, index) => 
      solvedProblems[`${category}-${index}`]
    ).length;
  };

  const solvedCount = getSolvedCount(activeTrackerTab);
  const progressPercentage = Math.round((solvedCount / currentProblems.length) * 100);

  // Calculate overall progress
  const calculateOverallProgress = () => {
    let totalProblems = 0;
    let totalSolved = 0;
    Object.keys(allProblemSets).forEach(category => {
      const problems = allProblemSets[category];
      totalProblems += problems.length;
      totalSolved += getSolvedCount(category);
    });
    return { totalSolved, totalProblems, percentage: Math.round((totalSolved / totalProblems) * 100) };
  };

  const overallProgress = calculateOverallProgress();

  // Calculate days left
  const examDate = new Date('2025-01-12');
  const today = new Date();
  const daysLeft = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));

  const weeks = [
    {
      title: "Week 1: Foundation Building",
      dates: "Dec 4-10",
      focus: "Assess Current Level + Core Basics",
      days: [
        {
          day: "Days 1-2",
          title: "Diagnostic Assessment",
          tasks: [
            { icon: Code, text: "Take HackerRank/LeetCode diagnostic test", time: "2-3 hrs" },
            { icon: Brain, text: "Solve 5 Easy problems (Arrays, Strings)", time: "1-2 hrs" },
            { icon: Target, text: "Take aptitude mock test on PrepInsta", time: "1 hr" },
            { icon: BookOpen, text: "Identify weak areas and create mistake log", time: "30 min" }
          ]
        },
        {
          day: "Days 3-7",
          title: "Core Foundations",
          tasks: [
            { icon: Code, text: "Array basics Day 1-2: Reverse, max/min, Kth element, rotation (2-3 problems)", time: "2 hrs" },
            { icon: Code, text: "Array basics Day 3-4: Union/intersection, duplicates, move negatives (2-3 problems)", time: "2 hrs" },
            { icon: Code, text: "Array basics Day 5-7: Kadane's algorithm, pairs with sum, subarray sum (2-3 problems)", time: "2 hrs" },
            { icon: Code, text: "String basics: reverse, palindrome, anagram (2-3 problems daily)", time: "1 hr" },
            { icon: Brain, text: "Aptitude: Percentages, Ratios, Time-Work (IndiaBix)", time: "1 hr" },
            { icon: Brain, text: "Logical: Patterns, sequences, blood relations (10-15 Qs)", time: "30 min" },
            { icon: BookOpen, text: "Verbal: Grammar rules + 10 new words daily", time: "20 min" },
            { icon: BookOpen, text: "Read 1 article from The Hindu/Economic Times", time: "15 min" }
          ]
        },
        {
          day: "Weekend",
          title: "First Mock Test",
          tasks: [
            { icon: Target, text: "Full Accenture-style mock test (90 min, timed)", time: "90 min" },
            { icon: AlertCircle, text: "Analyze mistakes and update mistake log", time: "30 min" }
          ]
        }
      ]
    },
    {
      title: "Week 2: Intermediate Problem Solving",
      dates: "Dec 11-17",
      focus: "Pattern Recognition + Speed Building",
      days: [
        {
          day: "Daily Routine",
          title: "Core Practice",
          tasks: [
            { icon: Code, text: "Arrays: Binary search, two-pointer, sliding window, longest consecutive sequence", time: "1.5 hrs" },
            { icon: Code, text: "Strings: Substring problems, pattern matching, longest palindrome", time: "1 hr" },
            { icon: Code, text: "Math: Prime, Armstrong, GCD/LCM, Fibonacci, factorial of large numbers", time: "45 min" },
            { icon: Code, text: "Sorting: Bubble, Selection, Insertion (understand + implement)", time: "30 min" },
            { icon: Brain, text: "Aptitude speed drills (aim 45-60 sec per question)", time: "45 min" },
            { icon: Brain, text: "Logical: Syllogisms, coding-decoding", time: "30 min" },
            { icon: BookOpen, text: "Verbal: Sentence correction + 2-3 passages", time: "20 min" }
          ]
        },
        {
          day: "Alt Days",
          title: "Data Structures Basics",
          tasks: [
            { icon: Code, text: "HashMap: Frequency counting, finding duplicates", time: "30 min" },
            { icon: Code, text: "Stack: Parenthesis matching, reverse operations", time: "30 min" },
            { icon: Code, text: "Queue: Basic operations (enqueue, dequeue)", time: "20 min" }
          ]
        },
        {
          day: "Weekend",
          title: "Mock Test #2",
          tasks: [
            { icon: Target, text: "Full mock test with strict timing", time: "90 min" },
            { icon: AlertCircle, text: "Focus on time management (<2 min per MCQ)", time: "30 min" },
            { icon: Code, text: "Review and optimize coding solutions", time: "30 min" }
          ]
        }
      ]
    },
    {
      title: "Week 3: Advanced Practice + Speed",
      dates: "Dec 18-24",
      focus: "Medium Problems + Pattern Mastery",
      days: [
        {
          day: "Daily Routine",
          title: "Level Up",
          tasks: [
            { icon: Code, text: "Move to Medium difficulty problems", time: "1.5 hrs" },
            { icon: Code, text: "Pattern printing: Stars, pyramids, numbers", time: "1 hr" },
            { icon: Code, text: "Matrix: Traversals, diagonal sums", time: "45 min" },
            { icon: Code, text: "Recursion: Factorial, Fibonacci, sum of digits", time: "45 min" },
            { icon: Brain, text: "Speed drills: 50 aptitude Qs in 25 min", time: "30 min" },
            { icon: Brain, text: "Abstract reasoning + deductive logic", time: "30 min" }
          ]
        },
        {
          day: "3x This Week",
          title: "Mock Coding Tests",
          tasks: [
            { icon: Code, text: "2 coding problems in 60 minutes (timed)", time: "1 hr" },
            { icon: Target, text: "Simulate exact exam conditions", time: "-" }
          ]
        },
        {
          day: "Essay Practice",
          title: "Communication Skills",
          tasks: [
            { icon: BookOpen, text: "Essay 1: Technology's role in modern business", time: "20 min" },
            { icon: BookOpen, text: "Essay 2: Why I want to join Accenture", time: "20 min" },
            { icon: AlertCircle, text: "Get feedback on structure and grammar", time: "15 min" }
          ]
        },
        {
          day: "Weekend",
          title: "Intensive Mock Day",
          tasks: [
            { icon: Target, text: "Mock Test #3 (morning)", time: "90 min" },
            { icon: Target, text: "Mock Test #4 (afternoon)", time: "90 min" },
            { icon: AlertCircle, text: "Comprehensive analysis of both tests", time: "1 hr" }
          ]
        }
      ]
    },
    {
      title: "Week 4: Mastery + Weak Areas",
      dates: "Dec 25-31",
      focus: "Refinement + Edge Cases",
      days: [
        {
          day: "Daily Routine",
          title: "Refinement Phase",
          tasks: [
            { icon: Code, text: "Morning: Revisit 2 problems from mistake log", time: "1 hr" },
            { icon: Code, text: "Afternoon: Solve 2 new Medium problems", time: "1 hr" },
            { icon: Code, text: "Evening: 1 complex problem (45 min attempt)", time: "1 hr" },
            { icon: AlertCircle, text: "Focus on clean code: comments, edge cases, variable names", time: "30 min" }
          ]
        },
        {
          day: "Alt Days",
          title: "SQL Practice",
          tasks: [
            { icon: Code, text: "SELECT, WHERE, ORDER BY, GROUP BY", time: "15 min" },
            { icon: Code, text: "JOINS (INNER, LEFT) on W3Schools/HackerRank", time: "15 min" }
          ]
        },
        {
          day: "2x This Week",
          title: "Automation Prep",
          tasks: [
            { icon: Brain, text: "Learn RPA (Robotic Process Automation) basics", time: "20 min" },
            { icon: Brain, text: "Practice logical sequencing questions", time: "15 min" }
          ]
        },
        {
          day: "3x This Week",
          title: "More Essays",
          tasks: [
            { icon: BookOpen, text: "Essay: The impact of AI on software development", time: "20 min" },
            { icon: BookOpen, text: "Essay: My career goals for next 5 years", time: "20 min" },
            { icon: BookOpen, text: "Essay: Cloud computing transforming businesses", time: "20 min" }
          ]
        },
        {
          day: "Weekend",
          title: "Peak Performance",
          tasks: [
            { icon: Target, text: "Mock Test #5 (Sat morning)", time: "90 min" },
            { icon: Target, text: "Mock Test #6 (Sat evening)", time: "90 min" },
            { icon: Target, text: "Mock Test #7 (Sun morning)", time: "90 min" },
            { icon: AlertCircle, text: "Detailed analysis after each", time: "30 min each" }
          ]
        }
      ]
    },
    {
      title: "Week 5: Final Sprint",
      dates: "Jan 1-11",
      focus: "Revision + Confidence Building",
      days: [
        {
          day: "Jan 1-7",
          title: "Intensive Revision",
          tasks: [
            { icon: Code, text: "NO NEW TOPICS - only revision", time: "-" },
            { icon: Code, text: "Create 'Top 30 Must-Know Problems' list", time: "1 hr" },
            { icon: Code, text: "Daily mix: 2 Array + 2 String + 1 Math + 1 Pattern", time: "2 hrs" },
            { icon: Brain, text: "Timed sectional tests: 20 min per section", time: "1 hr" },
            { icon: Target, text: "Full mock on Jan 2, 4, 6, 8", time: "90 min" }
          ]
        },
        {
          day: "Jan 8-9",
          title: "Tapering",
          tasks: [
            { icon: Code, text: "Solve only Easy problems for confidence", time: "1 hr" },
            { icon: Brain, text: "Light aptitude practice", time: "30 min" },
            { icon: BookOpen, text: "Review notes and cheat sheets", time: "30 min" }
          ]
        },
        {
          day: "Jan 10",
          title: "Final Mock",
          tasks: [
            { icon: Target, text: "Last full mock test in morning", time: "90 min" },
            { icon: BookOpen, text: "Quick formula/syntax revision in evening", time: "30 min" },
            { icon: AlertCircle, text: "NO HEAVY STUDY - stay relaxed", time: "-" }
          ]
        },
        {
          day: "Jan 11",
          title: "Rest Day",
          tasks: [
            { icon: Star, text: "NO NEW PROBLEMS", time: "-" },
            { icon: BookOpen, text: "Review cheat sheet only", time: "15 min" },
            { icon: AlertCircle, text: "Prepare laptop, test internet, keep documents ready", time: "30 min" },
            { icon: Star, text: "Watch movie, get 7-8 hours sleep", time: "-" }
          ]
        }
      ]
    }
  ];

  const mustSolveProblems = [
    "Reverse an array & rotate by K positions",
    "Find max/min and Kth largest/smallest element",
    "Second largest element in array",
    "Find duplicates & first repeating/non-repeating element",
    "Sum of array elements / subarray with given sum",
    "Count pairs with given sum / triplet sum",
    "Kadane's Algorithm (max sum contiguous subarray)",
    "Union and intersection of two arrays",
    "Merge two sorted arrays without extra space",
    "Move all negative elements to one side",
    "Reverse words in a string",
    "Check if two strings are anagrams",
    "Count frequency of each character (HashMap)",
    "Check palindrome (ignore spaces/special chars)",
    "Pattern printing (stars, numbers, pyramids)",
    "Prime, Armstrong, Fibonacci, GCD/LCM"
  ];

  const resources = {
    free: [
      { name: "GeeksforGeeks", use: "Coding problems + theory" },
      { name: "HackerRank", use: "Practice + mock tests" },
      { name: "LeetCode", use: "Coding problems (Easy-Medium)" },
      { name: "IndiaBix", use: "Aptitude + Logical + Verbal" },
      { name: "PrepInsta (Free)", use: "Accenture-specific mocks" },
      { name: "W3Schools", use: "SQL practice" }
    ]
  };

  const examDayStrategy = [
    {
      phase: "Before Exam",
      tips: [
        "Sleep 7-8 hours the night before",
        "Light breakfast, avoid heavy meals",
        "Reach early (30 min) or setup workspace if online",
        "Keep water, ID, admit card ready"
      ]
    },
    {
      phase: "Time Allocation",
      tips: [
        "Aptitude MCQs: 40-45 min (45-60 sec per question)",
        "Coding (2 problems): 60 min (25 min + 30 min + 5 min testing)",
        "Essay: 10-15 min (2 plan + 10 write + 2 proofread)",
        "Total buffer: 5-10 min for review"
      ]
    },
    {
      phase: "Coding Strategy",
      tips: [
        "Read problem twice carefully",
        "Identify input, output, constraints",
        "Think of approach (5 min), then code (15-20 min)",
        "Test with sample input + edge cases",
        "Always check: empty array, single element, negatives, zeros"
      ]
    },
    {
      phase: "General Tips",
      tips: [
        "Start with your strength (Coding OR Aptitude)",
        "Don't spend >2 min on any MCQ - mark and move",
        "Write clean code with comments",
        "Partial credit is given - submit working code",
        "Stay calm, trust your preparation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">OA Prep Plan</h1>
              <p className="text-blue-100 text-lg">Advanced Application Engineer • 5.5 Weeks</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-100">Exam Date</div>
              <div className="text-3xl font-bold">Jan 12, 2025</div>
              <div className="text-sm text-blue-100 mt-1"><span className="font-bold text-xl">{daysLeft}</span> Days Left</div>
            </div>
          </div>
          
          {/* Reset Button */}
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                localStorage.clear();
                setCompletedTasks({});
                setWeekNotes({});
                setSolvedProblems({});
                window.location.reload();
              }
            }}
            className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-semibold transition-all"
          >
            🔄 Reset All Progress
          </button>
        </div>

        {/* Week Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {weeks.map((week, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveWeek(index);
                setShowProblemTracker(false);
              }}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeWeek === index && !showProblemTracker
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Week {index + 1}
            </button>
          ))}
          <button
            onClick={() => setShowProblemTracker(true)}
            className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
              showProblemTracker
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            📊 Problem Tracker
          </button>
        </div>

        {/* Active Week Content or Problem Tracker */}
        {!showProblemTracker ? (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="border-b pb-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{weeks[activeWeek].title}</h2>
            <div className="flex gap-4 mt-2 text-sm">
              <span className="text-gray-600 flex items-center gap-1">
                <Calendar size={16} /> {weeks[activeWeek].dates}
              </span>
              <span className="text-purple-600 flex items-center gap-1">
                <Target size={16} /> {weeks[activeWeek].focus}
              </span>
            </div>
          </div>

          {/* Week Notes Section */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen className="text-blue-600" size={20} />
              Week Notes & Key Learnings
            </h3>
            <textarea
              value={weekNotes[activeWeek] || ''}
              onChange={(e) => updateWeekNotes(activeWeek, e.target.value)}
              placeholder="Add your notes here: • What went well this week? • Which topics need more practice? • Key patterns or concepts learned • Mistakes to avoid • Mock test scores and insights"
              className="w-full h-32 p-4 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none resize-none text-gray-700 placeholder-gray-400"
            />
            <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
              <AlertCircle size={12} />
              Your notes are saved automatically as you type
            </div>
          </div>

          {weeks[activeWeek].days.map((dayGroup, dayIndex) => (
            <div key={dayIndex} className="mb-8 last:mb-0">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold text-gray-800">{dayGroup.day}</h3>
                <p className="text-gray-600 text-sm mt-1">{dayGroup.title}</p>
              </div>
              
              <div className="space-y-3 ml-4">
                {dayGroup.tasks.map((task, taskIndex) => {
                  const Icon = task.icon;
                  const isCompleted = completedTasks[`${activeWeek}-${dayIndex}-${taskIndex}`];
                  
                  return (
                    <div
                      key={taskIndex}
                      onClick={() => toggleTask(activeWeek, dayIndex, taskIndex)}
                      className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                        isCompleted
                          ? 'bg-green-50 border-2 border-green-300'
                          : 'bg-white border-2 border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="mt-1">
                        {isCompleted ? (
                          <CheckCircle className="text-green-600" size={24} />
                        ) : (
                          <Circle className="text-gray-400" size={24} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1">
                            <Icon className={isCompleted ? 'text-green-600' : 'text-blue-600'} size={20} />
                            <span className={`${isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                              {task.text}
                            </span>
                          </div>
                          <span className="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap">
                            <Clock size={14} />
                            {task.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div
