// Claude Code Tips Data
const tipsData = {
    beginner: [
        {
            id: 'b1',
            title: 'Install and Launch Claude Code in Your Project Folder',
            icon: 'fas fa-download',
            summary: 'Get started by installing globally and launching from your project directory for proper context.',
            content: `
                <p><strong>🚀 Getting Started Right!</strong></p>
                <p>First things first - install Claude Code globally to access it from anywhere:</p>
                <code>npm install -g @anthropic/claude-code</code>
                <p>Then <strong>always navigate to your project folder</strong> before launching Claude Code. This gives Claude the proper context of your codebase structure, dependencies, and project files.</p>
                <p><strong>💡 Pro Tip:</strong> Claude understands your project much better when launched from the root directory!</p>
            `
        },
        {
            id: 'b2',
            title: 'Integrate with Your IDE',
            icon: 'fas fa-code',
            summary: 'Connect with VS Code, Cursor, or Windsurf for seamless two-way communication.',
            content: `
                <p><strong>🔗 Supercharge Your Workflow!</strong></p>
                <p>Use the <code>/ide</code> command to connect Claude Code with your favorite IDE:</p>
                <ul>
                    <li><strong>VS Code</strong> - Full integration support</li>
                    <li><strong>Cursor</strong> - AI-first development</li>
                    <li><strong>Windsurf</strong> - Advanced coding assistant</li>
                </ul>
                <p>Once connected, Claude knows which file you're viewing and can see your selections, making conversations much more contextual and productive!</p>
                <p><strong>🎯 Result:</strong> No more copy-pasting code back and forth!</p>
            `
        },
        {
            id: 'b3',
            title: 'Use `/init` to Generate Project Memory',
            icon: 'fas fa-brain',
            summary: 'Automatically create a claude.md file that serves as Claude\'s memory of your project.',
            content: `
                <p><strong>🧠 Give Claude Perfect Memory!</strong></p>
                <p>Run <code>/init</code> in any new project to automatically scan your codebase and create a comprehensive <code>claude.md</code> file.</p>
                <p><strong>What it captures:</strong></p>
                <ul>
                    <li>Project structure and technologies</li>
                    <li>Coding standards and conventions</li>
                    <li>Dependencies and frameworks</li>
                    <li>Key architectural patterns</li>
                </ul>
                <p>This memory file is loaded into every conversation, so Claude always understands your project context without you having to explain it repeatedly!</p>
            `
        },
        {
            id: 'b4',
            title: 'Clear Chat History with `/clear`',
            icon: 'fas fa-broom',
            summary: 'Start fresh conversations and optimize token usage by clearing chat history.',
            content: `
                <p><strong>🧹 Keep It Clean and Efficient!</strong></p>
                <p>Use <code>/clear</code> whenever you:</p>
                <ul>
                    <li>Complete a task and start something new</li>
                    <li>Want to reduce token costs</li>
                    <li>Need Claude to focus on fresh context</li>
                </ul>
                <p><strong>Why it matters:</strong> Long chat histories consume more tokens and can make Claude less focused. Starting fresh keeps conversations efficient and cost-effective!</p>
                <p><strong>💰 Bonus:</strong> Your token usage will thank you for this habit!</p>
            `
        },
        {
            id: 'b5',
            title: 'Master Auto-Accept and Plan Mode',
            icon: 'fas fa-magic',
            summary: 'Use Shift+Tab to cycle through interaction modes for different workflows.',
            content: `
                <p><strong>⚡ Transform Your Workflow!</strong></p>
                <p>Press <code>Shift+Tab</code> to cycle through powerful modes:</p>
                <div class="content-box-light">
                    <strong>🔄 Auto-Accept Mode:</strong> Claude automatically applies approved edits - perfect for trusted, iterative work!
                </div>
                <div class="content-box-medium">
                    <strong>📋 Plan Mode:</strong> Claude thinks and researches without making changes, giving you a detailed strategy first!
                </div>
                <p>Choose the right mode for your current task and watch your productivity soar!</p>
            `
        },
        {
            id: 'b6',
            title: 'Navigate Conversation History Efficiently',
            icon: 'fas fa-history',
            summary: 'Use arrow keys and Escape to navigate and fork conversations from any point.',
            content: `
                <p><strong>🕰️ Time Travel Through Your Conversations!</strong></p>
                <p><strong>Quick Navigation:</strong></p>
                <ul>
                    <li><strong>Up Arrow:</strong> Scroll through previous messages across sessions</li>
                    <li><strong>Escape + Escape:</strong> View all past messages in a searchable list</li>
                </ul>
                <p><strong>🌿 Fork Conversations:</strong> Click on any previous message to "fork" your conversation from that exact point - perfect for exploring different approaches!</p>
                <p>Never lose track of great ideas or need to repeat context again!</p>
            `
        },
        {
            id: 'b7',
            title: 'Target Specific Files with @ Mentions',
            icon: 'fas fa-at',
            summary: 'Focus Claude\'s attention on specific files or directories using the @ symbol.',
            content: `
                <p><strong>🎯 Laser-Focused Assistance!</strong></p>
                <p>Use <code>@filename</code> or <code>@folder/</code> to include specific files in your prompt:</p>
                <div class="content-box-code">
                    "Fix the login bug in @auth/login.js"<br>
                    "Update styles in @components/Button.css"<br>
                    "Analyze all files in @utils/"
                </div>
                <p><strong>✨ Benefits:</strong></p>
                <ul>
                    <li>Claude loads the exact file content</li>
                    <li>More accurate and contextual responses</li>
                    <li>No need to copy-paste code snippets</li>
                </ul>
            `
        },
        {
            id: 'b8',
            title: 'Quickly Add Memory with #',
            icon: 'fas fa-hashtag',
            summary: 'Instantly add new rules or context to your claude.md file using the pound symbol.',
            content: `
                <p><strong>🧠 Instant Memory Updates!</strong></p>
                <p>Add new instructions to your project memory on the fly:</p>
                <div class="content-box-code">
                    "# Always use TypeScript for new components"<br>
                    "# Follow React hooks best practices"<br>
                    "# Use Tailwind CSS for styling"
                </div>
                <p>Claude automatically integrates these instructions into the appropriate section of your <code>claude.md</code> file!</p>
                <p><strong>🚀 Perfect for:</strong> Establishing coding standards, naming conventions, and project-specific preferences.</p>
            `
        },
        {
            id: 'b9',
            title: 'Stop Operations with Escape',
            icon: 'fas fa-stop-circle',
            summary: 'Interrupt Claude\'s current operation without exiting the application.',
            content: `
                <p><strong>⏸️ Stay in Control!</strong></p>
                <p>When Claude goes off-track or you need to pause:</p>
                <div class="content-box-warning">
                    <strong>Press ESC</strong> - Stops current operation safely
                </div>
                <div class="content-box-success">
                    <strong>NOT Ctrl+C</strong> - This exits the entire application!
                </div>
                <p>This lets you redirect Claude, provide clarifications, or prevent unwanted changes while keeping your session active.</p>
                <p><strong>💡 Pro Tip:</strong> Use this when you want to give additional context mid-task!</p>
            `
        }
    ],
    intermediate: [
        {
            id: 'i1',
            title: 'Strategically Select Models with `/model`',
            icon: 'fas fa-brain',
            summary: 'Choose between powerful and affordable models based on task complexity.',
            content: `
                <p><strong>🧠 Smart Model Selection!</strong></p>
                <p>Use <code>/model</code> to switch between models strategically:</p>
                <div class="content-box-light">
                    <strong>🚀 Opus 4:</strong> Complex reasoning, architecture planning, debugging
                </div>
                <div class="content-box-medium">
                    <strong>⚡ Sonnet 4:</strong> Code refactoring, documentation, routine tasks
                </div>
                <p><strong>💰 Cost Optimization Strategy:</strong></p>
                <ul>
                    <li>Start with Sonnet for exploration</li>
                    <li>Switch to Opus for complex problems</li>
                    <li>Return to Sonnet for implementation</li>
                </ul>
            `
        },
        {
            id: 'i2',
            title: 'Summarize Context with `/compact`',
            icon: 'fas fa-compress-alt',
            summary: 'Preserve important context while reducing token count for long conversations.',
            content: `
                <p><strong>📦 Smart Context Management!</strong></p>
                <p>When your conversation gets long but you can't start fresh, use <code>/compact</code>:</p>
                <ul>
                    <li>🔄 Summarizes entire conversation history</li>
                    <li>💾 Preserves all important context and decisions</li>
                    <li>🚀 Starts a new chat with compressed context</li>
                    <li>💰 Dramatically reduces token usage</li>
                </ul>
                <p><strong>Perfect for:</strong> Long debugging sessions, iterative development, or when approaching token limits.</p>
                <p><strong>✨ Result:</strong> Keep working with full context at a fraction of the token cost!</p>
            `
        },
        {
            id: 'i3',
            title: 'Optimize Your claude.md Content',
            icon: 'fas fa-file-code',
            summary: 'Regularly refine your project memory files for better performance.',
            content: `
                <p><strong>🎯 Memory Optimization Mastery!</strong></p>
                <p>Your <code>claude.md</code> files are loaded in every conversation, so keep them:</p>
                <div class="content-box-light">
                    <strong>✅ DO:</strong>
                    <ul>
                        <li>Specific coding standards</li>
                        <li>Project-specific conventions</li>
                        <li>Key architectural patterns</li>
                        <li>Technology preferences</li>
                    </ul>
                </div>
                <div class="content-box-warning">
                    <strong>❌ AVOID:</strong>
                    <ul>
                        <li>Redundant information</li>
                        <li>Outdated preferences</li>
                        <li>Generic programming advice</li>
                    </ul>
                </div>
                <p><strong>🚀 Edit locations:</strong> Project <code>claude.md</code> and global <code>~/.claude/CLAUDE.md</code></p>
            `
        },
        {
            id: 'i4',
            title: 'Create Custom Slash Commands',
            icon: 'fas fa-terminal',
            summary: 'Build reusable prompt templates with custom slash commands.',
            content: `
                <p><strong>⚡ Automate Your Workflows!</strong></p>
                <p>Create custom commands in <code>.claude/commands/</code> folder:</p>
                <div class="content-box-code">
                    .claude/commands/component.md:<br>
                    ---<br>
                    Create a React component named {name}<br>
                    with TypeScript and Tailwind CSS<br>
                    following our style guide
                </div>
                <p><strong>Usage:</strong> <code>/component name=Button</code></p>
                <p><strong>Perfect for:</strong></p>
                <ul>
                    <li>🧩 Component generation</li>
                    <li>📝 Code review templates</li>
                    <li>🐛 Bug report workflows</li>
                    <li>📚 Documentation generation</li>
                </ul>
            `
        },
        {
            id: 'i5',
            title: 'Utilize Thinking Keywords',
            icon: 'fas fa-thought-bubble',
            summary: 'Encourage deeper reasoning with special keywords like "think" and "mega think".',
            content: `
                <p><strong>🤔 Unlock Claude's Full Potential!</strong></p>
                <p>Use thinking keywords to get more thorough analysis:</p>
                <div class="content-box-light">
                    <strong>"think"</strong> - Moderate deeper reasoning
                </div>
                <div class="content-box-medium">
                    <strong>"mega think"</strong> - Extended analysis and planning
                </div>
                <div class="content-box-dark">
                    <strong>"ultra think"</strong> - Maximum reasoning depth
                </div>
                <p><strong>Best for:</strong> Complex architecture decisions, debugging mysterious issues, or optimizing performance.</p>
                <p><strong>💡 Tip:</strong> Claude 4 can "think" between tool calls for even better solutions!</p>
            `
        },
        {
            id: 'i6',
            title: 'Deeply Integrate Version Control',
            icon: 'fas fa-code-branch',
            summary: 'Make Git an integral part of your Claude Code workflow for safety and tracking.',
            content: `
                <p><strong>🛡️ Your Safety Net Strategy!</strong></p>
                <p><strong>Essential Git Practices:</strong></p>
                <ul>
                    <li>🔄 Commit after every significant Claude change</li>
                    <li>📝 Let Claude write descriptive commit messages</li>
                    <li>🌿 Create feature branches for experiments</li>
                    <li>⏪ Easy rollback when Claude goes off-track</li>
                </ul>
                <div class="content-box-success">
                    <strong>Pro Strategy:</strong> Ask Claude to "commit this change with a descriptive message" - it writes excellent commit messages!
                </div>
                <p><strong>🚀 Result:</strong> Fearless experimentation with Claude knowing you can always revert!</p>
            `
        },
        {
            id: 'i7',
            title: 'Implement Automated Pre-Commit Checks',
            icon: 'fas fa-shield-alt',
            summary: 'Set up pre-commit hooks to maintain code quality automatically.',
            content: `
                <p><strong>🛡️ Automatic Quality Gates!</strong></p>
                <p>Set up pre-commit hooks (e.g., Husky) to automatically run:</p>
                <ul>
                    <li>🧪 Test suites</li>
                    <li>📏 Linters and formatters</li>
                    <li>🔧 Type checking</li>
                    <li>🏗️ Build verification</li>
                </ul>
                <div class="content-box-light">
                    <strong>Benefits:</strong>
                    <ul>
                        <li>Prevents broken commits</li>
                        <li>Maintains consistent code quality</li>
                        <li>Catches issues before they reach main branch</li>
                    </ul>
                </div>
                <p><strong>💡 Perfect Combo:</strong> Claude makes changes + Pre-commit ensures quality = Reliable automation!</p>
            `
        },
        {
            id: 'i8',
            title: 'Leverage URL Fetching',
            icon: 'fas fa-link',
            summary: 'Paste URLs directly to get the latest documentation and API specs.',
            content: `
                <p><strong>🌐 Always Stay Current!</strong></p>
                <p>Instead of relying on Claude's training data, paste URLs directly:</p>
                <div class="content-box-code">
                    "Follow the latest React guidelines from<br>
                    https://react.dev/learn/thinking-in-react"
                </div>
                <p><strong>Perfect for:</strong></p>
                <ul>
                    <li>📚 Latest framework documentation</li>
                    <li>🎨 Design system guidelines</li>
                    <li>🔌 API specifications</li>
                    <li>📋 Style guides and standards</li>
                </ul>
                <p><strong>✨ Result:</strong> Claude generates code that follows the most current best practices!</p>
            `
        },
        {
            id: 'i9',
            title: 'Fine-Tune Permission Management',
            icon: 'fas fa-user-shield',
            summary: 'Configure specific permission rules in settings.json for security and efficiency.',
            content: `
                <p><strong>⚖️ Balance Security and Speed!</strong></p>
                <p>Instead of broad permission settings, configure specific rules in <code>.claude/settings.json</code>:</p>
                <div class="content-box-medium">
                    <strong>✅ Auto-Approve:</strong> <code>npm run test</code>, <code>git status</code>
                </div>
                <div class="content-box-warning">
                    <strong>🚫 Always Ask:</strong> File deletion, system commands
                </div>
                <p><strong>Example permissions:</strong></p>
                <ul>
                    <li>Safe commands: Auto-approve</li>
                    <li>Risky operations: Require confirmation</li>
                    <li>Destructive actions: Always block</li>
                </ul>
            `
        }
    ],
    advanced: [
        {
            id: 'a1',
            title: 'Orchestrate Multi-Agent Setups',
            icon: 'fas fa-network-wired',
            summary: 'Coordinate multiple Claude instances as specialized sub-agents.',
            content: `
                <p><strong>🎭 Master of Multiple Agents!</strong></p>
                <p>Run multiple Claude Code instances as specialized sub-agents:</p>
                <div class="content-box-light">
                    <strong>🔍 Agent01:</strong> Code analysis and architecture<br>
                    <strong>⚡ Agent02:</strong> Implementation and testing<br>
                    <strong>📚 Agent03:</strong> Documentation and optimization
                </div>
                <p><strong>Coordination through shared files:</strong></p>
                <ul>
                    <li><code>coms.md</code> - Communication log</li>
                    <li><code>ticket.md</code> - Task specifications</li>
                    <li><code>progress.md</code> - Status updates</li>
                </ul>
                <p><strong>🚀 Result:</strong> Parallel processing of complex projects with specialized expertise!</p>
            `
        },
        {
            id: 'a2',
            title: 'Configure Sub-Agent Resource Limits',
            icon: 'fas fa-server',
            summary: 'Set CPU and memory limits to prevent system crashes with multiple agents.',
            content: `
                <p><strong>⚡ Resource Management Mastery!</strong></p>
                <p>Configure limits in <code>settings.json</code> to prevent system overload:</p>
                <div class="content-box-code">
                    {<br>
                    &nbsp;&nbsp;"agents": {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"maxCpuUsage": "70%",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"maxMemory": "2GB",<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"concurrentLimit": 3<br>
                    &nbsp;&nbsp;}<br>
                    }
                </div>
                <p><strong>Essential for:</strong></p>
                <ul>
                    <li>🐧 Linux/WSL2 environments</li>
                    <li>💻 Resource-constrained systems</li>
                    <li>🔄 Long-running multi-agent tasks</li>
                </ul>
                <p><strong>💡 Pro Tip:</strong> Monitor system performance and adjust limits based on your hardware!</p>
            `
        },
        {
            id: 'a3',
            title: 'Assign Different Models Per Agent',
            icon: 'fas fa-microchip',
            summary: 'Optimize cost and performance by using different models for different agent roles.',
            content: `
                <p><strong>🧠 Strategic Model Assignment!</strong></p>
                <p>Configure different models for specialized roles:</p>
                <div class="content-box-light">
                    <strong>🚀 Architect Agent:</strong> Opus 4 - Complex reasoning
                </div>
                <div class="content-box-medium">
                    <strong>⚡ Developer Agent:</strong> Sonnet 4 - Implementation
                </div>
                <div class="content-box-dark">
                    <strong>📝 Docs Agent:</strong> Haiku - Documentation
                </div>
                <p><strong>Cost Optimization:</strong> Use powerful models only where needed, cheaper models for routine tasks.</p>
                <p><strong>🎯 Result:</strong> Maximum capability at minimum cost!</p>
            `
        },
        {
            id: 'a4',
            title: 'Implement Workflow Hooks',
            icon: 'fas fa-anchor',
            summary: 'Advanced control and observability through pre/post tool use hooks.',
            content: `
                <p><strong>🎣 Ultimate Workflow Control!</strong></p>
                <p>Configure powerful hooks in <code>settings.json</code>:</p>
                <div class="content-box-warning">
                    <strong>🛡️ pre-tool-use:</strong> Block dangerous commands (rm -rf)
                </div>
                <div class="content-box-medium">
                    <strong>📊 post-tool-use:</strong> Log all agent activity
                </div>
                <div class="content-box-dark">
                    <strong>🔔 notification:</strong> Audio alerts for completions
                </div>
                <p><strong>Advanced Applications:</strong></p>
                <ul>
                    <li>Security enforcement</li>
                    <li>Audit trails</li>
                    <li>Custom integrations</li>
                    <li>Performance monitoring</li>
                </ul>
            `
        },
        {
            id: 'a5',
            title: 'Run Claude Code in Headless Mode',
            icon: 'fas fa-terminal',
            summary: 'Integrate Claude into scripts and automation pipelines with headless mode.',
            content: `
                <p><strong>🤖 Full Automation Potential!</strong></p>
                <p>Use <code>claude -p</code> for headless operation:</p>
                <div class="content-box-code">
                    # In CI/CD pipeline<br>
                    echo "Optimize this code" | claude -p<br>
                    <br>
                    # Script integration<br>
                    claude -p &lt; automation_prompt.txt
                </div>
                <p><strong>Perfect for:</strong></p>
                <ul>
                    <li>🔄 CI/CD pipelines</li>
                    <li>📦 Batch processing</li>
                    <li>🔗 Integration with other tools</li>
                    <li>⚡ Automated code reviews</li>
                </ul>
                <p><strong>🚀 Unlock:</strong> Fully automated development workflows!</p>
            `
        },
        {
            id: 'a6',
            title: 'Structure Complex Prompts with XML',
            icon: 'fas fa-code',
            summary: 'Use XML tags to organize complex requirements and data flows.',
            content: `
                <p><strong>🏗️ Architectural Prompt Engineering!</strong></p>
                <p>Use XML tags for complex multi-agent orchestration:</p>
                <div class="content-box-code">
                    &lt;crud-functionality&gt;<br>
                    &nbsp;&nbsp;Define user management system<br>
                    &lt;/crud-functionality&gt;<br>
                    <br>
                    &lt;user-journey&gt;<br>
                    &nbsp;&nbsp;Registration → Verification → Dashboard<br>
                    &lt;/user-journey&gt;<br>
                    <br>
                    &lt;next-steps&gt;<br>
                    &nbsp;&nbsp;1. Database schema<br>
                    &nbsp;&nbsp;2. API endpoints<br>
                    &nbsp;&nbsp;3. Frontend components<br>
                    &lt;/next-steps&gt;
                </div>
                <p><strong>Benefits:</strong> Clear structure, better agent coordination, and precise task handoffs!</p>
            `
        },
        {
            id: 'a7',
            title: 'Automate Agent Creation',
            icon: 'fas fa-robot',
            summary: 'Use templates to consistently create and configure specialized agents.',
            content: `
                <p><strong>🏭 Agent Factory Automation!</strong></p>
                <p>Create standardized agent templates for consistent deployment:</p>
                <div class="content-box-code">
                    # agent-template.md<br>
                    Role: {{ROLE}}<br>
                    Model: {{MODEL}}<br>
                    Tools: {{TOOLS}}<br>
                    Constraints: {{CONSTRAINTS}}<br>
                    Communication: {{COM_CHANNEL}}
                </div>
                <p><strong>Usage:</strong> Ask Claude to generate new agents from template with specific parameters.</p>
                <p><strong>Benefits:</strong></p>
                <ul>
                    <li>🔧 Consistent agent structure</li>
                    <li>⚡ Rapid agent deployment</li>
                    <li>📋 Standardized configurations</li>
                    <li>🔄 Repeatable workflows</li>
                </ul>
            `
        },
        {
            id: 'a8',
            title: 'Master Surgical Refactoring',
            icon: 'fas fa-user-md',
            summary: 'Systematic approach to refactoring large, complex files safely.',
            content: `
                <p><strong>🏥 Surgical Precision Refactoring!</strong></p>
                <p><strong>3-Phase Approach:</strong></p>
                <div class="content-box-warning">
                    <strong>🛡️ Phase 1 - Safety Net:</strong><br>
                    Comprehensive tests on separate branch
                </div>
                <div class="content-box-light">
                    <strong>🎯 Phase 2 - Surgical Planning:</strong><br>
                    Identify complexity hotspots, prioritize low-risk extractions
                </div>
                <div class="content-box-medium">
                    <strong>⚡ Phase 3 - Incremental Execution:</strong><br>
                    Small changes, test after each step
                </div>
                <p><strong>🚀 Result:</strong> Large refactoring with zero downtime and maximum confidence!</p>
            `
        },
        {
            id: 'a9',
            title: 'Integrate with MCP Servers',
            icon: 'fas fa-plug',
            summary: 'Extend Claude\'s capabilities by connecting to external tools and services.',
            content: `
                <p><strong>🔌 Unlimited Integration Power!</strong></p>
                <p>Claude Code acts as both MCP client and server, enabling integration with:</p>
                <div class="content-box-light">
                    <strong>🗄️ Databases:</strong> PostgreSQL, MongoDB, Redis
                </div>
                <div class="content-box-medium">
                    <strong>📋 Task Management:</strong> Jira, Linear, Notion
                </div>
                <div class="content-box-dark">
                    <strong>🌐 Browser Automation:</strong> Puppeteer, Playwright
                </div>
                <p><strong>Capabilities:</strong></p>
                <ul>
                    <li>Direct database queries</li>
                    <li>Task creation and management</li>
                    <li>Web scraping and testing</li>
                    <li>External API integration</li>
                </ul>
                <p><strong>🚀 Result:</strong> Claude becomes your universal development interface!</p>
            `
        }
    ]
};

// Application State
let currentLevel = 'beginner';
let currentTheme = 'dark'; // Start in dark mode

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
    currentLevel = level;
    
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
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        btnText.textContent = 'Learn More';
    } else {
        content.classList.add('expanded');
        btnText.textContent = 'Show Less';
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
});

// Add console message
console.log(`
🎉 Welcome to Learn Claude Code! 

Tips for using this app:
- Click on tip cards to expand them
- Use keyboard shortcuts: 1, 2, 3 to switch tabs
- Press 'T' to toggle dark/light mode
- Access official Claude Code resources via header links
- Each card has a unique color (9-color palette) for easy differentiation

Happy learning! 🚀
`);