// Claude Code Tips Data - 36 Beginner-Friendly Tips!
const tipsData = {
    beginner: [
        {
            id: 'b1',
            title: 'Installation & Setup - Setting Up Your New Coding Friend',
            icon: 'fas fa-heart',
            summary: 'Getting Claude Code is super easy! It\'s like downloading any app, but this one will change how you code forever.',
            content: `
                <p><strong>🚀 Welcome to Your Coding Adventure!</strong></p>
                <p>Installing Claude Code is as easy as downloading your favorite app:</p>
                <code>npm install -g @anthropic-ai/claude-code<br>claude auth</code>
                <p>After you install it, you'll need to connect it to your account - think of it like logging into your favorite social media app!</p>
                <p><strong>💡 Pro Tip:</strong> This is going to be your new best coding buddy!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/quickstart" target="_blank" rel="noopener" class="doc-link" aria-label="Learn more about getting started (opens in new tab)">
                    <i class="fas fa-book"></i> Learn more about getting started
                </a>
            `
        },
        {
            id: 'b2',
            title: 'File Operations - Talking to Files Like They\'re Your Friends',
            icon: 'fas fa-comments',
            summary: 'Forget complicated commands! Just tell Claude Code what you want in plain English.',
            content: `
                <p><strong>🗣️ Speak Human, Not Computer!</strong></p>
                <p>Want to read a file? Just ask! Need to create something new? Say it like you're talking to a friend:</p>
                <div class="content-box-code">
                    "hey, can you read my main.py file and tell me what it does?"<br>
                    "please create a README file for my awesome project"
                </div>
                <p>No complicated syntax to remember - just friendly conversation!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link" aria-label="Working with Files Made Easy (opens in new tab)">
                    <i class="fas fa-book"></i> Working with Files Made Easy
                </a>
            `
        },
        {
            id: 'b3',
            title: 'Interactive Modes - Two Ways to Chat: Quick Questions vs Deep Conversations',
            icon: 'fas fa-phone-alt',
            summary: 'Sometimes you need a quick answer, other times you want a longer conversation about your code.',
            content: `
                <p><strong>📞 Choose Your Chat Style!</strong></p>
                <p>Claude Code gets both! Use quick mode for "fix this now" moments, and conversation mode when you want to explore and learn:</p>
                <div class="content-box-code">
                    # Start a conversation (great for learning!)<br>
                    claude-code<br><br>
                    # Ask one quick thing<br>
                    "fix this annoying error in my app.js file"
                </div>
                <p><strong>🎯 Perfect for:</strong> Learning at your own pace!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/interactive-mode" target="_blank" rel="noopener" class="doc-link" aria-label="Different Ways to Chat (opens in new tab)">
                    <i class="fas fa-book"></i> Different Ways to Chat
                </a>
            `
        },
        {
            id: 'b4',
            title: 'Project Context - Claude Code Gets Your Project (Even When You Don\'t!)',
            icon: 'fas fa-brain',
            summary: 'Claude Code automatically understands what kind of project you\'re working on.',
            content: `
                <p><strong>🤖 Your Smart Project Assistant!</strong></p>
                <p>Here's something cool - Claude Code automatically understands what kind of project you're working on. It's like having a friend who instantly knows if you're building a website, mobile app, or something else entirely!</p>
                <div class="content-box-light">
                    <strong>💡 Pro tip:</strong> Create a file called <code>CLAUDE.md</code> in your project folder and write any special instructions there. It's like leaving notes for your future self!
                </div>
                <a href="https://docs.anthropic.com/en/docs/claude-code/memory" target="_blank" rel="noopener" class="doc-link" aria-label="How Claude Remembers Your Project (opens in new tab)">
                    <i class="fas fa-book"></i> How Claude Remembers Your Project
                </a>
            `
        },
        {
            id: 'b5',
            title: 'Code Generation - Creating Code That Actually Works',
            icon: 'fas fa-magic',
            summary: 'Don\'t know how to write a function? No problem! Just describe what you want it to do.',
            content: `
                <p><strong>✨ Code Magic Made Simple!</strong></p>
                <p>Claude Code speaks both human and computer language fluently. Just describe what you want:</p>
                <div class="content-box-code">
                    "write me a Python function that finds fibonacci numbers"<br>
                    "create a cool loading spinner for my React app"
                </div>
                <p><strong>🎉 Result:</strong> Working code that you can actually understand!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link" aria-label="Getting Code Written for You (opens in new tab)">
                    <i class="fas fa-book"></i> Getting Code Written for You
                </a>
            `
        },
        {
            id: 'b6',
            title: 'Error Handling - When Things Go Wrong (And They Will!)',
            icon: 'fas fa-life-ring',
            summary: 'Error messages can be scary, but they\'re just your computer\'s way of saying "I\'m confused."',
            content: `
                <p><strong>🩹 Error Messages Aren't So Scary!</strong></p>
                <p>Claude Code is like a translator that turns scary error messages into helpful advice:</p>
                <div class="content-box-code">
                    "help! I'm getting this 'module not found' error in my app"<br>
                    "my Python code says TypeError - what does that mean?"
                </div>
                <p><strong>🌟 Remember:</strong> Every error is just a puzzle waiting to be solved!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/troubleshooting" target="_blank" rel="noopener" class="doc-link" aria-label="Fixing Things When They Break (opens in new tab)">
                    <i class="fas fa-book"></i> Fixing Things When They Break
                </a>
            `
        },
        {
            id: 'b7',
            title: 'Code Analysis - Understanding Code That Looks Like Magic',
            icon: 'fas fa-spell-check',
            summary: 'Ever look at code and think "what the heck does this do?" Claude Code is your personal code interpreter.',
            content: `
                <p><strong>🔮 Decode the Magic!</strong></p>
                <p>Claude Code can explain anything in simple terms:</p>
                <div class="content-box-code">
                    "explain this async/await thing like I'm 5 years old"<br>
                    "what is this weird regex pattern trying to match?"
                </div>
                <p><strong>💫 Perfect for:</strong> Learning from code you find online or understanding legacy code!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link" aria-label="Making Sense of Code (opens in new tab)">
                    <i class="fas fa-book"></i> Making Sense of Code
                </a>
            `
        },
        {
            id: 'b8',
            title: 'Code Refactoring - Making Your Code Look Pretty and Work Better',
            icon: 'fas fa-palette',
            summary: 'Good code isn\'t just code that works - it\'s code that other people can understand.',
            content: `
                <p><strong>🎨 Beautiful Code is Happy Code!</strong></p>
                <p>Claude Code can help make your code cleaner and easier to read:</p>
                <div class="content-box-code">
                    "this code is messy, can you help me clean it up?"<br>
                    "change all these confusing variable names to something better"
                </div>
                <p><strong>🌟 Why it matters:</strong> Future you will thank present you for this!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link" aria-label="Writing Beautiful Code (opens in new tab)">
                    <i class="fas fa-book"></i> Writing Beautiful Code
                </a>
            `
        },
        {
            id: 'b9',
            title: 'Documentation - Creating Documentation (So You Remember What You Built!)',
            icon: 'fas fa-sticky-note',
            summary: 'Documentation is like writing a manual for your code. Claude Code makes it painless.',
            content: `
                <p><strong>📚 Document Like a Pro!</strong></p>
                <p>Future you will thank present you for this! Claude Code makes documentation painless:</p>
                <div class="content-box-code">
                    "add comments to explain what each function does"<br>
                    "create documentation for my API so others can use it"
                </div>
                <p><strong>💡 Remember:</strong> Good documentation is a gift to your future self!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link" aria-label="Documenting Your Amazing Work (opens in new tab)">
                    <i class="fas fa-book"></i> Documenting Your Amazing Work
                </a>
            `
        },
        {
            id: 'b10',
            title: 'Version Control - Git: Your Code\'s Time Machine',
            icon: 'fas fa-history',
            summary: 'Git tracks all your code changes like a super detailed diary.',
            content: `
                <p><strong>⏰ Travel Through Code Time!</strong></p>
                <p>Claude Code makes Git less scary by handling the complicated parts for you:</p>
                <div class="content-box-code">
                    "save my changes with a good commit message"<br>
                    "what changes did I make since yesterday?"
                </div>
                <p><strong>🎯 Perfect for:</strong> Keeping track of all your awesome progress!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/github-actions" target="_blank" rel="noopener" class="doc-link" aria-label="Mastering Code History (opens in new tab)">
                    <i class="fas fa-book"></i> Mastering Code History
                </a>
            `
        },
        {
            id: 'b11',
            title: 'Development Environment - Setting Up Your Coding Environment (Your Digital Workshop)',
            icon: 'fas fa-tools',
            summary: 'Every craftsperson needs the right tools. Claude Code helps you set up everything perfectly.',
            content: `
                <p><strong>🔧 Build Your Perfect Workshop!</strong></p>
                <p>Claude Code helps you set up your coding environment so everything works smoothly together:</p>
                <div class="content-box-code">
                    "help me set up everything I need for React development"<br>
                    "configure ESLint so my JavaScript looks professional"
                </div>
                <p><strong>✨ Result:</strong> A development environment that makes you feel like a pro!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/ide-integrations" target="_blank" rel="noopener" class="doc-link" aria-label="Building Your Perfect Setup (opens in new tab)">
                    <i class="fas fa-book"></i> Building Your Perfect Setup
                </a>
            `
        },
        {
            id: 'b12',
            title: 'Debugging - Decoding Error Messages (They\'re Not as Scary as They Look!)',
            icon: 'fas fa-puzzle-piece',
            summary: 'Error messages are like puzzles - once you know how to read them, they actually help you.',
            content: `
                <p><strong>🧩 Puzzle-Solving Time!</strong></p>
                <p>Error messages are like puzzles - once you know how to read them, they actually help you fix things faster:</p>
                <div class="content-box-code">
                    "explain this error: ReferenceError: Cannot access 'user' before initialization"
                </div>
                <p><strong>🌟 Remember:</strong> Every error message is just trying to help you!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/troubleshooting" target="_blank" rel="noopener" class="doc-link" aria-label="Understanding What Went Wrong (opens in new tab)">
                    <i class="fas fa-book"></i> Understanding What Went Wrong
                </a>
            `
        }
    ],
    intermediate: [
        {
            id: 'i1',
            title: 'Code Analysis - Becoming a Code Detective',
            icon: 'fas fa-search',
            summary: 'Now you\'re ready to look at bigger projects and understand how all the pieces fit together.',
            content: `
                <p><strong>🕵️ Detective Mode Activated!</strong></p>
                <p>Claude Code can analyze your entire codebase and find ways to make it even better:</p>
                <div class="content-box-code">
                    "look at my whole project and tell me what could be faster"<br>
                    "are there any packages I'm not using anymore?"
                </div>
                <p><strong>🎯 Perfect for:</strong> Understanding big projects and finding hidden opportunities!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link" aria-label="Analyzing Your Entire Project (opens in new tab)">
                    <i class="fas fa-book"></i> Analyzing Your Entire Project
                </a>
            `
        },
        {
            id: 'i2',
            title: 'Refactoring - Restructuring Code Like a Pro',
            icon: 'fas fa-home',
            summary: 'Sometimes you need to reorganize your code without breaking anything.',
            content: `
                <p><strong>🏗️ Code Renovation Time!</strong></p>
                <p>It's like renovating a house while people are still living in it - tricky but totally doable!</p>
                <div class="content-box-code">
                    "refactor this code to use better design patterns"<br>
                    "convert these old callback functions to modern promises"
                </div>
                <p><strong>💡 Why it's cool:</strong> Your code gets better without breaking anything!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link" aria-label="Making Big Changes Safely (opens in new tab)">
                    <i class="fas fa-book"></i> Making Big Changes Safely
                </a>
            `
        },
        {
            id: 'i3',
            title: 'Testing - Writing Tests (Because Nobody\'s Perfect)',
            icon: 'fas fa-check-double',
            summary: 'Tests are like having a friend double-check your work.',
            content: `
                <p><strong>🧪 Your Code's Safety Net!</strong></p>
                <p>Tests catch mistakes before your users do, which is always a good thing!</p>
                <div class="content-box-code">
                    "create tests for my React components"<br>
                    "write tests for all the functions in my utility file"
                </div>
                <p><strong>🌟 Result:</strong> Sleep better knowing your code works as expected!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link" aria-label="Building Confidence with Tests (opens in new tab)">
                    <i class="fas fa-book"></i> Building Confidence with Tests
                </a>
            `
        },
        {
            id: 'i4',
            title: 'Performance Optimization - Making Your Code Lightning Fast',
            icon: 'fas fa-bolt',
            summary: 'Slow code makes users sad. Claude Code helps you speed things up.',
            content: `
                <p><strong>⚡ Speed Demon Mode!</strong></p>
                <p>Claude Code can help you find bottlenecks and speed things up so your app feels snappy and responsive:</p>
                <div class="content-box-code">
                    "this database query is super slow, can you help?"<br>
                    "my function uses too much memory, how can I fix it?"
                </div>
                <p><strong>🚀 Result:</strong> Happy users and a faster app!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link" aria-label="Performance Optimization Workflows (opens in new tab)">
                    <i class="fas fa-book"></i> Performance Optimization Workflows
                </a>
            `
        },
        {
            id: 'i5',
            title: 'Security - Keeping Your Code Safe from Bad Guys',
            icon: 'fas fa-shield-alt',
            summary: 'Security might sound scary, but it\'s really about being a good digital citizen.',
            content: `
                <p><strong>🛡️ Digital Guardian Mode!</strong></p>
                <p>Claude Code helps you build apps that keep user data safe and secure:</p>
                <div class="content-box-code">
                    "check if my login code has any security problems"<br>
                    "make sure my database queries can't be hacked"
                </div>
                <p><strong>💫 Perfect for:</strong> Building trust with your users!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/security" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Building Secure Applications
                </a>
            `
        },
        {
            id: 'i6',
            title: 'API Development - Building APIs That Others Love Using',
            icon: 'fas fa-bridge',
            summary: 'APIs are like bridges that let different apps talk to each other.',
            content: `
                <p><strong>🌉 Bridge Builder Extraordinaire!</strong></p>
                <p>Good APIs are clear, reliable, and easy to use:</p>
                <div class="content-box-code">
                    "design a simple API for my blog website"<br>
                    "add validation so people can't send bad data to my API"
                </div>
                <p><strong>✨ Why it matters:</strong> Other developers will love working with your APIs!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> API Design Workflows
                </a>
            `
        },
        {
            id: 'i7',
            title: 'Database Design - Designing Databases That Make Sense',
            icon: 'fas fa-database',
            summary: 'A well-designed database is like a well-organized filing cabinet.',
            content: `
                <p><strong>🗄️ Master Organizer!</strong></p>
                <p>Databases store your app's information. Everything has its place and is easy to find:</p>
                <div class="content-box-code">
                    "design a database for my online store"<br>
                    "help me make these database queries faster"
                </div>
                <p><strong>🎯 Result:</strong> Your data stays organized and your app stays fast!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/mcp" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Database Best Practices
                </a>
            `
        },
        {
            id: 'i8',
            title: 'Automation - Automating the Boring Stuff',
            icon: 'fas fa-robot',
            summary: 'Computers are great at doing repetitive tasks.',
            content: `
                <p><strong>🤖 Your Personal Assistant!</strong></p>
                <p>Set up automation so you can focus on the fun, creative parts of coding!</p>
                <div class="content-box-code">
                    "create an automated workflow for my Node.js app"<br>
                    "set up automatic testing when I push code"
                </div>
                <p><strong>🌟 Perfect for:</strong> Letting computers do the tedious work while you create amazing things!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/github-actions" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Automation Made Simple
                </a>
            `
        },
        {
            id: 'i9',
            title: 'Code Review - Getting Your Code Reviewed Like a Pro',
            icon: 'fas fa-eye',
            summary: 'Code reviews are like having experienced developers give you helpful feedback.',
            content: `
                <p><strong>👁️ Fresh Eyes on Your Code!</strong></p>
                <p>It's one of the best ways to improve!</p>
                <div class="content-box-code">
                    "review this code and tell me how to make it better"<br>
                    "does this code follow good practices?"
                </div>
                <p><strong>💡 Why it's awesome:</strong> Learn from every review and become a better developer!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/github-actions" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Professional Code Reviews
                </a>
            `
        },
        {
            id: 'i10',
            title: 'Migration - Upgrading Without Breaking Everything',
            icon: 'fas fa-level-up-alt',
            summary: 'Technology moves fast, and sometimes you need to update your tools.',
            content: `
                <p><strong>🔄 Smooth Upgrade Master!</strong></p>
                <p>Claude Code helps you navigate these changes without losing your mind:</p>
                <div class="content-box-code">
                    "help me upgrade from React 16 to React 18"<br>
                    "convert this old jQuery code to modern JavaScript"
                </div>
                <p><strong>🎉 Result:</strong> Stay current with technology without the headaches!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Smooth Upgrades
                </a>
            `
        },
        {
            id: 'i11',
            title: 'Architecture Decisions - Making Smart Technology Choices',
            icon: 'fas fa-lightbulb',
            summary: 'With so many options out there, how do you choose the right tools?',
            content: `
                <p><strong>💡 Wise Decision Maker!</strong></p>
                <p>Claude Code can help you weigh the pros and cons:</p>
                <div class="content-box-code">
                    "should I build one big app or split it into smaller pieces?"<br>
                    "what's the best way to manage data in my React app?"
                </div>
                <p><strong>✨ Perfect for:</strong> Making informed decisions that you'll be happy with later!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Making Good Decisions
                </a>
            `
        },
        {
            id: 'i12',
            title: 'Language Translation - Speaking Multiple Programming Languages',
            icon: 'fas fa-language',
            summary: 'Claude Code is like Google Translate, but for programming languages!',
            content: `
                <p><strong>🌍 Polyglot Programmer!</strong></p>
                <p>Sometimes you need to translate code from one language to another:</p>
                <div class="content-box-code">
                    "convert this Python function to JavaScript"<br>
                    "turn this shell script into Python code"
                </div>
                <p><strong>🎯 Why it's useful:</strong> Learn new languages by seeing familiar concepts translated!</p>
                <p><strong>Note:</strong> Multi-language translation capabilities are available but not specifically documented</p>
            `
        }
    ],
    advanced: [
        {
            id: 'a1',
            title: 'Custom Automation - Creating Your Own Coding Superpowers',
            icon: 'fas fa-magic',
            summary: 'Now you\'re ready to build custom tools and workflows. It\'s like creating your own magic spells!',
            content: `
                <p><strong>🪄 Spell Weaver Extraordinaire!</strong></p>
                <p>Build custom tools and workflows that automate complex tasks:</p>
                <div class="content-box-code">
                    "create a script that deploys my app, runs tests, and tells my team on Slack"<br>
                    "build something that automatically generates release notes from my commits"
                </div>
                <p><strong>🚀 Result:</strong> You're basically a coding wizard now!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/hooks" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Custom Automation
                </a>
            `
        },
        {
            id: 'a2',
            title: 'Advanced Version Control - Mastering Git Like a Time Traveler',
            icon: 'fas fa-clock',
            summary: 'Git can seem magical and confusing, but with the right guidance, you can navigate any situation.',
            content: `
                <p><strong>⏰ Time Travel Master!</strong></p>
                <p>Navigate even the trickiest Git situations with confidence:</p>
                <div class="content-box-code">
                    "help me fix this complicated merge conflict"<br>
                    "I accidentally committed sensitive data - help me remove it from history"
                </div>
                <p><strong>💫 Perfect for:</strong> Becoming the person everyone asks for Git help!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/github-actions" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Advanced Git Techniques
                </a>
            `
        },
        {
            id: 'a3',
            title: 'Infrastructure as Code - Building Infrastructure Like a Digital Architect',
            icon: 'fas fa-building',
            summary: 'Think of it as building the roads and buildings of the digital world.',
            content: `
                <p><strong>🏗️ Digital City Planner!</strong></p>
                <p>Infrastructure is the foundation that your applications run on:</p>
                <div class="content-box-code">
                    "create a Kubernetes setup for my microservices"<br>
                    "write Terraform code to set up my AWS infrastructure"
                </div>
                <p><strong>🌟 Why it's amazing:</strong> Your apps will have rock-solid foundations!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Infrastructure Workflows
                </a>
            `
        },
        {
            id: 'a4',
            title: 'Test Engineering - Advanced Testing Strategies',
            icon: 'fas fa-microscope',
            summary: 'Beyond basic tests, there are sophisticated ways to ensure your code works perfectly.',
            content: `
                <p><strong>🔬 Code Quality Scientist!</strong></p>
                <p>Ensure your code works perfectly in all situations:</p>
                <div class="content-box-code">
                    "create advanced tests for my sorting algorithm"<br>
                    "set up end-to-end testing across multiple services"
                </div>
                <p><strong>🎯 Result:</strong> Bulletproof code that works in every scenario!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Comprehensive Testing
                </a>
            `
        },
        {
            id: 'a5',
            title: 'Advanced Performance - Performance Optimization for Power Users',
            icon: 'fas fa-tachometer-alt',
            summary: 'Make your applications incredibly fast and efficient, handling massive amounts of data and users.',
            content: `
                <p><strong>🏎️ Speed Optimization Expert!</strong></p>
                <p>Deep dive into making your applications incredibly fast and efficient:</p>
                <div class="content-box-code">
                    "find memory leaks in my long-running Node.js app"<br>
                    "optimize this algorithm to be much faster"
                </div>
                <p><strong>⚡ Perfect for:</strong> Building apps that can handle anything!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Advanced Performance Workflows
                </a>
            `
        },
        {
            id: 'a6',
            title: 'System Integration - Integrating with Everything',
            icon: 'fas fa-plug',
            summary: 'Connect Claude Code to all your favorite tools and create seamless workflows.',
            content: `
                <p><strong>🔌 Integration Wizard!</strong></p>
                <p>Create seamless workflows that make you incredibly productive:</p>
                <div class="content-box-code">
                    "create a VS Code extension for our deployment process"<br>
                    "write a git hook that automatically checks code quality"
                </div>
                <p><strong>🚀 Result:</strong> All your tools work together like magic!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/mcp" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Tool Integration
                </a>
            `
        },
        {
            id: 'a7',
            title: 'Resilience Engineering - Building Bulletproof Error Handling',
            icon: 'fas fa-shield-alt',
            summary: 'Create systems that gracefully handle problems and keep your users happy.',
            content: `
                <p><strong>🛡️ Error Handling Champion!</strong></p>
                <p>Keep your users happy even when things go wrong:</p>
                <div class="content-box-code">
                    "implement circuit breaker pattern for my API calls"<br>
                    "set up proper logging with correlation IDs"
                </div>
                <p><strong>💫 Why it's important:</strong> Your users will trust your app to work reliably!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/troubleshooting" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Robust Error Handling
                </a>
            `
        },
        {
            id: 'a8',
            title: 'Scalability - Scaling for Success',
            icon: 'fas fa-chart-line',
            summary: 'Design systems that can handle millions of users without breaking a sweat.',
            content: `
                <p><strong>📈 Scalability Architect!</strong></p>
                <p>It's like planning a city that can grow from a small town:</p>
                <div class="content-box-code">
                    "design a caching strategy for high-traffic endpoints"<br>
                    "create stress tests for my GraphQL API"
                </div>
                <p><strong>🌟 Dream big:</strong> Your app could be the next big thing!</p>
                <p><strong>Note:</strong> Scalability and load testing capabilities are available but not specifically documented</p>
            `
        },
        {
            id: 'a9',
            title: 'Advanced Security - Enterprise-Level Security',
            icon: 'fas fa-lock',
            summary: 'Implement security measures that would make even the most paranoid security expert proud.',
            content: `
                <p><strong>🔒 Security Fortress Builder!</strong></p>
                <p>Build security that experts would be proud of:</p>
                <div class="content-box-code">
                    "implement OAuth2 with PKCE for my single-page app"<br>
                    "add rate limiting and DDoS protection to my API"
                </div>
                <p><strong>🛡️ Result:</strong> Fort Knox-level security for your applications!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/security" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Advanced Security
                </a>
            `
        },
        {
            id: 'a10',
            title: 'Cross-Platform Development - Cross-Platform Development Magic',
            icon: 'fas fa-mobile-alt',
            summary: 'Build applications that work seamlessly across different devices and operating systems.',
            content: `
                <p><strong>📱 Multi-Platform Magician!</strong></p>
                <p>Create apps that work everywhere:</p>
                <div class="content-box-code">
                    "create a React Native component for both iOS and Android"<br>
                    "optimize this Electron app for different operating systems"
                </div>
                <p><strong>✨ Perfect for:</strong> Reaching users no matter what device they use!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/ide-integrations" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Multi-Platform Development
                </a>
            `
        },
        {
            id: 'a11',
            title: 'Data Engineering - Big Data Processing',
            icon: 'fas fa-database',
            summary: 'Handle massive amounts of data with sophisticated processing pipelines.',
            content: `
                <p><strong>📊 Data Processing Guru!</strong></p>
                <p>Crunch numbers in real-time like a pro:</p>
                <div class="content-box-code">
                    "create a real-time data pipeline with Apache Kafka"<br>
                    "implement distributed data processing with MapReduce"
                </div>
                <p><strong>🚀 Amazing for:</strong> Turning raw data into valuable insights!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/mcp" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Data Processing
                </a>
            `
        },
        {
            id: 'a12',
            title: 'Technical Leadership - Becoming a Mentor and Leader',
            icon: 'fas fa-user-graduate',
            summary: 'Use your knowledge to help others grow and lead code review processes.',
            content: `
                <p><strong>🎓 Coding Mentor Supreme!</strong></p>
                <p>Make your entire team better:</p>
                <div class="content-box-code">
                    "create a code review checklist for my team"<br>
                    "explain this complex concept in simple terms for beginners"
                </div>
                <p><strong>💝 The best part:</strong> Helping others grow while continuing your own journey!</p>
                <a href="https://docs.anthropic.com/en/docs/claude-code/common-workflows" target="_blank" rel="noopener" class="doc-link">
                    <i class="fas fa-book"></i> Leadership and Mentoring
                </a>
            `
        }
    ]
};

