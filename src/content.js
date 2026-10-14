// ─────────────────────────────────────────────────────────────
//  WEBSITE CONTENT  —  all page copy lives here.
//  Edit the text, save, then run:  node build.mjs
// ─────────────────────────────────────────────────────────────

// ── Solutions & Services (each becomes its own page) ─────────
export const solutions = [
  {
    slug: 'ai-automation', file: 'solutions/ai-automation.html', icon: 'chip', scene: 'ai',
    nav: 'AI & Automation', kicker: 'Solution',
    card: 'Automate approvals, documents and reporting, and add AI assistants that work in Arabic and English.',
    seo: ['AI & Automation Solutions in Saudi Arabia | Aureon', 'Practical AI and process automation for Saudi businesses: workflow automation, Arabic-English assistants, document processing and analytics from Aureon.'],
    hero: { h: 'Hand the repetitive work to <em>software.</em>', p: ['Invoices, approvals, monthly reports, the same ten customer questions. That is where AI and automation pay for themselves first.', 'We find those tasks in your business, automate them with tools you largely already own, and measure the hours saved. We start small and we skip the hype.'], cta: ['Find out what you could automate', 'contact.html'] },
    why: { h: 'What automation changes', items: [
      ['Faster turnaround', 'Approvals and requests move in minutes because nobody has to remember to forward an email.'],
      ['Fewer errors', 'Data is entered once and flows to every system that needs it.'],
      ['Better use of people', 'Skilled staff spend their day on decisions, customers and exceptions.'],
      ['A clear record', 'Every automated step is logged, which makes audits simpler.'],
      ['Answers on demand', 'Dashboards update themselves, so nobody waits for month-end.'] ] },
    services: { h: 'AI & automation services', items: [
      ['workflow', 'Workflow & Process Automation', 'Approvals, notifications, data entry and document routing on Microsoft Power Automate, Power Apps and similar platforms. Typical projects: purchase requests, leave and HR requests, onboarding, expense claims and IT tickets.'],
      ['chip', 'AI Assistants & Chatbots', 'Assistants that answer from your own policies, product information and knowledge base, in Arabic and English. They serve customers on your website and WhatsApp, or your staff inside Microsoft Teams.'],
      ['doc', 'Intelligent Document Processing', 'Invoices, delivery notes, contracts, IDs and forms are read automatically, Arabic included, checked, and posted to your ERP or finance system. Your team reviews only the exceptions.'],
      ['chart', 'Analytics & Forecasting', 'Your data sources connected into Power BI dashboards management can rely on, with forecasting for sales, demand, cash flow or maintenance where there is enough history.'],
      ['layers', 'ERP & Business System Integration', 'We connect to Microsoft Dynamics 365 and other ERP, CRM and HR platforms so information moves between systems without retyping.'],
      ['shield', 'AI Readiness & Governance', 'Where AI is appropriate, what data it may use, who is accountable. We write practical staff usage policies and check your approach against the PDPL and SDAIA’s AI ethics principles.'] ] },
    process: { h: 'Start small, prove it, then scale', steps: [
      ['Discover', 'A short workshop with each department to list repetitive tasks and estimate the time they take.'],
      ['Prioritize', 'We rank candidates by savings and effort and agree the first one or two to build.'],
      ['Pilot', 'A working automation in weeks, tested with the people who will use it.'],
      ['Measure & extend', 'We compare time and error rates before and after, then move to the next process.'] ] },
    faqs: [
      ['Do we need a large budget to start with AI?', 'No. Many organizations already hold Microsoft 365 licenses that include automation tools. A first project is usually one process delivered in a few weeks, and its savings help fund the next.'],
      ['Will our data be safe?', 'Every solution is designed so your data stays inside your own tenant or an approved environment. Before any AI tool touches personal or confidential information, we agree what it may access and where it is processed.'],
      ['Can your solutions handle Arabic?', 'Yes. Assistants and document processing work in Arabic and English, including mixed-language documents. We test with your real documents before go-live.'],
      ['Will automation replace our staff?', 'In our experience it removes the dullest part of the job. Teams usually redirect the time to work that was being neglected: follow-up, analysis and customer service.'] ],
    cta: { h: 'Which task would you automate first?', p: 'Tell us about the process that wastes the most time. We will say honestly whether it can be automated and what it would take.', b: 'Book an automation workshop' },
  },
  {
    slug: 'cybersecurity', file: 'solutions/cybersecurity.html', icon: 'shield', scene: 'cyber',
    nav: 'Cybersecurity', kicker: 'Solution',
    card: 'Assess your risk, close the gaps and keep watch, in line with NCA, SAMA and PDPL requirements.',
    seo: ['Cybersecurity Services in Saudi Arabia | Aureon', 'Cybersecurity for Saudi organizations: assessments, penetration testing, protection, monitoring and NCA, SAMA and PDPL compliance support from Aureon.'],
    hero: { h: 'Find your weak points <em>before someone else does.</em>', p: ['Attackers look for the easy way in: a reused password, an unpatched server, a convincing email. Size is no protection, and smaller businesses are targeted every day because they are assumed to be less prepared.', 'We show you your real exposure, fix what matters most and keep watch afterwards, in plain language and with priorities that fit your budget.'], cta: ['Request a security assessment', 'contact.html'] },
    why: { h: 'What good security protects', items: [
      ['Your operations', 'An attack that locks your systems stops your business until they are recovered.'],
      ['Your money', 'Recovery, lost sales and penalties cost far more than prevention.'],
      ['Your customers’ trust', 'People expect their data to be safe with you.'],
      ['Your contracts', 'Many tenders and enterprise customers now ask for evidence of security controls.'],
      ['Your compliance', 'Meeting NCA, SAMA and PDPL obligations is a condition of doing business in many sectors.'] ] },
    note: { h: 'Why security needs attention now', p: ['As more of the Kingdom’s business moves online, opportunities for attackers grow with it. Ransomware groups run like businesses, phishing emails are now written by AI, and staff work from home, from phones and from cloud apps that sit outside the office firewall.', 'Regulators have responded. The NCA, SAMA and SDAIA have all published detailed requirements, and customers increasingly ask suppliers to prove they are secure before signing.'] },
    groups: { h: 'Our cybersecurity services', items: [
      ['search', 'Assess', ['Security gap assessment against NCA ECC, the SAMA Cyber Security Framework, PDPL or ISO 27001, with a prioritized plan', 'Vulnerability assessment and penetration testing (VAPT) for networks, web and mobile apps, and cloud', 'Risk assessment ranking threats by likely business impact', 'Configuration reviews of firewalls, Microsoft 365, Active Directory and cloud accounts']],
      ['shield', 'Protect', ['Next-generation firewalls, segmentation, secure remote access and WAF', 'Endpoint detection and response on laptops, desktops and servers', 'Email security against phishing, impersonation and malicious attachments', 'MFA, privileged access management and regular access reviews', 'Data classification, encryption, DLP and tested backups', 'Secure configuration and posture checks for Microsoft 365 and cloud']],
      ['eye', 'Detect & Respond', ['Log collection and monitoring (SIEM) so suspicious activity is seen and investigated', 'Managed detection and response', 'Incident response planning: playbooks, contact lists and tabletop exercises', 'Incident support to contain an attack, recover systems and report as regulations require']],
      ['book', 'Govern & Train', ['Policies and procedures written for your organization and aligned to the frameworks that apply', 'Compliance support: evidence preparation and closing audit findings', 'Security awareness training and phishing simulations in Arabic and English', 'Virtual CISO support without a full-time hire']],
      ['factory', 'Industrial & Physical', ['Operational technology (OT) security reviews for plants and industrial networks', 'Integration of CCTV and access control into your wider security picture']] ] },
    whyAureon: { h: 'Why choose us for security', items: [
      ['Practical priorities', 'We tell you which ten fixes matter most. You will not be handed a three-hundred-page report and left to work it out.'],
      ['Knowledge of Saudi regulation', 'We work with NCA and SAMA frameworks daily and know what auditors look for.'],
      ['We fix as well as find', 'Because we also design and run infrastructure, we can implement the remediation ourselves.'],
      ['Reports your board can read', 'Every report opens with a one-page summary written for management.'] ] },
    sectors: { h: 'Where we focus in each sector', rows: [
      ['Banking & Financial Services', 'Gap assessments against the SAMA framework, access controls, data protection and audit evidence.'],
      ['Government & Semi-Government', 'Controls aligned with NCA ECC, secure email and regular testing.'],
      ['Industrial & Manufacturing', 'Separation of plant and office networks, and protection for control systems.'],
      ['Healthcare & Education', 'Protection of patient and student records, and secure access for staff.'],
      ['Retail & SMEs', 'Affordable essentials: firewall, endpoint protection, backup, MFA and staff training.'] ] },
    faqs: [
      ['Where should a smaller business start?', 'With five basics: multi-factor authentication on email, up-to-date endpoint protection, regular patching, tested backups kept offline or off-site, and staff awareness training. These stop the large majority of common attacks. An assessment shows which you are missing.'],
      ['What is the difference between a vulnerability assessment and a penetration test?', 'A vulnerability assessment scans your systems and lists known weaknesses. A penetration test goes further: a tester tries to exploit them, as an attacker would, to show what could really be reached. Most organizations benefit from both.'],
      ['Do the NCA controls apply to us?', 'The Essential Cybersecurity Controls are mandatory for government entities and for private organizations that own or operate critical national infrastructure. Many other companies adopt them because customers or regulators expect it. We can help you confirm what applies.'],
      ['How often should we test our security?', 'At least once a year, and after any major change such as a new application, a cloud migration or an office move. Regulated sectors often require more.'],
      ['What happens if we are attacked?', 'Speed matters most. With an incident response plan, your team knows whom to call, what to isolate and what to preserve. We help you prepare the plan in advance and support you during an incident.'] ],
    faqNote: 'Regulatory statements are general summaries; always confirm against the current published frameworks.',
    cta: { h: 'Do you know how exposed you are?', p: 'A security assessment answers that in two to three weeks: a clear report, a prioritized plan and an honest conversation about what to do first.', b: 'Book a security assessment' },
  },
  {
    slug: 'it-infrastructure', file: 'solutions/it-infrastructure.html', icon: 'network', scene: 'infra',
    nav: 'IT Infrastructure & Networking', kicker: 'Solution',
    card: 'Servers, storage, switching, Wi-Fi and server rooms, sized for today and ready for where you are heading.',
    seo: ['IT Infrastructure & Networking in Saudi Arabia | Aureon', 'Servers, storage, networks, Wi-Fi, server rooms and collaboration tools designed, installed and documented by Aureon for businesses across Saudi Arabia.'],
    hero: { h: 'A network <em>nobody has to think about.</em>', p: ['Good infrastructure goes unnoticed. People open their laptops and everything works: the Wi-Fi, the shared files, the video call, the ERP. Getting there takes careful design and tidy installation.', 'We build the foundations your business runs on, sized to your needs and documented end to end.'], cta: ['Plan your infrastructure', 'contact.html'] },
    why: { h: 'What a well-built foundation gives you', items: [
      ['Less downtime', 'Redundancy is placed where it counts, so one failure does not stop the business.'],
      ['Room to grow', 'New staff, branches and applications are added without starting again.'],
      ['Better performance', 'Applications respond quickly and calls stay clear.'],
      ['Easier support', 'A standard, documented environment is faster to troubleshoot.'],
      ['Stronger security', 'A properly segmented network limits how far any problem can spread.'] ] },
    services: { h: 'Infrastructure services', items: [
      ['server', 'Servers & Virtualization', 'Physical and virtual servers supplied, installed and configured. We consolidate ageing hardware onto fewer, more capable hosts, cutting power, cooling and maintenance cost.'],
      ['layers', 'Storage & Backup', 'Central storage sized for data growth, with backup on the 3-2-1 principle: three copies, two media types, one off-site. We run test restores with you so recovery is proven.'],
      ['network', 'Wired Networks', 'Core, distribution and access switching for offices, campuses and plants, segmented by function with quality of service for voice and video.'],
      ['globe', 'Wireless Networks', 'Wi-Fi designed from a proper site survey, so coverage is planned on evidence. Staff, guests and devices each get their own secure network.'],
      ['pin', 'Branch & WAN Connectivity', 'Secure links between head office, branches, warehouses and remote sites using VPN and SD-WAN, with automatic failover between internet lines.'],
      ['building', 'Server Rooms & Data Centers', 'Complete fit-out: racks, power distribution, UPS, cooling, environmental monitoring, fire detection and access control. We also re-rack rooms that have grown without a plan.'],
      ['mail', 'Microsoft 365 & Collaboration', 'Setup and migration for email, Teams, SharePoint and OneDrive, with security applied from day one, so you get full value from the licenses you pay for.'],
      ['phone', 'Telephony & Meeting Rooms', 'IP telephone systems, call center setups and video conferencing rooms that start a meeting with one touch.'],
      ['monitor', 'End-User Devices', 'Laptops, desktops, printers and peripherals supplied, imaged and deployed with asset tagging and central device management.'] ] },
    process: { h: 'Designed on paper before it is built on site', steps: [
      ['Site survey', 'We inspect the premises, count users and devices, and record what already exists.'],
      ['Design & proposal', 'Network diagrams, rack layouts, a bill of materials and a fixed price.'],
      ['Installation', 'Equipment is pre-configured, installed neatly and labeled. Disruptive work happens out of hours.'],
      ['Test & handover', 'We test every link and failover, then hand over as-built documents and train your team.'] ] },
    faqs: [
      ['Should we keep servers on site or move to the cloud?', 'It depends on your applications, internet links and regulatory position. Many organizations end up with a mix. We assess each workload and recommend where it should run, with costs side by side.'],
      ['Can you work with our existing equipment?', 'Yes. We start by assessing what you have. Equipment that is still supported and fit for purpose stays in the design.'],
      ['Do you supply the hardware as well?', 'We can supply, install and support the full solution, or install equipment you bought separately. Either way you receive the same documentation and testing.'],
      ['Will the work disrupt our business?', 'We plan cutovers for evenings and weekends and prepare a rollback for every change. Most users arrive the next morning to find things simply work better.'] ],
    cta: { h: 'Is your infrastructure holding you back?', p: 'Slow systems, dropped calls and recurring faults usually have a root cause that can be fixed. Let us take a look.', b: 'Request a site survey' },
  },
  {
    slug: 'cloud-data', file: 'solutions/cloud-data.html', icon: 'cloud', scene: 'cloud',
    nav: 'Cloud & Data', kicker: 'Solution',
    card: 'Move the right workloads to the cloud, back everything up, and turn your data into reports people trust.',
    seo: ['Cloud & Data Management in Saudi Arabia | Aureon', 'Cloud migration, Microsoft 365, backup, disaster recovery and business reporting for Saudi organizations, planned around data residency rules by Aureon.'],
    hero: { h: 'The right things in the cloud, and <em>data you can trust.</em>', p: ['The cloud suits many workloads very well and a few poorly. The benefit comes from knowing which is which, moving them carefully and keeping costs under control afterwards.', 'We help you plan the move, protect your data wherever it lives, and turn it into information your managers can use.'], cta: ['Plan your cloud move', 'contact.html'] },
    why: { h: 'What you gain', items: [
      ['Flexibility', 'Add or remove capacity as the business changes, with no hardware bought years ahead.'],
      ['Resilience', 'Systems and data can be recovered from another location if your site is unavailable.'],
      ['Access from anywhere', 'Staff work securely from the office, home or site.'],
      ['Lower maintenance', 'Less equipment in your server room to power, cool and replace.'],
      ['Better decisions', 'Data from different systems is brought together into one reliable view.'] ] },
    services: { h: 'Cloud and data services', items: [
      ['compass', 'Cloud Readiness Assessment', 'We review applications, data, licenses and connectivity, then report which workloads should move, which should stay, and what each option costs over three to five years.'],
      ['cloud', 'Cloud Migration', 'Planned, staged migration of email, files, servers and applications with testing at every step and a way back if anything is not right.'],
      ['layers', 'Hybrid Cloud', 'For many organizations the best answer is a mix. We connect on-premises and cloud so they work as one environment under one set of security rules.'],
      ['shield', 'Backup & Disaster Recovery', 'Automated backup of servers, Microsoft 365 and cloud workloads, held separately from production. We agree recovery targets, document the steps and rehearse them.'],
      ['lock', 'Data Residency & Classification', 'Some data must stay inside the Kingdom. We help you classify data, identify what is regulated and choose hosting, including in-Kingdom cloud regions, that meets PDPL and sector rules.'],
      ['chart', 'Cloud Cost Management', 'Cloud bills grow quietly. We review usage monthly, remove what is idle, right-size what is oversized and keep you on the most economical licensing.'],
      ['doc', 'Data Management & Reporting', 'We clean and connect data from ERP, CRM, HR and operational systems and build Power BI dashboards for finance, sales, operations and management.'] ] },
    process: { h: 'A careful move, one stage at a time', steps: [
      ['Assess', 'An inventory of workloads, their dependencies and any regulatory constraints.'],
      ['Plan', 'A migration plan with sequence, timing, costs and risks.'],
      ['Migrate', 'We move in stages, test after each, and keep users informed.'],
      ['Optimize', 'We review performance, security and cost regularly after the move.'] ] },
    faqs: [
      ['Is the cloud secure?', 'A well-configured cloud is often more secure than a typical server room. Most cloud incidents come from configuration mistakes, so we apply security settings from day one and review them regularly.'],
      ['Can we keep our data inside Saudi Arabia?', 'Yes. Several major providers operate or are opening regions inside the Kingdom, and local hosting exists as well. We help match each type of data to hosting that meets your obligations.'],
      ['Will the cloud save us money?', 'Sometimes, not always. Savings usually come from retiring old hardware and paying only for what you use. You get a like-for-like comparison before you decide.'],
      ['Does Microsoft 365 need its own backup?', 'We recommend it. Microsoft keeps the service running, but protecting data against accidental deletion, malicious deletion and ransomware is your responsibility. An independent backup closes that gap.'] ],
    cta: { h: 'Thinking about the cloud?', p: 'Start with a readiness assessment. In a few days you will know what should move, what it will cost and how long it will take.', b: 'Request a cloud readiness assessment' },
  },
  {
    slug: 'web-mobile-apps', file: 'solutions/web-mobile-apps.html', icon: 'code', scene: 'web',
    nav: 'Web & Mobile Apps', kicker: 'Solution',
    card: 'Websites, portals and mobile apps, bilingual and connected to your ERP, payments and e-invoicing.',
    seo: ['Website & Mobile App Development in Saudi Arabia | Aureon', 'Bilingual websites, e-commerce, portals and iOS and Android apps for Saudi businesses, integrated with ERP, payments and e-invoicing. Built by Aureon.'],
    hero: { h: 'Websites and apps <em>your customers will actually use.</em>', p: ['For many customers your website or app is your company. It must load quickly, read naturally in Arabic and English, and let people do what they came to do in a few taps.', 'We design and build digital products around that, and connect them to the systems behind your business so they stay accurate and useful.'], cta: ['Start your project', 'contact.html'] },
    why: { h: 'What a well-built digital product does', items: [
      ['Earns trust quickly', 'A clear, professional site tells customers you are serious.'],
      ['Works on the phone', 'Most of your visitors arrive on a mobile device.'],
      ['Serves customers around the clock', 'Orders, bookings and requests keep coming after the office closes.'],
      ['Reduces manual work', 'Information goes straight into your systems with no retyping.'],
      ['Can be found', 'Pages built for search bring in customers already looking for what you offer.'] ] },
    services: { h: 'Development services', items: [
      ['globe', 'Corporate Websites', 'Fast, secure, bilingual websites with a content system your own team can update without calling a developer.'],
      ['cart', 'E-Commerce', 'Online stores with local payment methods including mada, Apple Pay and major cards, plus shipping, inventory and ZATCA-compliant e-invoicing.'],
      ['layers', 'Web Applications & Portals', 'Customer and supplier portals, booking systems, internal tools and dashboards built around your process.'],
      ['phoneapp', 'Mobile Apps', 'iOS and Android apps for customers or staff, published to the App Store and Google Play. We advise on native or cross-platform to suit your budget.'],
      ['sparkle', 'UI & UX Design', 'We design the experience before any code is written. You click through a prototype first, in both right-to-left Arabic and left-to-right English.'],
      ['network', 'Integration', 'Connections to Microsoft Dynamics 365 and other ERP, CRM, payment, SMS and messaging platforms, so data flows automatically.'],
      ['lock', 'Hosting, Security & Maintenance', 'Secure hosting, SSL, backups, updates and monitoring under a support plan, with security testing before every major release.'] ] },
    process: { h: 'You see progress every two weeks', steps: [
      ['Discovery', 'We agree goals, users, features and content, and give you a fixed scope and price.'],
      ['Design', 'Wireframes and visual designs that you review and approve.'],
      ['Development', 'Short build cycles, with a working version to review every two weeks.'],
      ['Testing', 'Functional, security, performance and device testing in both languages.'],
      ['Launch & support', 'Go-live, training for your content team and ongoing maintenance.'] ] },
    whyAureon: { h: 'Why our development work holds up', items: [
      ['Security from the start', 'Our developers work alongside our security team, so every product is tested before release.'],
      ['Arabic done properly', 'Right-to-left layouts, Arabic typography and local conventions are designed in from the beginning.'],
      ['We understand business systems', 'Our ERP background means your app and your back office work together.'],
      ['You own it', 'Source code, designs and accounts are handed over to you.'] ] },
    faqs: [
      ['How long does a website take?', 'A corporate website usually takes six to ten weeks from agreed scope to launch. Online stores and custom applications take longer. You will have a timeline before we begin.'],
      ['Do we need a mobile app, or is a website enough?', 'If customers will use it often, need notifications, or need device features like the camera or location, an app makes sense. For many businesses a well-built mobile website is the right first step. We will advise honestly.'],
      ['Can you take over an existing website or app?', 'Yes. We begin with a technical review and tell you whether to improve what exists or rebuild.'],
      ['Who writes the content?', 'You know your business best. We can work from your material, or write and translate it for you, structured for readers and search engines.'] ],
    cta: { h: 'Have an idea for a website or app?', p: 'Share it with us. We will respond with questions, suggestions and a realistic estimate.', b: 'Tell us about your project' },
  },
  {
    slug: 'cctv-security-systems', file: 'solutions/cctv-security-systems.html', icon: 'cctv', scene: 'cctv',
    nav: 'CCTV & Security Systems', kicker: 'Solution',
    card: 'Cameras, recording, access control and video analytics, designed around your site and local regulations.',
    seo: ['CCTV & Security Systems in Saudi Arabia | Aureon', 'CCTV, access control and video analytics designed, installed and maintained by Aureon for offices, shops, warehouses and plants across Saudi Arabia.'],
    hero: { h: 'See clearly. Record reliably. <em>Find footage in seconds.</em>', p: ['A camera system is judged on the day you need it. The footage must exist, the face must be clear, the time stamp must be right, and someone has to find the clip quickly.', 'We design surveillance and access control around those moments: the right camera in the right position, properly recorded and easy to use.'], cta: ['Request a site survey', 'contact.html'] },
    why: { h: 'More than security', items: [
      ['Protects people and property', 'Visible, working cameras deter theft and help resolve incidents.'],
      ['Supports safety', 'Monitoring of hazardous areas, loading bays and entrances.'],
      ['Improves operations', 'Analytics show footfall, queue lengths and how space is used.'],
      ['Meets requirements', 'Many business activities in the Kingdom must have surveillance in place.'],
      ['Gives peace of mind', 'Owners and managers can check any site from their phone.'] ] },
    services: { h: 'Security system services', items: [
      ['compass', 'Site Survey & System Design', 'We walk the site with you, agree what each camera must see, and produce a layout drawing showing positions, fields of view, cable routes and storage calculations.'],
      ['cctv', 'IP Camera Systems', 'High-resolution indoor and outdoor cameras chosen for each location: fixed, dome, PTZ, low-light and weatherproof models suited to the Saudi climate.'],
      ['server', 'Recording & Video Management', 'Network video recorders and management software sized for your retention period, with redundancy for critical sites.'],
      ['eye', 'Video Analytics', 'Number plate recognition, people counting, line crossing and intrusion alerts, so staff are notified of events instead of watching screens all day.'],
      ['lock', 'Access Control & Time Attendance', 'Card, fingerprint and face recognition for doors and gates, linked to time and attendance, visitor management and your HR system.'],
      ['home', 'Intercom & Gate Systems', 'Video intercoms, barriers and gate automation for offices, compounds and facilities.'],
      ['monitor', 'Control Rooms & Remote Viewing', 'Video walls and operator workstations for larger sites, and secure mobile viewing for managers.'],
      ['wrench', 'Maintenance Contracts', 'Scheduled health checks, cleaning, firmware updates and fast replacement of faulty units.'] ] },
    note: { h: 'Installed to meet local requirements', p: ['We design each system to meet the Kingdom’s regulations on security surveillance cameras and the requirements of the relevant authorities for your type of business, including camera placement, image quality and recording retention. For industrial facilities we also take the applicable industrial security directives into account.', 'Because cameras are network devices, we secure them too: default passwords changed, firmware updated, and the camera network separated from your business network.'] },
    faqs: [
      ['How many cameras do we need?', 'It depends on your layout and what you need to see. We decide on site with you. A good design often uses fewer, better-placed cameras than expected.'],
      ['How long will footage be kept?', 'We size storage to the retention period you need and that regulations require for your activity. The calculation is shown in the proposal.'],
      ['Can we view cameras on our phones?', 'Yes. We set up secure remote viewing with individual user accounts and permissions.'],
      ['Can you upgrade our old analog system?', 'Often, yes. In many cases we reuse existing cable routes and move you to IP in phases.'] ],
    cta: { h: 'Is your site properly covered?', p: 'Book a free site survey. We will show you where the blind spots are and what it takes to close them.', b: 'Book a site survey' },
  },
  {
    slug: 'structured-cabling', file: 'solutions/structured-cabling.html', icon: 'cable', scene: 'cabling',
    nav: 'Structured Cabling', kicker: 'Solution',
    card: 'Copper and fiber cabling that is labeled, tested and certified, with the paperwork to prove it.',
    seo: ['Structured Network Cabling in Saudi Arabia | Aureon', 'Copper and fiber structured cabling for offices, warehouses and plants in Saudi Arabia. Installed, labeled, tested and certified by Aureon.'],
    hero: { h: 'The part of your network you install once and <em>rely on for fifteen years.</em>', p: ['Cabling is the least visible part of your IT and the hardest to change later. Done well, it carries every call, camera, access point and computer without complaint for a decade or more. Done badly, it causes faults nobody can trace.', 'We install to recognized standards, label every point, test every link and hand you the results.'], cta: ['Request a cabling quotation', 'contact.html'] },
    why: { h: 'What proper cabling gives you', items: [
      ['Reliable connections', 'Fewer unexplained drops and slow links.'],
      ['Speed for the future', 'Capacity for faster switches, Wi-Fi 6 and 7 access points and high-resolution cameras.'],
      ['Easy changes', 'Moves and additions take minutes when every point is labeled and recorded.'],
      ['Faster fault-finding', 'Engineers can trace any link from a drawing.'],
      ['A tidy, safe workplace', 'Cables are contained, rooms stay cool and nothing hangs loose.'] ] },
    services: { h: 'Cabling services', items: [
      ['cable', 'Copper Cabling', 'Cat6 and Cat6A for data, voice, Wi-Fi, CCTV and access control, including Power over Ethernet to devices.'],
      ['zap', 'Fiber Optic Cabling', 'Single-mode and multi-mode fiber for building backbones and links between buildings, with fusion splicing and OTDR testing.'],
      ['server', 'Racks, Cabinets & Patching', 'Racks, cabinets, patch panels, cable management and power distribution, laid out for airflow and access.'],
      ['layers', 'Containment & Pathways', 'Trunking, cable tray, conduit and floor boxes to suit the building, coordinated with other contractors on site.'],
      ['check', 'Testing & Certification', 'Every copper and fiber link is tested with calibrated certification equipment. You receive the full report for every point.'],
      ['doc', 'Labeling & Documentation', 'A consistent labeling scheme at both ends of every cable, with as-built drawings and a patching schedule.'],
      ['wrench', 'Re-cabling & Clean-up', 'We untangle and reorganize existing cabinets and server rooms, remove dead cables and bring documentation up to date.'],
      ['building', 'New Sites & Office Moves', 'Cabling for new builds, fit-outs and relocations, planned with your contractor’s schedule so the network is ready on moving day.'] ] },
    note: { h: 'Installed to recognized standards', p: ['Our installations follow international cabling standards including ANSI/TIA-568 and ISO/IEC 11801 and use components from established manufacturers. Where a system qualifies, we arrange the manufacturer’s system warranty for you.'] },
    process: { h: 'From drawing to certified link', steps: [
      ['Survey', 'We review floor plans, count points and check cable routes on site.'],
      ['Design', 'A drawing showing points, routes, rack locations and quantities, with a fixed quotation.'],
      ['Installation', 'Containment, cable pulling, termination and rack dressing by our own technicians.'],
      ['Test & handover', 'Certification of every link, labeling, as-built drawings and a walk-through with your team.'] ] },
    faqs: [
      ['Should we choose Cat6 or Cat6A?', 'Cat6 suits most office desks. Cat6A is worth the extra cost for Wi-Fi access points, links between cabinets and anywhere you may want 10-gigabit speeds later. We recommend point by point so you never pay for more than you need.'],
      ['When do we need fiber?', 'Where distances exceed about 90 meters, between buildings, and for high-capacity backbone links.'],
      ['Can you work in an occupied office?', 'Yes. We work evenings or weekends when needed, protect furniture and floors, and leave the site clean every day.'],
      ['Do you provide test reports?', 'Always. A certified test result for every link is part of our standard handover.'] ],
    cta: { h: 'Planning a new office or an upgrade?', p: 'Send us your floor plan and the number of points you need. We will come back with a design and a clear quotation.', b: 'Get a cabling quotation' },
  },
];

