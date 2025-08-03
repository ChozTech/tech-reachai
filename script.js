
const roles = {
  sdr: {
    title: "💼 Sales Development Representative (SDR)",
    overview: "SDRs are the frontline of tech sales — prospecting leads, sending cold emails, making calls, and qualifying accounts for Account Executives.",
    salary: ["Base: $55,000", "OTE: $75,000", "Top Performers: $100,000+"],
    breakin: "No degree required, but persistence, communication skills, and hunger to learn are essential. Bootcamps, sales internships, or direct outreach work best.",
    outreach: [
      "Email: Hi [Name], I admire your work at [Company]. I'm eager to break into SaaS sales and would love your quick advice. Could we connect?",
      "Phone: Hey [Name], I’m working to launch into tech sales and respect your path. Mind if I ask you a quick question?"
    ],
    companies: ["Salesforce", "Gong", "Outreach", "HubSpot", "Oracle"],
    day: "Expect 50–100 activities per day (emails, calls, LinkedIn), using tools like Salesforce, Outreach.io, and LinkedIn Navigator.",
    degree: "Not required. Sales bootcamps or internships help. Soft skills > formal credentials.",
    internships: "Oracle Sales Academy, HubSpot Early Careers, ZoomInfo internship. Connect with SDRs or recruiters on LinkedIn after engaging with their posts."
  },
  bdr: {
    title: "📈 Business Development Representative (BDR)",
    overview: "BDRs focus on generating pipeline for mid- or enterprise-level AEs. They mix inbound and outbound outreach.",
    salary: ["Base: $50,000", "OTE: $70,000", "Top Performers: $90,000+"],
    breakin: "Highlight resilience, CRM usage (e.g. HubSpot), and cold outreach campaigns. Build a portfolio of outreach or mock sequences.",
    outreach: [
      "Email: [Name], I’m impressed by your track record at [Company]. As someone working hard to break into B2B sales, I’d love your advice.",
      "Phone: I admire how you’ve built your sales career. Could I ask a quick question about your BDR experience?"
    ],
    companies: ["ZoomInfo", "Salesloft", "Seismic", "Drift", "Workday"],
    day: "You’ll research accounts, prospect key personas, write emails, make calls, and qualify discovery calls for your AE.",
    degree: "Not necessary. Many BDRs come from customer service, retail, or SDR experience.",
    internships: "Look into GTM-focused SaaS startups or remote sales internships. Be proactive — most BDR internships are hidden or competitive."
  },
  ae: {
    title: "🤝 Account Executive (AE)",
    overview: "AEs manage the full sales cycle — from discovery call to closed-won. They're skilled at objection handling, product demos, and negotiation.",
    salary: ["Base: $75,000", "OTE: $120,000", "Top Performers: $200,000+"],
    breakin: "Most AEs are promoted from SDR or BDR roles. Some come from real estate, recruiting, or other closing positions.",
    outreach: [
      "Email: Your journey into AE work is inspiring. I’m building my path toward full-cycle SaaS sales — could we connect?",
      "Phone: Quick one — I’m pushing toward AE level. Mind if I ask what made the biggest difference for you?"
    ],
    companies: ["Snowflake", "Datadog", "AWS", "Salesforce", "Palo Alto Networks"],
    day: "Prospect a little, run demos, follow up with proposals, log everything in CRM. You'll be negotiating and closing deals weekly or monthly.",
    degree: "Not required. Prove you can sell, communicate, and follow up relentlessly.",
    internships: "AE-specific internships are rare. Start in SDR/BDR internships and work your way up. Network with AEs for mentoring."
  },
  am: {
    title: "📂 Account Manager (AM)",
    overview: "Account Managers own client relationships post-sale — ensuring adoption, upsell, and renewal. A hybrid of customer success and sales.",
    salary: ["Base: $70,000", "OTE: $110,000", "Top Performers: $180,000+"],
    breakin: "Success in SDR, AE, or Customer Success roles helps. Highlight retention metrics or renewals if you have them.",
    outreach: [
      "Email: I’m impressed by how you manage post-sale success at [Company]. I’m exploring AM roles — would love to hear your insight.",
      "Phone: I’m looking at long-term SaaS roles and the AM path stands out. Mind if I ask how you got started?"
    ],
    companies: ["Zendesk", "Slack", "Zoom", "Dropbox", "Asana"],
    day: "Check in with clients, review usage reports, suggest upgrades, solve issues. AMs are trusted client advisors who protect recurring revenue.",
    degree: "Not required. Having a strong EQ and customer success background helps more than a specific degree.",
    internships: "Check for Customer Success internships — they often overlap. Follow CS managers and apply to CS teams at SaaS orgs."
  }
};

function loadRole(key) {
  const role = roles[key];
  if (!role) return;
  const container = document.getElementById('roleContent');
  container.innerHTML = `
    <h2>${role.title}</h2>
    <p><strong>Overview:</strong> ${role.overview}</p>
    <p><strong>Day-to-Day Responsibilities:</strong> ${role.day}</p>
    <p><strong>Median Earnings:</strong></p>
    <ul>${role.salary.map(s => `<li>${s}</li>`).join('')}</ul>
    <p><strong>How to Break In:</strong> ${role.breakin}</p>
    <p><strong>Degree or Background Requirements:</strong> ${role.degree}</p>
    <p><strong>Cold Outreach Templates:</strong></p>
    <ul>${role.outreach.map(o => `<li>${o}</li>`).join('')}</ul>
    <p><strong>Top Companies Hiring:</strong></p>
    <ul>${role.companies.map(c => `<li>${c}</li>`).join('')}</ul>
    <p><strong>Internship & Career Advice:</strong> ${role.internships}</p>
  `;
}