// Application State
let currentLevel = 'beginner';
let currentTheme = 'dark'; // Start in dark mode
let soundEnabled = true; // Sound effects enabled by default

// Audio Context for Web Audio API
let audioContext;
let isAudioInitialized = false;

// DOM Elements
const tabs = document.querySelectorAll('.tab');
const tipsGrids = document.querySelectorAll('.tips-grid');
const levelIntros = document.querySelectorAll('.level-intro');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupTabListeners();
    populateAllTips();
    showLevel(currentLevel);
    
    // Set initial theme
    document.body.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    updateSoundIcon();
}

function setupTabListeners() {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const level = tab.getAttribute('data-level');
            showLevel(level);
        });
    });
}

function showLevel(level) {
    const previousLevel = currentLevel;
    currentLevel = level;
    
    // Play level transition sound if switching levels
    if (previousLevel !== level && soundEnabled && isAudioInitialized) {
        playLevelTransitionSound(level);
    }
    
    // Update tab states
    tabs.forEach(tab => {
        if (tab.getAttribute('data-level') === level) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Update content visibility
    tipsGrids.forEach(grid => {
        if (grid.id === `${level}Tips`) {
            grid.classList.remove('hidden');
        } else {
            grid.classList.add('hidden');
        }
    });
    
    // Update intro visibility
    levelIntros.forEach(intro => {
        if (intro.id === `${level}Intro`) {
            intro.classList.add('active');
        } else {
            intro.classList.remove('active');
        }
    });
}

function populateAllTips() {
    Object.keys(tipsData).forEach(level => {
        const grid = document.getElementById(`${level}Tips`);
        const tips = tipsData[level];
        
        grid.innerHTML = tips.map((tip, index) => createTipCard(tip, index + 1, level)).join('');
        
        // Add event listeners for each tip
        tips.forEach(tip => {
            setupTipListeners(tip.id);
        });
    });
}

function createTipCard(tip, number, level) {
    return `
        <div class="tip-card" data-tip-id="${tip.id}">
            <div class="tip-header">
                <div class="tip-icon">
                    <i class="${tip.icon}"></i>
                </div>
                <div class="tip-title-area">
                    <div class="tip-number">Tip ${number}</div>
                    <h3 class="tip-title">${tip.title}</h3>
                    <p class="tip-summary">${tip.summary}</p>
                </div>
            </div>
            <div class="tip-content" id="content-${tip.id}">
                ${tip.content}
            </div>
            <div class="tip-actions">
                <button class="expand-btn" onclick="toggleTipContent('${tip.id}')">
                    <span id="btn-text-${tip.id}">Learn More</span>
                </button>
            </div>
        </div>
    `;
}

function setupTipListeners(tipId) {
    const card = document.querySelector(`[data-tip-id="${tipId}"]`);
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.tip-actions')) {
            toggleTipContent(tipId);
        }
    });
}

