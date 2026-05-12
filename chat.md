Developer Note — AI Agent Chatbot MVPMontefiore Health System – Tuition Reimbursement Agent PlatformProject Objective
Build a UI-only clickable MVP of an AI-powered voice/text chatbot assistant for the Montefiore Tuition Reimbursement Platform.
The chatbot will act as a:
Virtual HR/Tuition Assistant
AI reimbursement guide
Intelligent eligibility assistant
Claim submission copilot
The MVP should visually demonstrate the future-state AI-native experience without requiring production backend integrations at this stage.
Core Vision
The chatbot should:
Help employees understand reimbursement programs
Answer eligibility questions from a mock knowledge base
Simulate reimbursement claim submission
Guide users through the end-to-end reimbursement journey
Simulate AI review & recommendations
Provide conversational voice/text interaction
Showcase future enterprise AI experience
MVP Scope (UI-Only)IncludedConversational AI Chat UI
Modern enterprise AI assistant interface
Text chat
Voice input button (mock/simulated)
Suggested prompts/chips
AI typing indicators
Conversation history panel
Knowledge Base Simulation
The chatbot should answer mock questions like:
“Am I eligible for tuition reimbursement?”
“How many credits do I have left?”
“What documents are required?”
“What is the NYSNA policy?”
“What reimbursements are taxable?”
“What is the maximum reimbursement amount?”
Employee Context Simulation
Mock employee profile data:
Employee Name
Employee ID
Department
Union Status
Remaining Credits
Current Year Reimbursement Usage
Eligibility Status
Reimbursement Claim Simulation
The chatbot should simulate:
Program selection
Eligibility validation
Course details collection
Tuition & credits validation
Document upload simulation
AI review summary
Submission confirmation
AI Review Simulation
Mock AI responses:
“Transcript grade validated”
“Receipt contains eligible items”
“Service agreement required”
“You have exceeded annual credit limit”
“Application ready for approval”
UI Workflow Integration
The chatbot should integrate visually with the reimbursement workflow screens.
Important UX RequirementsDesign Style
Enterprise healthcare aesthetic
Modern AI-native interface
Similar quality to:
Microsoft Copilot
ChatGPT Enterprise
ServiceNow AI Agent
Salesforce Einstein
UI ComponentsLeft Panel
Chat history
Saved conversations
Quick actions
Main Chat Window
Conversational thread
AI cards
Workflow progress indicators
Upload previews
Approval status cards
Top Bar
Employee profile
Voice toggle
Notification bell
SSO avatar simulation
Workflow Stages to Simulate
Use the attached reimbursement flow screenshots as the primary UX reference.
The chatbot should simulate these stages:
Program Selection
Eligibility Check
Employee Information
Course Details
Tuition & Credits
Documents Upload
AI Review
Review & Submit
Confirmation
AI Chatbot Functional SimulationExample Conversation FlowsEligibility
User:
“Am I eligible for tuition reimbursement?”
AI:
“Based on your employee profile, you are eligible for Tuition Reimbursement. You currently have 12 remaining credits available this academic year.”
Missing Documents
User:
“What documents do I need?”
AI:
“You still need to upload:
Tuition receipt
Final transcript
Signed service agreement”
Submission Flow
User:
“Submit my application”
AI:
“Your application has passed AI validation and is ready for final submission.”
Voice AI SimulationMVP Only
No real voice AI backend required.
Add:
Microphone button
Voice waveform animation
“Listening…” state
Mock transcription
Optional:
Use browser speech APIs for demo simulation.
Mock Knowledge Base Topics
The chatbot should answer from predefined static/mock data regarding:
Tuition reimbursement policies
NYSNA rules
Credit limits
Deadlines
Required grades
Taxability
CME eligibility
Service agreements
Payroll timelines
Scholarship rules
Suggested Technical Stack (MVP)Frontend
React / Next.js
TailwindCSS
Framer Motion
shadcn/ui
Chat UI
Streaming chat simulation
Animated responses
Floating AI assistant
State
Mock JSON data
Static workflow engine
Local state management
No Backend Required
All APIs can be mocked.
Future-Ready Architecture Considerations
Although MVP is UI-only, structure should support future:
Azure OpenAI
RAG knowledge base
ServiceNow integration
Workday integration
SSO (Okta/Azure AD)
OCR/document intelligence
Multi-agent orchestration
Audit logging
Developer PromptPrompt for Frontend Developer / AI UX Engineer
Build a modern enterprise AI-native chatbot interface for the “Montefiore Tuition Reimbursement Agent Platform.”
The chatbot should support:
Voice + text interaction
AI assistant workflow guidance
Reimbursement claim simulation
Employee eligibility assistance
AI review simulation
Mock document validation
Interactive reimbursement submission journey
The UI should feel like a hybrid of:
ChatGPT Enterprise
Microsoft Copilot
ServiceNow AI Agent
Workday Assistant
Use the attached reimbursement workflow screenshot as the reference for the reimbursement process stages:
Program
Eligibility
Employee Info
Course Details
Tuition & Credits
Documents
AI Review
Review & Submit
Confirmation
The chatbot should:
Guide the user conversationally through these stages
Dynamically show workflow progress
Display AI-generated recommendations
Simulate eligibility checks
Simulate document validation
Simulate reimbursement approval readiness
Important:
This is currently a clickable UI MVP only.
Do NOT build production backend integrations.
Use mocked:
Employee data
Knowledge base
AI responses
Workflow states
Uploaded documents
Eligibility rules
Design Requirements:
Enterprise healthcare UX
Responsive layout
Clean AI-native visual language
Floating assistant experience
Animated conversational interactions
Modern cards, progress trackers, and AI review panels
Include:
Voice input button
Typing animation
Suggested prompts
Workflow side panel
AI review summary cards
Upload simulation UI
Status badges
Eligibility score indicator
Future architecture should be extensible for:
Azure OpenAI
RAG
ServiceNow
Workday
SSO
OCR/document intelligence
Multi-agent orchestration
Goal:
Create a compelling executive-demo-ready AI-native tuition reimbursement assistant experience for Montefiore Health System.