export const services = [
  {
    slug: 'professional-services', file: 'services/professional-services.html', icon: 'briefcase', scene: 'pro',
    nav: 'Professional Services', kicker: 'Service',
    card: 'Consulting, design, deployment and training that take IT projects from first visit to final handover.',
    seo: ['IT Professional Services in Saudi Arabia | Aureon', 'IT consulting, assessments, design, deployment, project management and training in Saudi Arabia. Aureon delivers IT projects on scope, on time and documented.'],
    hero: { h: 'IT projects delivered properly, <em>from first visit to final handover.</em>', p: ['Buying technology is the easy part. Getting it designed correctly, installed without disruption, integrated with what you already have and understood by your team is where projects succeed or fail.', 'Our professional services cover the whole journey, with experienced engineers, a named project manager and a clear plan.'], cta: ['Discuss your project', 'contact.html'] },
    why: { h: 'What good delivery gives you', items: [
      ['Older systems that keep earning their place', 'We extend and modernize what still works and replace only what does not.'],
      ['Vendors that work together', 'Most environments are mixed. We make them behave as one.'],
      ['Audit-ready results', 'Systems are configured and documented to meet Saudi regulatory requirements from day one.'],
      ['A team that can run it', 'Training and handover are in the plan from the beginning.'],
      ['Spending you can justify', 'Every recommendation comes with its reason and the outcome to expect.'] ] },
    services: { h: 'What we offer', items: [
      ['compass', 'IT Consulting & Strategy', 'We help you decide before you spend: business goals, current systems and budget become a practical roadmap of what to do now, what can wait and what it costs. Typical work: IT strategy and budgeting, technology selection, cloud readiness, preparing IT for growth or audit.'],
      ['search', 'Assessments & Audits', 'An honest picture of where you stand across network, servers, security controls, backups, licenses and processes, reported in plain language with each finding’s risk, fix and effort. Many clients use the report to plan next year’s budget.'],
      ['layers', 'Solution Architecture & Integration', 'Requirements become detailed designs: network layouts, server and storage sizing, security architecture and integration points, reviewed with you before anything is ordered. Because we cover every layer, nothing falls between suppliers.'],
      ['rocket', 'Pre-Staging & Rollout', 'Equipment is configured and tested on our bench before it reaches your site. Installation is scheduled around your working hours with a rollback plan for every change, and engineers stay close after go-live.'],
      ['calendar', 'Project Management', 'One project manager is responsible for scope, schedule, budget and communication. You get short written updates at an agreed interval and risks are raised early, using recognized practice and ITIL-aligned change control.'],
      ['grad', 'Training & Knowledge Transfer', 'Practical sessions built around daily tasks, in Arabic or English. Handover includes as-built drawings, configuration records, credentials and operating procedures.'],
      ['file', 'License & Warranty Tracking', 'A register of software licenses, support contracts and hardware warranties, with reminders well ahead of each renewal, so you avoid lapses and stop paying for what you no longer use.'] ] },
    whyAureon: { h: 'Why work with us on your project', items: [
      ['Experience from the client side', 'Our leadership has managed IT budgets, vendors and audits inside Saudi companies for more than twenty years.'],
      ['A single point of responsibility', 'Assessment, design, installation, training and support come from one team.'],
      ['Advice not tied to one brand', 'We recommend what fits your environment and budget.'],
      ['Complete handover', 'You receive full documentation and training and are free to manage the system yourself.'] ] },
    compliance: { h: 'Designed with regulation in mind', p: 'Regulatory requirements in the Kingdom are detailed and actively enforced. We design and document each project with the frameworks that apply to you in view:', items: [
      ['NCA ECC', 'Essential Cybersecurity Controls: baseline security across systems and operations.'],
      ['SAMA CSF', 'Cyber Security Framework for banks, finance companies, insurers and fintechs.'],
      ['PDPL & SDAIA', 'Personal Data Protection Law and SDAIA guidance on handling personal data.'],
      ['ISO 27001 · ITIL', 'Recognized good practice for security and service management.'] ], foot: 'We design to these frameworks. We do not claim certification unless it is shown on this site.' },
    cta: { h: 'Have a project in mind?', p: 'Tell us what you are planning. We will come back with questions, ideas and an honest view of what it will take.', b: 'Arrange a call' },
  },
  {
    slug: 'managed-services', file: 'services/managed-services.html', icon: 'headset', scene: 'managed',
    nav: 'Managed Services', kicker: 'Service',
    card: 'Helpdesk, monitoring, security, backup and maintenance under clear SLAs and a predictable monthly fee.',
    seo: ['Managed IT Services & Support in Saudi Arabia | Aureon', 'Managed IT services in Saudi Arabia: helpdesk, network, security, cloud, backup and maintenance under clear SLAs and monthly reporting from Aureon.'],
    hero: { h: 'Your IT, <em>looked after every day.</em>', p: ['Most IT problems warn you first. A disk fills up. A backup fails quietly. A firewall license is about to expire. Someone has to be watching.', 'With a managed service from Aureon, we are. We monitor, maintain and support your systems under an agreed service level for a predictable monthly fee, so your people can focus on the business.'], cta: ['Talk to us about managed services', 'contact.html'] },
    why: { h: 'What changes when IT is managed', items: [
      ['Problems are caught early', 'Monitoring and routine checks deal with issues before users notice.'],
      ['Costs become predictable', 'A fixed monthly fee replaces emergency call-outs and surprise invoices.'],
      ['Your IT staff get time back', 'They work on improvements while we handle the routine.'],
      ['You can see what is happening', 'Monthly reports show tickets, response times, system health and recommendations.'],
      ['Security stays current', 'Patches, updates and renewals are done on schedule.'] ] },
    services: { h: 'What we manage', items: [
      ['headset', 'Helpdesk & User Support', 'One point of contact for your staff by phone, email, WhatsApp or ticket portal. Everyday issues are solved remotely where possible, with an engineer on site where not. Arabic and English support.'],
      ['network', 'Network Management', 'Monitoring of switches, routers, firewalls, Wi-Fi and internet links, fault response, firmware updates and configuration backups, for a network that performs consistently across offices and branches.'],
      ['shield', 'Security Monitoring & Management', 'We manage firewalls, endpoint protection, email security and access controls, review alerts and logs, and investigate and escalate suspicious activity under an agreed procedure.'],
      ['cloud', 'Cloud, Server & Backup Management', 'Microsoft 365, cloud workloads and on-premises servers: user administration, patching, capacity, licensing and cost control. Backups are checked daily and test-restored on a schedule.'],
      ['cctv', 'CCTV & Security System Maintenance', 'Cameras often fail quietly. Under contract we check camera health and recording, clean and realign cameras, update firmware and replace faulty units.'],
      ['wrench', 'Preventive Maintenance', 'Scheduled visits to inspect server rooms, UPS, cabling, network equipment and end-user devices, each ending with a short written report and recommended actions.'],
      ['file', 'SLAs & Reporting', 'Every service has a written SLA with response and resolution targets per priority. A monthly report shows our performance against it, and we review it with you regularly.'] ] },
    plans: { h: 'Choose the level of cover that suits you', note: 'Indicative structure. Tiers, hours and response targets are confirmed in your proposal, and prices are quoted after a site review.', cols: ['Essential', 'Business', 'Enterprise'], featured: 1, rows: [
      ['Best for', 'Small offices needing reliable day-to-day support', 'Growing companies with several sites or a small IT team', 'Larger or regulated organizations with critical systems'],
      ['Helpdesk', 'Remote support in business hours', 'Remote and on-site support in business hours', 'Extended hours with on-call cover'],
      ['Monitoring', 'Servers and backups', 'Servers, network and backups', 'Full infrastructure and security'],
      ['Preventive visits', 'Quarterly', 'Monthly', 'As agreed'],
      ['Reporting', 'Quarterly summary', 'Monthly report', 'Monthly report and review meeting'],
      ['Critical-issue response', '4 hours', '2 hours', '30 minutes'] ] },
    whyAureon: { h: 'Why trust us with your operations', items: [
      ['We have run IT departments ourselves', 'We understand keeping systems available with limited staff and budget.'],
      ['ITIL-aligned service management', 'Incidents, requests and changes follow a defined process, with a record of every action.'],
      ['Flexible scope', 'Start with one service, such as helpdesk or backup monitoring, and extend when ready.'],
      ['No lock-in', 'Documentation and credentials stay yours. If you move in-house, we help with the handover.'] ] },
    sectors: { h: 'How managed services can help', rows: [
      ['A trading company with five branches', 'One helpdesk number for all staff, monitored links between branches and one monthly report for management.'],
      ['A clinic group', 'Backups checked daily, systems patched outside clinic hours and cameras maintained across all sites.'],
      ['A finance company', 'Security monitoring, access reviews and evidence prepared for SAMA-related audits.'],
      ['A manufacturer', 'Plant network and surveillance maintained under one contract, with visits planned around production.'] ], foot: 'Illustrative scenarios, not client references.' },
    cta: { h: 'Let us take the routine off your hands.', p: 'Tell us how your IT is supported today. We will suggest a level of cover that fits and give you a clear monthly price.', b: 'Request a managed services proposal' },
  },
];