function toggleTipContent(tipId) {
    const content = document.getElementById(`content-${tipId}`);
    const btnText = document.getElementById(`btn-text-${tipId}`);
    
    // Initialize audio on first user interaction
    if (!isAudioInitialized) {
        initializeAudio();
    }
    
    // Determine the level based on tipId prefix
    let level = 'beginner';
    if (tipId.startsWith('i')) {
        level = 'intermediate';
    } else if (tipId.startsWith('a')) {
        level = 'advanced';
    }
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        btnText.textContent = 'Learn More';
        playCollapseSound(level); // Level-specific descending notes
    } else {
        content.classList.add('expanded');
        btnText.textContent = 'Show Less';
        playExpandSound(level); // Level-specific ascending chord
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeIcon = document.getElementById('themeIcon');
    if (currentTheme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Audio Functions for Pleasant UI Sounds
function initializeAudio() {
    if (!isAudioInitialized && soundEnabled) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            isAudioInitialized = true;
        } catch (error) {
            console.log('Web Audio API not supported');
            soundEnabled = false;
        }
    }
}

function playNote(frequency, duration = 0.2, type = 'sine') {
    if (!soundEnabled || !isAudioInitialized) return;
    
    try {
        // Create oscillator for the tone
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        // Connect nodes
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configure the sound
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        
        // Create a pleasant envelope (fade in/out)
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        // Play the note
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
        
    } catch (error) {
        console.log('Error playing sound:', error);
    }
}