// ── Home ─────────────────────────────────────────────────────
export const home = {
  seo: ['IT, Cybersecurity & AI Solutions in Saudi Arabia | Aureon', 'Aureon Ventures & Technologies plans, builds, secures and supports IT for Saudi businesses: infrastructure, cybersecurity, AI, apps, CCTV and cabling.'],
  slides: [
    { scene: 'globe', tag: 'Aureon Ventures & Technologies', h: 'Technology that works <em>on Sunday morning.</em>', p: 'We plan, build, secure and look after IT for businesses across Saudi Arabia, from the cable in the wall to the AI on top.', a: ['Book a free consultation', 'contact.html'], b: ['See what we do', '#solutions'] },
    { scene: 'ai', tag: 'AI & Automation', h: 'Hand the repetitive work <em>to software.</em>', p: 'Invoices, approvals, monthly reports, routine customer questions. We automate the tasks that drain your team so they can do work that needs a person.', a: ['Explore AI & Automation', 'solutions/ai-automation.html'] },
    { scene: 'cyber', tag: 'Cybersecurity', h: 'Find your weak points <em>before someone else does.</em>', p: 'Assessments, protection and monitoring shaped around NCA and SAMA requirements, and explained in language your management can act on.', a: ['Request a security assessment', 'solutions/cybersecurity.html'] },
    { scene: 'infra', tag: 'IT Infrastructure', h: 'A network <em>nobody has to think about.</em>', p: 'Servers, switching, Wi-Fi and cabling designed with care, installed neatly and documented so the next engineer can follow every line.', a: ['See infrastructure services', 'solutions/it-infrastructure.html'] },
    { scene: 'web', tag: 'Web & Mobile Apps', h: 'Websites and apps <em>people actually use.</em>', p: 'Arabic and English from day one, designed for the phone first, and connected to the systems you already run.', a: ['Start your project', 'solutions/web-mobile-apps.html'] },
  ],
  marquee: ['Microsoft 365', 'Power BI', 'Power Automate', 'Dynamics 365', 'SD-WAN', 'VPN', 'Cat6A & Fiber', 'SIEM & EDR', 'VAPT', 'ZATCA e-invoicing', 'NCA ECC', 'SAMA CSF', 'PDPL', 'ISO 27001', 'ITIL'],
  who: {
    h: 'A Saudi IT company that builds things properly <em>and stays to support them.</em>',
    p: ['Aureon plans, builds, secures and runs technology for organizations across the Kingdom: the cabling in your ceiling, the cameras on your walls, your network and servers, your security, your website, and the AI tools your teams have started asking for.',
      'Most organizations come to us with a practical problem. A network that keeps dropping. An audit finding to close. A manual process that eats two days every month. A branch opening in six weeks. We start there, look honestly at what you already have, and build only what you need around it.'],
    facts: [['20+', 'years of leadership experience running IT inside Saudi companies'], ['7', 'solution areas handled by one team'], ['EN · AR', 'support in Arabic and English']],
  },
  why: { h: 'What you can expect from us', items: [
    ['users', 'One team for the whole job', 'Cabling, cameras, network, servers, security, software and AI from one company. One contract, one project manager, one number to call.'],
    ['briefcase', 'We have sat in your chair', 'Our leadership spent 20+ years running IT inside Saudi companies. We know what finance, auditors and the board ask of an IT manager.'],
    ['shield', 'Compliance from the first drawing', 'Designed with NCA ECC, SAMA and PDPL in mind from the start, so you do not pay to rework a system after an audit.'],
    ['check', 'Straight answers', 'A clear scope, a clear price and a realistic timeline. If something is not worth the money, we will say so.'],
    ['book', 'Handover you can use', 'Drawings, configurations, passwords and training for your team on every project. You are never locked in.'] ] },
  process: { h: 'Four steps, no surprises', steps: [
    ['Listen', 'We visit your site, meet the people who use the systems, and write down what is working and what is not.'],
    ['Design', 'A written proposal with drawings, a bill of materials, a timeline and a fixed price. We explain every line.'],
    ['Build', 'Our engineers install, configure and test, with progress updates you can read in two minutes.'],
    ['Stay', 'We train your team, hand over full documentation, and stay available under a support agreement that suits you.'] ] },
  vision: { h: 'Doing our part for Vision 2030', p: ['The Kingdom is moving government services, payments, healthcare and industry online faster than almost any country has attempted. That ambition rests on technology that is dependable and secure underneath.', 'Our contribution is practical: we help Saudi organizations build systems that work, protect the data they hold, and train local people to run them with confidence.'] },
  cta: { h: 'Tell us what is not working.', p: 'A thirty-minute call with one of our engineers costs nothing. You will leave with a clearer picture of your options, whether or not you work with us.', b: 'Book a free consultation' },
};