function playExpandSound(level = 'beginner') {
    if (!soundEnabled) return;
    
    switch(level) {
        case 'beginner':
            // Gentle, encouraging C Major chord: C4 → E4 → G4 (bright and welcoming)
            playNote(261.63, 0.15, 'sine'); // C4
            setTimeout(() => playNote(329.63, 0.15, 'sine'), 50); // E4
            setTimeout(() => playNote(392.00, 0.2, 'sine'), 100); // G4
            break;
            
        case 'intermediate':
            // Confident F Major chord: F4 → A4 → C5 (more sophisticated)
            playNote(349.23, 0.15, 'sine'); // F4
            setTimeout(() => playNote(440.00, 0.15, 'sine'), 50); // A4
            setTimeout(() => playNote(523.25, 0.2, 'sine'), 100); // C5
            break;
            
        case 'advanced':
            // Triumphant G Major chord: G4 → B4 → D5 (powerful and accomplished)
            playNote(392.00, 0.15, 'triangle'); // G4 (triangle wave for richer sound)
            setTimeout(() => playNote(493.88, 0.15, 'triangle'), 50); // B4
            setTimeout(() => playNote(587.33, 0.2, 'triangle'), 100); // D5
            break;
    }
}

function playCollapseSound(level = 'beginner') {
    if (!soundEnabled) return;
    
    switch(level) {
        case 'beginner':
            // Gentle descending: G4 → E4 → C4 (soft and reassuring)
            playNote(392.00, 0.15, 'sine'); // G4
            setTimeout(() => playNote(329.63, 0.15, 'sine'), 50); // E4
            setTimeout(() => playNote(261.63, 0.2, 'sine'), 100); // C4
            break;
            
        case 'intermediate':
            // Confident descending: C5 → A4 → F4 (smooth transition)
            playNote(523.25, 0.15, 'sine'); // C5
            setTimeout(() => playNote(440.00, 0.15, 'sine'), 50); // A4
            setTimeout(() => playNote(349.23, 0.2, 'sine'), 100); // F4
            break;
            
        case 'advanced':
            // Majestic descending: D5 → B4 → G4 (rich and satisfying)
            playNote(587.33, 0.15, 'triangle'); // D5
            setTimeout(() => playNote(493.88, 0.15, 'triangle'), 50); // B4
            setTimeout(() => playNote(392.00, 0.2, 'triangle'), 100); // G4
            break;
    }
}

function playLevelTransitionSound(level) {
    if (!soundEnabled) return;
    
    switch(level) {
        case 'beginner':
            // Welcome sound: Single bright C5 note
            playNote(523.25, 0.4, 'sine');
            break;
            
        case 'intermediate':
            // Progress sound: F5 → A5 (confident interval)
            playNote(698.46, 0.25, 'sine'); // F5
            setTimeout(() => playNote(880.00, 0.3, 'sine'), 150); // A5
            break;
            
        case 'advanced':
            // Achievement sound: G5 → B5 → D6 (triumphant ascending)
            playNote(783.99, 0.2, 'triangle'); // G5
            setTimeout(() => playNote(987.77, 0.2, 'triangle'), 100); // B5
            setTimeout(() => playNote(1174.66, 0.3, 'triangle'), 200); // D6
            break;
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    if (soundEnabled && !isAudioInitialized) {
        initializeAudio();
    }
    
    // Play a confirmation sound
    if (soundEnabled) {
        setTimeout(() => playNote(523.25, 0.3, 'sine'), 100); // High C5 for "sound on"
    }
    
    updateSoundIcon();
}

function updateSoundIcon() {
    const soundIcon = document.getElementById('soundIcon');
    if (soundIcon) {
        soundIcon.className = soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Tab switching with number keys
    if (e.key >= '1' && e.key <= '3') {
        const levels = ['beginner', 'intermediate', 'advanced'];
        const levelIndex = parseInt(e.key) - 1;
        if (levels[levelIndex]) {
            showLevel(levels[levelIndex]);
        }
    }
    
    // Theme toggle with 't' key
    if (e.key.toLowerCase() === 't') {
        toggleTheme();
    }
    
    // Sound toggle with 's' key
    if (e.key.toLowerCase() === 's') {
        toggleSound();
    }
});

// Add console message
console.log(`
🎉 Welcome to Learn Claude Code! 

Hey there, future coding superstar! 👋 

✨ What's New:
- 36 beginner-friendly tips across 3 levels
- 94.4% verified documentation links
- Encouraging tone that makes coding fun
- Each tip links to the perfect Claude Code docs

Tips for using this app:
- Click on tip cards to expand them and learn more
- Listen for level-specific musical themes! 🎵
  • Beginner: Gentle C Major chords (welcoming & encouraging)
  • Intermediate: Confident F Major chords (sophisticated)  
  • Advanced: Triumphant G Major chords (accomplished & rich)
- Use keyboard shortcuts: 1, 2, 3 to switch between levels
- Press 'T' to toggle dark/light mode, 'S' to toggle sound
- Click the 📚 links in each tip to dive deeper into the docs
- Each level has 12 amazing tips to help you grow!

Ready to turn coding into an adventure? Let's go! 🚀
`);