// ── Industries ───────────────────────────────────────────────
export const industries = {
  seo: ['Industries We Work With | Aureon Ventures & Technologies', 'How Aureon supports government, finance, industry, healthcare, education, retail and growing businesses across Saudi Arabia with IT they can rely on.'],
  hero: { h: 'Different sectors, <em>different pressures.</em>', p: 'A bank, a factory and a school all need reliable, secure IT, but the details differ a great deal. We adapt our designs, documentation and way of working to the realities of each sector.' },
  list: [
    ['bank', 'Government & Semi-Government', 'Public entities must protect citizen data and keep services available. We deliver infrastructure, security controls and documentation aligned with NCA requirements, and we are comfortable with formal procurement, strict change control and detailed reporting.', ['NCA ECC alignment', 'Secure email', 'Change control']],
    ['building', 'Banking & Financial Services', 'Institutions and fintechs operate under close supervision. We support them with gap assessments against the SAMA Cyber Security Framework, access and data protection controls, security testing and the evidence auditors ask for.', ['SAMA CSF gap assessment', 'Security testing', 'Audit evidence']],
    ['factory', 'Industrial & Manufacturing', 'Plants, yards and warehouses need networks and cameras that keep working in heat, dust and over long distances. We provide industrial-grade networking, fiber backbones, wide-area surveillance and separation between plant and office systems.', ['Fiber backbones', 'Wide-area CCTV', 'OT separation']],
    ['hospital', 'Healthcare', 'Hospitals and clinics cannot afford downtime, and patient records must stay private. We provide resilient networks, dependable backup, secure access for clinical staff and maintenance scheduled around patient care.', ['Resilient networks', 'Backup & recovery', 'Secure access']],
    ['grad', 'Education', 'Schools, institutes and universities need safe campus-wide Wi-Fi, content filtering, learning platforms that stay online and campus security systems, all within tight budgets.', ['Campus Wi-Fi', 'Content filtering', 'Campus security']],
    ['store', 'Retail & Hospitality', 'Shops, restaurants and hotels depend on point-of-sale, guest Wi-Fi, cameras and online ordering working together at every branch. We standardize the setup so each new location opens quickly.', ['Multi-branch networks', 'Guest Wi-Fi', 'POS & CCTV']],
    ['home', 'Real Estate & Facilities', 'Developers and facility managers need building-wide cabling, access control, surveillance, intercoms and tenant connectivity designed before the walls are closed.', ['Building cabling', 'Access control', 'Tenant connectivity']],
    ['rocket', 'SMEs & Startups', 'Growing businesses need professional IT without a full IT department. We act as that department: setup, security, support and sensible advice that grows with the company.', ['IT setup', 'Managed support', 'Affordable security']],
  ],
  cta: { h: 'Do not see your sector?', p: 'The principles are the same in every field. Tell us about your business and we will explain how we can help.', b: 'Contact us' },
};

// ── About ────────────────────────────────────────────────────
export const about = {
  seo: ['About Aureon Ventures & Technologies | Saudi IT Partner', 'Meet Aureon Ventures & Technologies: a Saudi IT company led by people who have run IT departments themselves, and who build and support systems that last.'],
  hero: { h: 'An IT partner <em>that picks up the phone.</em>', p: 'We are a Saudi technology company that plans, builds, secures and supports IT for organizations of every size. We measure ourselves by how your systems are running a year after we install them.' },
  story: { h: 'Why we started Aureon', p: [
    'The idea came from the other side of the table. For more than two decades our leadership managed IT inside companies in the Kingdom, across industry, trading, contracting and services. We worked with many suppliers. Some were excellent. Too many were excellent only until the invoice was paid.',
    'The pattern repeated: systems installed without documentation, security products sold with no one to configure them, cabling left unlabeled, projects declared finished while the users were still waiting for training.',
    'We started Aureon to be the supplier we always wanted to hire: one team that can handle the whole job, engineers who explain what they are doing, complete paperwork on handover day, and support that continues long after go-live.'] },
  mission: 'To give organizations in Saudi Arabia technology they can depend on, by designing it carefully, installing it properly, securing it thoroughly and supporting it honestly.',
  vision: 'To be the IT partner Saudi businesses recommend to each other, known for work done right the first time and for being there when it matters.',
  values: [
    ['heart', 'Honesty first', 'We tell clients what they need to hear, including when the cheaper option is the right one.'],
    ['check', 'Do it properly', 'Neat racks, labeled cables, hardened configurations and complete documentation are the standard on every job.'],
    ['target', 'Own the outcome', 'When something goes wrong we fix it first and discuss responsibility afterwards.'],
    ['book', 'Keep learning', 'Technology and regulation change every year. Our engineers keep training so our advice stays current.'],
    ['users', 'Respect for people and place', 'We work around your staff and business hours, and we invest in developing Saudi talent.'] ],
  starting: { h: 'What a new company means for you', p: ['Every project receives senior attention, from the first site visit to the final handover. Decisions are made quickly, without layers of approval. And every project we deliver now shapes the reputation we are building for the years ahead.', 'We would rather grow steadily with clients who trust us than quickly with work we cannot do properly.'] },
  v2030: { h: 'Building for the Kingdom’s next chapter', p: ['Vision 2030 asks every organization to work more digitally, more efficiently and more securely. Large enterprises have teams to manage that change. Many mid-sized and smaller businesses do not.', 'That is where we focus much of our effort. We bring the design, security and documentation standard large enterprises expect to companies still building their IT function, and help them meet national requirements such as the NCA cybersecurity controls, the Personal Data Protection Law and ZATCA e-invoicing without unnecessary cost.'] },
  sustain: { h: 'Responsible technology', p: ['Good IT design and responsible use of resources go together. We size equipment for the real workload so clients are not powering and cooling hardware they do not need, recommend energy-efficient devices, consolidate servers through virtualization where it makes sense, and replace paper processes with digital ones.', 'When old equipment is retired, we wipe the data securely and arrange proper recycling or disposal.'] },
  people: { h: 'Who does the work', p: ['Aureon is a company of experienced engineers. Network and security specialists, software developers, AI practitioners, cabling technicians and project managers work side by side, and the person who designs your system usually helps install it.', 'We hire for curiosity and care as much as for qualifications, and give every engineer time and budget to keep training.'] },
  cta: { h: 'Let’s talk about your project.', p: 'Whether you are opening a new site, tightening security or wondering where AI could help, we are glad to listen and give you an honest view.', b: 'Contact us' },
};

// ── Partners ─────────────────────────────────────────────────
export const partners = {
  seo: ['Technology Partners | Aureon Ventures & Technologies', 'The technology areas Aureon works in across infrastructure, security, cloud, software, surveillance and cabling to serve businesses in Saudi Arabia.'],
  hero: { h: 'Good products, <em>properly installed.</em>', p: 'No single vendor is best at everything, and no product performs well if it is badly configured. We work with a selected group of established technology vendors whose products we know thoroughly.' },
  approach: { h: 'How we choose what to recommend', items: [
    ['target', 'Fit comes first', 'We start from your requirement and budget, then choose the product.'],
    ['pin', 'Local support matters', 'We favor vendors with stock, warranty service and technical support inside the Kingdom.'],
    ['check', 'We only sell what we can support', 'If our engineers are not trained on a product, we do not propose it.'],
    ['chart', 'Total cost counts', 'We compare licenses, renewals and support over the life of the product, not only the purchase price.'] ] },
  areas: { h: 'Where we work with technology partners', items: [
    ['network', 'Networking & Wireless'], ['server', 'Servers, Storage & Virtualization'], ['shield', 'Cybersecurity'], ['cloud', 'Cloud & Productivity'],
    ['layers', 'Backup & Disaster Recovery'], ['chip', 'AI, Automation & Business Apps'], ['cctv', 'CCTV & Access Control'], ['cable', 'Structured Cabling'] ],
    foot: 'Vendor names and partner tiers are published here as agreements are confirmed.' },
  become: { h: 'Work with us', p: 'We welcome conversations with technology vendors and distributors whose products would serve our clients well.', b: 'Partner enquiry' },
};

// ── Customers ────────────────────────────────────────────────
export const customers = {
  seo: ['Our Customers | Aureon Ventures & Technologies', 'Organizations across Saudi Arabia rely on Aureon Ventures & Technologies for IT infrastructure, cybersecurity, software, CCTV and cabling.'],
  hero: { h: 'The organizations <em>we work for.</em>', p: 'We are a young company, building our client list one project at a time. The organizations we work with expect IT to work and want a supplier who tells them the truth. That is the standard we hold ourselves to.' },
  sectors: { h: 'Sectors we serve', p: 'Client names and logos appear here with each client’s written permission. Until then, here is who our work is built for.' },
  cta: { h: 'Let us show you how we work.', p: 'Tell us about your needs. We will walk you through our approach, introduce the people who would handle your project and explain exactly how we would deliver it.', b: 'Talk to us' },
};

// ── Contact ──────────────────────────────────────────────────
export const contact = {
  seo: ['Contact Aureon Ventures & Technologies | Saudi Arabia', 'Talk to an engineer at Aureon Ventures & Technologies. Book a free consultation or site survey for IT, cybersecurity, AI, CCTV or cabling in Saudi Arabia.'],
  hero: { h: 'Talk to <em>an engineer.</em>', p: 'Tell us what you need or what is not working. Your message goes to a technical person who can help, and we reply within one working day.' },
  interests: ['AI & Automation', 'Cybersecurity', 'IT Infrastructure & Networking', 'Cloud & Data', 'Web & Mobile Apps', 'CCTV & Security Systems', 'Structured Cabling', 'Managed Services', 'Something else'],
  quick: [
    ['calendar', 'Book a free consultation', 'A thirty-minute call to talk through your needs.'],
    ['pin', 'Request a site survey', 'An engineer visits your premises at a time that suits you.'],
    ['file', 'Request a quotation', 'Send us your requirement or bill of quantities for pricing.'],
    ['headset', 'Get support', 'Existing clients can raise a request here.'] ],
};

// ── Legal (drafts) ───────────────────────────────────────────
export const legal = [
  { file: 'privacy.html', title: 'Privacy Policy', seo: ['Privacy Policy | Aureon', 'How Aureon Ventures & Technologies collects, uses and protects personal data.'], sections: [
    ['Who we are', 'Aureon Ventures & Technologies ("Aureon", "we") operates this website. This policy explains what personal data we collect through it, why, and how you can exercise your rights under the Saudi Personal Data Protection Law (PDPL).'],
    ['What we collect', 'Details you send us through the contact form (such as name, company, email, phone number, city and your message), and basic technical data such as browser type and pages visited, if analytics cookies are accepted.'],
    ['Why we use it', 'To respond to your enquiry, to keep the website secure and working, and to understand how it is used so we can improve it.'],
    ['How long we keep it', 'Enquiries are kept for as long as needed to respond and for a reasonable period afterwards. '],
    ['Your rights', 'You may ask to access, correct or delete your personal data, or withdraw consent, by emailing us at the address on our Contact page.'],
    ['Sharing', 'We do not sell personal data. We share it only with service providers who help us run the website and email, under appropriate safeguards, or where the law requires it.'] ] },
  { file: 'cookies.html', title: 'Cookie Policy', seo: ['Cookie Policy | Aureon', 'How Aureon Ventures & Technologies uses cookies on this website.'], sections: [
    ['What cookies are', 'Cookies are small text files stored on your device that help a website work and remember your choices.'],
    ['How we use them', 'Essential cookies keep the site working and remember your cookie choice. If you accept analytics cookies, we also measure how the site is used so we can improve it.'],
    ['Your choices', 'You can accept all cookies or reject non-essential ones using the cookie notice. You can also clear or block cookies in your browser settings.'] ] },
  { file: 'terms.html', title: 'Terms & Conditions', seo: ['Terms & Conditions | Aureon', 'Terms of use for the Aureon Ventures & Technologies website.'], sections: [
    ['Use of this website', 'The content on this website is provided for general information about Aureon and its services. It is not a binding offer. Proposals, prices and service levels are set out in written agreements.'],
    ['Intellectual property', 'The text, design and graphics on this website belong to Aureon or its licensors and may not be copied or reused without permission.'],
    ['Links', 'This website may link to third-party sites. We are not responsible for their content or privacy practices.'],
    ['Liability', 'We take care to keep the information accurate and current, but provide it without warranty to the extent permitted by law.'],
    ['Governing law', 'These terms are governed by the laws of the Kingdom of Saudi Arabia.'] ] },
];
